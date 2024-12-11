"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[5473,8655],{3393:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"compiled-binaries","title":"compiled-binaries","description":"You can install a the latest released binary of the {props.node} by running this one line command (replace **YOURPATH with your installation path_):","source":"@site/root/compiled-binaries.mdx","sourceDirName":".","slug":"/compiled-binaries","permalink":"/doc/next/compiled-binaries","draft":false,"unlisted":true,"editUrl":"https://github.com/input-output-hk/mithril/edit/main/docs/website/root/compiled-binaries.mdx","tags":[],"version":"current","frontMatter":{"unlisted":true,"hide_title":true,"hide_table_of_contents":true}}');var i=r(74848),d=r(28453),s=r(21432);const l={unlisted:!0,hide_title:!0,hide_table_of_contents:!0},c=void 0,h={},o=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["You can install a the ",(0,i.jsx)(n.strong,{children:"latest"})," released binary of the ",(0,i.jsx)(n.strong,{children:e.node})," by running this one line command (",(0,i.jsxs)(n.em,{children:["replace ",(0,i.jsx)(n.strong,{children:"YOUR_PATH"})," with your installation path"]}),"):"]}),"\n",(0,i.jsx)(s.A,{language:"bash",children:(0,i.jsxs)(n.p,{children:["curl --proto '=https' --tlsv1.2 -sSf\n",(0,i.jsx)(n.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/refs/heads/main/mithril-install.sh",children:"https://raw.githubusercontent.com/input-output-hk/mithril/refs/heads/main/mithril-install.sh"}),"\n| sh -s -- -c ",e.node," -d latest -p ",(0,i.jsx)(n.strong,{children:"YOUR_PATH"})]})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can also install the ",(0,i.jsx)(n.strong,{children:e.node})," binary for other distributions:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["use ",(0,i.jsx)(n.code,{children:"-d unstable"})," for the ",(0,i.jsx)(n.strong,{children:"unstable"})," version"]}),"\n",(0,i.jsxs)(n.li,{children:["use ",(0,i.jsx)(n.code,{children:"-d **DISTRIBUTION_VERSION**"})," for a specific distribution (e.g. ",(0,i.jsx)(n.code,{children:"-d 2445.0"}),")"]}),"\n"]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The Linux binaries target ",(0,i.jsx)(n.code,{children:"glibc"}),", and have a minimum requirement of ",(0,i.jsx)(n.code,{children:"glibc 2.31"})," (compatible with ",(0,i.jsx)(n.code,{children:"Ubuntu 20.04"}),"\nor ",(0,i.jsx)(n.code,{children:"Debian Bullseye"}),")."]})})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11556:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"manual/develop/nodes/mithril-signer","title":"Mithril signer node","description":"Mithril signer is responsible for producing individual signatures that are collected and aggregated by the Mithril aggregator.","source":"@site/root/manual/develop/nodes/mithril-signer.md","sourceDirName":"manual/develop/nodes","slug":"/manual/develop/nodes/mithril-signer","permalink":"/doc/next/manual/develop/nodes/mithril-signer","draft":false,"unlisted":false,"editUrl":"https://github.com/input-output-hk/mithril/edit/main/docs/website/root/manual/develop/nodes/mithril-signer.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"manualSideBar","previous":{"title":"Mithril aggregator node","permalink":"/doc/next/manual/develop/nodes/mithril-aggregator"},"next":{"title":"Mithril client node","permalink":"/doc/next/manual/develop/nodes/mithril-client"}}');var i=r(74848),d=r(28453),s=r(3393);const l={sidebar_position:2},c="Mithril signer node",h={},o=[{value:"Resources",id:"resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download the source file",id:"download-the-source-file",level:2},{value:"Development testing and building",id:"development-testing-and-building",level:2},{value:"Release the build and run the binary",id:"release-the-build-and-run-the-binary",level:2},{value:"Download the pre-built binary",id:"download-the-pre-built-binary",level:2},...s.toc,{value:"Build and run a Docker container",id:"build-and-run-a-docker-container",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"mithril-signer-node",children:"Mithril signer node"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Mithril signer is responsible for producing individual signatures that are collected and aggregated by the ",(0,i.jsx)(n.strong,{children:"Mithril aggregator"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For more information about the ",(0,i.jsx)(n.strong,{children:"Mithril network"}),", please see the ",(0,i.jsx)(n.a,{href:"/doc/next/mithril/advanced/mithril-network/architecture",children:"architecture"})," overview"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For more information about the ",(0,i.jsx)(n.strong,{children:"Mithril signer"})," node, please see ",(0,i.jsx)(n.a,{href:"/doc/next/mithril/advanced/mithril-network/signer",children:"this overview"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"/doc/next/manual/operate/run-signer-node",children:(0,i.jsx)(n.code,{children:"Run a Mithril signer node"})})," guide."]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The Mithril network configurations are available in the ",(0,i.jsx)(n.a,{href:"/doc/next/manual/getting-started/network-configurations",children:(0,i.jsx)(n.strong,{children:"Network configurations"})})," section of the user manual."]})}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Node"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Source repository"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Rust documentation"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Docker packages"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Network configurations"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.strong,{children:"Mithril signer"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/tree/main/mithril-signer",children:"\u2197\ufe0f"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.a,{href:"https://mithril.network/rust-doc/mithril_signer/index.html",children:"\u2197\ufe0f"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/mithril/pkgs/container/mithril-signer",children:"\u2197\ufe0f"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.a,{href:"/doc/next/manual/getting-started/network-configurations",children:"\u2197\ufe0f"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install the latest stable version of the ",(0,i.jsx)(n.a,{href:"https://www.rust-lang.org/learn/get-started",children:"correctly configured"})," Rust toolchain"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install build tools ",(0,i.jsx)(n.code,{children:"build-essential"})," and ",(0,i.jsx)(n.code,{children:"m4"}),"; for example, on Ubuntu/Debian/Mint, run ",(0,i.jsx)(n.code,{children:"sudo apt install build-essential m4"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install OpenSSL development libraries; for example, on Ubuntu/Debian/Mint, run ",(0,i.jsx)(n.code,{children:"apt install libssl-dev"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"download-the-source-file",children:"Download the source file"}),"\n",(0,i.jsx)(n.p,{children:"You can download the source file from GitHub (HTTPS):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/input-output-hk/mithril.git\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or (SSH):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:input-output-hk/mithril.git\n"})}),"\n",(0,i.jsx)(n.p,{children:"Switch to the desired branch/tag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Replace **YOUR_BUILD_BRANCH_OR_TAG** with the appropriate branch or tag name\n# Please refer to the [**Network configurations**](http://mithril.network/manual/getting-started/network-configurations) section of the user manual\ngit checkout **YOUR_BUILD_BRANCH_OR_TAG**\n"})}),"\n",(0,i.jsx)(n.p,{children:"Change the directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd mithril/mithril-signer\n"})}),"\n",(0,i.jsx)(n.h2,{id:"development-testing-and-building",children:"Development testing and building"}),"\n",(0,i.jsx)(n.p,{children:"Run tests:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create the help menu:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make help\n"})}),"\n",(0,i.jsx)(n.p,{children:"Generate the Rust documentation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make doc\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run in debug mode with the default configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make debug\n"})}),"\n",(0,i.jsx)(n.h2,{id:"release-the-build-and-run-the-binary",children:"Release the build and run the binary"}),"\n",(0,i.jsx)(n.p,{children:"To build and run in release mode with the default configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make run\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or, you can build only in release mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make build\n"})}),"\n",(0,i.jsx)(n.p,{children:"Display the help menu:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./mithril-signer --help\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should see:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"An implementation of a Mithril signer\n\nUsage: mithril-signer [OPTIONS]\n\nOptions:\n  -r, --run-mode <RUN_MODE>\n          Run Mode\n\n          [env: RUN_MODE=]\n          [default: dev]\n\n  -v, --verbose...\n          Verbosity level, add more v to increase\n\n  -c, --configuration-dir <CONFIGURATION_DIR>\n          Directory where the configuration file is located\n\n          [default: ./config]\n\n      --disable-digests-cache\n          Disable immutables digests cache\n\n      --reset-digests-cache\n          If set the existing immutables digests cache will be reset.\n\n          Will be ignored if set in conjunction with `--disable-digests-cache`.\n\n      --enable-metrics-server\n          Enable metrics HTTP server (Prometheus endpoint on /metrics)\n\n          [env: ENABLE_METRICS_SERVER=]\n\n      --metrics-server-ip <METRICS_SERVER_IP>\n          Metrics HTTP server IP\n\n          [env: METRICS_SERVER_IP=]\n          [default: 0.0.0.0]\n\n      --metrics-server-port <METRICS_SERVER_PORT>\n          Metrics HTTP server listening port\n\n          [env: METRICS_SERVER_PORT=]\n          [default: 9090]\n\n      --allow-unparsable-block\n          If set no error is returned in case of unparsable block and an error log is written instead.\n\n          Will be ignored on (pre)production networks.\n\n  -h, --help\n          Print help (see a summary with '-h')\n\n  -V, --version\n          Print version\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run in release mode with the default configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./mithril-signer\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run in release mode using a specific mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./mithril-signer -r preview\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run in release mode with a custom configuration using environment variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"NETWORK=**YOUR_CARDANO_NETWORK** AGGREGATOR_ENDPOINT=**YOUR_AGGREGATOR_ENDPOINT** ./mithril-signer\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"If you wish to delve deeper and access several levels of logs from the Mithril signer, use the following:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"-v"})," for some logs (WARN)"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"-vv"})," for more logs (INFO)"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"-vvv"})," for even more logs (DEBUG)"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"-vvvv"})," for all logs (TRACE)."]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"download-the-pre-built-binary",children:"Download the pre-built binary"}),"\n",(0,i.jsx)(s.default,{node:"mithril-signer"}),"\n",(0,i.jsx)(n.h2,{id:"build-and-run-a-docker-container",children:"Build and run a Docker container"}),"\n",(0,i.jsx)(n.p,{children:"Build a local Docker image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make docker-build\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run a local Docker container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make docker-run\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuration-parameters",children:"Configuration parameters"}),"\n",(0,i.jsx)(n.p,{children:"The configuration parameters can be set in either of the following ways:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In a configuration file, depending on the ",(0,i.jsx)(n.code,{children:"--run-mode"})," parameter. If the runtime mode is ",(0,i.jsx)(n.code,{children:"testnet"}),", the file is located in ",(0,i.jsx)(n.code,{children:"./conf/testnet.json"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The value can be overridden by an environment variable with the parameter name in uppercase."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here is a list of the available parameters:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Command line (long)"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Command line (short)"}),(0,i.jsx)(n.th,{children:"Environment variable"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Example"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Mandatory"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"verbose"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--verbose"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"-v"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"VERBOSE"})}),(0,i.jsx)(n.td,{children:"Verbosity level"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:["Parsed from the number of occurrences: ",(0,i.jsx)(n.code,{children:"-v"})," for ",(0,i.jsx)(n.code,{children:"Warning"}),", ",(0,i.jsx)(n.code,{children:"-vv"})," for ",(0,i.jsx)(n.code,{children:"Info"}),", ",(0,i.jsx)(n.code,{children:"-vvv"})," for ",(0,i.jsx)(n.code,{children:"Debug"})," and ",(0,i.jsx)(n.code,{children:"-vvvv"})," for ",(0,i.jsx)(n.code,{children:"Trace"})]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"run_mode"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--run-mode"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"-r"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"RUN_MODE"})}),(0,i.jsx)(n.td,{children:"Runtime mode"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"dev"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cardano_cli_path"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CARDANO_CLI_PATH"})}),(0,i.jsx)(n.td,{children:"Cardano CLI tool path"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cardano-cli"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cardano_node_socket_path"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CARDANO_NODE_SOCKET_PATH"})}),(0,i.jsx)(n.td,{children:"Path of the socket used by the Cardano CLI tool to communicate with the Cardano node"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/tmp/cardano.sock"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"db_directory"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--db-directory"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DB_DIRECTORY"})}),(0,i.jsxs)(n.td,{children:["Directory to snapshot from the ",(0,i.jsx)(n.strong,{children:"Cardano node"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/db"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"network"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"NETWORK"})}),(0,i.jsx)(n.td,{children:"Cardano network"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"testnet"})," or ",(0,i.jsx)(n.code,{children:"mainnet"})," or ",(0,i.jsx)(n.code,{children:"devnet"})]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"network_magic"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"NETWORK_MAGIC"})}),(0,i.jsxs)(n.td,{children:["Cardano network magic number (for ",(0,i.jsx)(n.code,{children:"testnet"})," and ",(0,i.jsx)(n.code,{children:"devnet"}),")"]}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"1097911063"})," or ",(0,i.jsx)(n.code,{children:"42"})]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"party_id"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PARTY_ID"})}),(0,i.jsxs)(n.td,{children:["Party Id of the signer, usually the ",(0,i.jsx)(n.code,{children:"Pool Id"})," of the SPO"]}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"pool1pxaqe80sqpde7902er5kf6v0c7y0sv6d5g676766v2h829fvs3x"})}),(0,i.jsxs)(n.td,{style:{textAlign:"center"},children:["Mandatory in ",(0,i.jsx)(n.code,{children:"pool Id declaration mode"})," where the owner is not verified (decommissioned, only available when built with ",(0,i.jsx)(n.code,{children:"allow_skip_signer_certification"})," feature, for test only)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"run_interval"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"RUN_INTERVAL"})}),(0,i.jsx)(n.td,{children:"Interval between two runtime cycles in ms"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"60000"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"aggregator_endpoint"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"AGGREGATOR_ENDPOINT"})}),(0,i.jsx)(n.td,{children:"Aggregator node endpoint"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"https://aggregator.pre-release-preview.api.mithril.network/aggregator"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"data_stores_directory"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DATA_STORES_DIRECTORY"})}),(0,i.jsx)(n.td,{children:"Directory to store signer data (stake, protocol initializers, ...)"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"./mithril-signer/stores"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"store_retention_limit"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STORE_RETENTION_LIMIT"})}),(0,i.jsx)(n.td,{children:"Maximum number of records in stores. If not set, no limit is set."}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"kes_secret_key_path"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"KES_SECRET_KEY_PATH"})}),(0,i.jsxs)(n.td,{children:["Path to the ",(0,i.jsx)(n.code,{children:"Cardano KES secret key"})," file. Mandatory in ",(0,i.jsx)(n.code,{children:"Pool Id certification mode"})," where the owner is verified (experimental, soon to be stable & preferred mode)"]}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"operational_certificate_path"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"OPERATIONAL_CERTIFICATE_PATH"})}),(0,i.jsxs)(n.td,{children:["Path to the ",(0,i.jsx)(n.code,{children:"Cardano operational certificate"})," file. Mandatory in ",(0,i.jsx)(n.code,{children:"Pool Id certification mode"})," where the owner is verified (experimental, soon to be stable & preferred mode)"]}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"era_reader_adapter_type"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--era-reader-adapter-type"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ERA_READER_ADAPTER_TYPE"})}),(0,i.jsxs)(n.td,{children:["Era reader adapter type that can be ",(0,i.jsx)(n.code,{children:"cardano-chain"}),", ",(0,i.jsx)(n.code,{children:"file"})," or ",(0,i.jsx)(n.code,{children:"bootstrap"}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"bootstrap"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"era_reader_adapter_params"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--era-reader-adapter-params"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ERA_READER_ADAPTER_PARAMS"})}),(0,i.jsxs)(n.td,{children:["Era reader adapter params that is an optional JSON encoded parameters structure that is expected depending on the ",(0,i.jsx)(n.code,{children:"era_reader_adapter_type"})," parameter"]}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"enable_metrics_server"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--enable-metrics-server"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ENABLE_METRICS_SERVER"})}),(0,i.jsx)(n.td,{children:"Enable metrics HTTP server (Prometheus endpoint on /metrics)"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metrics_server_ip"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--metrics-server-ip"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"METRICS_SERVER_IP"})}),(0,i.jsx)(n.td,{children:"Metrics HTTP server IP"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0.0.0.0"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metrics_server_port"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--metrics-server-port"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"METRICS_SERVER_PORT"})}),(0,i.jsx)(n.td,{children:"Metrics HTTP server listening port"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"9090"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"allow_unparsable_block"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--allow-unparsable-block"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ALLOW_UNPARSABLE_BLOCK"})}),(0,i.jsx)(n.td,{children:"If set no error is returned in case of unparsable block and an error log is written instead. Will be ignored on (pre)production networks."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"enable_transaction_pruning"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ENABLE_TRANSACTION_PRUNING"})}),(0,i.jsx)(n.td,{children:"If set, the signer will prune the cardano transactions in database older than the [network_security_parameter]"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"network_security_parameter"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"NETWORK_SECURITY_PARAMETER"})}),(0,i.jsxs)(n.td,{children:["Also known as ",(0,i.jsx)(n.code,{children:"k"}),", it defines the number of blocks that are required for the blockchain to be considered final, preventing any further rollback ",(0,i.jsx)(n.code,{children:"[default: 2160]"}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"2160"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"preload_security_parameter"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PRELOAD_SECURITY_PARAMETER"})}),(0,i.jsxs)(n.td,{children:["Blocks offset, from the tip of the chain, to exclude during the cardano transactions preload ",(0,i.jsx)(n.code,{children:"[default: 3000]"}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"3000"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"transactions_import_block_chunk_size"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TRANSACTIONS_IMPORT_BLOCK_CHUNK_SIZE"})}),(0,i.jsx)(n.td,{children:"Chunk size for importing transactions, combined with transaction pruning it reduces the storage footprint of the signer by reducing the number of transactions stored on disk at any given time."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1500"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cardano_transactions_block_streamer_max_roll_forwards_per_poll"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CARDANO_TRANSACTIONS_BLOCK_STREAMER_MAX_ROLL_FORWARDS_PER_POLL"})}),(0,i.jsx)(n.td,{children:"The maximum number of roll forwards during a poll of the block streamer when importing transactions."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1000"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"preloading_refresh_interval_in_seconds"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--preloading-refresh-interval-in-seconds"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PRELOADING_REFRESH_INTERVAL_IN_SECONDS"})}),(0,i.jsx)(n.td,{children:"The preloading refresh interval in seconds."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"7200"})}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);