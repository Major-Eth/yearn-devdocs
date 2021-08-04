(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),c=(n(0),n(256)),i={},l={unversionedId:"smart-contracts/BaseWrapper",id:"version-0.3.3/smart-contracts/BaseWrapper",isDocsHomePage:!1,title:"BaseWrapper",description:"Functions",source:"@site/versioned_docs/version-0.3.3/smart-contracts/BaseWrapper.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/BaseWrapper",permalink:"/yearn-devdocs/v2/0.3.3/smart-contracts/BaseWrapper",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.3/smart-contracts/BaseWrapper.md",version:"0.3.3",frontMatter:{},sidebar:"version-0.3.3/mySidebar",previous:{title:"BaseStrategyInitializable",permalink:"/yearn-devdocs/v2/0.3.3/smart-contracts/BaseStrategyInitializable"},next:{title:"IWETH",permalink:"/yearn-devdocs/v2/0.3.3/smart-contracts/IWETH"}},o=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"setRegistry",id:"setregistry",children:[]},{value:"bestVault",id:"bestvault",children:[]},{value:"allVaults",id:"allvaults",children:[]},{value:"_updateVaultCache",id:"_updatevaultcache",children:[]},{value:"totalVaultBalance",id:"totalvaultbalance",children:[]},{value:"totalAssets",id:"totalassets",children:[]},{value:"_deposit",id:"_deposit",children:[]},{value:"_withdraw",id:"_withdraw",children:[]},{value:"_migrate",id:"_migrate",children:[]},{value:"_migrate",id:"_migrate-1",children:[]},{value:"_migrate",id:"_migrate-2",children:[]}]}],s={toc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),Object(c.b)("h3",{id:"setregistry"},"setRegistry"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function setRegistry(\n  ) external\n")),Object(c.b)("h3",{id:"bestvault"},"bestVault"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function bestVault(\n  ) public returns (contract VaultAPI)\n")),Object(c.b)("h3",{id:"allvaults"},"allVaults"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function allVaults(\n  ) public returns (contract VaultAPI[])\n")),Object(c.b)("h3",{id:"_updatevaultcache"},"_updateVaultCache"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function _updateVaultCache(\n  ) internal\n")),Object(c.b)("h3",{id:"totalvaultbalance"},"totalVaultBalance"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function totalVaultBalance(\n  ) public returns (uint256 balance)\n")),Object(c.b)("h3",{id:"totalassets"},"totalAssets"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function totalAssets(\n  ) public returns (uint256 assets)\n")),Object(c.b)("h3",{id:"_deposit"},"_deposit"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function _deposit(\n  ) internal returns (uint256 deposited)\n")),Object(c.b)("h3",{id:"_withdraw"},"_withdraw"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function _withdraw(\n  ) internal returns (uint256 withdrawn)\n")),Object(c.b)("h3",{id:"_migrate"},"_migrate"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function _migrate(\n  ) internal returns (uint256)\n")),Object(c.b)("h3",{id:"_migrate-1"},"_migrate"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function _migrate(\n  ) internal returns (uint256)\n")),Object(c.b)("h3",{id:"_migrate-2"},"_migrate"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function _migrate(\n  ) internal returns (uint256 migrated)\n")))}u.isMDXComponent=!0},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||c;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);