use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::fmt::{Display, Formatter};

use crate::entities::{Epoch, ImmutableFileNumber};
use crate::signable_builder::Beacon;

/// A point in the Cardano chain at which a Mithril certificate of the Cardano Database should be
/// produced.
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Default, Serialize, Deserialize, Hash)]
pub struct CardanoDbBeacon {
    /// Cardano chain epoch number
    pub epoch: Epoch,

    /// Number of the last included immutable files for the digest computation
    pub immutable_file_number: ImmutableFileNumber,
}

impl Beacon for CardanoDbBeacon {}

impl Display for CardanoDbBeacon {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "CardanoDbBeacon (epoch: {}, immutable_file_number: {})",
            self.epoch, self.immutable_file_number
        )
    }
}

impl CardanoDbBeacon {
    /// CardanoDbBeacon factory
    pub fn new(epoch: u64, immutable_file_number: ImmutableFileNumber) -> CardanoDbBeacon {
        CardanoDbBeacon {
            epoch: Epoch(epoch),
            immutable_file_number,
        }
    }

    /// Value used as a placeholder where a beacon is necessary
    #[deprecated]
    pub fn empty() -> Self {
        Self::new(0, 0)
    }

    /// Computes the hash of a CardanoDbBeacon
    pub fn compute_hash(&self) -> String {
        let mut hasher = Sha256::new();
        hasher.update(self.epoch.to_be_bytes());
        hasher.update(self.immutable_file_number.to_be_bytes());
        hex::encode(hasher.finalize())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::cmp::Ordering;

    #[test]
    fn test_beacon_partial_ord_equal() {
        let beacon1: CardanoDbBeacon = CardanoDbBeacon {
            epoch: Epoch(0),
            immutable_file_number: 0,
        };

        assert_eq!(Some(Ordering::Equal), beacon1.partial_cmp(&beacon1));
    }

    #[test]
    fn test_beacon_partial_ord_same_epoch_less() {
        let beacon1: CardanoDbBeacon = CardanoDbBeacon {
            epoch: Epoch(0),
            immutable_file_number: 0,
        };
        let beacon2: CardanoDbBeacon = CardanoDbBeacon {
            epoch: Epoch(0),
            immutable_file_number: 1,
        };

        assert_eq!(Some(Ordering::Less), beacon1.partial_cmp(&beacon2));
    }

    #[test]
    fn test_beacon_partial_ord_same_epoch_greater() {
        let beacon1: CardanoDbBeacon = CardanoDbBeacon {
            epoch: Epoch(0),
            immutable_file_number: 1,
        };
        let beacon2: CardanoDbBeacon = CardanoDbBeacon {
            epoch: Epoch(0),
            immutable_file_number: 0,
        };

        assert_eq!(Some(Ordering::Greater), beacon1.partial_cmp(&beacon2));
    }

    #[test]
    fn test_beacon_partial_ord_cmp_epochs_less() {
        let beacon1: CardanoDbBeacon = CardanoDbBeacon {
            epoch: Epoch(0),
            immutable_file_number: 99,
        };
        let beacon2: CardanoDbBeacon = CardanoDbBeacon {
            epoch: Epoch(1),
            immutable_file_number: 99,
        };

        assert_eq!(Some(Ordering::Less), beacon1.partial_cmp(&beacon2));
    }

    #[test]
    fn test_beacon_compute_hash() {
        let hash_expected = "9ab2a51e6dbed250ff6f2a70709834f3fba8197411ce9fb29923b124f3fe8594";
        let (epoch, immutable_file_number) = (10, 100);

        assert_eq!(
            hash_expected,
            CardanoDbBeacon::new(epoch, immutable_file_number).compute_hash()
        );
        assert_ne!(
            hash_expected,
            CardanoDbBeacon::new(20, immutable_file_number).compute_hash()
        );
        assert_ne!(
            hash_expected,
            CardanoDbBeacon::new(epoch, 200).compute_hash()
        );
    }
}
