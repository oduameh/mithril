use clap::Parser;
use slog::{o, Drain, Level, Logger};
use slog_scope::debug;
use std::env;
use std::error::Error;
use std::sync::Arc;
use tokio::sync::RwLock;

use mithril_common::crypto_helper::ProtocolStakeDistribution;
use mithril_common::digesters::ImmutableDigester;
use mithril_common::fake_data;
use mithril_common::store::adapter::JsonFileStoreAdapter;
use mithril_common::store::stake_store::{StakeStore, StakeStorer};
use mithril_signer::{CertificateHandlerHTTPClient, Config, MithrilSingleSigner, Runtime};

/// CLI args
#[derive(Parser)]
#[clap(name = "mithril-signer")]
#[clap(about = "An implementation of a Mithril Signer", long_about = None)]
pub struct Args {
    /// Run Mode
    #[clap(short, long, default_value = "dev")]
    run_mode: String,

    /// Verbosity level
    #[clap(short, long, parse(from_occurrences))]
    verbose: usize,
}

impl Args {
    fn log_level(&self) -> Level {
        match self.verbose {
            0 => Level::Warning,
            1 => Level::Info,
            2 => Level::Debug,
            _ => Level::Trace,
        }
    }
}

fn build_logger(min_level: Level) -> Logger {
    let drain = slog_bunyan::new(std::io::stdout())
        .set_pretty(false)
        .build()
        .fuse();
    let drain = slog::LevelFilter::new(drain, min_level).fuse();
    let drain = slog_async::Async::new(drain).build().fuse();

    Logger::root(Arc::new(drain), o!())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // Load args
    let args = Args::parse();
    let _guard = slog_scope::set_global_logger(build_logger(args.log_level()));

    // Load config
    let run_mode = env::var("RUN_MODE").unwrap_or(args.run_mode);
    let config: Config = config::Config::builder()
        .add_source(config::File::with_name(&format!("./config/{}.json", run_mode)).required(false))
        .add_source(config::Environment::default())
        .build()
        .map_err(|e| format!("configuration build error: {}", e))?
        .try_deserialize()
        .map_err(|e| format!("configuration deserialize error: {}", e))?;
    debug!("Started"; "run_mode" => &run_mode, "config" => format!("{:?}", config));

    // TODO: Use serialized ProtocolInitializer here, loaded e.g. from filesystem
    let protocol_initializer_encoded = "";
    let single_signer = MithrilSingleSigner::new(config.party_id, protocol_initializer_encoded);
    let certificate_handler = CertificateHandlerHTTPClient::new(config.aggregator_endpoint.clone());
    let digester = ImmutableDigester::new(config.db_directory, slog_scope::logger());
    let stake_store = Arc::new(RwLock::new(StakeStore::new(Box::new(
        JsonFileStoreAdapter::new(config.stake_store_directory.clone())?,
    ))));
    setup_dependencies_fake_data(stake_store.clone()).await;

    // Should the runtime loop returns an error ? If yes should we abort the loop at the first error or is their some tolerance ?
    let mut runtime = Runtime::new(
        Box::new(certificate_handler),
        Box::new(single_signer),
        Box::new(digester),
        stake_store.clone(),
    );
    runtime.infinite_loop(config.run_interval).await;

    Ok(())
}

/// Setup dependencies with fake data
// TODO: remove this function when new runtime is implemented
async fn setup_dependencies_fake_data(stake_store: Arc<RwLock<dyn StakeStorer>>) {
    // Update stake distribution
    let mut stake_store = stake_store.write().await;
    let total_signers = 5;
    let epoch = 0; // TODO: to remove once the runtime feeds the stake distribution
    let stakes: ProtocolStakeDistribution = fake_data::signers_with_stakes(total_signers)
        .into_iter()
        .map(|signer| signer.into())
        .collect::<_>();
    for stake in stakes {
        stake_store
            .save_stake(epoch, stake.into())
            .await
            .expect("fake stake distribution update failed");
    }
}
