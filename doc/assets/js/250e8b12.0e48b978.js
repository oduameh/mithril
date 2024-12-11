"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[8222],{82260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"mithril/advanced/mithril-protocol/README","title":"Mithril protocol","description":"This section explains the Mithril protocol, which serves as the foundational cryptographic framework for the system. It outlines the processes for creating and verifying multi-signatures, enabling secure and efficient blockchain data validation. By leveraging a stake-based threshold signature scheme, the Mithril protocol ensures scalability, decentralization, and integrity within the network.","source":"@site/versioned_docs/version-maintained/mithril/advanced/mithril-protocol/README.mdx","sourceDirName":"mithril/advanced/mithril-protocol","slug":"/mithril/advanced/mithril-protocol/","permalink":"/doc/mithril/advanced/mithril-protocol/","draft":false,"unlisted":false,"editUrl":"https://github.com/input-output-hk/mithril/edit/main/docs/website/root/mithril/advanced/mithril-protocol/README.mdx","tags":[],"version":"maintained","frontMatter":{"title":"Mithril protocol"},"sidebar":"mithrilSideBar","previous":{"title":"Advanced","permalink":"/doc/mithril/advanced/"},"next":{"title":"Protocol phases","permalink":"/doc/mithril/advanced/mithril-protocol/protocol"}}');var i=r(74848),o=r(28453),s=r(3514);const c={title:"Mithril protocol"},l=void 0,a={},d=[];function u(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This section explains the Mithril protocol, which serves as the foundational cryptographic framework for the system. It outlines the processes for creating and verifying multi-signatures, enabling secure and efficient blockchain data validation. By leveraging a stake-based threshold signature scheme, the Mithril protocol ensures scalability, decentralization, and integrity within the network."}),"\n",(0,i.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>v});r(96540);var n=r(34164),i=r(26972),o=r(28774),s=r(53465),c=r(16654),l=r(21312),a=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function h(e){let{href:t,children:r}=e;return(0,u.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:o}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),o&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e;const r=(0,i.Nr)(t),n=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,i.$S)();return(0,u.jsx)(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const o=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(96540),i=r(44586);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=r.select(t),o=r.pluralForms.indexOf(i);return n[Math.min(o,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);