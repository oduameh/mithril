use crate::{
    certificate_chain::CertificateGenesisProducer,
    crypto_helper::{
        ProtocolAggregateVerificationKey, ProtocolClerk, ProtocolGenesisSigner,
        ProtocolGenesisVerifier, ProtocolParameters,
    },
    entities::{Certificate, CertificateSignature, Epoch, ProtocolMessagePartKey},
    test_utils::{fake_data, MithrilFixture, MithrilFixtureBuilder, SignerFixture},
};

use crate::entities::CertificateMetadata;
use std::{cmp::min, collections::HashMap, sync::Arc};

/// Genesis certificate processor function type. For tests only.
pub type GenesisCertificateProcessorFunc =
    dyn Fn(Certificate, &CertificateChainBuilderContext, &ProtocolGenesisSigner) -> Certificate;

/// Standard certificate processor function type. For tests only.
pub type StandardCertificateProcessorFunc =
    dyn Fn(Certificate, &CertificateChainBuilderContext) -> Certificate;

/// Context used while building a certificate chain. For tests only.
pub struct CertificateChainBuilderContext<'a> {
    pub index_certificate: usize,
    #[allow(dead_code)]
    pub total_certificates: usize,
    pub epoch: Epoch,
    pub fixture: &'a MithrilFixture,
    pub next_fixture: &'a MithrilFixture,
}

/// A builder for creating a certificate chain. For tests only.
///
/// # Example usage for building a fully valid certificate chain
///
/// ```
///     use mithril_common::crypto_helper::ProtocolParameters;
///     use mithril_common::test_utils::CertificateChainBuilder;
///
///     let (certificate_chain, _protocol_genesis_verifier) = CertificateChainBuilder::new()
///         .with_total_certificates(5)
///         .with_certificates_per_epoch(2)
///         .build();
///
///     assert_eq!(5, certificate_chain.len());
/// ```
///
/// # Example usage for building an adversarial certificate chain
///
/// ```
///     use mithril_common::entities::Epoch;
///     use mithril_common::crypto_helper::ProtocolParameters;
///     use mithril_common::test_utils::CertificateChainBuilder;
///
///     let (certificate_chain, _protocol_genesis_verifier) = CertificateChainBuilder::new()
///         .with_total_certificates(5)
///         .with_certificates_per_epoch(2)
///         .with_protocol_parameters(ProtocolParameters {
///             m: 100,
///             k: 5,
///             phi_f: 0.65,
///         }).with_standard_certificate_processor(&|certificate, context| {
///             let mut certificate = certificate;
///             // Tamper the epoch of the last certificate
///             if context.index_certificate == context.total_certificates - 1 {
///                 certificate.epoch = Epoch(123);
///             }
///
///             certificate
///        }).build();
///
///     assert_eq!(5, certificate_chain.len());
/// ```
pub struct CertificateChainBuilder<'a> {
    total_certificates: u64,
    certificates_per_epoch: u64,
    protocol_parameters: ProtocolParameters,
    genesis_certificate_processor: &'a GenesisCertificateProcessorFunc,
    standard_certificate_processor: &'a StandardCertificateProcessorFunc,
}

impl<'a> CertificateChainBuilder<'a> {
    /// Create a new [CertificateChainBuilder] instance.
    pub fn new() -> Self {
        let protocol_parameters = ProtocolParameters {
            m: 100,
            k: 5,
            phi_f: 0.65,
        };
        Self {
            total_certificates: 5,
            certificates_per_epoch: 1,
            protocol_parameters,
            genesis_certificate_processor: &|certificate, _, _| certificate,
            standard_certificate_processor: &|certificate, _| certificate,
        }
    }

    /// Set the total number of certificates to generate.
    pub fn with_total_certificates(mut self, total_certificates: u64) -> Self {
        self.total_certificates = total_certificates;

        self
    }

    /// Set the number of certificates per epoch.
    pub fn with_certificates_per_epoch(mut self, certificates_per_epoch: u64) -> Self {
        self.certificates_per_epoch = certificates_per_epoch;

        self
    }

    /// Set the protocol parameters.
    pub fn with_protocol_parameters(mut self, protocol_parameters: ProtocolParameters) -> Self {
        self.protocol_parameters = protocol_parameters;

        self
    }

    /// Set the genesis certificate processor.
    pub fn with_genesis_certificate_processor(
        mut self,
        genesis_certificate_processor: &'a GenesisCertificateProcessorFunc,
    ) -> Self {
        self.genesis_certificate_processor = genesis_certificate_processor;

        self
    }

    /// Set the standard certificate processor.
    pub fn with_standard_certificate_processor(
        mut self,
        standard_certificate_processor: &'a StandardCertificateProcessorFunc,
    ) -> Self {
        self.standard_certificate_processor = standard_certificate_processor;

        self
    }

    /// Build the certificate chain.
    pub fn build(self) -> (Vec<Certificate>, ProtocolGenesisVerifier) {
        let (genesis_signer, genesis_verifier) = CertificateChainBuilder::setup_genesis();
        let epochs = self.build_epochs();
        let fixtures_per_epoch = self.build_fixtures_for_epochs(&epochs);
        let genesis_certificate_processor = self.genesis_certificate_processor;
        let standard_certificate_processor = self.standard_certificate_processor;
        let certificate_chain_length = epochs.len() - 1;
        let certificates = epochs
            .into_iter()
            .take(certificate_chain_length)
            .enumerate()
            .map(|(i, epoch)| {
                let fixture = fixtures_per_epoch.get(&epoch).unwrap();
                let next_fixture = fixtures_per_epoch.get(&epoch.next()).unwrap();
                let context = CertificateChainBuilderContext {
                    index_certificate: i,
                    total_certificates: certificate_chain_length,
                    epoch,
                    fixture,
                    next_fixture,
                };
                match i {
                    0 => genesis_certificate_processor(
                        self.build_genesis_certificate(&context, &genesis_signer),
                        &context,
                        &genesis_signer,
                    ),
                    _ => standard_certificate_processor(
                        self.build_standard_certificate(&context),
                        &context,
                    ),
                }
            })
            .collect::<Vec<Certificate>>();
        let certificates_chained = self.compute_chained_certificates(certificates);

        (certificates_chained, genesis_verifier)
    }

    fn compute_clerk_for_signers(signers: &[SignerFixture]) -> ProtocolClerk {
        let first_signer = &signers[0].protocol_signer;

        ProtocolClerk::from_signer(first_signer)
    }

    fn compute_avk_for_signers(signers: &[SignerFixture]) -> ProtocolAggregateVerificationKey {
        let clerk = Self::compute_clerk_for_signers(signers);

        clerk.compute_avk().into()
    }

    fn setup_genesis() -> (ProtocolGenesisSigner, ProtocolGenesisVerifier) {
        let genesis_signer = ProtocolGenesisSigner::create_deterministic_genesis_signer();
        let genesis_verifier = genesis_signer.create_genesis_verifier();

        (genesis_signer, genesis_verifier)
    }

    fn build_epochs(&self) -> Vec<Epoch> {
        let total_certificates = self.total_certificates;
        let certificates_per_epoch = self.certificates_per_epoch;
        (1..total_certificates + 2)
            .map(|i| match certificates_per_epoch {
                0 => panic!("expected at least 1 certificate per epoch"),
                1 => Epoch(i),
                _ => Epoch(i / certificates_per_epoch + 1),
            })
            .collect::<Vec<_>>()
    }

    fn build_fixtures_for_epochs(&self, epochs: &[Epoch]) -> HashMap<Epoch, MithrilFixture> {
        let fixtures_per_epoch = epochs
            .iter()
            .map(|epoch| {
                // TODO: set that in the builder configuration?
                let total_signers = min(2 + **epoch as usize, 5);
                let protocol_parameters = self.protocol_parameters.to_owned().into();
                (
                    *epoch,
                    MithrilFixtureBuilder::default()
                        .with_protocol_parameters(protocol_parameters)
                        .with_signers(total_signers)
                        .build(),
                )
            })
            .collect::<HashMap<_, _>>();

        fixtures_per_epoch
    }

    fn build_base_certificate(&self, context: &CertificateChainBuilderContext) -> Certificate {
        let index_certificate = context.index_certificate;
        let epoch = context.epoch;
        let immutable_file_number = index_certificate as u64 * 10;
        let digest = format!("digest{index_certificate}");
        let certificate_hash = format!("certificate_hash-{index_certificate}");
        let avk = Self::compute_avk_for_signers(&context.fixture.signers_fixture());
        let next_avk = Self::compute_avk_for_signers(&context.next_fixture.signers_fixture());
        let protocol_parameters = context.fixture.protocol_parameters().to_owned();
        let next_protocol_parameters = &context.next_fixture.protocol_parameters();
        let base_certificate = fake_data::certificate(certificate_hash);
        let mut protocol_message = base_certificate.protocol_message;
        protocol_message.set_message_part(ProtocolMessagePartKey::SnapshotDigest, digest);
        protocol_message.set_message_part(
            ProtocolMessagePartKey::NextAggregateVerificationKey,
            next_avk.to_json_hex().unwrap(),
        );
        protocol_message.set_message_part(
            ProtocolMessagePartKey::NextProtocolParameters,
            next_protocol_parameters.compute_hash(),
        );
        protocol_message.set_message_part(ProtocolMessagePartKey::CurrentEpoch, epoch.to_string());
        let signed_message = protocol_message.compute_hash();

        Certificate {
            epoch,
            aggregate_verification_key: avk.to_owned(),
            previous_hash: "".to_string(),
            protocol_message,
            signed_message,
            #[allow(deprecated)]
            metadata: CertificateMetadata {
                immutable_file_number,
                protocol_parameters,
                ..base_certificate.metadata
            },
            ..base_certificate
        }
    }

    fn build_genesis_certificate(
        &self,
        context: &CertificateChainBuilderContext,
        genesis_signer: &ProtocolGenesisSigner,
    ) -> Certificate {
        let epoch = context.epoch;
        let certificate = self.build_base_certificate(context);
        let next_avk = Self::compute_avk_for_signers(&context.next_fixture.signers_fixture());
        let next_protocol_parameters = &context.next_fixture.protocol_parameters();
        let genesis_producer =
            CertificateGenesisProducer::new(Some(Arc::new(genesis_signer.to_owned())));
        let genesis_protocol_message = CertificateGenesisProducer::create_genesis_protocol_message(
            next_protocol_parameters,
            &next_avk,
            &epoch,
        )
        .unwrap();
        let genesis_signature = genesis_producer
            .sign_genesis_protocol_message(genesis_protocol_message)
            .unwrap();

        CertificateGenesisProducer::create_genesis_certificate(
            certificate.metadata.protocol_parameters,
            certificate.metadata.network,
            certificate.epoch,
            #[allow(deprecated)]
            certificate.metadata.immutable_file_number,
            next_avk,
            genesis_signature,
        )
        .unwrap()
    }

    fn build_standard_certificate(&self, context: &CertificateChainBuilderContext) -> Certificate {
        let fixture = context.fixture;
        let mut certificate = self.build_base_certificate(context);
        certificate.metadata.signers = fixture.stake_distribution_parties();
        let single_signatures = fixture
            .signers_fixture()
            .iter()
            .filter_map(|s| {
                s.protocol_signer
                    .sign(certificate.signed_message.as_bytes())
            })
            .collect::<Vec<_>>();
        let clerk = CertificateChainBuilder::compute_clerk_for_signers(&fixture.signers_fixture());
        let multi_signature = clerk
            .aggregate(&single_signatures, certificate.signed_message.as_bytes())
            .unwrap();
        certificate.signature = CertificateSignature::MultiSignature(
            certificate.signed_entity_type(),
            multi_signature.into(),
        );

        certificate
    }

    fn compute_chained_certificates(&self, certificates: Vec<Certificate>) -> Vec<Certificate> {
        let mut certificates_chained: Vec<Certificate> = Vec::new();
        certificates
            .iter()
            .enumerate()
            .for_each(|(i, certificate)| {
                let mut certificate_new = certificate.clone();
                if i > 0 {
                    if let Some(previous_certificate) = certificates_chained.get(i - 1) {
                        certificate_new.previous_hash = previous_certificate.compute_hash();
                    }
                } else {
                    certificate_new.previous_hash = "".to_string();
                }
                certificate_new.hash = certificate_new.compute_hash();
                certificates_chained.push(certificate_new);
            });
        certificates_chained.reverse();

        certificates_chained
    }
}

impl<'a> Default for CertificateChainBuilder<'a> {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn certificate_chain_has_correct_length() {
        let (certificate_chain, _) = CertificateChainBuilder::new()
            .with_total_certificates(5)
            .with_certificates_per_epoch(2)
            .build();

        assert_eq!(5, certificate_chain.len());
    }
}
