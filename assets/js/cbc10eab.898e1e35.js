"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[59525],{59360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={},i="Recruitee",l={unversionedId:"integrations/sources/recruitee",id:"integrations/sources/recruitee",title:"Recruitee",description:"This page contains the setup guide and reference information for the Recruitee source connector.",source:"@site/../docs/integrations/sources/recruitee.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/recruitee",permalink:"/integrations/sources/recruitee",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/recruitee.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Recreation.gov API",permalink:"/integrations/sources/recreation"},next:{title:"Recurly",permalink:"/integrations/sources/recurly"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up the Recruitee connector in Airbyte",id:"step-1-set-up-the-recruitee-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recruitee"},"Recruitee"),(0,a.kt)("p",null,"This page contains the setup guide and reference information for the ",(0,a.kt)("a",{parentName:"p",href:"https://recruitee.com/"},"Recruitee")," source connector."),(0,a.kt)("p",null,"You can find more information about the Recruitee REST API ",(0,a.kt)("a",{parentName:"p",href:"https://docs.recruitee.com/reference/getting-started"},"here"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You can find your Company ID and find or create an API key within ",(0,a.kt)("a",{parentName:"p",href:"https://docs.recruitee.com/reference/getting-started"},"Recruitee"),"."),(0,a.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,a.kt)("h2",{id:"step-1-set-up-the-recruitee-connector-in-airbyte"},"Step 1: Set up the Recruitee connector in Airbyte"),(0,a.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,a.kt)("strong",{parentName:"li"},"+new source"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Recruitee connector and select ",(0,a.kt)("strong",{parentName:"li"},"Recruitee")," from the Source type dropdown."),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"company_id")," - Recruitee Company ID."),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"api_key")," - Recruitee API key."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,a.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,a.kt)("li",{parentName:"ol"},"Set the name for your source. "),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"company_id")," - Recruitee Company ID."),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"api_key")," - Recruitee API key."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,a.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,a.kt)("p",null,"The Recruitee source connector supports the following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.recruitee.com/reference/candidates-get"},"Candidates")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.recruitee.com/reference/offers-get"},"Offers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.recruitee.com/reference/departments-get"},"Departments"))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-10-30"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18671"},"18671")),(0,a.kt)("td",{parentName:"tr",align:"left"},"New Source: Recruitee")))))}s.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);