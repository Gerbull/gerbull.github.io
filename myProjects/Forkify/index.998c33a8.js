function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},o={},i=t.parcelRequirefaf7;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequirefaf7=i),i.register("27Lyk",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.998c33a8.js","eyyUD":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||a||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,d,f,p={};f=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h=Function.prototype,v=h.call,g=f&&h.bind.bind(v,v);p=f?g:function(e){return function(){return v.apply(e,arguments)}};var m,y={},b="object"==typeof document&&document.all,_=(m={all:b,IS_HTMLDDA:void 0===b&&void 0!==b}).all;y=m.IS_HTMLDDA?function(e){return"function"==typeof e||e===_}:function(e){return"function"==typeof e};var w,k,E,S={};E=function(e){return null==e};var O=TypeError;k=function(e){if(E(e))throw O("Can't call method on "+e);return e};var L=Object;w=function(e){return L(k(e))};var j=p({}.hasOwnProperty);S=Object.hasOwn||function(e,t){return j(w(e),t)};var F,M=Function.prototype,T=c&&Object.getOwnPropertyDescriptor,$=S(M,"name"),x={EXISTS:$,PROPER:$&&"something"===function(){}.name,CONFIGURABLE:$&&(!c||c&&T(M,"name").configurable)}.CONFIGURABLE,P={},I={},H=Object.defineProperty;F=function(e,t){try{H(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var q="__core-js_shared__",A=a[q]||F(q,{});I=A;var N=p(Function.toString);y(I.inspectSource)||(I.inspectSource=function(e){return N(e)}),P=I.inspectSource;var C,R,D=a.WeakMap;R=y(D)&&/native code/.test(String(D));var W={},z=m.all;W=m.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:y(e)||e===z}:function(e){return"object"==typeof e?null!==e:y(e)};var U,B,G,J={},Y=a.document,V=W(Y)&&W(Y.createElement);G=function(e){return V?Y.createElement(e):{}},B=!c&&!u((function(){return 7!=Object.defineProperty(G("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(W(e))return e;throw Z(X(e)+" is not an object")};var ee,te,ne={},re=Function.prototype.call;ne=f?re.bind(re):function(){return re.apply(re,arguments)};var oe,ie={};oe=function(e,t){return arguments.length<2?(n=a[e],y(n)?n:void 0):a[e]&&a[e][t];var n};var ae={};ae=p({}.isPrototypeOf);var se,ce,ue,le={};le="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var de,fe,pe=a.process,he=a.Deno,ve=pe&&pe.versions||he&&he.version,ge=ve&&ve.v8;ge&&(fe=(de=ge.split("."))[0]>0&&de[0]<4?1:+(de[0]+de[1])),!fe&&le&&(!(de=le.match(/Edge\/(\d+)/))||de[1]>=74)&&(de=le.match(/Chrome\/(\d+)/))&&(fe=+de[1]),ue=fe;var me=a.String;se=(ce=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!me(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ue&&ue<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ye=Object;ie=se?function(e){return"symbol"==typeof e}:function(e){var t=oe("Symbol");return y(t)&&ae(t.prototype,ye(e))};var be,_e,we,ke=String;we=function(e){try{return ke(e)}catch(e){return"Object"}};var Ee=TypeError;_e=function(e){if(y(e))return e;throw Ee(we(e)+" is not a function")},be=function(e,t){var n=e[t];return E(n)?void 0:_e(n)};var Se,Oe=TypeError;Se=function(e,t){var n,r;if("string"===t&&y(n=e.toString)&&!W(r=ne(n,e)))return r;if(y(n=e.valueOf)&&!W(r=ne(n,e)))return r;if("string"!==t&&y(n=e.toString)&&!W(r=ne(n,e)))return r;throw Oe("Can't convert object to primitive value")};var Le,je;(je=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"});var Fe,Me=0,Te=Math.random(),$e=p(1..toString);Fe=function(e){return"Symbol("+(void 0===e?"":e)+")_"+$e(++Me+Te,36)};var xe=a.Symbol,Pe=je("wks"),Ie=se?xe.for||xe:xe&&xe.withoutSetter||Fe;Le=function(e){return S(Pe,e)||(Pe[e]=ce&&S(xe,e)?xe[e]:Ie("Symbol."+e)),Pe[e]};var He=TypeError,qe=Le("toPrimitive");te=function(e,t){if(!W(e)||ie(e))return e;var n,r=be(e,qe);if(r){if(void 0===t&&(t="default"),n=ne(r,e,t),!W(n)||ie(n))return n;throw He("Can't convert object to primitive value")}return void 0===t&&(t="number"),Se(e,t)},ee=function(e){var t=te(e,"string");return ie(t)?t:t+""};var Ae=TypeError,Ne=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,Re="enumerable",De="configurable",We="writable";U=c?Q?function(e,t,n){if(K(e),t=ee(t),K(n),"function"==typeof e&&"prototype"===t&&"value"in n&&We in n&&!n[We]){var r=Ce(e,t);r&&r[We]&&(e[t]=n.value,n={configurable:De in n?n[De]:r[De],enumerable:Re in n?n[Re]:r[Re],writable:!1})}return Ne(e,t,n)}:Ne:function(e,t,n){if(K(e),t=ee(t),K(n),B)try{return Ne(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ae("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var ze;ze=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},J=c?function(e,t,n){return U(e,t,ze(1,n))}:function(e,t,n){return e[t]=n,e};var Ue,Be=je("keys");Ue=function(e){return Be[e]||(Be[e]=Fe(e))};var Ge={};Ge={};var Je,Ye,Ve,Qe="Object already initialized",Ke=a.TypeError,Xe=a.WeakMap;if(R||I.state){var Ze=I.state||(I.state=new Xe);Ze.get=Ze.get,Ze.has=Ze.has,Ze.set=Ze.set,Je=function(e,t){if(Ze.has(e))throw Ke(Qe);return t.facade=e,Ze.set(e,t),t},Ye=function(e){return Ze.get(e)||{}},Ve=function(e){return Ze.has(e)}}else{var et=Ue("state");Ge[et]=!0,Je=function(e,t){if(S(e,et))throw Ke(Qe);return t.facade=e,J(e,et,t),t},Ye=function(e){return S(e,et)?e[et]:{}},Ve=function(e){return S(e,et)}}var tt=(C={set:Je,get:Ye,has:Ve,enforce:function(e){return Ve(e)?Ye(e):Je(e,{})},getterFor:function(e){return function(t){var n;if(!W(t)||(n=Ye(t)).type!==e)throw Ke("Incompatible receiver, "+e+" required");return n}}}).enforce,nt=C.get,rt=String,ot=Object.defineProperty,it=p("".slice),at=p("".replace),st=p([].join),ct=c&&!u((function(){return 8!==ot((function(){}),"length",{value:8}).length})),ut=String(String).split("String"),lt=d=function(e,t,n){"Symbol("===it(rt(t),0,7)&&(t="["+at(rt(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!S(e,"name")||x&&e.name!==t)&&(c?ot(e,"name",{value:t,configurable:!0}):e.name=t),ct&&n&&S(n,"arity")&&e.length!==n.arity&&ot(e,"length",{value:n.arity});try{n&&S(n,"constructor")&&n.constructor?c&&ot(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=tt(e);return S(r,"source")||(r.source=st(ut,"string"==typeof t?t:"")),e};Function.prototype.toString=lt((function(){return y(this)&&nt(this).source||P(this)}),"toString"),l=function(e,t,n){return n.get&&d(n.get,t,{getter:!0}),n.set&&d(n.set,t,{setter:!0}),U(e,t,n)};var dt;dt=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var ft=a.RegExp,pt=ft.prototype;c&&u((function(){var e=!0;try{ft(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(pt,"flags").get.call(t)!==r||n!==r}))&&l(pt,"flags",{configurable:!0,get:dt});var ht,vt={};vt=a,ht=Le;var gt=U;(function(e){var t=vt.Symbol||(vt.Symbol={});S(t,e)||gt(t,e,{value:ht(e)})})("dispose");var mt,yt,bt,_t={}.propertyIsEnumerable,wt=Object.getOwnPropertyDescriptor,kt=wt&&!_t.call({1:2},1);bt=kt?function(e){var t=wt(this,e);return!!t&&t.enumerable}:_t;var Et,St,Ot={},Lt=p({}.toString),jt=p("".slice);St=function(e){return jt(Lt(e),8,-1)};var Ft=Object,Mt=p("".split);Ot=u((function(){return!Ft("z").propertyIsEnumerable(0)}))?function(e){return"String"==St(e)?Mt(e,""):Ft(e)}:Ft,Et=function(e){return Ot(k(e))};var Tt,$t=Object.getOwnPropertyDescriptor,xt=yt=c?$t:function(e,t){if(e=Et(e),t=ee(t),B)try{return $t(e,t)}catch(e){}if(S(e,t))return ze(!ne(bt,e,t),e[t])};Tt=function(e,t,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:t;if(y(n)&&d(n,i,r),r.global)o?e[t]=n:F(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=n:U(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var Pt,It,Ht,qt,At,Nt={},Ct={},Rt=Math.ceil,Dt=Math.floor;Ct=Math.trunc||function(e){var t=+e;return(t>0?Dt:Rt)(t)},At=function(e){var t=+e;return t!=t||0===t?0:Ct(t)};var Wt=Math.max,zt=Math.min;qt=function(e,t){var n=At(e);return n<0?Wt(n+t,0):zt(n,t)};var Ut,Bt,Gt=Math.min;Bt=function(e){return e>0?Gt(At(e),9007199254740991):0},Ut=function(e){return Bt(e.length)};var Jt=function(e){return function(t,n,r){var o,i=Et(t),a=Ut(i),s=qt(r,a);if(e&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===n)return e||s||0;return!e&&-1}},Yt={includes:Jt(!0),indexOf:Jt(!1)}.indexOf,Vt=p([].push);Ht=function(e,t){var n,r=Et(e),o=0,i=[];for(n in r)!S(Ge,n)&&S(r,n)&&Vt(i,n);for(;t.length>o;)S(r,n=t[o++])&&(~Yt(i,n)||Vt(i,n));return i};var Qt,Kt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");It=Object.getOwnPropertyNames||function(e){return Ht(e,Kt)},Qt=Object.getOwnPropertySymbols;var Xt=p([].concat);Nt=oe("Reflect","ownKeys")||function(e){var t=It(K(e));return Qt?Xt(t,Qt(e)):t},Pt=function(e,t,n){for(var r=Nt(t),o=U,i=yt,a=0;a<r.length;a++){var s=r[a];S(e,s)||n&&S(n,s)||o(e,s,i(t,s))}};var Zt={},en=/#|\.prototype\./,tn=function(e,t){var n=rn[nn(e)];return n==an||n!=on&&(y(t)?u(t):!!t)},nn=tn.normalize=function(e){return String(e).replace(en,".").toLowerCase()},rn=tn.data={},on=tn.NATIVE="N",an=tn.POLYFILL="P";Zt=tn,mt=function(e,t){var n,r,o,i,s,c=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[c]||F(c,{}):(a[c]||{}).prototype)for(r in t){if(i=t[r],o=e.dontCallGetSet?(s=xt(n,r))&&s.value:n[r],!Zt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Pt(i,o)}(e.sham||o&&o.sham)&&J(i,"sham",!0),Tt(n,r,i,e)}};var sn,cn={},un=Function.prototype,ln=un.apply,dn=un.call;cn="object"==typeof Reflect&&Reflect.apply||(f?dn.bind(ln):function(){return dn.apply(ln,arguments)});var fn,pn,hn=(pn=function(e){if("Function"===St(e))return p(e)})(pn.bind);fn=function(e,t){return _e(e),void 0===t?e:f?hn(e,t):function(){return e.apply(t,arguments)}};var vn={};vn=oe("document","documentElement");var gn={};gn=p([].slice);var mn,yn=TypeError;mn=function(e,t){if(e<t)throw yn("Not enough arguments");return e};var bn;bn=/(?:ipad|iphone|ipod).*applewebkit/i.test(le);var _n,wn,kn,En,Sn=wn={};function On(){throw new Error("setTimeout has not been defined")}function Ln(){throw new Error("clearTimeout has not been defined")}function jn(e){if(kn===setTimeout)return setTimeout(e,0);if((kn===On||!kn)&&setTimeout)return kn=setTimeout,setTimeout(e,0);try{return kn(e,0)}catch(t){try{return kn.call(null,e,0)}catch(t){return kn.call(this,e,0)}}}!function(){try{kn="function"==typeof setTimeout?setTimeout:On}catch(e){kn=On}try{En="function"==typeof clearTimeout?clearTimeout:Ln}catch(e){En=Ln}}();var Fn,Mn=[],Tn=!1,$n=-1;function xn(){Tn&&Fn&&(Tn=!1,Fn.length?Mn=Fn.concat(Mn):$n=-1,Mn.length&&Pn())}function Pn(){if(!Tn){var e=jn(xn);Tn=!0;for(var t=Mn.length;t;){for(Fn=Mn,Mn=[];++$n<t;)Fn&&Fn[$n].run();$n=-1,t=Mn.length}Fn=null,Tn=!1,function(e){if(En===clearTimeout)return clearTimeout(e);if((En===Ln||!En)&&clearTimeout)return En=clearTimeout,clearTimeout(e);try{return En(e)}catch(t){try{return En.call(null,e)}catch(t){return En.call(this,e)}}}(e)}}function In(e,t){this.fun=e,this.array=t}function Hn(){}Sn.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Mn.push(new In(e,t)),1!==Mn.length||Tn||jn(Pn)},In.prototype.run=function(){this.fun.apply(null,this.array)},Sn.title="browser",Sn.browser=!0,Sn.env={},Sn.argv=[],Sn.version="",Sn.versions={},Sn.on=Hn,Sn.addListener=Hn,Sn.once=Hn,Sn.off=Hn,Sn.removeListener=Hn,Sn.removeAllListeners=Hn,Sn.emit=Hn,Sn.prependListener=Hn,Sn.prependOnceListener=Hn,Sn.listeners=function(e){return[]},Sn.binding=function(e){throw new Error("process.binding is not supported")},Sn.cwd=function(){return"/"},Sn.chdir=function(e){throw new Error("process.chdir is not supported")},Sn.umask=function(){return 0},_n=void 0!==wn&&"process"==St(wn);var qn,An,Nn,Cn,Rn=a.setImmediate,Dn=a.clearImmediate,Wn=a.process,zn=a.Dispatch,Un=a.Function,Bn=a.MessageChannel,Gn=a.String,Jn=0,Yn={},Vn="onreadystatechange";u((function(){qn=a.location}));var Qn=function(e){if(S(Yn,e)){var t=Yn[e];delete Yn[e],t()}},Kn=function(e){return function(){Qn(e)}},Xn=function(e){Qn(e.data)},Zn=function(e){a.postMessage(Gn(e),qn.protocol+"//"+qn.host)};Rn&&Dn||(Rn=function(e){mn(arguments.length,1);var t=y(e)?e:Un(e),n=gn(arguments,1);return Yn[++Jn]=function(){cn(t,void 0,n)},An(Jn),Jn},Dn=function(e){delete Yn[e]},_n?An=function(e){Wn.nextTick(Kn(e))}:zn&&zn.now?An=function(e){zn.now(Kn(e))}:Bn&&!bn?(Cn=(Nn=new Bn).port2,Nn.port1.onmessage=Xn,An=fn(Cn.postMessage,Cn)):a.addEventListener&&y(a.postMessage)&&!a.importScripts&&qn&&"file:"!==qn.protocol&&!u(Zn)?(An=Zn,a.addEventListener("message",Xn,!1)):An=Vn in G("script")?function(e){vn.appendChild(G("script"))[Vn]=function(){vn.removeChild(this),Qn(e)}}:function(e){setTimeout(Kn(e),0)});var er=(sn={set:Rn,clear:Dn}).clear;mt({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==er},{clearImmediate:er});var tr,nr,rr=sn.set;nr="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var or,ir=a.Function,ar=/MSIE .\./.test(le)||nr&&((or=a.Bun.version.split(".")).length<3||0==or[0]&&(or[1]<3||3==or[1]&&0==or[2]));tr=function(e,t){var n=t?2:1;return ar?function(r,o){var i=mn(arguments.length,1)>n,a=y(r)?r:ir(r),s=i?gn(arguments,n):[],c=i?function(){cn(a,this,s)}:a;return t?e(c,o):e(c)}:e};var sr=a.setImmediate?tr(rr,!1):rr;mt({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==sr},{setImmediate:sr});var cr=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),s=new T(r||[]);return o(a,"_invoke",{value:L(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",v="completed",g={};function m(){}function y(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w($([])));k&&k!==n&&r.call(k,a)&&(_=k);var E=b.prototype=m.prototype=Object.create(_);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,i,a,s){var c=d(e[o],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function L(e,t,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return x()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?v:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function $(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:x}}function x(){return{value:t,done:!0}}return y.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(O.prototype),u(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=$,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=cr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=cr:Function("r","regeneratorRuntime = r")(cr)}const ur="https://forkify-api.herokuapp.com/api/v2/recipes/",lr="45dc74f3-0454-4819-9303-b96e69cb33de",dr=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),i=await o.json();if(!o.ok)throw new Error(`💥 ${i.message} (Status: ${o.status})`);return i}catch(e){throw e}var n},fr={recipe:{},search:{query:"",result:[],page:1,resultsPerPage:10},bookmarks:[]},pr=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},hr=function(e=fr.search.page){fr.search.page=e;const t=(e-1)*fr.search.resultsPerPage,n=e*fr.search.resultsPerPage;return fr.search.result.slice(t,n)},vr=function(){localStorage.setItem("bookmarks",JSON.stringify(fr.bookmarks))},gr=function(e){fr.bookmarks.push(e),e.id===fr.recipe.id&&(fr.recipe.bookmarked=!0),vr()};!function(){const e=localStorage.getItem("bookmarks");e&&(fr.bookmarks=JSON.parse(e))}();var mr,yr,br,_r;mr=new URL(i("27Lyk").resolve("eyyUD"),import.meta.url).toString();class wr{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=o[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n        <div class="spinner">\n          <svg>\n            <use href="${n(mr)}#icon-loader"></use>\n          </svg>\n        </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n        <div class="error">\n          <div>\n            <svg>\n              <use href="${n(mr)}#icon-alert-triangle"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n        <div class="message">\n          <div>\n            <svg>\n              <use href="${n(mr)}#icon-smile"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,o=num.split(" ");if(o[0]&&(n=o[0]),o[1]&&(r=o[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var i=n.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(br=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},_r=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(br(this.denominator)){var e=_r(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}br(this.numerator)&&(e=_r(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return r.forEach((function(e){var t=o.indexOf(e);t>=0&&(n.push(e),o.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},yr=Fraction;var kr=new class extends wr{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please, try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n        <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(mr)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(mr)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${n(mr)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${n(mr)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(mr)}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${n(mr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n          </ul>\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(mr)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n    `}_generateMarkupIngredient(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${n(mr)}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${e.quantity?new yr(e.quantity).toString():""}</div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${e.unit}</span>\n          ${e.description}\n        </div>\n      </li>\n    `}};var Er=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var Sr=new class extends wr{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n                <use href="${n(mr)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}};var Or=new class extends wr{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please, try again!";_message="";_generateMarkup(){return this._data.map((e=>Sr.render(e,!1))).join("")}};var Lr=new class extends wr{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.result.length/this._data.resultsPerPage);return 1===e&&t>1?this._generateMarkupButton("next",e):e===t&&t>1?this._generateMarkupButton("prev",e):e<t?`\n        ${this._generateMarkupButton("prev",e)}\n        ${this._generateMarkupButton("next",e)}            \n      `:""}_generateMarkupButton(e="prev",t){return`\n        <button data-goto="${"prev"===e?t-1:t+1}" class="btn--inline pagination__btn--${e}">\n          <svg class="search__icon">\n            <use href="${n(mr)}${"prev"===e?'#icon-arrow-left"':'#icon-arrow-right"'}></use>\n          </svg>\n          <span>Page ${"prev"===e?t-1:t+1}</span>\n        </button>      \n      `}};var jr=new class extends wr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Sr.render(e,!1))).join("")}};var Fr=new class extends wr{_parentElement=document.querySelector(".upload");_message="Grats! You have uploaded your recipe!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerCloseWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this)),document.addEventListener("keydown",function(e){"Escape"!==e.key||this._window.classList.contains("hidden")||this.toggleWindow()}.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const Mr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;kr.renderSpinner(),Or.update(hr()),jr.update(fr.bookmarks),await async function(e){try{const t=await dr(`${ur}${e}?key=${lr}`);fr.recipe=pr(t),fr.bookmarks.some((t=>t.id===e))?fr.recipe.bookmarked=!0:fr.recipe.bookmarked=!1}catch(e){throw console.error(`💥💥💥 ${e}`),e}}(e),kr.render(fr.recipe)}catch(e){kr.renderError(),console.error(e)}},Tr=async function(){try{Or.renderSpinner();const e=Er.getQuery();if(!e)return;await async function(e){try{fr.search.query=e;const t=await dr(`${ur}?search=${e}&key=${lr}`);fr.search.result=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),fr.search.page=1}catch(e){throw console.error(`💥💥💥 ${e}`),e}}(e),Or.render(hr()),Lr.render(fr.search)}catch(e){console.log(e)}},$r=function(e){Or.render(hr(e)),Lr.render(fr.search)},xr=function(e){!function(e){fr.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/fr.recipe.servings})),fr.recipe.servings=e}(e),kr.update(fr.recipe)},Pr=function(){fr.recipe.bookmarked?function(e){const t=fr.bookmarks.findIndex((t=>t.id===e));fr.bookmarks.splice(t,1),e===fr.recipe.id&&(fr.recipe.bookmarked=!1),vr()}(fr.recipe.id):gr(fr.recipe),kr.update(fr.recipe),jr.render(fr.bookmarks)},Ir=function(){jr.render(fr.bookmarks)},Hr=async function(e){try{Fr.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Plese, use the correct format!");const[n,r,o]=t;return{quantity:n?+n:null,unit:r,description:o}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await dr(`${ur}?key=${lr}`,n);fr.recipe=pr(r),gr(fr.recipe)}catch(e){throw e}}(e),console.log(fr.recipe),kr.render(fr.recipe),Fr.renderMessage(),jr.render(fr.bookmarks),window.history.pushState(null,"",`#${fr.recipe.id}`),setTimeout((function(){Fr.toggleWindow()}),3e3)}catch(e){console.error("💥",e),Fr.renderError(e.message)}};jr.addHandlerRender(Ir),kr.addHandlerRender(Mr),kr.addHandlerUpdateServings(xr),kr.addHandlerAddBookmark(Pr),Er.addHandlerSearch(Tr),Lr.addHandlerClick($r),Fr.addHandlerUpload(Hr);
//# sourceMappingURL=index.998c33a8.js.map
