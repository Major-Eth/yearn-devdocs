(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||c;return r?o.a.createElement(b,s(s({ref:t},u),{},{components:r})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),c=(r(0),r(112)),a={},s={unversionedId:"developers/contracts/test/TokenFalseReturn",id:"developers/contracts/test/TokenFalseReturn",isDocsHomePage:!1,title:"TokenFalseReturn",description:"Functions",source:"@site/docs/developers/contracts/test/TokenFalseReturn.md",sourceDirName:"developers/contracts/test",slug:"/developers/contracts/test/TokenFalseReturn",permalink:"/docs/developers/contracts/test/TokenFalseReturn",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/developers/contracts/test/TokenFalseReturn.md",version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Token",permalink:"/docs/developers/contracts/test/Token"},next:{title:"TokenNoReturn",permalink:"/docs/developers/contracts/test/TokenNoReturn"}},i=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"transfer",id:"transfer",children:[]},{value:"transferFrom",id:"transferfrom",children:[]}]}],u={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),Object(c.b)("h3",{id:"transfer"},"transfer"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function transfer(\n  ) public returns (bool)\n")),Object(c.b)("h3",{id:"transferfrom"},"transferFrom"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function transferFrom(\n  ) public returns (bool)\n")))}l.isMDXComponent=!0}}]);