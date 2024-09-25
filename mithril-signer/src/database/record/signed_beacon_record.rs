use chrono::{DateTime, Utc};
use sqlite::Row;

use mithril_common::entities::{Epoch, SignedEntityType};
use mithril_persistence::database::Hydrator;
use mithril_persistence::sqlite::{HydrationError, Projection, SqLiteEntity};

use crate::services::BeaconToSign;

/// Database record of a beacon signed by the signer
#[derive(Debug, Clone, PartialEq)]
pub struct SignedBeaconRecord {
    /// The epoch when the beacon was issued
    pub epoch: Epoch,

    /// The signed entity type to sign
    pub signed_entity_type: SignedEntityType,

    /// Datetime when the beacon was initiated
    pub initiated_at: DateTime<Utc>,

    /// Datetime when the beacon was signed
    pub signed_at: DateTime<Utc>,
}

impl From<BeaconToSign> for SignedBeaconRecord {
    fn from(beacon: BeaconToSign) -> Self {
        Self {
            epoch: beacon.epoch,
            signed_entity_type: beacon.signed_entity_type,
            initiated_at: beacon.initiated_at,
            signed_at: Utc::now(),
        }
    }
}

impl SqLiteEntity for SignedBeaconRecord {
    fn hydrate(row: Row) -> Result<Self, HydrationError>
    where
        Self: Sized,
    {
        let epoch = row.read::<i64, _>(0);
        let beacon_str = Hydrator::read_signed_entity_beacon_column(&row, 1);
        let signed_entity_type_id = usize::try_from(row.read::<i64, _>(2)).map_err(|e| {
            panic!(
                "Integer field open_message.signed_entity_type_id cannot be turned into usize: {e}"
            )
        })?;
        let initiated_at = &row.read::<&str, _>(3);
        let signed_at = &row.read::<&str, _>(4);

        let open_message = Self {
            epoch: Epoch(epoch.try_into().map_err(|e| {
                HydrationError::InvalidData(format!(
                    "Could not cast i64 ({epoch}) to u64. Error: '{e}'"
                ))
            })?),
            signed_entity_type: Hydrator::hydrate_signed_entity_type(signed_entity_type_id, &beacon_str)?,
            initiated_at: DateTime::parse_from_rfc3339(initiated_at).map_err(|e| {
                HydrationError::InvalidData(format!(
                    "Could not turn signed_beacon.initiated_at field value '{initiated_at}' to rfc3339 Datetime. Error: {e}"
                ))
            })?.with_timezone(&Utc),
            signed_at:DateTime::parse_from_rfc3339(signed_at).map_err(|e| {
                HydrationError::InvalidData(format!(
                    "Could not turn signed_beacon.initiated_at field value '{initiated_at}' to rfc3339 Datetime. Error: {e}"
                ))
            })?.with_timezone(&Utc),
        };

        Ok(open_message)
    }

    fn get_projection() -> Projection {
        Projection::from(&[
            ("epoch", "{:signed_beacon:}.epoch", "int"),
            ("beacon", "{:signed_beacon:}.beacon", "text"),
            (
                "signed_entity_type_id",
                "{:signed_beacon:}.signed_entity_type_id",
                "int",
            ),
            ("created_at", "{:signed_beacon:}.initiated_at", "text"),
            ("expires_at", "{:signed_beacon:}.signed_at", "text"),
        ])
    }
}
