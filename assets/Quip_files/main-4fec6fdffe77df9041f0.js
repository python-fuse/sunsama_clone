_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{BMP1:function(e,t,r){"use strict";var n=r("284h")(r("IKlv"));window.next=n,(0,n.default)().catch(console.error)},DqTX:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(){var e=null;return{mountedInstances:new Set,updateHead:function(t){var r=e=Promise.resolve().then((function(){if(r===e){e=null;var n={};t.forEach((function(e){var t=n[e.type]||[];t.push(e),n[e.type]=t}));var a=n.title?n.title[0]:null,i="";if(a){var c=a.props.children;i="string"===typeof c?c:c.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");0;for(var a=Number(n.content),i=[],c=0,u=n.previousElementSibling;c<a;c++,u=u.previousElementSibling)u.tagName.toLowerCase()===e&&i.push(u);var s=t.map(o).filter((function(e){for(var t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return r.insertBefore(e,n)})),n.content=(a-i.length+s.length).toString()}(e,n[e]||[])}))}}))}}};var n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o(e){var t=e.type,r=e.props,o=document.createElement(t);for(var a in r)if(r.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==r[a]){var i=n[a]||a.toLowerCase();o.setAttribute(i,r[a])}var c=r.children,u=r.dangerouslySetInnerHTML;return u?o.innerHTML=u.__html||"":c&&(o.textContent="string"===typeof c?c:c.join("")),o}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},IKlv:function(e,t,r){"use strict";var n=r("yXPU"),o=r("lwsE"),a=r("W8MJ"),i=r("7W2i"),c=r("a1gu"),u=r("Nsbk"),s=r("J4zp");function f(){f=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(R){u=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var a=t&&t.prototype instanceof d?t:d,i=Object.create(a.prototype),c=new P(o||[]);return n(i,"_invoke",{value:b(e,r,c)}),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(R){return{type:"throw",arg:R}}}e.wrap=s;var p={};function d(){}function h(){}function v(){}var m={};u(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==t&&r.call(y,a)&&(m=y);var w=v.prototype=d.prototype=Object.create(m);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function b(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=l(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},_(E.prototype),u(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var p=r("284h"),d=r("TqRt");t.__esModule=!0,t.render=ee,t.renderError=re,t.default=t.emitter=t.router=t.version=void 0;var h=d(r("pVnL")),v=(d(r("284h")),r("nOHt")),m=p(r("3WeD")),g=d(r("q1tI")),y=d(r("i8i4")),w=r("FYa8"),_=d(r("dZ6Y")),E=r("qOIg"),b=r("/jkW"),x=p(r("yLiY")),S=r("g/15"),T=r("elyg"),P=d(r("DqTX")),L=d(r("zmvN")),k=d(r("bGXG"));"finally"in Promise.prototype||(Promise.prototype.finally=r("Z577"));var R=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=R;t.version="9.5.2";var N=R.props,C=R.err,M=R.page,I=R.query,F=R.buildId,D=R.assetPrefix,j=R.runtimeConfig,A=R.dynamicIds,O=R.isFallback,B=D||"";r.p="".concat(B,"/_next/"),x.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:j||{}});var q=(0,S.getURL)();(0,T.hasBasePath)(q)&&(q=(0,T.delBasePath)(q));var G=new L.default(F,B,M),H=function(e){var t=s(e,2),r=t[0],n=t[1];return G.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return H(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=H;var U,X,W,Y,J,V,Z=(0,P.default)(),z=document.getElementById("__next");t.router=W;var K=function(e){i(r,e);var t=l(r);function r(){return o(this,r),t.apply(this,arguments)}return a(r,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),W.isSsr&&(O||R.nextExport&&((0,b.isDynamicRoute)(W.pathname)||location.search)||N&&N.__N_SSG&&location.search)&&W.replace(W.pathname+"?"+String(m.assign(m.urlQueryToSearchParams(W.query),new URLSearchParams(location.search))),q,{_h:1,shallow:!O})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(g.default.Component),Q=(0,_.default)();t.emitter=Q;var $=function(){var e=n(f().mark((function e(){var r,n,o,a,i,c,u=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>0&&void 0!==u[0]?u[0]:{},r.webpackHMR,e.next=4,G.loadPage("/_app");case 4:return n=e.sent,o=n.page,a=n.mod,J=o,a&&a.reportWebVitals&&(V=function(e){var t,r=e.id,n=e.name,o=e.startTime,i=e.value,c=e.duration,u=e.entryType,s=e.entries,f="".concat(Date.now(),"-").concat(Math.floor(Math.random()*(9e12-1))+1e12);s&&s.length&&(t=s[0].startTime),a.reportWebVitals({id:r||f,name:n,startTime:o||t,value:null==i?c:i,label:"mark"===u||"measure"===u?"custom":"web-vital"})}),i=C,e.prev=10,e.next=14,G.loadPage(M);case 14:c=e.sent,Y=c.page,e.next=20;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(10),i=e.t0;case 25:if(!window.__NEXT_PRELOADREADY){e.next=29;break}return e.next=29,window.__NEXT_PRELOADREADY(A);case 29:return t.router=W=(0,v.createRouter)(M,I,q,{initialProps:N,pageLoader:G,App:J,Component:Y,wrapApp:ue,err:i,isFallback:O,subscription:function(e,t){return ee({App:t,Component:e.Component,props:e.props,err:e.err})}}),ee({App:J,Component:Y,props:N,err:i}),e.abrupt("return",Q);case 35:e.next=37;break;case 37:case"end":return e.stop()}}),e,null,[[10,22]])})));return function(){return e.apply(this,arguments)}}();function ee(e){return te.apply(this,arguments)}function te(){return(te=n(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,re(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,se(t);case 7:e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(4),e.next=14,re((0,h.default)((0,h.default)({},t),{},{err:e.t0}));case 14:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function re(e){var t=e.App,r=e.err;return console.error(r),G.loadPage("/_error").then((function(n){var o=n.page,a=ue(t),i={Component:o,AppTree:a,router:W,ctx:{err:r,pathname:M,query:I,asPath:q,AppTree:a}};return Promise.resolve(e.props?e.props:(0,S.loadGetInitialProps)(t,i)).then((function(t){return se((0,h.default)((0,h.default)({},e),{},{err:r,Component:o,props:t}))}))}))}t.default=$;var ne="function"===typeof y.default.hydrate;function oe(){S.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),V&&performance.getEntriesByName("Next.js-hydration").forEach(V),ie())}function ae(){if(S.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),V&&(performance.getEntriesByName("Next.js-render").forEach(V),performance.getEntriesByName("Next.js-route-change-to-render").forEach(V)),ie(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function ie(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function ce(e){var t=e.children;return(g.default.createElement(K,{fn:function(e){return re({App:J,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},g.default.createElement(E.RouterContext.Provider,{value:(0,v.makePublicRouterInstance)(W)},g.default.createElement(w.HeadManagerContext.Provider,{value:Z},t))))}var ue=function(e){return function(t){var r=(0,h.default)((0,h.default)({},t),{},{Component:Y,err:C,router:W});return(g.default.createElement(ce,null,g.default.createElement(e,r)))}};function se(e){return fe.apply(this,arguments)}function fe(){return(fe=n(f().mark((function e(t){var r,n,o,a,i,c,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.App,n=t.Component,o=t.props,a=t.err,n=n||U.Component,o=o||U.props,i=(0,h.default)((0,h.default)({},o),{},{Component:n,err:a,router:W}),U=i,u=new Promise((function(e,t){X&&X(),c=function(){X=null,e()},X=function(){X=null,t()}})),s=g.default.createElement(le,{callback:c},g.default.createElement(ce,null,g.default.createElement(r,i))),f=z,S.ST&&performance.mark("beforeRender"),ne?(y.default.hydrate(s,f,oe),ne=!1,V&&S.ST&&(0,k.default)(V)):y.default.render(s,f,ae),e.next=10,u;case 10:case"end":return e.stop()}var s,f}),e)})))).apply(this,arguments)}function le(e){var t=e.callback,r=e.children;return g.default.useLayoutEffect((function(){return t()}),[t]),r}},Lab5:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return("/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index".concat(e):"".concat(e))+t}},Z577:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}},bGXG:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r("w6Sm");t.default=function(e){(0,n.getCLS)(e),(0,n.getFID)(e),(0,n.getFCP)(e),(0,n.getLCP)(e),(0,n.getTTFB)(e)}},fcRV:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(/[/#?]/g,(function(e){return encodeURIComponent(e)}))}},pVnL:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},w6Sm:function(e,t,r){"use strict";r.r(t),r.d(t,"getCLS",(function(){return h})),r.d(t,"getFCP",(function(){return m})),r.d(t,"getFID",(function(){return g})),r.d(t,"getLCP",(function(){return w})),r.d(t,"getTTFB",(function(){return _}));var n,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},u=!1,s=!1,f=function(e){u=!e.persisted},l=function(){addEventListener("pagehide",f),addEventListener("unload",(function(){}))},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(l(),s=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:u})}),{capture:!0,once:t})},d=function(e,t,r,n){var o;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("CLS",0),n=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),a())},o=c("layout-shift",n),a=d(e,r,o,t);p((function(e){var t=e.isUnloading;o&&o.takeRecords().map(n),t&&(r.isFinal=!0),a()}))},v=function(){return void 0===n&&(n="hidden"===document.visibilityState?0:1/0,p((function(e){var t=e.timeStamp;return n=t}),!0)),{get timeStamp(){return n}}},m=function(e){var t=i("FCP"),r=v(),n=c("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<r.timeStamp&&(t.value=e.startTime,t.isFinal=!0,t.entries.push(e),o())})),o=d(e,t,n)},g=function(e){var t=i("FID"),r=v(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=c("first-input",n),a=d(e,t,o);p((function(){o&&(o.takeRecords().map(n),o.disconnect())}),!0),o||window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],a())}))},y=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("LCP"),n=v(),o=function(e){var t=e.startTime;t<n.timeStamp?(r.value=t,r.entries.push(e)):r.isFinal=!0,u()},a=c("largest-contentful-paint",o),u=d(e,r,a,t),s=function(){r.isFinal||(a&&a.takeRecords().map(o),r.isFinal=!0,u())};y().then(s),p(s,!0)},_=function(e){var t,r=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},yLiY:function(e,t,r){"use strict";var n;t.__esModule=!0,t.setConfig=function(e){n=e},t.default=void 0;t.default=function(){return n}},zmvN:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("TqRt");t.__esModule=!0,t.default=void 0;var i=a(r("dZ6Y")),c=r("elyg"),u=a(r("fcRV")),s=a(r("Lab5")),f=r("/jkW"),l=r("hS4m"),p=r("3WeD"),d=r("gguc"),h=r("YTqd");function v(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}function m(e){return(0,c.markLoadingError)(new Error("Error loading ".concat(e)))}var g=v("preload")&&!v("prefetch")?"preload":"prefetch",y=(document.createElement("script"),window.requestIdleCallback||function(e){return setTimeout(e,1)});function w(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}function _(e,t,r){return new Promise((function(n,o,a){(a=document.createElement("link")).crossOrigin=void 0,a.href=e,a.rel=t,r&&(a.as=r),a.onload=n,a.onerror=o,document.head.appendChild(a)}))}var E=function(){function e(t,r,o){n(this,e),this.buildId=t,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,i.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==o&&(this.loadingRoutes[o]=!0),this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(r){var n;return r[e]?r[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))})):null!=(n=t.pageRegisterEvents.emit(e,{error:m(e)}))?n:[]}))}},{key:"getDataHref",value:function(e,t,r){var n,o=this,a=(0,l.parseRelativeUrl)(e),i=a.pathname,v=a.searchParams,m=a.search,g=(0,p.searchParamsToUrlQuery)(v),y=(0,l.parseRelativeUrl)(t).pathname,_=w(i),E=function(e){var t=(0,s.default)(e,".json");return(0,c.addBasePath)("/_next/data/".concat(o.buildId).concat(t).concat(r?"":m))},b=(0,f.isDynamicRoute)(_);if(b){var x=(0,h.getRouteRegex)(_),S=x.groups,T=(0,d.getRouteMatcher)(x)(y)||g;n=_,Object.keys(S).every((function(e){var t=T[e]||"",r=S[e],o=r.repeat,a=r.optional,i="[".concat(o?"...":"").concat(e,"]");return a&&(i="".concat(t?"":"/","[").concat(i,"]")),o&&!Array.isArray(t)&&(t=[t]),(a||e in T)&&(n=n.replace(i,o?t.map(u.default).join("/"):(0,u.default)(t))||"/")}))||(n="")}return b?n&&E(n):E(_)}},{key:"prefetchData",value:function(e,t){var r=this,n=w((0,l.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(o,a){y((function(){o.has(n)&&(a=r.getDataHref(e,t,!0))&&!document.querySelector('link[rel="'.concat(g,'"][href^="').concat(a,'"]'))&&_(a,g,"fetch")}))}))}},{key:"loadPage",value:function(e){var t=this;return e=w(e),new Promise((function(r,n){var o=t.pageCache[e];if(o){var a=o.error,i=o.page,c=o.mod;a?n(a):r({page:i,mod:c})}else{if(t.pageRegisterEvents.on(e,(function o(a){var i=a.error,c=a.page,u=a.mod;t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],i?n(i):r({page:c,mod:u})})),!t.loadingRoutes[e])t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(r){r.forEach((function(r){r.endsWith(".js")&&!document.querySelector('script[src^="'.concat(r,'"]'))&&t.loadScript(r,e),r.endsWith(".css")&&!document.querySelector('link[rel=stylesheet][href^="'.concat(r,'"]'))&&_(r,"stylesheet").catch((function(){}))}))}))}}))}},{key:"loadScript",value:function(e,t){var r=this,n=document.createElement("script");n.crossOrigin=void 0,n.src=e,n.onerror=function(){r.pageRegisterEvents.emit(t,{error:m(e)})},document.body.appendChild(n)}},{key:"registerPage",value:function(e,t){var r=this;!function(){try{var n=t(),o={page:n.default||n,mod:n};r.pageCache[e]=o,r.pageRegisterEvents.emit(e,o)}catch(a){r.pageCache[e]={error:a},r.pageRegisterEvents.emit(e,{error:a})}}()}},{key:"prefetch",value:function(e,t){var r,n,o=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(t)n=e;else;return Promise.all(document.querySelector('link[rel="'.concat(g,'"][href^="').concat(n,'"]'))?[]:[n&&_(n,g,n.endsWith(".css")?"style":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=E}},[["BMP1",1,0,2]]]);