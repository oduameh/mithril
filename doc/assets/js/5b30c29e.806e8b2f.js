"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[5126],{74094:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"mithril/advanced/mithril-network/architecture","title":"Architecture","description":"- The current Mithril network relies on a single aggregator. However, the team is working on a more decentralized version, where multiple aggregators will operate within the same Mithril network.","source":"@site/versioned_docs/version-maintained/mithril/advanced/mithril-network/architecture.md","sourceDirName":"mithril/advanced/mithril-network","slug":"/mithril/advanced/mithril-network/architecture","permalink":"/doc/mithril/advanced/mithril-network/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/input-output-hk/mithril/edit/main/docs/website/root/mithril/advanced/mithril-network/architecture.md","tags":[],"version":"maintained","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Architecture"},"sidebar":"mithrilSideBar","previous":{"title":"Mithril network","permalink":"/doc/mithril/advanced/mithril-network/"},"next":{"title":"Mithril aggregator","permalink":"/doc/mithril/advanced/mithril-network/aggregator"}}');var n=t(74848),o=t(28453);const a={sidebar_position:1,sidebar_label:"Architecture"},s="Architecture",l={},h=[{value:"Architecture diagram",id:"architecture-diagram",level:2},{value:"Mithril nodes",id:"mithril-nodes",level:2}];function c(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The current Mithril network relies on a single aggregator. However, the team is working on a more decentralized version, where multiple aggregators will operate within the same Mithril network."}),"\n"]})}),"\n",(0,n.jsx)(i.h2,{id:"architecture-diagram",children:"Architecture diagram"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(95009).A+"",children:(0,n.jsx)(i.img,{alt:"Architecture",src:t(28349).A+"",width:"1635",height:"1341"})})}),"\n",(0,n.jsx)(i.h2,{id:"mithril-nodes",children:"Mithril nodes"}),"\n",(0,n.jsx)(i.p,{children:"The network is composed of the following nodes:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/doc/mithril/advanced/mithril-network/aggregator",children:(0,n.jsx)(i.strong,{children:"Mithril aggregator"})}),":"]}),"\n"]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The trustless node that orchestrates the work of the Mithril signer nodes, gathering their individual signatures to produce Mithril multi-signatures and their associated certificates. The aggregator is also in charge of creating and storing the ledger state snapshot archives."}),"\n"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/doc/mithril/advanced/mithril-network/signer",children:(0,n.jsx)(i.strong,{children:"Mithril signer"})}),":"]}),"\n"]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The node that works transparently on top of the stake pool operator's Cardano node and individually signs the Cardano chain state."}),"\n"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/doc/mithril/advanced/mithril-network/client",children:(0,n.jsx)(i.strong,{children:"Mithril client"})}),":"]}),"\n"]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"The node used to restore artifacts produced by a Mithril aggregator. It then employs Mithril cryptographic primitives to verify their authenticity and validity."}),"\n"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Mithril relay"}),":"]}),"\n"]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["A forward proxy that is used to secure communications between the Mithril signer and the Mithril aggregator. More information is available in the ",(0,n.jsx)(i.a,{href:"/doc/manual/operate/run-signer-node#mithril-signer-deployment-model",children:"Mithril signer deployment model"})," section."]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["For more information about the Mithril protocol, read ",(0,n.jsx)(i.a,{href:"/doc/mithril/advanced/mithril-protocol/protocol",children:"about Mithril"}),"."]})})]})}function d(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},95009:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/files/architecture-e6fad1720a863c9a3986400cb5ac1287.svg"},28349:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/architecture-e6fad1720a863c9a3986400cb5ac1287.svg"},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>s});var r=t(96540);const n={},o=r.createContext(n);function a(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);