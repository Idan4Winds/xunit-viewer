(this["webpackJsonpxunit-viewer"]=this["webpackJsonpxunit-viewer"]||[]).push([[0],{101:function(e,t){},103:function(e,t){},112:function(e,t){},114:function(e,t){},119:function(e,t,s){"use strict";s.r(t);var i=s(2),n=s(67),c=s.n(n),a=(s(76),s(77),s(79),s(4)),r=s(3),o=(s(68),s(80),s(81),s(0)),l=function(){return Object(o.jsxs)("svg",{className:"logo",width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("rect",{width:"64",height:"64",fill:"#2C3E50"}),Object(o.jsx)("path",{d:"M19.0625 28.9688L24.5156 20.25H28.0469L20.8594 31.5312L28.2188 43H24.6562L19.0625 34.125L13.4375 43H9.89062L17.2656 31.5312L10.0625 20.25H13.5781L19.0625 28.9688Z",fill:"#0DBF1F"}),Object(o.jsx)("path",{d:"M42.4344 39.0156L48.9344 20.25H52.2156L43.7781 43H41.1219L32.7 20.25H35.9656L42.4344 39.0156Z",fill:"#B32010"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 64L4 60V4H60L64 0H4H0V4V64Z",fill:"#0DBF1F"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 64H60H64V60V0L60 4V60H4L0 64Z",fill:"#B32010"})]})},u=function(){return Object(o.jsx)("i",{className:"fas fa-filter"})},d=function(e){var t=e.active,s=e.onClick,i=e.title,n=e.brand;return Object(o.jsx)("section",{className:"hero is-black",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"columns is-mobile",children:[Object(o.jsx)("div",{className:"column is-1",children:Object(o.jsx)("button",{className:"filter button has-text-white",onClick:s,children:Object(o.jsxs)("span",{children:[Object(o.jsx)(u,{})," ",t?"CLOSE":"FILTER"]})})}),Object(o.jsx)("div",{className:"column is-11",children:Object(o.jsxs)("div",{className:"hero-center",children:[null!==n?Object(o.jsx)("img",{className:"brand",alt:i,src:n}):Object(o.jsx)(l,{}),Object(o.jsx)("h1",{className:"title",children:i})]})})]})})})},p=s(69),j=s(16),b=s.n(j),f=s(70),v=s(24),O=s(12),h=s.n(O);s(84);var x=window.parse,m=function(){var e=Object(v.a)(b.a.mark((function e(t,s,i){var n,c,a,r,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(f.a)(s),e.prev=1,n.s();case 3:if((c=n.n()).done){e.next=17;break}return a=c.value,r=a.file,o=a.contents,e.prev=5,e.next=8,x(o);case 8:l=e.sent,i=h.a.recursive(!0,i,l),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log("Failed to parse",r,"\n",e.t0.message);case 15:e.next=3;break;case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),n.e(e.t1);case 22:return e.prev=22,n.f(),e.finish(22);case 25:t({type:"parse-suites",payload:{suites:i.suites}});case 26:case"end":return e.stop()}}),e,null,[[1,19,22,25],[5,12]])})));return function(t,s,i){return e.apply(this,arguments)}}(),g=function(e){var t=e.active,s=e.onIcon,i=e.offIcon,n=e.onLabel,c=e.offLabel,a=e.disabled,r=void 0!==a&&a,l=e.onChange,u=void 0===l?function(){}:l,d=e.className,p=void 0===d?"":d;return Object(o.jsxs)("button",{onClick:function(){u(!t)},disabled:r,className:"button toggle is-".concat(t?"active":"inactive"," ").concat(p),children:[Object(o.jsx)("div",{className:"toggle-rail",children:Object(o.jsx)("div",{className:"toggle-handle"})}),t?s:i,Object(o.jsx)("span",{children:t?n:c})]})},y=function(e){var t=e.label,s=e.dispatch;return Object(o.jsx)("div",{className:"field options-search",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{onChange:function(e){s({type:"search-properties",payload:{value:e.target.value}})},className:"input",type:"text",placeholder:t})})})},N=function(e){var t=e.count,s=e.total;return Object(o.jsxs)("div",{className:"options-total",children:[Object(o.jsx)("b",{children:t}),Object(o.jsxs)("span",{children:["/",s]})]})},w=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-eye"})})},k=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-eye-slash"})})},E=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-chevron-up"})})},S=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-chevron-down"})})},T=function(e){var t=e.type,s=e.label,i=e.propertiesVisible,n=e.propertiesExpanded,c=e.dispatch;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"properties-options-toggle-label",children:Object(o.jsx)("span",{children:s})}),Object(o.jsx)(g,{className:"properties-options-toggle",active:i[t],onChange:function(){c({type:"toggle-properties-visbility",payload:{type:t,active:!i[t]}})},onLabel:"Visible",offLabel:"Hidden",onIcon:Object(o.jsx)(w,{}),offIcon:Object(o.jsx)(k,{})}),Object(o.jsx)(g,{onChange:function(){c({type:"toggle-all-properties",payload:{type:t,active:!n[t]}})},className:"properties-options-toggle",active:n[t],onLabel:"Expanded",offLabel:"Contracted",offIcon:Object(o.jsx)(E,{}),onIcon:Object(o.jsx)(S,{})})]})},L=function(e){var t=e.count,s=void 0===t?0:t,i=e.total,n=void 0===i?0:i,c=e.active,a=void 0!==c&&c,r=e.dispatch,l=e.propertiesExpanded,u=void 0===l?{all:!0,suites:!0,tests:!0}:l,d=e.propertiesVisible,p=void 0===d?{all:!0,suites:!0,tests:!0}:d;return Object(o.jsxs)("div",{className:"options card ".concat(a?"is-active":"is-inactive"),children:[Object(o.jsxs)("header",{className:"card-header",children:[Object(o.jsx)(y,{label:"Properties",dispatch:r}),Object(o.jsxs)("button",{onClick:function(){return r({type:"toggle-properties-options"})},className:"button card-header-icon",children:[Object(o.jsx)("div",{className:"options-inputs",children:Object(o.jsx)(N,{count:s,total:n})}),Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-angle-down"})})]})]}),Object(o.jsx)("div",{className:"card-content",children:a?Object(o.jsxs)("div",{children:[Object(o.jsx)(T,{type:"all",label:"All",propertiesVisible:p,propertiesExpanded:u,dispatch:r}),Object(o.jsx)(T,{type:"suites",label:"Suites",propertiesVisible:p,propertiesExpanded:u,dispatch:r}),Object(o.jsx)(T,{type:"tests",label:"Tests",propertiesVisible:p,propertiesExpanded:u,dispatch:r})]}):null})]})},_=s(17),C=s.n(_),A=function(e,t,s,i,n){return s[i]=e[i],s[i][t.type]=t.active,"all"===t.type&&(s[i].suites=t.active,s[i].tests=t.active),"all"!==t.type&&"suites"!==t.type||Object.values(s.currentSuites).forEach((function(e){e.properties[n]=t.active})),"all"!==t.type&&"tests"!==t.type||Object.values(s.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){"properties"in e&&(e.properties[n]=t.active)}))})),s},I=function(e,t){var s=t.type,i=t.payload,n={};return n.currentSuites=e.currentSuites,"parse-suites"===s?((e=h.a.recursive(!0,{},e)).suites=i.suites,e.currentSuites=i.suites,Object.values(e.currentSuites).forEach((function(e){(Object.keys(e.tests).length>0||Object.keys(e.properties).length>0)&&(e.active=!0)})),e):("search-suites"===s&&(Object.values(e.suites).forEach((function(t){var s=t.name,c=t.id;C.a.test(i.value.toLowerCase(),s.toLowerCase())?(n.currentSuites[c]=n.currentSuites[c]||h.a.recursive(!0,{},e.suites[c]),"active"in n.currentSuites[c]||(n.currentSuites[c].active=!0)):delete n.currentSuites[c]})),n.suitesExpanded=Object.values(n.currentSuites).some((function(e){return!0===e.active}))),"search-tests"===s&&Object.values(e.suites).forEach((function(t){Object.values(t.tests).forEach((function(s){C.a.test(i.value.toLowerCase(),s.name.toLowerCase())||s.messages.some((function(e){return C.a.test(i.value.toLowerCase(),e.toLowerCase())}))?t.id in n.currentSuites&&!(s.id in n.currentSuites[t.id].tests)&&n.currentSuites[t.id]&&(n.currentSuites[t.id].tests[s.id]=h.a.recursive(!0,{},e.suites[t.id].tests[s.id]),n.currentSuites[t.id].tests[s.id].active=!0,n.currentSuites[t.id].tests[s.id].visible=!0,n.currentSuites[t.id].tests[s.id].raw=!0):n.currentSuites[t.id]&&delete n.currentSuites[t.id].tests[s.id]}))})),"search-properties"===s&&(Object.values(e.suites).forEach((function(t){Object.entries(t.properties).filter((function(e){var t=Object(r.a)(e,1)[0];return"_visible"!==t&&"_active"!==t})).forEach((function(s){var c=Object(r.a)(s,2),a=c[0],o=c[1];o=o||[],C.a.test(i.value.toLowerCase(),a.toLowerCase())||o.some((function(e){return C.a.test(i.value.toLowerCase(),e.toLowerCase())}))?t.id in n.currentSuites&&!(a in n.currentSuites[t.id].properties)&&n.currentSuites[t.id]&&(n.currentSuites[t.id].properties[a]=[].concat(e.suites[t.id].properties[a]),n.currentSuites[t.id].properties._active=!0,n.currentSuites[t.id].properties._visible=!0,n.propertiesExpanded=!1):delete n.currentSuites[t.id].properties[a]}))})),n.propertiesExpanded=Object.values(n.currentSuites).some((function(e){return e.properties._active||!1})),n.propertiesVisible=Object.values(n.currentSuites).some((function(e){return e.properties._visible||!1}))),"toggle-all-suites"===s&&(n.suitesExpanded=!e.suitesExpanded,Object.values(n.currentSuites).forEach((function(e){e.active=n.suitesExpanded}))),"toggle-empty-suites"===s&&(n.suitesEmpty=!e.suitesEmpty),"toggle-menu"===s&&(n.menuActive=!e.menuActive),"toggle-suite-options"===s&&(n.suiteOptionsActive=!e.suiteOptionsActive),"toggle-test-options"===s&&(n.testOptionsActive=!e.testOptionsActive),"toggle-properties-options"===s&&(n.propertiesOptionsActive=!e.propertiesOptionsActive),"toggle-files"===s&&(n.activeFiles=!e.activeFiles),"toggle-suite"===s&&(n.currentSuites[i.id].active=i.active,n.suitesExpanded=Object.values(n.currentSuites).some((function(e){return!0===e.active}))),"toggle-properties"===s&&("undefined"!==typeof i.test&&null!==i.test?n.currentSuites[i.suite].tests[i.test].properties._active=i.active:(n.currentSuites[i.suite].properties._active=i.active,n.propertiesExpanded=Object.values(n.currentSuites).some((function(e){return e.properties._active||!1})))),"toggle-all-properties"===s&&(n=A(e,i,n,"propertiesExpanded","_active")),"toggle-properties-visbility"===s&&(n=A(e,i,n,"propertiesVisible","_visible")),"toggle-test"===s&&(n.currentSuites[i.suite].tests[i.id].active=i.active),"toggle-test-mode"===s&&(n.currentSuites[i.suite].tests[i.id].raw=i.raw),"toggle-test-visibility"===s&&(n.testToggles=e.testToggles,n.testToggles[i.status].visible=i.active,Object.values(n.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){("all"===i.status||i.status===e.status||"undefined"===typeof e.status&&"unknown"===i.status)&&(e.visible=i.active)}))})),"all"===i.status?(n.testToggles.passed.visible=i.active,n.testToggles.failure.visible=i.active,n.testToggles.error.visible=i.active,n.testToggles.skipped.visible=i.active,n.testToggles.unknown.visible=i.active):(n.testToggles.passed.visible||n.testToggles.failure.visible||n.testToggles.error.visible||n.testToggles.skipped.visible||n.testToggles.unknown.visible)&&(n.testToggles.all.visible=!0)),"toggle-test-expanded"===s&&(n.testToggles=e.testToggles,n.testToggles[i.status].expanded=i.active,Object.values(n.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){("all"===i.status||i.status===e.status||"undefined"===typeof e.status&&"unknown"===i.status)&&(e.active=i.active)}))})),"all"===i.status?(n.testToggles.passed.expanded=i.active,n.testToggles.failure.expanded=i.active,n.testToggles.error.expanded=i.active,n.testToggles.skipped.expanded=i.active,n.testToggles.unknown.expanded=i.active):(n.testToggles.passed.expanded||n.testToggles.failure.expanded||n.testToggles.error.expanded||n.testToggles.skipped.expanded||n.testToggles.unknown.expanded)&&(n.testToggles.all.expanded=!0)),"toggle-test-raw"===s&&(n.testToggles=e.testToggles,n.testToggles[i.status].raw=i.active,Object.values(n.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){("all"===i.status||i.status===e.status||"undefined"===typeof e.status&&"unknown"===i.status)&&(e.raw=i.active)}))})),"all"===i.status?(n.testToggles.passed.raw=i.active,n.testToggles.failure.raw=i.active,n.testToggles.error.raw=i.active,n.testToggles.skipped.raw=i.active,n.testToggles.unknown.raw=i.active):(n.testToggles.passed.raw||n.testToggles.failure.raw||n.testToggles.error.raw||n.testToggles.skipped.raw||n.testToggles.unknown.raw)&&(n.testToggles.all.raw=!0)),e=h.a.recursive(!0,e,n),Object.values(e.currentSuites).forEach((function(t){e.suitesEmpty?t._visible=Object.keys(t.tests).length>0&&Object.values(t.tests).filter((function(e){return e.visible})).length>0||t.properties._visible&&Object.keys(t.properties).filter((function(e){return"_visible"!==e})).length>0:t._visible=!0})),e)},V={passed:"check",failure:"times",error:"exclamation",skipped:"ban",unknown:"question"},H=["failure","error","passed","skipped","unknown"],F=function(e){var t=e.properties,s=e.active,i=void 0===s||s,n=e.dispatch,c=e.suite,a=e.test,r=void 0===a?null:a;return Object(o.jsxs)("div",{className:"properties card is-".concat(i?"active":"inactive"),children:[Object(o.jsxs)("button",{className:"card-header",onClick:function(){n({type:"toggle-properties",payload:{suite:c,test:r,active:!i}})},children:[Object(o.jsx)("p",{className:"card-header-title",children:"Properties"}),Object(o.jsx)("span",{className:"card-header-icon",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-angle-down"})})})]}),i?Object(o.jsx)("div",{className:"card-content",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Property"}),Object(o.jsx)("th",{children:"Value"})]})}),Object(o.jsx)("tbody",{children:Object.keys(t).filter((function(e){return"_active"!==e&&"_visible"!==e})).map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e}),Object(o.jsx)("td",{children:t[e].join(", ")})]},e)}))})]})}):null]})},$=function(e){var t=e.messages;return Object(o.jsx)("div",{className:"raw-content",children:t.map((function(e,t){return Object(o.jsx)("pre",{children:e},"test-message-".concat(t))}))})},B=function(e){var t=e.messages;return Object(o.jsx)("div",{className:"pretty-content",children:t.map((function(e,t){return Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:e}},"test-message-".concat(t))}))})},R=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-star"})})},P=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-code"})})},M=function(e){var t=e.id,s=e.messages,i=e.status,n=e.time,c=e.classname,a=e.name,r=e.properties,l=void 0===r?{}:r,u=e.active,d=void 0===u||u,p=e.raw,j=void 0===p||p,b=e.dispatch,f=e.suite,v=l._visible&Object.keys(l).filter((function(e){return"_active"!==e&&"_visible"!==e})).length>0,O=s.length>0;return Object(o.jsxs)("div",{className:"test card is-".concat(d?"active":"inactive"," is-").concat(i," is-").concat(O||v?"populated":"empty"),children:[Object(o.jsxs)("button",{className:"card-header",onClick:function(){b({type:"toggle-test",payload:{suite:f,id:t,active:!d}})},disabled:!O&&!v,children:[Object(o.jsxs)("p",{className:"card-header-title",children:[Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-".concat(V[i]||V.unknown),"aria-hidden":"true"})}),Object(o.jsx)("span",{children:a}),c?Object(o.jsxs)("small",{children:["classname = ",c]}):null,n?Object(o.jsxs)("small",{children:["time = ",n]}):null]}),O||v?Object(o.jsx)("span",{className:"card-header-icon",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-angle-down"})})}):null]}),Object(o.jsx)("div",{className:"content",children:d&&(O||v)?Object(o.jsxs)("div",{className:"card-content",children:[v?Object(o.jsx)(F,{properties:l,suite:f,test:t,dispatch:b,active:l._active}):null,O?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{active:j,onLabel:"raw",onIcon:Object(o.jsx)(P,{}),offIcon:Object(o.jsx)(R,{}),offLabel:"pretty",onChange:function(){return b({type:"toggle-test-mode",payload:{suite:f,id:t,raw:!j}})}}),j?Object(o.jsx)($,{messages:s}):Object(o.jsx)(B,{messages:s})]}):null]}):null})]})},Z=function(e){var t=e.count,s=e.type;return t>0?Object(o.jsxs)("span",{className:"suite-count",children:[Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-".concat(V[s]),"aria-hidden":"true"})}),t]}):null},J=function(e){var t=e.visible,s=e.id,i=e.name,n=e.active,c=void 0!==n&&n,l=e.properties,u=void 0===l?{}:l,d=e.time,p=e.tests,j=void 0===p?{}:p,b=e.dispatch,f=e.systemOut,v=void 0===f?[]:f,O=0,h=0,x=0,m=0,g=0;Object.keys(j).forEach((function(e){var t=j[e].status;"passed"===t?O+=1:"failure"===t?h+=1:"skipped"===t?x+=1:"error"===t?m+=1:g+=1}));var y=Object.keys(j).length>0&&Object.values(j).some((function(e){return e.visible})),N="_visible"in u&&u._visible&&Object.keys(u).filter((function(e){return"_active"!==e&&"_visible"!==e})).length>0,w=y||N;return Object(o.jsxs)("div",{className:"card suite is-".concat(c?"active":"inactive"," is-").concat(w?"populated":"empty"," is-").concat(t?"visible":"hidden"),children:[Object(o.jsxs)("button",{className:"card-header",onClick:function(){w&&b({type:"toggle-suite",payload:{id:s,active:!c}})},disabled:!w,children:[Object(o.jsxs)("p",{className:"card-header-title",children:[Object(o.jsx)("span",{children:i}),d?Object(o.jsxs)("small",{children:["time = ",d]}):null]}),w?Object(o.jsx)("span",{className:"card-header-icon",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-angle-down"})})}):null,w?Object(o.jsxs)("p",{className:"suite-count-container",children:[Object(o.jsx)(Z,{type:"failure",count:h}),Object(o.jsx)(Z,{type:"error",count:m}),Object(o.jsx)(Z,{type:"passed",count:O}),Object(o.jsx)(Z,{type:"skipped",count:x}),Object(o.jsx)(Z,{type:"unknown",count:g})]}):null]}),c&&w?Object(o.jsx)("div",{className:"card-content",children:Object(o.jsxs)("div",{className:"content",children:[v.length>0?v.map((function(e,t){return Object(o.jsx)("pre",{children:e},"".concat(s,"-sysout-").concat(t))})):null,N?Object(o.jsx)(F,{properties:u,suite:s,dispatch:b,active:u._active}):null,Object(o.jsx)("div",{children:Object.entries(j).filter((function(e){var t=Object(r.a)(e,2);t[0];return t[1].visible})).sort((function(e,t){var s=H.indexOf(e[1].status),i=H.indexOf(t[1].status);if((s=-1===s?H.length:s)<(i=-1===i?H.length:i))return-2;if(s>i)return 2;var n=e[1].name,c=t[1].name;return n<c?-1:n>c?1:0})).map((function(e){var t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(o.jsx)(M,Object(a.a)(Object(a.a)({},n),{},{suite:s,dispatch:b}),i)}))})]})}):null]})},q=function(e){var t=e.label,s=e.dispatch;return Object(o.jsx)("div",{className:"field options-search",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{onChange:function(e){s({type:"search-suites",payload:{value:e.target.value}})},className:"input",type:"text",placeholder:t})})})},D=function(e){var t=e.count,s=e.total;return Object(o.jsxs)("div",{className:"options-total",children:[Object(o.jsx)("b",{children:t}),Object(o.jsxs)("span",{children:["/",s]})]})},U=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-chevron-up"})})},X=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-chevron-down"})})},z=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye-slash"})})},G=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye"})})},K=function(e){var t=e.suitesExpanded,s=void 0===t||t,i=e.suitesEmpty,n=void 0===i||i,c=e.count,a=void 0===c?0:c,r=e.total,l=void 0===r?0:r,u=e.dispatch,d=e.active,p=void 0!==d&&d;return Object(o.jsxs)("div",{className:"options card ".concat(p?"is-active":"is-inactive"),children:[Object(o.jsxs)("header",{className:"card-header",children:[Object(o.jsx)(q,{label:"Suites",dispatch:u}),Object(o.jsxs)("button",{onClick:function(){return u({type:"toggle-suite-options"})},className:"button card-header-icon",children:[Object(o.jsx)("div",{className:"options-inputs",children:Object(o.jsx)(D,{count:a,total:l})}),Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-angle-down"})})]})]}),Object(o.jsx)("div",{className:"card-content options-toggles",children:p?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{onChange:function(){return u({type:"toggle-all-suites"})},active:s,onLabel:"Expanded",offLabel:"Contracted",offIcon:Object(o.jsx)(U,{}),onIcon:Object(o.jsx)(X,{})}),Object(o.jsx)(g,{onChange:function(){return u({type:"toggle-empty-suites"})},active:n,onLabel:"Empty hidden",offLabel:"Empty shown",onIcon:Object(o.jsx)(z,{}),offIcon:Object(o.jsx)(G,{})})]}):null})]})},Q={passed:"check",failure:"times",error:"exclamation",skipped:"ban",unknown:"question"},W=function(e){var t=e.label,s=e.dispatch;e.suite,e.id;return Object(o.jsx)("div",{className:"field options-search",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{onChange:function(e){s({type:"search-tests",payload:{value:e.target.value}})},className:"input",type:"text",placeholder:t})})})},Y=function(e){var t=e.count,s=e.total,i=e.icon;return Object(o.jsxs)("div",{className:"options-total",children:[i?Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-".concat(Q[i]||Q.unknown),"aria-hidden":"true"})}):null,Object(o.jsx)("b",{children:t}),Object(o.jsxs)("span",{children:["/",s]})]})},ee=function(e,t,s){return(e[t]||{})[s]||0},te=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-eye"})})})},se=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-eye-slash"})})})},ie=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-star"})})},ne=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-code"})})},ce=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-chevron-up"})})},ae=function(){return Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-chevron-down"})})},re=function(e){var t=e.testCounts,s=e.status;return ee(t,s,"total")>0?Object(o.jsx)(Y,{count:ee(t,s,"count"),total:ee(t,s,"total"),icon:s}):null},oe=function(e){var t=e.status,s=e.label,i=e.dispatch,n=e.visible,c=void 0===n||n,a=e.expanded,r=void 0===a||a,l=e.raw,u=void 0===l||l;return Object(o.jsxs)("div",{className:"test-options-toggle-row",children:[Object(o.jsxs)("div",{className:"test-options-toggle-row-label",children:["all"!==t?Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-".concat(Q[t]||Q.unknown),"aria-hidden":"true"})}):Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-circle","aria-hidden":"true"})}),Object(o.jsx)("span",{children:s})]}),Object(o.jsx)(g,{onChange:function(){i({type:"toggle-test-visibility",payload:{status:t,active:!c}})},active:c,onLabel:"Visible",offLabel:"Hidden",onIcon:Object(o.jsx)(te,{}),offIcon:Object(o.jsx)(se,{})}),Object(o.jsx)(g,{onChange:function(){i({type:"toggle-test-expanded",payload:{status:t,active:!r}})},active:r,onLabel:"Expanded",offLabel:"Contracted",onIcon:Object(o.jsx)(ae,{}),offIcon:Object(o.jsx)(ce,{})}),Object(o.jsx)(g,{onChange:function(){i({type:"toggle-test-raw",payload:{status:t,active:!u}})},active:u,onLabel:"Raw",offLabel:"Pretty",onIcon:Object(o.jsx)(ne,{}),offIcon:Object(o.jsx)(ie,{})})]})},le=function(e){var t=e.testCounts,s=void 0===t?{}:t,i=e.testToggles,n=void 0===i?{}:i,c=e.count,r=void 0===c?0:c,l=e.total,u=void 0===l?0:l,d=e.dispatch,p=e.active,j=void 0!==p&&p;return Object(o.jsxs)("div",{className:"options card ".concat(j?"is-active":"is-inactive"),children:[Object(o.jsxs)("header",{className:"card-header",children:[Object(o.jsx)(W,{label:"Tests",dispatch:d}),Object(o.jsxs)("button",{onClick:function(){return d({type:"toggle-test-options"})},className:"button card-header-icon",children:[Object(o.jsxs)("div",{className:"options-inputs",children:[Object(o.jsx)(Y,{count:r,total:u}),Object(o.jsx)(re,{testCounts:s,status:"passed"}),Object(o.jsx)(re,{testCounts:s,status:"failure"}),Object(o.jsx)(re,{testCounts:s,status:"error"}),Object(o.jsx)(re,{testCounts:s,status:"skipped"}),Object(o.jsx)(re,{testCounts:s,status:"unknown"})]}),Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-angle-down"})})]})]}),Object(o.jsx)("div",{className:"card-content options-toggles",children:j?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(oe,Object(a.a)({status:"all",label:"All",dispatch:d},n.all)),Object(o.jsx)(oe,Object(a.a)({status:"passed",label:"Passed",dispatch:d},n.passed)),Object(o.jsx)(oe,Object(a.a)({status:"failure",label:"Failure",dispatch:d},n.failure)),Object(o.jsx)(oe,Object(a.a)({status:"error",label:"Error",dispatch:d},n.error)),Object(o.jsx)(oe,Object(a.a)({status:"skipped",label:"Skipped",dispatch:d},n.skipped)),Object(o.jsx)(oe,Object(a.a)({status:"unknown",label:"Unknown",dispatch:d},n.unknown))]}):null})]})},ue=function(e){var t=e.files,s=e.title,n=e.brand,c=Object(i.useReducer)(I,p),l=Object(r.a)(c,2),u=l[0],j=l[1];0===Object.keys(u.suites).length&&m(j,t,{});var b=0,f=0;Object.entries(u.currentSuites).forEach((function(e){var t=Object(r.a)(e,2),s=(t[0],t[1]);b+=Object.keys(s.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length,Object.values(s.tests).forEach((function(e){e.properties&&(b+=Object.keys(e.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length)}))})),Object.entries(u.currentSuites).forEach((function(e){var t=Object(r.a)(e,2),s=(t[0],t[1]);f+=Object.keys(s.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length,Object.values(s.tests).forEach((function(e){e.properties&&(f+=Object.keys(e.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length)}))}));var v={},O=0,h=0;Object.entries(u.currentSuites).forEach((function(e){var t=Object(r.a)(e,2),s=(t[0],t[1]);Object.entries(s.tests).forEach((function(e){var t=Object(r.a)(e,2),s=(t[0],t[1].status||"unknown");v[s]=v[s]||{},v[s].count=v[s].count||0,v[s].total=v[s].total||0,v[s].count+=1,v[s].total+=1,h+=1,O+=1}))}));var x=function(e){var t=e.files;m(j,t,{})};return window.sockets=window.sockets||null,Object(i.useEffect)((function(){null===window.sockets&&"io"in window&&(window.sockets=window.io(),window.sockets.on("update",x))})),Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{active:u.menuActive,onClick:function(){j({type:"toggle-menu"})},title:s,brand:n}),Object(o.jsx)("header",{className:"is-".concat(u.menuActive?"shown":"hidden"),children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(K,{active:u.suiteOptionsActive,suitesExpanded:u.suitesExpanded,suitesEmpty:u.suitesEmpty,dispatch:j,count:Object.keys(u.currentSuites).length,total:Object.keys(u.suites).length}),Object(o.jsx)(le,{active:u.testOptionsActive,testToggles:u.testToggles,testCounts:v,count:O,total:h,dispatch:j}),Object(o.jsx)(L,{propertiesExpanded:u.propertiesExpanded,propertiesVisible:u.propertiesVisible,active:u.propertiesOptionsActive,count:b,total:f,dispatch:j}),null]})}),Object(o.jsx)("main",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{children:Object.values(u.currentSuites).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).map((function(e){return Object(o.jsx)(J,Object(a.a)(Object(a.a)({},e),{},{visible:e._visible,dispatch:j}),e.id)}))})})})]})},de=s(71),pe=s.n(de),je=window.files||[],be=window.title||"Xunit Viewer",fe=window.brand||null;je=je.map((function(e){var t=e.file,s=e.contents;return{file:t,contents:pe.a.decompress(s,{inputEncoding:"Base64"})}})),c.a.render(Object(o.jsx)(ue,{files:je,title:be,brand:fe}),document.getElementById("root"))},69:function(e){e.exports=JSON.parse('{"suites":{},"currentSuites":{},"menuActive":false,"suiteOptionsActive":false,"testOptionsActive":false,"propertiesOptionsActive":false,"activeFiles":false,"suitesExpanded":true,"suitesEmpty":true,"propertiesExpanded":{"all":true,"suites":true,"tests":true},"propertiesVisible":{"all":true,"suites":true,"tests":true},"testToggles":{"all":{"visible":true,"expanded":true,"raw":true},"passed":{"visible":true,"expanded":true,"raw":true},"failure":{"visible":true,"expanded":true,"raw":true},"error":{"visible":true,"expanded":true,"raw":true},"skipped":{"visible":true,"expanded":true,"raw":true},"unknown":{"visible":true,"expanded":true,"raw":true}}}')},79:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t),function(e){var t=s(16),i=s.n(t),n=s(24),c=s(3),a=s(86),r=["failure","error","passed","skipped","unknown"],o=function(e){return new Promise((function(t,s){a.parseString(e,(function(e,i){e?s(new Error(e)):t(i)}))}))},l=function(e){var t=0;if(0===e.length)return t;for(var s=0;s<e.length;s++){t=(t<<5)-t+e.charCodeAt(s),t&=t}return t},u=function(e,t){e.properties=e.properties||{},e.properties._visible=!0,t.forEach((function(t){"string"===typeof t?""!==(t=t.trim())&&(e.properties["No Name"]=e.properties["No Name"]||[],e.properties["No Name"].push(t)):t.property.forEach((function(t){var s=t.$||{},i=s.name||"No Name",n=s.value||t._;"string"===typeof t&&(n=t),n=(n=n||"").trim(),e.properties[i]=e.properties[i]||[],n&&e.properties[i].push(n)}))}))},d=function e(t,s,i){s.tests=s.tests||{},i.forEach((function(i){var n=i.$||{},a=n.name||"No Name",o=n.classname||n.class||"",d=n.time||0,j=l(a+o),b=s.tests[j]||{id:j,name:a,messages:[],visible:!0};b.time=d,b.classname=o,"string"===typeof i&&b.messages.push(i.trim()),i._&&b.messages.push(i._.trim()),n.message&&b.messages.push(i.$.message.trim()),"undefined"!==typeof i.properties&&(u(b,i.properties),delete i.properties);var f=Object.assign({},n);if(delete f.time,delete f.name,delete f.classname,delete f.class,delete f.message,Object.keys(f).length>0){for(var v=[],O=0,h=Object.entries(f);O<h.length;O++){var x=Object(c.a)(h[O],2),m=x[0],g=x[1];v.push({$:{name:m,value:g}})}u(b,[{property:v}])}if("string"!==typeof i){var y=Object.keys(i).filter((function(e){return"$"!==e&&"_"!==e&&"testcase"!==e})).sort((function(e,t){var s=r.indexOf(e),i=r.indexOf(t);return(s=-1===s?r.length:s)<(i=-1===i?r.length:i)?-1:s>i?1:0})),N=y[0];y.forEach((function(e){e&&function(e,t){t.forEach((function(t){var s="string"===typeof t._,i="undefined"!==typeof t.$&&"message"in t.$,n="undefined"!==typeof t.$&&"type"in t.$,c="string"===typeof t;s&&e.messages.push(t._.trim()),i&&e.messages.push(t.$.message.trim()),n&&e.messages.push(t.$.type.trim()),c&&e.messages.push(t.trim())}))}(b,i[e])})),"system-out"===N&&(N="passed"),b.status=N||"passed"}b.messages=b.messages.filter((function(e){return""!==e})),s.tests[j]=b,"undefined"!==typeof i.testcase&&e(t,s,i.testcase),"undefined"!==typeof i.testsuite&&p(t,i.testsuite)}))},p=function(e,t){Array.isArray(t)||(t=[t]),t.forEach((function(t){var s=function(e,t){var s=t.$||{},i=s.name||"No Name",n=l(i),a=e.suites[n]||{};return a.tests=a.tests||{},a.systemOut=a.systemOut||[],a.properties=a.properties||{_visible:!0},Object.entries(s).forEach((function(e){var t=Object(c.a)(e,2),s=t[0],i=t[1];["errors","failures","name","skipped","tests","time"].includes(s)||(a.properties[s]=a.properties[s]||[],a.properties[s].push(i))})),a.id=n,a.name=i,a.time=s.time||0,a}(e,t);"undefined"!==typeof t.properties&&u(s,t.properties),"undefined"!==typeof t.testcase&&d(e,s,t.testcase),"undefined"!==typeof t["system-out"]&&function(e,t){e.systemOut=e.systemOut||[];var s=t["system-out"];Array.isArray(s)||(s=[s]),e.systemOut=e.systemOut.concat(s)}(s,t),e.suites[s.id]=s}))},j=function e(t,s){Array.isArray(s)||(s=[s]),s.forEach((function(s){p(t,s),"undefined"!==typeof s.testsuite&&e(t,s.testsuite)}))},b=function(){var e=Object(n.a)(i.a.mark((function e(t){var s,n,c,a,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={suites:{}},e.next=3,o(t);case 3:for((n=e.sent).testsuites?(c=n.testsuites.testsuite,j(s,c)):n.testsuite&&j(s,n.testsuite),a=0,r=Object.values(s.suites);a<r.length;a++)(l=r[a])._visible=Object.keys(l.tests).length>0||Object.keys(l.properties).filter((function(e){return"_visible"!==e})).length>0,l.systemOut=l.systemOut.map((function(e){return e.trim()}));return e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();"undefined"!==typeof window?window.parse=b:e.exports=b}.call(this,s(85)(e))}},[[119,1,2]]]);
//# sourceMappingURL=main.f2834e32.chunk.js.map