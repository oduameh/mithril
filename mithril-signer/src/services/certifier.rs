use async_trait::async_trait;
use chrono::{DateTime, Utc};
use std::collections::BTreeSet;
use std::sync::Arc;

use mithril_common::entities::{
    CardanoTransactionsSigningConfig, Epoch, SignedEntityConfig, SignedEntityType,
    SignedEntityTypeDiscriminants, TimePoint,
};
use mithril_common::signed_entity_type_lock::SignedEntityTypeLock;
use mithril_common::{CardanoNetwork, StdResult, TickerService};

/// Beacon to sign
#[derive(Debug, Clone, PartialEq)]
pub struct BeaconToSign {
    /// The epoch when the beacon was issued
    pub epoch: Epoch,

    /// The signed entity type to sign
    pub signed_entity_type: SignedEntityType,

    /// Datetime when the beacon was initiated
    pub initiated_at: DateTime<Utc>,
}

/// Certifier Service
///
/// This service is responsible for providing the beacons that need to be signed by the signer.
#[cfg_attr(test, mockall::automock)]
#[async_trait]
pub trait CertifierService: Sync + Send {
    /// Get the beacon to sign.
    ///
    /// If all available signed entity have already been signed, `None` is returned.
    async fn get_beacon_to_sign(&self) -> StdResult<Option<BeaconToSign>>;

    /// Mark a beacon as signed so it won't be returned by `get_beacon_to_sign` anymore.
    async fn mark_beacon_as_signed(&self, signed_beacon: &BeaconToSign) -> StdResult<()>;
}

/// Trait to provide the current Cardano transactions signing configuration.
#[cfg_attr(test, mockall::automock)]
pub trait CardanoTransactionsSigningConfigProvider: Sync + Send {
    /// Get the current Cardano transactions signing configuration.
    fn get(&self) -> StdResult<CardanoTransactionsSigningConfig>;
}

/// Trait to store beacons that have been signed in order to avoid signing them twice.
#[cfg_attr(test, mockall::automock)]
#[async_trait]
pub trait SignedBeaconStore: Sync + Send {
    /// Filter out already signed entities from a list of signed entities.
    async fn filter_out_already_signed_entities(
        &self,
        entities: Vec<SignedEntityType>,
    ) -> Vec<SignedEntityType>;

    /// Mark a beacon as signed.
    async fn mark_beacon_as_signed(&self, entity: &BeaconToSign) -> StdResult<()>;
}

/// Implementation of the [Certifier Service][CertifierService] for the Mithril Signer.
pub struct SignerCertifierService {
    network: CardanoNetwork,
    ticker_service: Arc<dyn TickerService>,
    signed_beacon_store: Arc<dyn SignedBeaconStore>,
    cardano_transactions_signing_config_provider: Arc<dyn CardanoTransactionsSigningConfigProvider>,
    signed_entity_type_lock: Arc<SignedEntityTypeLock>,
}

impl SignerCertifierService {
    /// Create a new `SignerCertifierService` instance.
    pub fn new(
        network: CardanoNetwork,
        ticker_service: Arc<dyn TickerService>,
        signed_beacon_store: Arc<dyn SignedBeaconStore>,
        cardano_transactions_signing_config_provider: Arc<
            dyn CardanoTransactionsSigningConfigProvider,
        >,
        signed_entity_type_lock: Arc<SignedEntityTypeLock>,
    ) -> Self {
        Self {
            network,
            ticker_service,
            signed_beacon_store,
            cardano_transactions_signing_config_provider,
            signed_entity_type_lock,
        }
    }

    async fn compute_signing_config(&self) -> StdResult<SignedEntityConfig> {
        // Hardcoded list, should we allow to configure this?
        // Note: we don't use `SignedEntityTypeDiscriminants::all()` to avoid adding entities
        // that are still in development.
        let allowed_discriminants = BTreeSet::from([
            SignedEntityTypeDiscriminants::MithrilStakeDistribution,
            SignedEntityTypeDiscriminants::CardanoImmutableFilesFull,
            SignedEntityTypeDiscriminants::CardanoStakeDistribution,
            SignedEntityTypeDiscriminants::CardanoTransactions,
        ]);
        let cardano_transactions_signing_config =
            self.cardano_transactions_signing_config_provider.get()?;

        Ok(SignedEntityConfig {
            allowed_discriminants,
            network: self.network,
            cardano_transactions_signing_config,
        })
    }

    async fn list_available_signed_entity_types(
        &self,
        time_point: &TimePoint,
    ) -> StdResult<Vec<SignedEntityType>> {
        let signed_entity_types = self
            .compute_signing_config()
            .await?
            .list_allowed_signed_entity_types(time_point)?;
        let unlocked_signed_entities = self
            .signed_entity_type_lock
            .filter_unlocked_entries(signed_entity_types)
            .await;

        Ok(unlocked_signed_entities)
    }
}

#[async_trait]
impl CertifierService for SignerCertifierService {
    async fn get_beacon_to_sign(&self) -> StdResult<Option<BeaconToSign>> {
        let time_point = self.ticker_service.get_current_time_point().await?;

        let available_signed_entity_types =
            self.list_available_signed_entity_types(&time_point).await?;

        if available_signed_entity_types.is_empty() {
            Ok(None)
        } else {
            let signed_entity_type = available_signed_entity_types[0].clone();
            let beacon_to_sign = BeaconToSign {
                epoch: time_point.epoch,
                signed_entity_type,
                initiated_at: Utc::now(),
            };

            Ok(Some(beacon_to_sign))
        }
    }

    async fn mark_beacon_as_signed(&self, signed_beacon: &BeaconToSign) -> StdResult<()> {
        self.signed_beacon_store
            .mark_beacon_as_signed(signed_beacon)
            .await
    }
}

#[cfg(test)]
mod tests {
    use mithril_common::entities::ChainPoint;

    use super::{tests::tests_tooling::*, *};

    #[tokio::test]
    async fn no_beacon_can_be_signed_if_all_entities_are_locked() {
        let locker = Arc::new(SignedEntityTypeLock::new());
        for signed_entity_type in SignedEntityTypeDiscriminants::all() {
            locker.lock(signed_entity_type).await;
        }
        let certifier_service = SignerCertifierService::new(
            CardanoNetwork::TestNet(42),
            Arc::new(DumbTickerService::new(TimePoint::dummy())),
            Arc::new(DumbSignedBeaconStore::default()),
            Arc::new(DumbCardanoTransactionsSigningConfigProvider::new(
                CardanoTransactionsSigningConfig::dummy(),
            )),
            locker,
        );

        let beacon_to_sign = certifier_service.get_beacon_to_sign().await.unwrap();
        assert_eq!(beacon_to_sign, None);
    }

    #[tokio::test]
    async fn if_available_mithril_stake_distribution_is_the_first_beacon_to_sign() {
        let ticker_service = DumbTickerService::new(TimePoint::new(1, 14, ChainPoint::dummy()));
        let certifier_service = SignerCertifierService::new(
            CardanoNetwork::TestNet(42),
            Arc::new(ticker_service),
            Arc::new(DumbSignedBeaconStore::default()),
            Arc::new(DumbCardanoTransactionsSigningConfigProvider::new(
                CardanoTransactionsSigningConfig::dummy(),
            )),
            Arc::new(SignedEntityTypeLock::new()),
        );

        let beacon_to_sign = certifier_service.get_beacon_to_sign().await.unwrap();

        assert!(
            matches!(
                beacon_to_sign,
                Some(BeaconToSign {
                    epoch: Epoch(1),
                    signed_entity_type: SignedEntityType::MithrilStakeDistribution(Epoch(1)),
                    ..
                })
            ),
            "expected beacon to sign to be MithrilStakeDistribution(Epoch(1)), got: {beacon_to_sign:?}",
        );
    }

    #[tokio::test]
    async fn mark_beacon_as_signed_update_the_store() {
        let signed_beacons_store = Arc::new(DumbSignedBeaconStore::default());
        let certifier_service = SignerCertifierService::new(
            CardanoNetwork::TestNet(42),
            Arc::new(DumbTickerService::new(TimePoint::dummy())),
            signed_beacons_store.clone(),
            Arc::new(DumbCardanoTransactionsSigningConfigProvider::new(
                CardanoTransactionsSigningConfig::dummy(),
            )),
            Arc::new(SignedEntityTypeLock::new()),
        );

        certifier_service
            .mark_beacon_as_signed(&BeaconToSign {
                epoch: Epoch(1),
                signed_entity_type: SignedEntityType::MithrilStakeDistribution(Epoch(4)),
                initiated_at: Utc::now(),
            })
            .await
            .unwrap();

        let x = signed_beacons_store.signed_beacons().await;
        assert_eq!(
            vec![SignedEntityType::MithrilStakeDistribution(Epoch(4))],
            x
        );
    }

    pub mod tests_tooling {
        use tokio::sync::RwLock;

        use super::*;

        pub struct DumbTickerService {
            time_point: TimePoint,
        }

        impl DumbTickerService {
            pub fn new(time_point: TimePoint) -> Self {
                Self { time_point }
            }
        }

        #[async_trait]
        impl TickerService for DumbTickerService {
            async fn get_current_time_point(&self) -> StdResult<TimePoint> {
                Ok(self.time_point.clone())
            }
        }

        pub struct DumbCardanoTransactionsSigningConfigProvider {
            config: CardanoTransactionsSigningConfig,
        }

        impl DumbCardanoTransactionsSigningConfigProvider {
            pub fn new(config: CardanoTransactionsSigningConfig) -> Self {
                Self { config }
            }
        }

        impl CardanoTransactionsSigningConfigProvider for DumbCardanoTransactionsSigningConfigProvider {
            fn get(&self) -> StdResult<CardanoTransactionsSigningConfig> {
                Ok(self.config.clone())
            }
        }

        pub struct DumbSignedBeaconStore {
            signed_beacons: RwLock<Vec<SignedEntityType>>,
        }

        impl DumbSignedBeaconStore {
            pub fn new(signed_beacons: Vec<SignedEntityType>) -> Self {
                Self {
                    signed_beacons: RwLock::new(signed_beacons),
                }
            }

            pub async fn signed_beacons(&self) -> Vec<SignedEntityType> {
                self.signed_beacons.read().await.clone()
            }
        }

        impl Default for DumbSignedBeaconStore {
            fn default() -> Self {
                Self::new(vec![])
            }
        }

        #[async_trait]
        impl SignedBeaconStore for DumbSignedBeaconStore {
            async fn filter_out_already_signed_entities(
                &self,
                entities: Vec<SignedEntityType>,
            ) -> Vec<SignedEntityType> {
                let already_signed_entities = self.signed_beacons.read().await.clone();
                entities
                    .into_iter()
                    .filter(|entity| !already_signed_entities.contains(entity))
                    .collect()
            }

            async fn mark_beacon_as_signed(&self, beacon: &BeaconToSign) -> StdResult<()> {
                let mut already_signed_entities = self.signed_beacons.write().await;
                already_signed_entities.push(beacon.signed_entity_type.clone());
                Ok(())
            }
        }
    }
}
