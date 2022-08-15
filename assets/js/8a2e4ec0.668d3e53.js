"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Step 6: Testing",c={unversionedId:"connector-development/config-based/tutorial/testing",id:"connector-development/config-based/tutorial/testing",title:"Step 6: Testing",description:"We should make sure the connector respects the Airbyte specifications before we start using it in production.",source:"@site/../docs/connector-development/config-based/tutorial/6-testing.md",sourceDirName:"connector-development/config-based/tutorial",slug:"/connector-development/config-based/tutorial/testing",permalink:"/connector-development/config-based/tutorial/testing",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/tutorial/6-testing.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{}},s={},l=[{value:"Next steps:",id:"next-steps",level:2},{value:"Read more:",id:"read-more",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-6-testing"},"Step 6: Testing"),(0,o.kt)("p",null,"We should make sure the connector respects the Airbyte specifications before we start using it in production.\nThis can be done by executing the Source Acceptance Tests (SAT)."),(0,o.kt)("p",null,"These tests will assert the most basic functionalities work as expected and are configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"acceptance-test-config.yml"),"."),(0,o.kt)("p",null,"Before running the tests, we'll create an invalid config to make sure the ",(0,o.kt)("inlineCode",{parentName:"p"},"check")," operation fails if the credentials are wrong, and an abnormal state to verify the connector's behavior when running with an abnormal state."),(0,o.kt)("p",null,"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"integration_tests/invalid_config.json")," with this content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_key": "<invalid_key>",\n  "start_date": "2022-07-21",\n  "base": "USD"\n}\n')),(0,o.kt)("p",null,"and ",(0,o.kt)("inlineCode",{parentName:"p"},"integration_tests/abnormal_state.json")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rates": {\n    "date": "2999-12-31"\n  }\n}\n\n')),(0,o.kt)("p",null,"You can run the acceptance tests with the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker build . -t airbyte/source-exchange-rates-tutorial:dev\n$ python -m pytest integration_tests -p integration_tests.acceptance\n")),(0,o.kt)("h2",{id:"next-steps"},"Next steps:"),(0,o.kt)("p",null,"Next, we'll add the connector to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte"},"Airbyte platform"),"."),(0,o.kt)("p",null,"See your ",(0,o.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/"},"Contributiong guide")," on how to get started releasing your connector."),(0,o.kt)("h2",{id:"read-more"},"Read more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/connector-development/config-based/error-handling"},"Error handling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/connector-development/config-based/pagination"},"Pagination")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/connector-development/testing-connectors/"},"Testing connectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contributing-to-airbyte/"},"Contribution guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-greenhouse"},"Greenhouse source")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-sendgrid"},"Sendgrid source")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-sentry"},"Sentry source"))))}u.isMDXComponent=!0}}]);