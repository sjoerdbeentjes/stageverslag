webpackJsonp([6],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default[0]:t("div",{class:{"no-ssr-placeholder":!0}},this.placeholder)}}},"4X/b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._m(0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt.js")])])}],a={render:r,staticRenderFns:o};e.a=a},"FZ+f":function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},"HBB+":function(t,e,n){"use strict";var r=(n("/5sW"),["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];e.a={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,a=e.data;a.nuxtChild=!0;for(var i=n,s=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,c=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&c++,n=n.$parent;a.nuxtChildDepth=c;var f=s[c]||u,l={};r.forEach(function(t){void 0!==f[t]&&(l[t]=f[t])});var p={};return o.forEach(function(t){"function"==typeof f[t]&&(p[t]=f[t].bind(i))}),t("transition",{props:l,on:p},[t("router-view",a)])}}},J2Ti:function(t,e,n){"use strict";function r(t){var e=l(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function o(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},o(t.modules[n],e)}n.d(e,"a",function(){return C});var a=n("woOf"),i=n.n(a),s=n("BO1k"),u=n.n(s),c=n("/5sW"),f=n("NYxO");c.default.use(f.default);var l=n("kRpp"),p=l.keys(),d={},h=void 0;if(p.forEach(function(t){-1!==t.indexOf("./index.")&&(h=t)}),h&&(d=r(h)),"function"!=typeof d){d.modules||(d.modules={});var m=!0,v=!1,y=void 0;try{for(var g,x=u()(p);!(m=(g=x.next()).done);m=!0){var b=g.value,w=b.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==w){var _=w.split(/\//),t=o(d,_);w=_.pop(),t[w]=r(b),t[w].namespaced=!0}}}catch(t){v=!0,y=t}finally{try{!m&&x.return&&x.return()}finally{if(v)throw y}}}var C=d instanceof Function?d:function(){return new f.default.Store(i()({strict:!1},d,{state:d.state instanceof Function?d.state():{}}))}},MU8w:function(t,e,n){"use strict";t.exports=n("hKoQ").polyfill()},Nym1:function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey"],beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},computed:{routerViewKey:function(){return void 0!==this.nuxtChildKey||this.$route.matched.length>1?this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params):this.$route.fullPath.split("#")[0]}},components:{NuxtChild:o.a,NuxtError:a.a}}},O9zh:function(t,e,n){var r=n("XCTH");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("acb59168",r,!0)},QAEz:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("inkd"),s=(n.n(i),{_default:function(){return n.e(0).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),u={};e.a={head:{title:"stageverslag",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{href:"https://fonts.googleapis.com/css?family=Libre+Baskerville|Rubik:300,400,400i,500,700,900",rel:"stylesheet"}],style:[],script:[]},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options._nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},methods:{setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?o.a.resolve(u[n]):s[n]().then(function(t){return u[n]=t,delete s[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{}}},SD19:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},SldL:function(t,e){!function(e){"use strict";function n(t,e,n,r){var a=e&&e.prototype instanceof o?e:o,i=Object.create(a.prototype),s=new d(r||[]);return i._invoke=c(t,n,s),i}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function a(){}function i(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(n,o,a,i){var s=r(t[n],t,o);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&g.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(c).then(function(t){u.value=t,a(u)},i)}i(s.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function c(t,e,n){var o=k;return function(a,i){if(o===R)throw new Error("Generator is already running");if(o===L){if("throw"===a)throw i;return m()}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var u=f(s,n);if(u){if(u===O)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===k)throw o=L,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=R;var c=r(t,e,n);if("normal"===c.type){if(o=n.done?L:j,c.arg===O)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=L,n.method="throw",n.arg=c.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,f(t,e),"throw"===e.method))return O;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,O;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,O):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,O)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function h(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(g.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return r.next=r}}return{next:m}}function m(){return{value:v,done:!0}}var v,y=Object.prototype,g=y.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},b=x.iterator||"@@iterator",w=x.asyncIterator||"@@asyncIterator",_=x.toStringTag||"@@toStringTag",C="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(C&&(t.exports=E));E=e.regeneratorRuntime=C?t.exports:{},E.wrap=n;var k="suspendedStart",j="suspendedYield",R="executing",L="completed",O={},T={};T[b]=function(){return this};var $=Object.getPrototypeOf,N=$&&$($(h([])));N&&N!==y&&g.call(N,b)&&(T=N);var S=i.prototype=o.prototype=Object.create(T);a.prototype=S.constructor=i,i.constructor=a,i[_]=a.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(S),t},E.awrap=function(t){return{__await:t}},s(u.prototype),u.prototype[w]=function(){return this},E.AsyncIterator=u,E.async=function(t,e,r,o){var a=new u(n(t,e,r,o));return E.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},s(S),S[_]="Generator",S[b]=function(){return this},S.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},E.values=h,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=g.call(o,"catchLoc"),s=g.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,O):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),O},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:h(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=v),O}}}(function(){return this}()||Function("return this")())},T23V:function(t,e,n){"use strict";function r(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}function o(t,e,n){var o=function(t){var o=r(t,"transition",e,n)||{};return"string"==typeof o?{name:o}:o};return t.map(function(t){var e=_()({},o(t));if(n&&n.matched.length&&n.matched[0].components.default){var r=o(n.matched[0].components.default);b()(r).filter(function(t){return r[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=r[t]})}return e})}function a(t,e){return U.serverRendered&&e&&Object(j.a)(t,e),t._Ctor=t,t}function i(t){var e=Object(j.e)(t.options.base,t.options.mode);return Object(j.c)(t.match(e),function(t,e,n,r,o){if("function"!=typeof t||t.options){var i=a(Object(j.j)(t),U.data?U.data[o]:null);return n.components[r]=i,i}return t().then(function(t){var e=a(Object(j.j)(t),U.data?U.data[o]:null);return n.components[r]=e,e})})}function s(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"!=typeof E.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),E.a[t]}),!a)return Object(j.h)(o,e)}function u(t,e){Object(j.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":p()(t))||t.options||(t=C.default.extend(t),t._Ctor=t,n.components[r]=t),t})}function c(t,e){var n=this;this._hashChanged||C.default.nextTick(function(){var e=Object(j.g)(t);$=e.map(function(t,e){if(!t)return"";if(T[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)C.default.set(t.$data,r,n[r])}return t.constructor.options.__file}),n._hadError&&n._dateLastError===n.$options._nuxt.dateErr&&n.error();var r=n.$options._nuxt.err?k.a.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(n._context)),n.setLayout(r)})}function f(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),S.afterEach(function(e,n){t.$nuxt.$emit("routeChanged",e,n)})}Object.defineProperty(e,"__esModule",{value:!0});var l=n("pFYg"),p=n.n(l),d=n("Xxa5"),h=n.n(d),m=n("//Fk"),v=n.n(m),y=n("exGp"),g=n.n(y),x=n("fZjL"),b=n.n(x),w=n("woOf"),_=n.n(w),C=n("/5sW"),E=n("unZF"),k=n("qcny"),j=n("YLfZ"),R=function(){var t=g()(h.a.mark(function t(e,n,r){var o,a,i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.fullPath.split("#")[0],a=e.fullPath.split("#")[0],this._hashChanged=o===a,t.prev=3,t.next=6,v.a.all(Object(j.c)(e,function(t,e,n,r){if("function"!=typeof t||t.options){var o=Object(j.j)(t);return n.components[r]=o,o}return t().then(function(t){var e=Object(j.j)(t);return n.components[r]=e,e})}));case 6:r(),t.next=15;break;case 9:t.prev=9,t.t0=t.catch(3),t.t0||(t.t0={}),i=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:i,message:t.t0.message}),r(!1);case 15:case"end":return t.stop()}},t,this,[[3,9]])}));return function(e,n,r){return t.apply(this,arguments)}}(),L=function(){var t=g()(h.a.mark(function t(e,n,r){var a,i,u,c,f,l,p,d,m=this;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",r());case 2:if(a=!1,i=function(t){a||(a=!0,r(t))},u=Object(j.d)({to:e,from:n,store:F,isClient:!0,next:i.bind(this),error:this.error.bind(this)},N),this._context=u,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,c=Object(j.f)(e),c.length){t.next=23;break}return t.next=12,s.call(this,c,u);case 12:if(!u._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof k.a.layout?k.a.layout(u):k.a.layout);case 16:return f=t.sent,t.next=19,s.call(this,c,u,f);case 19:if(!u._redirected){t.next=21;break}return t.abrupt("return");case 21:return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 23:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(o(c,e,n)),t.prev=25,t.next=28,s.call(this,c,u);case 28:if(!u._redirected){t.next=30;break}return t.abrupt("return");case 30:return l=c[0].options.layout,"function"==typeof l&&(l=l(u)),t.next=34,this.loadLayout(l);case 34:return l=t.sent,t.next=37,s.call(this,c,u,l);case 37:if(!u._redirected){t.next=39;break}return t.abrupt("return");case 39:if(p=!0,c.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate({params:e.params||{},query:e.query||{},store:u.store}))}),p){t.next=44;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 44:return t.next=46,v.a.all(c.map(function(t,n){if(t._path=Object(j.b)(e.matched[n].path)(e.params),!m._hadError&&m._isMounted&&t._path===T[n]&&n+1!==c.length)return v.a.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch;if(o){var i=Object(j.i)(t.options.asyncData,u).then(function(e){Object(j.a)(t,e)});r.push(i)}if(a){var s=t.options.fetch(u);s&&(s instanceof v.a||"function"==typeof s.then)||(s=v.a.resolve(s)),s.then(function(t){}),r.push(s)}return v.a.all(r)}));case 46:T=c.map(function(t,n){return Object(j.b)(e.matched[n].path)(e.params)}),a||r(),t.next=61;break;case 50:return t.prev=50,t.t0=t.catch(25),t.t0||(t.t0={}),T=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,d=k.a.layout,"function"==typeof d&&(d=d(u)),t.next=59,this.loadLayout(d);case 59:this.error(t.t0),r(!1);case 61:case"end":return t.stop()}},t,this,[[25,50]])}));return function(e,n,r){return t.apply(this,arguments)}}(),O=function(){var t=g()(h.a.mark(function t(e){var n,r,a,s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return N=e.app,S=e.router,F=e.store,t.next=5,v.a.all(i(S));case 5:return n=t.sent,r=new C.default(N),a=U.layout||"default",t.next=10,r.loadLayout(a);case 10:if(r.setLayout(a),s=function(){r.$mount("#__nuxt"),C.default.nextTick(function(){f(r)})},r.setTransitions=r.$options._nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(o(n,S.currentRoute)),T=S.currentRoute.matched.map(function(t){return Object(j.b)(t.path)(S.currentRoute.params)}),$=n.map(function(t){return t.options.__file})),r.error=r.$options._nuxt.error.bind(r),r.$loading={},U.error&&r.error(U.error),S.beforeEach(R.bind(r)),S.beforeEach(L.bind(r)),S.afterEach(u),S.afterEach(c.bind(r)),!U.serverRendered){t.next=24;break}return s(),t.abrupt("return");case 24:L.call(r,S.currentRoute,S.currentRoute,function(t){if(!t)return u(S.currentRoute,S.currentRoute),c.call(r,S.currentRoute,S.currentRoute),void s();var e=!1;S.afterEach(function(){e||(e=!0,s())}),S.push(t)});case 25:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),T=[],$=[],N=void 0,S=void 0,F=void 0,U=window.__NUXT__||{};Object(k.b)().then(O).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},"VU/8":function(t,e){t.exports=function(t,e,n,r,o){var a,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,i=t.default);var u="function"==typeof i?i.options:i;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var f=u.functional,l=f?u.render:u.beforeCreate;f?u.render=function(t,e){return c.call(e),l(t,e)}:u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:a,exports:i,options:u}}},WRRc:function(t,e,n){"use strict";n("/5sW");e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},XCTH:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},YLfZ:function(t,e,n){"use strict";function r(t,e){var n=t.options.data||T;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),L()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=O.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function a(t){return[].concat.apply([],t.matched.map(function(t){return j()(t.components).map(function(e){return t.components[e]})}))}function i(t){return[].concat.apply([],t.matched.map(function(t){return j()(t.instances).map(function(e){return t.instances[e]})}))}function s(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return j()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function u(t,e){var n={isServer:!!t.isServer,isClient:!!t.isClient,isStatic:!0,isDev:!1,isHMR:t.isHMR||!1,app:e,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/",env:{}},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,e,o){t&&(n._redirected=!0,"string"!=typeof t||void 0!==e&&"object"!==(void 0===e?"undefined":E()(e))||(o=e||{},e=t,t=302),r({path:e,query:o,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),t.from&&(n.from=t.from),n.isServer&&t.beforeRenderFns&&(n.beforeNuxtRender=function(e){return t.beforeRenderFns.push(e)}),n.isClient&&window.__NUXT__&&(n.nuxtState=window.__NUXT__),n}function c(t,e){return!t.length||e._redirected?_.a.resolve():f(t[0],e).then(function(){return c(t.slice(1),e)})}function f(t,e){var n=void 0;return n=2===t.length?new _.a(function(n){t(e,function(t,r){t&&e.error(t),r=r||{},n(r)})}):t(e),n&&(n instanceof _.a||"function"==typeof n.then)||(n=_.a.resolve(n)),n}function l(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function p(t,e){return v(d(t,e))}function d(t,e){for(var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";null!=(n=$.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var l=t[a],p=n[2],d=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var b=null!=p&&null!=l&&l!==p,w="+"===v||"*"===v,_="?"===v||"*"===v,C=n[2]||s,E=h||m;r.push({name:d||o++,prefix:p||"",delimiter:C,optional:_,repeat:w,partial:b,asterisk:!!x,pattern:E?g(E):x?".*":"[^"+y(C)+"]+?"})}}return a<t.length&&(i+=t.substr(a)),i&&r.push(i),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function m(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function v(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===E()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var f,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+b()(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(f=s(l[p]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+b()(f)+"`");o+=(0===p?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?m(l):s(l),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}function y(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function g(t){return t.replace(/([=!:$\/()])/g,"\\$1")}e.a=r,e.j=o,e.f=a,e.g=i,e.c=s,e.d=u,e.h=c,e.i=f,e.e=l,e.b=p;var x=n("mvHQ"),b=n.n(x),w=n("//Fk"),_=n.n(w),C=n("pFYg"),E=n.n(C),k=n("fZjL"),j=n.n(k),R=n("Dd8w"),L=n.n(R),O=n("/5sW"),T=function(){return{}};window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var $=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},ar8j:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"__nuxt"}},[t.layout?n(t.nuxt.err?"nuxt":t.layout,{tag:"component"}):t._e()],1)},o=[],a={render:r,staticRenderFns:o};e.a=a},cs8z:function(t,e,n){"use strict";var r=n("Nym1"),o=n("nfVE"),a=n("VU/8"),i=a(r.a,o.a,null,null,null);e.a=i.exports},ct3O:function(t,e,n){"use strict";function r(t){n("O9zh")}var o=n("SD19"),a=n("4X/b"),i=n("VU/8"),s=r,u=i(o.a,a.a,s,null,null);e.a=u.exports},"gXG+":function(t,e,n){"use strict";var r=n("QAEz"),o=n("ar8j"),a=n("VU/8"),i=a(r.a,o.a,null,null,null);e.a=i.exports},inkd:function(t,e,n){var r=n("lLn/");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("675d63a5",r,!0)},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},kRpp:function(t,e,n){function r(t){return n(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./index.js":"vdRI"};r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="kRpp"},"lLn/":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}body{font-family:Libre Baskerville,serif;padding-bottom:5em}.container{width:100%;max-width:45em;margin:0 auto}a{color:#000}a:hover{color:#0cafcd}h1,h2,h3,h4,h5,h6{font-family:Rubik,sans-serif;font-weight:500}h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em;margin:2em 0 .75em}h3{font-size:1.17em;margin:1.2em 0 .5em}h4{margin:.8em 0 .3em}h5{font-size:.83em;margin:1.5em 0}h6{font-size:.75em;margin:1.67em 0}p{margin-bottom:1em;line-height:1.4}p:last-of-type{margin-bottom:0}time{font-size:1em;margin:.75em 0}blockquote,time{display:block;font-style:italic}blockquote{border-left:.25em solid #e4e4e4;padding-left:.75em;margin-bottom:1em;margin-top:.75em}article ul{padding-left:1em}",""])},mtxM:function(t,e,n){"use strict";function r(){return new a.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:f,routes:[{path:"/",component:i,name:"index"},{path:"/report",component:s,name:"report"},{path:"/log",component:u,name:"log"},{path:"/plan",component:c,name:"plan"}],fallback:!1})}e.a=r;var o=n("/5sW"),a=n("/ocq");o.default.use(a.default);var i=function(){return n.e(3).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})},s=function(){return n.e(4).then(n.bind(null,"00nu")).then(function(t){return t.default||t})},u=function(){return n.e(1).then(n.bind(null,"cjw8")).then(function(t){return t.default||t})},c=function(){return n.e(2).then(n.bind(null,"v8wv")).then(function(t){return t.default||t})},f=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},nfVE:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt.err?n("nuxt-error",{attrs:{error:t.nuxt.err}}):n("nuxt-child",{key:t.routerViewKey})},o=[],a={render:r,staticRenderFns:o};e.a=a},p5rU:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="p5rU"},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return R});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),l=n.n(f),p=n("exGp"),d=n.n(p),h=n("MU8w"),m=(n.n(h),n("/5sW")),v=n("p3jY"),y=n.n(v),g=n("mtxM"),x=n("0F0d"),b=n("HBB+"),w=n("WRRc"),_=n("ct3O"),C=n("cs8z"),E=n("gXG+"),k=n("YLfZ"),j=n("J2Ti");n.d(e,"a",function(){return _.a});var R=function(){var t=d()(o.a.mark(function t(e){var n,r,a,i,u,f,p,d;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(g.a)(),r=Object(j.a)(),a=l()({router:n,store:r,_nuxt:{defaultTransition:L,transitions:[L],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},L,{name:t}):c()({},L,t):L}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){"string"==typeof(t=t||null)&&(t={statusCode:500,message:t});var e=this._nuxt||this.$options._nuxt;return e.dateErr=Date.now(),e.err=t,t}}},E.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object(k.e)(n.options.base),u=n.resolve(f).route),p=Object(k.d)({isServer:!!e,isClient:!e,route:u,next:i,error:a._nuxt.error.bind(a),store:r,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0},a),d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");t="$"+t,a[t]=e,m.default.use(function(){var e="__nuxt_"+t+"_installed__";m.default[e]||(m.default[e]=!0,m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}}))}),r[t]=a[t]},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=13;break;case 13:return t.abrupt("return",{app:a,router:n,store:r});case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();m.default.component(x.a.name,x.a),m.default.component(b.a.name,b.a),m.default.component(w.a.name,w.a),m.default.component(C.a.name,C.a),m.default.use(y.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var L={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},rjj0:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function a(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(v){var a=d++;r=p||(p=o()),e=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n("tTVk"),f={},l=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=c(t,e);return r(o),function(e){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=f[i.id];s.refs--,n.push(s)}e?(o=c(t,e),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},tTVk:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=a[0],s=a[1],u=a[2],c=a[3],f={id:t+":"+o,css:s,media:u,sourceMap:c};r[i]?r[i].parts.push(f):n.push(r[i]={id:i,parts:[f]})}return n}},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("p5rU"),i=a.keys(),s={},u=!0,c=!1,f=void 0;try{for(var l,p=o()(i);!(u=(l=p.next()).done);u=!0){var d=l.value;s[d.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var e=a(t);return e.default?e.default:e}(d)}}catch(t){c=!0,f=t}finally{try{!u&&p.return&&p.return()}finally{if(c)throw f}}e.a=s},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"getters",function(){return o}),n.d(e,"mutations",function(){return a}),n.d(e,"actions",function(){return i});var r=function(){return{logs:[]}},o={logs:function(t){return t.logs},filterLogs:function(t){return t.logs}},a={setLogs:function(t,e){t.logs=e}},i={setLogs:function(t,e){(0,t.commit)("setLogs",e)}}}},["T23V"]);
//# sourceMappingURL=app.d7cd707128c8170bc9fe.js.map