(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{5095:(e,r,t)=>{Promise.resolve().then(t.bind(t,8072))},8072:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>S});var i=t(5155),s=t(6046),n=t(2115),o=t(3391),d=t(6817),l=t(3339),a=t(3067),c=t(4216),h=t(6121),u=t(9141),x=t(3667),g=t(6061),j=t(9221),m=t(8692),p=t(676),v=t(2981),f=t(1800);function b(e){let{registrations:r,onClose:t,mode:s}=e,d=(0,o.d4)(e=>(0,j.wm)(e)),[l,a]=(0,n.useState)(void 0),c="out"===s?"danger":"success";function h(e,r){return e.pool_ticker.localeCompare(r.pool_ticker)||e.party_id.localeCompare(r.party_id)}return(0,n.useEffect)(()=>{if(void 0===s)return;let e="";for(let[t,i]of Object.entries(r).reverse()){let r="in"===s?i.in:i.out;if(0!==r.length)for(let i of(e+="Since epoch **#".concat(t,"**:\n"),r.map(e=>{var r,t,i;return{party_id:e.party_id,pool_ticker:null!==(i=null==d?void 0:null===(t=d.pools)||void 0===t?void 0:null===(r=t.find(r=>r.party_id===e.party_id))||void 0===r?void 0:r.pool_ticker)&&void 0!==i?i:""}}).sort(h)))e+="* ".concat(i.party_id),""!==i.pool_ticker&&(e+=" **".concat(i.pool_ticker,"**")),e+="\n"}a(e)},[r,s,d]),(0,i.jsxs)(p.A,{show:void 0!==s,onHide:function(){t()},size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,i.jsx)(p.A.Header,{closeButton:!0,children:(0,i.jsxs)(p.A.Title,{children:[(0,i.jsx)("i",{className:"bi bi-markdown text-".concat(c)})," Markdown formatted message of"," ","out"===s?"de-registered":"newly registered"," signers"]})}),(0,i.jsx)(p.A.Body,{children:void 0!==r&&(0,i.jsx)(v.A,{bg:"light",border:c,children:(0,i.jsx)(v.A.Body,{children:(0,i.jsx)("pre",{className:"mb-0",children:(0,i.jsx)("code",{children:l})})})})}),(0,i.jsx)(p.A.Footer,{children:(0,i.jsx)(f.A,{text:"Copy to clipboard",variant:"primary",textToCopy:l})})]})}var A=t(1032),k=t(1334),y=t(2963),_=t(8435);function w(e){let{onClick:r}=e;return(0,i.jsx)(A.A,{overlay:(0,i.jsx)(k.A,{children:"Markdown formatted code block"}),children:(0,i.jsx)(y.A,{variant:"light",size:"sm",className:"border-dark",onClick:r,children:(0,i.jsx)("i",{className:"bi bi-markdown"})})})}function N(e){let{mode:r,registrations:t,onMarkdownButtonClick:s}=e,o=e=>"out"===r?e.out:e.in,d=Object.entries(t).reverse().filter(e=>{let[r,t]=e;return o(t).length>0});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:(0,i.jsxs)(l.A,{direction:"horizontal",children:[(0,i.jsxs)("div",{children:["out"===r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"bi bi-box-arrow-left"})," De-registered"]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"bi bi-box-arrow-in-right"})," Newly registered"]})," ","Signers"]}),(0,i.jsx)("div",{className:"ms-auto",children:(0,i.jsx)(w,{onClick:s})})]})}),d.map(e=>{let[t,s]=e;return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsxs)("h4",{children:["out"===r?"De-registered":"Registered"," since epoch"," ",(0,i.jsxs)("span",{className:"text-secondary",children:["#",t]})]}),(0,i.jsx)(_.A,{signers:o(s)})]},t)})]})}function S(){let e=(0,o.wA)(),r=(0,s.useSearchParams)(),[t,p]=(0,n.useState)(!0),[v,f]=(0,n.useState)(void 0),[A,k]=(0,n.useState)(void 0),[y,_]=(0,n.useState)(void 0),[w,S]=(0,n.useState)(void 0),[C,O]=(0,n.useState)(void 0),[R,E]=(0,n.useState)(void 0);if((0,n.useEffect)(()=>{let t;let i=r.get(g.aggregatorSearchParam);k(i),(0,d.checkUrl)(i)||(t="invalidAggregatorUrl"),void 0===t?(p(!0),(0,m.fetchEpochSettings)(i).then(e=>{let r=null==e?void 0:e.epoch;if(_(r),r)return Promise.all([(0,m.fetchRegistrations)(i,r),(0,m.fetchRegistrations)(i,r-1),(0,m.fetchRegistrations)(i,r-2),(0,m.fetchRegistrations)(i,r-3)]).then(e=>{let[r,...t]=e;return(0,d.computeInOutRegistrations)(r,...t)})}).then(e=>{S(e),O((0,d.dedupInOutRegistrations)(e))}).then(()=>p(!1)).catch(()=>{_(void 0)}),e((0,j.Vf)(i))):f(t)},[r]),void 0!==v){let e="";return e="invalidAggregatorUrl"===v?"The given aggregator isn't a valid url, please correct it and try again.":"Something went wrong",(0,i.jsxs)(l.A,{gap:3,children:[(0,i.jsx)("h2",{children:"In/Out Registrations"}),(0,i.jsxs)(a.A,{variant:"danger",children:[(0,i.jsx)(a.A.Heading,{children:"Oh snap! You got an error!"}),(0,i.jsx)("p",{children:e})]})]})}return(0,i.jsxs)(l.A,{gap:3,children:[(0,i.jsx)("h2",{children:"In/Out Registrations"}),t?(0,i.jsx)(c.A,{animation:"grow"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{registrations:C,onClose:function(){E(void 0)},mode:R}),(0,i.jsx)(h.A,{children:(0,i.jsx)(u.A,{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Aggregator:"})}),(0,i.jsx)("td",{children:A})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Current epoch:"})}),(0,i.jsx)("td",{children:y})]})]})})}),(0,i.jsxs)(h.A,{children:[(0,i.jsx)(x.A,{xs:12,sm:12,md:12,lg:6,children:(0,i.jsx)("div",{className:"p-2 mb-2 border border-danger rounded",children:(0,i.jsx)(N,{registrations:C,mode:"out",onMarkdownButtonClick:()=>E("out")})})}),(0,i.jsx)(x.A,{xs:12,sm:12,md:12,lg:6,children:(0,i.jsx)("div",{className:"p-2 border border-success rounded",children:(0,i.jsx)(N,{registrations:C,mode:"in",onMarkdownButtonClick:()=>E("in")})})})]})]})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[827,357,880,435,441,517,358],()=>r(5095)),_N_E=e.O()}]);