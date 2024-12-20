use crate::{
    crypto_helper::{MKTree, MKTreeStoreInMemory},
    digesters::ImmutableFileListingError,
    entities::{CardanoDbBeacon, ImmutableFileNumber},
    StdError,
};
use async_trait::async_trait;
use std::{
    io,
    path::{Path, PathBuf},
};
use thiserror::Error;

/// A digester than can compute the digest used for mithril signatures
///
/// If you want to mock it using mockall:
/// ```
/// mod test {
///     use async_trait::async_trait;
///     use mithril_common::digesters::{ImmutableDigester, ImmutableDigesterError};
///     use mithril_common::entities::CardanoDbBeacon;
///     use mithril_common::crypto_helper::{MKTree, MKTreeStoreInMemory};
///     use anyhow::anyhow;
///     use mockall::mock;
///     use std::path::Path;
///
///     mock! {
///         pub ImmutableDigesterImpl { }
///
///         #[async_trait]
///         impl ImmutableDigester for ImmutableDigesterImpl {
///             async fn compute_digest(
///               &self,
///               dirpath: &Path,
///               beacon: &CardanoDbBeacon,
///             ) -> Result<String, ImmutableDigesterError>;
///
///            async fn compute_merkle_tree(
///               &self,
///              dirpath: &Path,
///              beacon: &CardanoDbBeacon,
///           ) -> Result<MKTree<MKTreeStoreInMemory>, ImmutableDigesterError>;
///         }
///     }
///
///     #[test]
///     fn test_mock() {
///         let mut mock = MockDigesterImpl::new();
///         mock.expect_compute_digest().return_once(|_, _| {
///             Err(ImmutableDigesterError::NotEnoughImmutable {
///                 expected_number: 3,
///                 found_number: None,
///                 db_dir: PathBuff::new(),
///             })
///         });
///         mock.expect_compute_merkle_tree().return_once(|_, _| {
///            Err(ImmutableDigesterError::MerkleTreeComputationError(anyhow!("Error")))
///         });
///     }
/// }
/// ```
#[async_trait]
pub trait ImmutableDigester: Sync + Send {
    /// Compute the digest
    async fn compute_digest(
        &self,
        dirpath: &Path,
        beacon: &CardanoDbBeacon,
    ) -> Result<String, ImmutableDigesterError>;

    /// Compute the digests merkle tree
    async fn compute_merkle_tree(
        &self,
        dirpath: &Path,
        beacon: &CardanoDbBeacon,
    ) -> Result<MKTree<MKTreeStoreInMemory>, ImmutableDigesterError>;
}

/// [ImmutableDigester] related Errors.
#[derive(Error, Debug)]
pub enum ImmutableDigesterError {
    /// Error raised when the files listing failed.
    #[error("Immutable files listing failed")]
    ListImmutablesError(#[from] ImmutableFileListingError),

    /// Error raised when there's less than the required number of completed immutables in
    /// the cardano database or even no immutable at all.
    #[error("At least two immutable chunks should exist in directory '{db_dir}': expected {expected_number} but found {found_number:?}.")]
    NotEnoughImmutable {
        /// Expected last [ImmutableFileNumber].
        expected_number: ImmutableFileNumber,
        /// Last [ImmutableFileNumber] found when listing [ImmutableFiles][crate::digesters::ImmutableFile].
        found_number: Option<ImmutableFileNumber>,
        /// A cardano node DB directory
        db_dir: PathBuf,
    },

    /// Error raised when the digest computation failed.
    #[error("Digest computation failed")]
    DigestComputationError(#[from] io::Error),

    /// Error raised when the Merkle tree computation failed.
    #[error("Merkle tree computation failed")]
    MerkleTreeComputationError(StdError),
}
