"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[9284],{37562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>h});var n=r(86662),a=r(74848),i=r(28453);const s={title:"Mithril Era Switch",authors:[{name:"Mithril Team"}],tags:["era","era activation","era markers","era switch","hard fork"]},c=void 0,o={authorsImageUrls:[void 0]},h=[{value:"An new Era Switch behavior will be introduced soon to the Mithril networks",id:"an-new-era-switch-behavior-will-be-introduced-soon-to-the-mithril-networks",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Update 2023/03/10"}),": The Era Switch behavior has been activated on the ",(0,a.jsx)(t.code,{children:"release-preprod"})," network."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Update 2023/03/08"}),": The Era Switch behavior has been activated on the ",(0,a.jsx)(t.code,{children:"pre-release-preview"})," network."]}),"\n",(0,a.jsx)(t.h3,{id:"an-new-era-switch-behavior-will-be-introduced-soon-to-the-mithril-networks",children:"An new Era Switch behavior will be introduced soon to the Mithril networks"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Epic"}),": ",(0,a.jsx)(t.code,{children:"Implement eras behavior switch #707](Implement eras behavior switch"})," ",(0,a.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues/707",children:"#707"})]}),"\n",(0,a.jsxs)(t.p,{children:["\u26a0\ufe0f"," The Era Switch is not deployed yet to the ",(0,a.jsx)(t.code,{children:"pre-release-preview"})," and ",(0,a.jsx)(t.code,{children:"release-preprod"})," network. A special announcement will be made on the ",(0,a.jsx)(t.strong,{children:"ask-mithril"})," Discord channel when a new release candidate distribution is ready."]}),"\n",(0,a.jsx)(t.p,{children:"In order to guarantee that any breaking change of the Mithril nodes does not break the Certificate Chain and the that new snapshots are consistently produced, the Mithril team has developped an Era Switch Behavior. This mechanism enables to embed new features in the signer and aggregator nodes prior ro releasing them. Also the activation of these new features will take place in a coordinated manner: all the eligible nodes will hot switch to a new era at the same Cardano epoch transition. To do so, the nodes rely on a transaction that is stored on the Cardano chain that provides era markers with the associated activations epochs for the eras."}),"\n",(0,a.jsxs)(t.p,{children:["\ud83d\udd25"," Activating this feature will require an update of configuration of the signer nodes after updating their binary:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"ERA_READER_ADAPTER_TYPE"})," env var must be set to ",(0,a.jsx)(t.code,{children:"cardano-chain"})]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"ERA_READER_ADAPTER_PARAMS"})," env var must be set to the result of the command ",(0,a.jsx)(t.code,{children:'jq -nc --arg address $(wget -q -O - **YOUR_ERA_READER_ADDRESS**) --arg verification_key $(wget -q -O - **YOUR_ERA_READER_VERIFICATION_KEY**) \'{"address": $address, "verification_key": $verification_key}\''})," (the ",(0,a.jsx)(t.strong,{children:"YOUR_ERA_READER_ADDRESS"})," and ",(0,a.jsx)(t.strong,{children:"YOUR_ERA_READER_VERIFICATION_KEY"})," are values provided in the networks configuration matrix)"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Here is the configuration values that should be used on ",(0,a.jsx)(t.code,{children:"pre-release-preview"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'ERA_READER_ADAPTER_TYPE=cardano-chain\nERA_READER_ADAPTER_PARAMS={"address":"addr_test1qrv5xfwh043mlc3vk5d97s4nmhxu7cmleyssvhx37gkfyejfe8d38v3vsfgetjafgrsdc49krug8wf04h5rmtengtejqlxrksk","verification_key":"5b35352c3232382c3134342c38372c3133382c3133362c34382c382c31342c3138372c38352c3134382c39372c3233322c3235352c3232392c33382c3234342c3234372c3230342c3139382c31332c33312c3232322c32352c3136342c35322c3130322c39312c3132302c3230382c3134375d"}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Here is the configuration values that should be used on ",(0,a.jsx)(t.code,{children:"release-preprod"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'ERA_READER_ADAPTER_TYPE=cardano-chain\nERA_READER_ADAPTER_PARAMS={"address":"addr_test1qpkyv2ws0deszm67t840sdnruqgr492n80g3y96xw3p2ksk6suj5musy6w8lsg3yjd09cnpgctc2qh386rtxphxt248qr0npnx","verification_key":"5b35352c3232382c3134342c38372c3133382c3133362c34382c382c31342c3138372c38352c3134382c39372c3233322c3235352c3232392c33382c3234342c3234372c3230342c3139382c31332c33312c3232322c32352c3136342c35322c3130322c39312c3132302c3230382c3134375d"}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["All these information will be available at the updated ",(0,a.jsx)(t.a,{href:"https://mithril.network/doc/manual/getting-started/run-signer-node",children:(0,a.jsx)(t.code,{children:"Run a Mithril Signer node (SPO)"})})," guide."]}),"\n",(0,a.jsxs)(t.p,{children:["Here is a schema that illustrates the era switch behavior:\n",(0,a.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(97566).A+"",children:(0,a.jsx)(t.img,{alt:"Era Switch Schema",src:r(50490).A+"",width:"1537",height:"650"})})]}),"\n",(0,a.jsxs)(t.p,{children:["More information is also available at this ",(0,a.jsx)(t.a,{href:"https://mithril.network/doc/adr/4",children:"ADR"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Feel free to reach out to us on the ",(0,a.jsx)(t.a,{href:"https://discord.gg/5kaErDKDRq",children:"Discord channel"})," for questions and/or help."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},97566:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/files/schema-44673422940a92bbe82f4db8598c5e45.jpg"},50490:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/schema-44673422940a92bbe82f4db8598c5e45.jpg"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}},86662:e=>{e.exports=JSON.parse('{"permalink":"/doc/dev-blog/2023/03/02/era-switch-feature","source":"@site/blog/2023-03-02-era-switch-feature/index.md","title":"Mithril Era Switch","description":"Update 2023/03/10: The Era Switch behavior has been activated on the release-preprod network.","date":"2023-03-02T00:00:00.000Z","tags":[{"inline":true,"label":"era","permalink":"/doc/dev-blog/tags/era"},{"inline":true,"label":"era activation","permalink":"/doc/dev-blog/tags/era-activation"},{"inline":true,"label":"era markers","permalink":"/doc/dev-blog/tags/era-markers"},{"inline":true,"label":"era switch","permalink":"/doc/dev-blog/tags/era-switch"},{"inline":true,"label":"hard fork","permalink":"/doc/dev-blog/tags/hard-fork"}],"readingTime":1.75,"hasTruncateMarker":false,"authors":[{"name":"Mithril Team","socials":{},"key":null,"page":null}],"frontMatter":{"title":"Mithril Era Switch","authors":[{"name":"Mithril Team"}],"tags":["era","era activation","era markers","era switch","hard fork"]},"unlisted":false,"prevItem":{"title":"Mithril client has got a brand new interface","permalink":"/doc/dev-blog/2023/06/14/new-client-interface"},"nextItem":{"title":"Mithril Release Process","permalink":"/doc/dev-blog/2022/12/05/release-process"}}')}}]);