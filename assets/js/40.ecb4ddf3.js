(window.webpackJsonp=window.webpackJsonp||[]).push([[40,41],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(112),c=a(16),l=a(27),s=a(121),i=a(3),u=a(114),d=a(113),p=a(129),m=a(133),b=a(134),h=a(132),y=a(117),f=a(123),g=a(135);var v=e=>o.a.createElement("svg",Object(i.a)({width:"20",height:"20",role:"img"},e),o.a.createElement("g",{fill:"#7a7a7a"},o.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),j=a(137),O=a(115),k=a(71),E=a.n(k);const C=(e,t)=>"link"===e.type?Object(d.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>C(e,t))),N=Object(n.memo)((function({items:e,...t}){return e.map(((e,a)=>o.a.createElement(T,Object(i.a)({key:a,item:e},t))))}));function T(e){switch(e.item.type){case"category":return o.a.createElement(S,e);case"link":default:return o.a.createElement(x,e)}}function S({item:e,onItemClick:t,collapsible:a,activePath:r,...c}){const{items:l,label:s}=e,d=C(e,r),p=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(d),[m,b]=Object(n.useState)((()=>!!a&&(!d&&e.collapsed))),h=Object(n.useRef)(null),[y,f]=Object(n.useState)(void 0),g=(e=!0)=>{var t;f(e?`${null===(t=h.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{d&&!p&&m&&b(!1)}),[d,p,m]);const v=Object(n.useCallback)((e=>{e.preventDefault(),y||g(),setTimeout((()=>b((e=>!e))),100)}),[y]);return 0===l.length?null:o.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":m})},o.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&d,[E.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},c),s),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:y},onTransitionEnd:()=>{m||g(!1)}},o.a.createElement(N,{items:l,tabIndex:m?"-1":"0",onItemClick:t,collapsible:a,activePath:r})))}function x({item:e,onItemClick:t,activePath:a,collapsible:n,...r}){const{href:c,label:l}=e,s=C(e,a);return o.a.createElement("li",{className:"menu__list-item",key:l},o.a.createElement(y.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s,[E.a.menuLinkExternal]:!Object(f.a)(c)}),to:c},Object(f.a)(c)&&{isNavLink:!0,exact:!0,onClick:t},r),l))}function w({onClick:e}){return o.a.createElement("button",{type:"button",title:Object(O.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(O.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(u.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:e},o.a.createElement(v,{className:E.a.collapseSidebarButtonIcon}))}function P({responsiveSidebarOpened:e,onClick:t}){return o.a.createElement("button",{"aria-label":e?Object(O.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(O.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:t},e?o.a.createElement("span",{className:Object(u.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):o.a.createElement(j.a,{className:E.a.sidebarMenuIcon,height:24,width:24}))}var B=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:r,isHidden:c}){const l=function(){const{isAnnouncementBarClosed:e}=Object(p.a)(),[t,a]=Object(n.useState)(!e);return Object(h.a)((({scrollY:t})=>{e||a(0===t)})),t}(),{navbar:{hideOnScroll:s},hideableSidebar:i}=Object(d.useThemeConfig)(),{isAnnouncementBarClosed:y}=Object(p.a)(),{showResponsiveSidebar:f,closeResponsiveSidebar:v,toggleResponsiveSidebar:j}=function(){const[e,t]=Object(n.useState)(!1);Object(m.a)(e);const a=Object(b.a)();return Object(n.useEffect)((()=>{a===b.b.desktop&&t(!1)}),[a]),{showResponsiveSidebar:e,closeResponsiveSidebar:Object(n.useCallback)((e=>{e.target.blur(),t(!1)}),[t]),toggleResponsiveSidebar:Object(n.useCallback)((()=>{t((e=>!e))}),[t])}}();return o.a.createElement("div",{className:Object(u.a)(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:s,[E.a.sidebarHidden]:c})},s&&o.a.createElement(g.a,{tabIndex:-1,className:E.a.sidebarLogo}),o.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,{"menu--show":f,[E.a.menuWithAnnouncementBar]:!y&&l})},o.a.createElement(P,{responsiveSidebarOpened:f,onClick:j}),o.a.createElement("ul",{className:"menu__list"},o.a.createElement(N,{items:t,onItemClick:v,collapsible:a,activePath:e}))),i&&o.a.createElement(w,{onClick:r}))},_={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},I={Prism:a(24).a,theme:_};function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var R=/\r\n|\r|\n/,D=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},$=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},M=function(e,t){var a=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,a){var n=a.languages,o=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=A({},e[t],o);e[t]=a})),e}),n);return o.root=a,o.plain=A({},a,{backgroundColor:null}),o};function F(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var z=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),L(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?M(e.theme,e.language):void 0;return t.themeDict=a})),L(this,"getLineProps",(function(e){var a=e.key,n=e.className,o=e.style,r=A({},F(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==o&&(r.style=void 0!==r.style?A({},r.style,o):o),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),L(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,o=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return r[a[0]];var c=n?{display:"inline-block"}:{},l=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(l))}})),L(this,"getTokenProps",(function(e){var a=e.key,n=e.className,o=e.style,r=e.token,c=A({},F(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?A({},c.style,o):o),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c})),L(this,"tokenize",(function(e,t,a,n){var o={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,o=e.children,r=this.getThemeDict(this.props),c=t.languages[a];return o({tokens:function(e){for(var t=[[]],a=[e],n=[0],o=[e.length],r=0,c=0,l=[],s=[l];c>-1;){for(;(r=n[c]++)<o[c];){var i=void 0,u=t[c],d=a[c][r];if("string"==typeof d?(u=c>0?u:["plain"],i=d):(u=$(u,d.type),d.alias&&(u=$(u,d.alias)),i=d.content),"string"==typeof i){var p=i.split(R),m=p.length;l.push({types:u,content:p[0]});for(var b=1;b<m;b++)D(l),s.push(l=[]),l.push({types:u,content:p[b]})}else c++,t.push(u),a.push(i),n.push(0),o.push(i.length)}c--,t.pop(),a.pop(),n.pop(),o.pop()}return D(l),s}(void 0!==c?this.tokenize(t,n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var H=a(155),W=a.n(H),V={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},J=a(122);var K=()=>{const{prism:e}=Object(d.useThemeConfig)(),{isDarkTheme:t}=Object(J.a)(),a=e.theme||V,n=e.darkTheme||a;return t?n:a},U=a(72),X=a.n(U);const Y=/{([\d,-]+)}/,q=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)};function G({children:e,className:t,metastring:a,title:r}){const{prism:c}=Object(d.useThemeConfig)(),[l,s]=Object(n.useState)(!1),[p,m]=Object(n.useState)(!1);Object(n.useEffect)((()=>{m(!0)}),[]);const b=Object(d.parseCodeBlockTitle)(a)||r,h=Object(n.useRef)(null);let y=[];const f=K(),g=Array.isArray(e)?e.join(""):e;if(a&&Y.test(a)){const e=a.match(Y)[1];y=W()(e).filter((e=>e>0))}let v=t&&t.replace(/language-/,"");!v&&c.defaultLanguage&&(v=c.defaultLanguage);let j=g.replace(/\n$/,"");if(0===y.length&&void 0!==v){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return q(["js","jsBlock"]);case"jsx":case"tsx":return q(["js","jsBlock","jsx"]);case"html":return q(["js","jsBlock","html"]);case"python":case"py":return q(["python"]);default:return q()}})(v),a=g.replace(/\n$/,"").split("\n");let n;for(let o=0;o<a.length;){const r=o+1,c=a[o].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":n=r;break;case"highlight-end":e+=`${n}-${r-1},`}a.splice(o,1)}else o+=1}y=W()(e),j=a.join("\n")}const k=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),n&&n.focus()}(j),s(!0),setTimeout((()=>s(!1)),2e3)};return o.a.createElement(z,Object(i.a)({},I,{key:String(p),theme:f,code:j,language:v}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:r})=>o.a.createElement("div",{className:X.a.codeBlockContainer},b&&o.a.createElement("div",{style:t,className:X.a.codeBlockTitle},b),o.a.createElement("div",{className:Object(u.a)(X.a.codeBlockContent,v)},o.a.createElement("div",{tabIndex:0,className:Object(u.a)(e,X.a.codeBlock,"thin-scrollbar",{[X.a.codeBlockWithTitle]:b})},o.a.createElement("div",{className:X.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return y.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(i.a)({key:t},a),e.map(((e,t)=>o.a.createElement("span",Object(i.a)({key:t},r({token:e,key:t}))))))})))),o.a.createElement("button",{ref:h,type:"button","aria-label":Object(O.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(u.a)(X.a.copyButton),onClick:k},l?o.a.createElement(O.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(O.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(73);var Q=a(74),Z=a.n(Q);var ee=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(d.useThemeConfig)();return t?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[Z.a.enhancedAnchor]:!n}),id:t}),a.children,o.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(O.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.a.createElement(e,a)};var te={code:e=>{const{children:t}=e;return Object(n.isValidElement)(t)?t:t.includes("\n")?o.a.createElement(G,e):o.a.createElement("code",e)},a:e=>o.a.createElement(y.a,e),pre:e=>{var t;const{children:a}=e;return Object(n.isValidElement)(null==a||null===(t=a.props)||void 0===t?void 0:t.children)?null==a?void 0:a.props.children:o.a.createElement(G,Object(n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:ee("h1"),h2:ee("h2"),h3:ee("h3"),h4:ee("h4"),h5:ee("h5"),h6:ee("h6")},ae=a(124),ne=a(23),oe=a(75),re=a.n(oe);function ce({currentDocRoute:e,versionMetadata:t,children:a}){var l,i;const{siteConfig:p,isClient:m}=Object(c.default)(),{pluginId:b,permalinkToSidebar:h,docsSidebars:y,version:f}=t,g=h[e.path],j=y[g],[k,E]=Object(n.useState)(!1),[C,N]=Object(n.useState)(!1),T=Object(n.useCallback)((()=>{C&&N(!1),E(!k)}),[C]);return o.a.createElement(s.a,{key:m,wrapperClassName:d.ThemeClassNames.wrapper.docPages,pageClassName:d.ThemeClassNames.page.docPage,searchMetadatas:{version:f,tag:Object(d.docVersionSearchTag)(b,f)}},o.a.createElement("div",{className:re.a.docPage},j&&o.a.createElement("div",{className:Object(u.a)(re.a.docSidebarContainer,{[re.a.docSidebarContainerHidden]:k}),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.a.docSidebarContainer)&&k&&N(!0)},role:"complementary"},o.a.createElement(B,{key:g,sidebar:j,path:e.path,sidebarCollapsible:null===(l=null===(i=p.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===l||l,onCollapse:T,isHidden:C}),C&&o.a.createElement("div",{className:re.a.collapsedDocSidebar,title:Object(O.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(O.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},o.a.createElement(v,{className:re.a.expandSidebarButtonIcon}))),o.a.createElement("main",{className:Object(u.a)(re.a.docMainContainer,{[re.a.docMainContainerEnhanced]:k||!j})},o.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",re.a.docItemWrapper,{[re.a.docItemWrapperEnhanced]:k})},o.a.createElement(r.a,{components:te},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,r=t.find((e=>Object(ne.matchPath)(n.pathname,e)));return r?o.a.createElement(ce,{currentDocRoute:r,versionMetadata:a},Object(l.a)(t)):o.a.createElement(ae.default,e)}},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return a?o.a.createElement(b,l(l({ref:t},i),{},{components:a})):o.a.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<r;i++)c[i]=a[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},124:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(121),c=a(115);t.default=function(){return o.a.createElement(r.a,{title:"Page Not Found"},o.a.createElement("main",{className:"container margin-vert--xl"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6 col--offset-3"},o.a.createElement("h1",{className:"hero__title"},o.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),o.a.createElement("p",null,o.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),o.a.createElement("p",null,o.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},155:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a}}]);