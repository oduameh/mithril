"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[8401],{32234:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(34164),i=n(44084),a=n(17559),o=n(27293),l=n(74848);function r(e){let{className:t}=e;return(0,l.jsx)(o.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,s.A)(t,a.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(r,{...e})]})}},41689:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var s=n(34164),i=n(44084),a=n(17559),o=n(27293),l=n(74848);function r(e){let{className:t}=e;return(0,l.jsx)(o.A,{type:"caution",title:(0,l.jsx)(i.Yh,{}),className:(0,s.A)(t,a.G.common.draftBanner),children:(0,l.jsx)(i.TT,{})})}var c=n(32234);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||s.unlisted)&&(0,l.jsx)(c.A,{}),s.draft&&(0,l.jsx)(r,{})]})}},71243:(e,t,n)=>{n.d(t,{A:()=>f});n(96540);var s=n(34164),i=n(17559),a=n(26972),o=n(99169),l=n(28774),r=n(21312),c=n(86025),d=n(74848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function x(e){let{children:t,active:n,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function f(){const e=(0,a.OF)(),t=(0,o.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(i.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(b,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},30833:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var s=n(96540),i=n(61213),a=n(89532),o=n(74848);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new a.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(i.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(34164),m=n(24581),h=n(27719);function v(){const{metadata:e}=c();return(0,o.jsx)(h.A,{previous:e.previous,next:e.next})}var b=n(51878),x=n(4267),f=n(17559),p=n(62053),g=n(4336);function j(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:i}=e,a=i.length>0,l=!!(t||n||s);return a||l?(0,o.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(p.A,{tags:i})})}),l&&(0,o.jsx)(g.A,{className:(0,u.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var A=n(41422),L=n(65195),C=n(21312);const N={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function _(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",N.tocCollapsibleButton,!t&&N.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(C.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const T={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function k(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:l}=(0,A.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(T.tocCollapsible,!a&&T.tocCollapsibleExpanded,n),children:[(0,o.jsx)(_,{collapsed:a,onClick:l}),(0,o.jsx)(A.N,{lazy:!0,className:T.tocCollapsibleContent,collapsed:a,children:(0,o.jsx)(L.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}const H={tocMobile:"tocMobile_ITEo"};function M(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(k,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,H.tocMobile)})}var y=n(67763);function B(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(y.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var I=n(51107),w=n(9911);function E(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(I.A,{as:"h1",children:n})}),(0,o.jsx)(w.A,{children:t})]})}var V=n(71243),O=n(41689);const G={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function S(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,o.jsx)(M,{}):void 0,desktop:!i||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(B,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&G.docItemCol),children:[(0,o.jsx)(O.A,{metadata:s}),(0,o.jsx)(b.A,{}),(0,o.jsxs)("div",{className:G.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(V.A,{}),(0,o.jsx)(x.A,{}),n.mobile,(0,o.jsx)(E,{children:t}),(0,o.jsx)(j,{})]}),(0,o.jsx)(v,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function P(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(i.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(S,{children:(0,o.jsx)(n,{})})]})})}},27719:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(21312),i=n(39022),a=n(74848);function o(e){const{previous:t,next:n}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(i.A,{...t,subLabel:(0,a.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,a.jsx)(i.A,{...n,subLabel:(0,a.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(34164),i=n(21312),a=n(17559),o=n(23025),l=n(74848);function r(e){let{className:t}=e;const n=(0,o.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,a.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},51878:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var s=n(34164),i=n(44586),a=n(28774),o=n(21312),l=n(48295),r=n(17559),c=n(53886),d=n(23025),u=n(74848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function v(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(a.A,{to:n,onClick:s,children:(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,i.A)(),{pluginId:o}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(o),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,l.HW)(o),x=m??(f=b).docs.find((e=>e.id===f.mainDocId));var f;return(0,u.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:a,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:b.label,to:x.path,onClick:()=>d(b.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(b,{className:t,versionMetadata:n}):null}},67763:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(34164),i=n(65195);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=n(74848);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,s.A)(a.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(i.A,{...n,linkClassName:l,linkActiveClassName:r})})}},65195:(e,t,n)=>{n.d(t,{A:()=>b});var s=n(96540),i=n(6342);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(28774),m=n(74848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,i.p)(),x=c??b.tableOfContents.minHeadingLevel,f=u??b.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>o({toc:a(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:x,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:f}}),[l,r,x,f])),(0,m.jsx)(v,{toc:p,className:n,linkClassName:l,...h})}},44084:(e,t,n)=>{n.d(t,{AE:()=>r,Rc:()=>o,TT:()=>d,Uh:()=>l,Yh:()=>c});n(96540);var s=n(21312),i=n(5260),a=n(74848);function o(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,a.jsx)(i.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);