"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[43340],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>u});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=p(r),u=n,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return r?a.createElement(g,o(o({ref:e},m),{},{components:r})):a.createElement(g,o({ref:e},m))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34617:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={},o="Streamr",l={unversionedId:"integrations/destinations/streamr",id:"integrations/destinations/streamr",title:"Streamr",description:"Features",source:"@site/../docs/integrations/destinations/streamr.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/streamr",permalink:"/integrations/destinations/streamr",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/streamr.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Sqlite",permalink:"/integrations/destinations/sqlite"},next:{title:"TiDB",permalink:"/integrations/destinations/tidb"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output Schema",id:"output-schema",level:2},{value:"Data schema",id:"data-schema",level:2},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:p};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"streamr"},"Streamr"),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured bucket path.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Setting a specific bucket path is equivalent to having separate namespaces.")))),(0,n.kt)("p",null,"The Streamr destination allows you to sync data to Streamr - The decentralized\nreal\u2011time data network."),(0,n.kt)("p",null,"How to use: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/devmate-cloud/streamr-airbyte-connectors"},"https://github.com/devmate-cloud/streamr-airbyte-connectors")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Check out common troubleshooting issues for the Streamr destination connector"),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"privateKey"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"You private key on Streamr")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"streamId"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Your full Stream ID")))),(0,n.kt)("h2",{id:"output-schema"},"Output Schema"),(0,n.kt)("p",null,"All json data is output at Streamr"),(0,n.kt)("h2",{id:"data-schema"},"Data schema"),(0,n.kt)("p",null,"Any json data schema will work"),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/devmate-cloud/streamr-airbyte-connectors/releases/tag/v0.0.1"},"GitHub")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial release.")))))}c.isMDXComponent=!0}}]);