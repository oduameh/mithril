"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[8372],{97075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var s=n(92134),o=n(74848),r=n(28453);const i={slug:7,title:"7. Standardize log output\n",authors:[{name:"Mithril Team"}],tags:["Accepted"],date:new Date("2024-04-07T00:00:00.000Z")},l=void 0,d={authorsImageUrls:[void 0]},a=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,o.jsx)(t.p,{children:"Accepted"}),"\n",(0,o.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/adr/2",children:"ADR 2"})," is not completely relevant now, we have migrated recently the logs in the client to ",(0,o.jsx)(t.code,{children:"stderr"}),". Only the result of the command execution is in ",(0,o.jsx)(t.code,{children:"stdout"}),". This makes it possible to exploit the result, see our ",(0,o.jsx)(t.a,{href:"/dev-blog/2024/02/26/mithril-client-cli-output-breaking-change",children:"blog post"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Mithril aggregator logs are always redirected to ",(0,o.jsx)(t.code,{children:"stdout"})," but it mixes 2 types of CLI commands, some of which would benefit from the logs output to ",(0,o.jsx)(t.code,{children:"stderr"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Mithril aggregator and Mithril client CLI have not a consistent log strategy, that's why we need to standardize them."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["For commands that provide a result or execute an action, logs are sent to ",(0,o.jsx)(t.code,{children:"stderr"}),". Only the result of the command is sent to ",(0,o.jsx)(t.code,{children:"stdout"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["For commands that launch a program without an expected result (server), logs are sent to ",(0,o.jsx)(t.code,{children:"stdout"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["End users who use ",(0,o.jsx)(t.code,{children:"stdout"})," logs would have a breaking change. They will have to retrieve the logs that come from ",(0,o.jsx)(t.code,{children:"stderr"})," in addition."]}),"\n",(0,o.jsxs)(t.li,{children:["Commands ",(0,o.jsx)(t.code,{children:"genesis"}),", ",(0,o.jsx)(t.code,{children:"era"})," and ",(0,o.jsx)(t.code,{children:"tools"})," from Mithril aggregator now send their logs to ",(0,o.jsx)(t.code,{children:"stderr"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}},92134:e=>{e.exports=JSON.parse('{"permalink":"/doc/adr/7","source":"@site/adr/007-standardize-log-output.md","title":"7. Standardize log output\\n","description":"Status","date":"2024-04-07T00:00:00.000Z","tags":[{"inline":true,"label":"Accepted","permalink":"/doc/adr/tags/accepted"}],"readingTime":0.905,"hasTruncateMarker":false,"authors":[{"name":"Mithril Team","socials":{},"key":null,"page":null}],"frontMatter":{"slug":"7","title":"7. Standardize log output\\n","authors":[{"name":"Mithril Team"}],"tags":["Accepted"],"date":"2024-04-07T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"6. Errors implementation Standard\\n","permalink":"/doc/adr/6"}}')}}]);