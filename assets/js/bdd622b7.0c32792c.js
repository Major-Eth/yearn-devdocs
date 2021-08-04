(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),b=(n(0),n(256)),l={},i={unversionedId:"yearn-api",id:"version-0.4.2/yearn-api",isDocsHomePage:!1,title:"Yearn API",description:"Production Endpoint",source:"@site/versioned_docs/version-0.4.2/yearn-api.md",sourceDirName:".",slug:"/yearn-api",permalink:"/yearn-devdocs/v2/yearn-api",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/yearn-api.md",version:"0.4.2",frontMatter:{},sidebar:"version-0.4.2/mySidebar",previous:{title:"Yearn Stack + FE Features",permalink:"/yearn-devdocs/v2/yearn-sdk/yearn-stack"},next:{title:"Yearn Lens",permalink:"/yearn-devdocs/v2/yearn-lens/yearn-lens"}},d=[{value:"API Schema",id:"api-schema",children:[]}],o={toc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Production Endpoint\n",Object(b.b)("a",{parentName:"p",href:"https://api.yearn.finance/v1/chains/1/vaults/all"},"https://api.yearn.finance/v1/chains/1/vaults/all")),Object(b.b)("h3",{id:"api-schema"},"API Schema"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Field"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"address")),Object(b.b)("td",{parentName:"tr",align:null},"Checksummed address of the vault")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"inception")),Object(b.b)("td",{parentName:"tr",align:null},"The block number a vault was created at")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"symbol")),Object(b.b)("td",{parentName:"tr",align:null},"Vault token symbol (used primarily in metamask)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",{parentName:"tr",align:null},"Vault token name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"display_name")),Object(b.b)("td",{parentName:"tr",align:null},"Vault name as displayed in UI (usually based on underlying symbol)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"icon")),Object(b.b)("td",{parentName:"tr",align:null},"Vault token icon url")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"token")),Object(b.b)("td",{parentName:"tr",align:null},"Underlying vault token metadata")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"token.name")),Object(b.b)("td",{parentName:"tr",align:null},"Underlying token name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"token.symbol")),Object(b.b)("td",{parentName:"tr",align:null},"Underlying token symbol")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"token.address")),Object(b.b)("td",{parentName:"tr",align:null},"Underlying token address")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"token.decimals")),Object(b.b)("td",{parentName:"tr",align:null},"Underlying token decimal amount")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"token.display_name")),Object(b.b)("td",{parentName:"tr",align:null},"Underlying token display name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"token.icon")),Object(b.b)("td",{parentName:"tr",align:null},"Underlying token icon (usually used as vault dispaly icon)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"tvl")),Object(b.b)("td",{parentName:"tr",align:null},"TVL information about a vault")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"tvl.total_assets")),Object(b.b)("td",{parentName:"tr",align:null},"TVL in underlying token denomination")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"tvl.price")),Object(b.b)("td",{parentName:"tr",align:null},"Token price in USD")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"tvl.tvl")),Object(b.b)("td",{parentName:"tr",align:null},"TVL in USD")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy")),Object(b.b)("td",{parentName:"tr",align:null},"Vault APY metadata")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.type")),Object(b.b)("td",{parentName:"tr",align:null},"APY type. Options are ",Object(b.b)("inlineCode",{parentName:"td"},"v2:simple"),", ",Object(b.b)("inlineCode",{parentName:"td"},"v2:averaged"),", ",Object(b.b)("inlineCode",{parentName:"td"},"v1:simple"),", ",Object(b.b)("inlineCode",{parentName:"td"},"crv"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.gross_apr")),Object(b.b)("td",{parentName:"tr",align:null},"Uncompounded gross APR before fees")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.net_apy")),Object(b.b)("td",{parentName:"tr",align:null},"Net APY (compounded) after fees. This is what the UI shows")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.fees")),Object(b.b)("td",{parentName:"tr",align:null},"Fee structure breakdown for a vault")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.fees.performance")),Object(b.b)("td",{parentName:"tr",align:null},"Performance fee in bips")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.fees.withdrawal")),Object(b.b)("td",{parentName:"tr",align:null},"Withdrawal fee in bips")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.fees.management")),Object(b.b)("td",{parentName:"tr",align:null},"Management fee in bips")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.fees.keep_crv")),Object(b.b)("td",{parentName:"tr",align:null},"Amount of CRV to keep upon harvest for curve vaults in bips")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.fees.cvx_keep_crv")),Object(b.b)("td",{parentName:"tr",align:null},"Amount of CRV to keep upon harvest for curve convex vaults in bips")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.points")),Object(b.b)("td",{parentName:"tr",align:null},"APY samples for various timeframes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.points.week_ago")),Object(b.b)("td",{parentName:"tr",align:null},"APY calculated from one week sample of pricePerShare")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.points.month_ago")),Object(b.b)("td",{parentName:"tr",align:null},"APY calculated from one month sample of pricePerShare")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.points.month_ago")),Object(b.b)("td",{parentName:"tr",align:null},"APY calculated from inception block sample of pricePerShare")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.composite")),Object(b.b)("td",{parentName:"tr",align:null},"Complex APY breakdown (for curve vaults)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.composite.boost")),Object(b.b)("td",{parentName:"tr",align:null},"Current boost of the strategies")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.composite.pool_apy")),Object(b.b)("td",{parentName:"tr",align:null},"APY of the Curve LP position")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.composite.base_apr")),Object(b.b)("td",{parentName:"tr",align:null},"Base APR of Curve emissions")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.composite.boosted_apr")),Object(b.b)("td",{parentName:"tr",align:null},"Boosted APR of Curve emissions")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.composite.cvx_apr")),Object(b.b)("td",{parentName:"tr",align:null},"APR of Convex rewards")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"apy.composite.rewards_apr")),Object(b.b)("td",{parentName:"tr",align:null},"APR of additional pool rewards")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"strategies")),Object(b.b)("td",{parentName:"tr",align:null},"A list of active vault strategies")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"strategies[idx].address")),Object(b.b)("td",{parentName:"tr",align:null},"Address of an active strategy")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"strategies[idx].name")),Object(b.b)("td",{parentName:"tr",align:null},"Name of an active strategy")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"endorsed")),Object(b.b)("td",{parentName:"tr",align:null},"True if the vault is an endorsed production vault. Do not show the vault if it's not endorsed")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"version")),Object(b.b)("td",{parentName:"tr",align:null},"API version of the vault")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"decimals")),Object(b.b)("td",{parentName:"tr",align:null},"Number of decimals for the vault token")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",{parentName:"tr",align:null},"High level vault classification. Valid options are v1 and v2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"emergency_shutdown")),Object(b.b)("td",{parentName:"tr",align:null},"If true the vault is in shut down mode and no new deposits should be accepted")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"updated")),Object(b.b)("td",{parentName:"tr",align:null},"Unix timestamp of the last vault update")))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"")))}p.isMDXComponent=!0},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,O=c["".concat(l,".").concat(u)]||c[u]||m[u]||b;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);