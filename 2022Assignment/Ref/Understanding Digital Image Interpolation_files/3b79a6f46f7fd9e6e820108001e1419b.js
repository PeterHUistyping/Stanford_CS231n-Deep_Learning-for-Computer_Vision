(function(){'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");}var da=ca(this);function k(a,b){if(b)a:{var d=da;a=a.split(".");for(var c=0;c<a.length-1;c++){var e=a[c];if(!(e in d))break a;d=d[e]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&null!=b&&ba(d,a,{configurable:!0,writable:!0,value:b})}}
var ea="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var fa={a:!0},q={};try{q.__proto__=fa;p=q.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=n;
function t(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(r)r(a,b);else for(var d in b)if("prototype"!=d)if(Object.defineProperties){var c=Object.getOwnPropertyDescriptor(b,d);c&&Object.defineProperty(a,d,c)}else a[d]=b[d];a.F=b.prototype}k("Array.prototype.fill",function(a){return a?a:function(b,d,c){var e=this.length||0;0>d&&(d=Math.max(0,e+d));if(null==c||c>e)c=e;c=Number(c);0>c&&(c=Math.max(0,e+c));for(d=Number(d||0);d<c;d++)this[d]=b;return this}});
function u(a){return a?a:Array.prototype.fill}k("Int8Array.prototype.fill",u);k("Uint8Array.prototype.fill",u);k("Uint8ClampedArray.prototype.fill",u);k("Int16Array.prototype.fill",u);k("Uint16Array.prototype.fill",u);k("Int32Array.prototype.fill",u);k("Uint32Array.prototype.fill",u);k("Float32Array.prototype.fill",u);k("Float64Array.prototype.fill",u);/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var v=this||self;var ha=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var d=a.length,c="string"===typeof a?a.split(""):a,e=0;e<d;e++)e in c&&b.call(void 0,c[e],e,a)},ia=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var d=a.length,c=Array(d),e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&(c[f]=b.call(void 0,e[f],f,a));return c};var w={},x=null;var ja="undefined"!==typeof Uint8Array;
function ka(a){var b;void 0===b&&(b=0);if(!x){x={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),c=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=d.concat(c[e].split(""));w[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===x[h]&&(x[h]=g)}}}b=w[b];d=Array(Math.floor(a.length/3));c=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],m=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];d[e++]=g+l+m+h}g=0;h=c;switch(a.length-f){case 2:g=
a[f+1],h=b[(g&15)<<2]||c;case 1:a=a[f],d[e]=b[a>>2]+b[(a&3)<<4|g>>4]+h+c}return d.join("")}var la={};var ma;function y(a){if(la!==la)throw Error("illegal external caller");this.B=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");};var z="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function A(a,b){if(z)return a[z]|=b;if(void 0!==a.s)return a.s|=b;Object.defineProperties(a,{s:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function B(a){var b;z?b=a[z]:b=a.s;return null==b?0:b}function C(a,b){z?a[z]=b:void 0!==a.s?a.s=b:Object.defineProperties(a,{s:{value:b,configurable:!0,writable:!0,enumerable:!1}})}function na(a){A(a,16);return a}function oa(a,b){C(b,(a|0)&-51)}
function D(a,b){C(b,(a|18)&-41)};var E={};function F(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var G,pa=[];C(pa,23);G=Object.freeze(pa);function qa(a){if(B(a.j)&2)throw Error("Cannot mutate an immutable Message");}function H(a){var b=a.length;(b=b?a[b-1]:void 0)&&F(b)?b.g=1:(b={},a.push((b.g=1,b)))};function sa(a){var b=a.l+a.o;return a.m||(a.m=a.j[b]={})}function ta(a,b,d){return-1===b?null:b>=a.l?a.m?a.m[b]:void 0:d&&a.m&&(d=a.m[b],null!=d)?d:a.j[b+a.o]}function I(a,b,d,c){a.u&&(a.u=void 0);b>=a.l||c?sa(a)[b]=d:(a.j[b+a.o]=d,(a=a.m)&&b in a&&delete a[b])}function ua(a){a=ta(a,16);return null==a?a:!!a}
function va(a,b,d){var c=void 0===c?!1:c;var e=ta(a,d,c);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.v!==E?f?new b(e):void 0:e;g!==e&&null!=g&&(I(a,d,g,c),A(g.j,B(a.j)&18));b=g;if(null==b)return b;B(a.j)&2||(e=b,B(e.j)&2&&(g=wa(e,!1),g.u=e,e=g),e!==b&&(b=e,I(a,d,b,c)));return b}function xa(a){return null==a?!1:a};var L;function ya(a,b){L=b;a=new a(b);L=void 0;return a};function za(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(B(a)&128))return a=Array.prototype.slice.call(a),H(a),a}else{if(ja&&null!=a&&a instanceof Uint8Array)return ka(a);if(a instanceof y){var b=a.B;return null==b?"":"string"===typeof b?b:a.B=ka(b)}}}return a};function Aa(a,b,d,c){if(null!=a){if(Array.isArray(a))a=M(a,b,d,void 0!==c);else if(F(a)){var e={},f;for(f in a)e[f]=Aa(a[f],b,d,c);a=e}else a=b(a,c);return a}}function M(a,b,d,c){var e=B(a);c=c?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=Aa(a[f],b,d,c);d(e,a);return a}function Ba(a){return a.v===E?a.toJSON():za(a)}function Ca(a,b){a&128&&H(b)};function Da(a,b,d){d=void 0===d?D:d;if(null!=a){if(ja&&a instanceof Uint8Array)return a.length?new y(new Uint8Array(a)):ma||(ma=new y(null));if(Array.isArray(a)){var c=B(a);if(c&2)return a;if(b&&!(c&32)&&(c&16||0===c))return C(a,c|2),a;a=M(a,Da,c&4?D:d,!0);b=B(a);b&4&&b&2&&Object.freeze(a);return a}return a.v===E?Ea(a):a}}
function Fa(a,b,d,c,e,f,g){if(a=a.i&&a.i[d]){c=B(a);c&2?c=a:(f=ia(a,Ea),D(c,f),Object.freeze(f),c=f);qa(b);null==c?f=G:(f=[],A(f,1));g=f;if(null!=c){f=!!c.length;for(a=0;a<c.length;a++){var h=c[a];f=f&&!(B(h.j)&2);g[a]=h.j}f=(f?8:0)|1;a=B(g);(a&f)!==f&&(Object.isFrozen(g)&&(g=Array.prototype.slice.call(g)),C(g,a|f));b.i||(b.i={});b.i[d]=c}else b.i&&(b.i[d]=void 0);I(b,d,g,e)}else c=Da(c,f,g),qa(b),I(b,d,c,e)}function Ea(a){if(B(a.j)&2)return a;a=wa(a,!0);A(a.j,2);return a}
function wa(a,b){var d=a.j,c=na([]),e=a.constructor.i;e&&c.push(e);e=a.m;if(e){c.length=d.length;c.fill(void 0,c.length,d.length);var f={};c[c.length-1]=f}0!==(B(d)&128)&&H(c);b=b||B(a.j)&2?D:oa;c=ya(a.constructor,c);a.A&&(c.A=a.A.slice());f=!!(B(d)&16);for(var g=e?d.length-1:d.length,h=0;h<g;h++)Fa(a,c,h-a.o,d[h],!1,f,b);if(e)for(var l in e)Fa(a,c,+l,e[l],!0,f,b);return c};function N(a,b,d){null==a&&(a=L);L=void 0;var c=this.constructor.l||0,e=0<c,f=this.constructor.i,g=!1;if(null==a){a=f?[f]:[];var h=48;var l=!0;e&&(c=0,h|=128);C(a,h)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var m=h=A(a,0);if(l=0!==(16&m))(g=0!==(32&m))||(m|=32);if(e)if(128&m)c=0;else{if(0<a.length){var J=a[a.length-1];if(F(J)&&"g"in J){c=0;m|=128;delete J.g;var ra=!0,Qa;for(Qa in J){ra=!1;break}ra&&a.pop()}}}else if(128&m)throw Error();h!==m&&C(a,m)}this.o=(f?0:-1)-c;this.i=
void 0;this.j=a;a:{f=this.j.length;c=f-1;if(f&&(f=this.j[c],F(f))){this.m=f;this.l=c-this.o;break a}void 0!==b&&-1<b?(this.l=Math.max(b,c+1-this.o),this.m=void 0):this.l=Number.MAX_VALUE}if(!e&&this.m&&"g"in this.m)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(d){b=l&&!g&&!0;e=this.l;var K;for(l=0;l<d.length;l++)g=d[l],g<e?(g+=this.o,(c=a[g])?Ga(c,b):a[g]=G):(K||(K=sa(this)),(c=K[g])?Ga(c,b):K[g]=G)}}N.prototype.toJSON=function(){return M(this.j,Ba,Ca)};
function Ha(a){var b=Ia;if(null==a||""==a)return new b;a=JSON.parse(a);if(!Array.isArray(a))throw Error(void 0);return ya(b,na(a))}function Ga(a,b){if(Array.isArray(a)){var d=B(a),c=1;!b||d&2||(c|=16);(d&c)!==c&&C(a,d|c)}}N.prototype.v=E;N.prototype.toString=function(){return this.j.toString()};function Ja(a){N.call(this,a,-1,Ka)}t(Ja,N);var Ka=[17];function La(a){N.call(this,a,-1,Ma)}t(La,N);var Ma=[27];function Ia(a){N.call(this,a)}t(Ia,N);var O=null;function Na(){var a=void 0===a?v:a;return(a=a.performance)&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Oa(){var a=void 0===a?v:a;return(a=a.performance)&&a.now?a.now():null};function Pa(a,b){var d=Oa()||Na();this.label=a;this.type=b;this.value=d;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0};var P=v.performance,Ra=!!(P&&P.mark&&P.measure&&P.clearMarks),Q=function(a){var b=!1,d;return function(){b||(d=a(),b=!0);return d}}(function(){var a;if(a=Ra){var b;if(null===O){O="";try{a="";try{a=v.top.location.hash}catch(d){a=v.location.hash}a&&(O=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(d){}}b=O;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function R(){var a=window;this.i=[];this.u=a||v;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.i=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.l=Q()||(null!=b?b:1>Math.random())}function Sa(a){a&&P&&Q()&&(P.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),P.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}R.prototype.start=function(a,b){if(!this.l)return null;a=new Pa(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";P&&Q()&&P.mark(b);return a};
R.prototype.end=function(a){if(this.l&&"number"===typeof a.value){a.duration=(Oa()||Na())-a.value;var b="goog_"+a.label+"_"+a.uniqueId+"_end";P&&Q()&&P.mark(b);!this.l||2048<this.i.length||this.i.push(a)}};var S=new R;function Ta(){window.google_measure_js_timing||(S.l=!1,S.i!=S.u.google_js_reporting_queue&&(Q()&&ha(S.i,Sa),S.i.length=0))}"number"!==typeof window.google_srt&&(window.google_srt=Math.random());if("complete"==window.document.readyState)Ta();else if(S.l){var Ua=function(){Ta()},T=window;T.addEventListener&&T.addEventListener.call(T,"load",Ua,!1)};function U(a,b){a=a.getElementsByTagName("META");for(var d=0;d<a.length;++d)if(a[d].getAttribute("name")===b)return a[d].getAttribute("content")||"";return""};function Va(a,b){this.head=a;this.body=b;this.i=[];U(b,"sampling_mod");a=U(b,"namespace");if(!a){a=Math.random;a="ns-"+a().toString(36).substr(2,5);a:{var d=void 0===d?0:d;for(var c=b.getElementsByTagName("META"),e=0;e<c.length;++e)if("namespace"===c[e].getAttribute("name")&&c[e].getAttribute("index")===d.toString()){c[e].setAttribute("content",a);break a}c=b.querySelector("#mys-meta");c||(c=document.createElement("div"),c.id="mys-meta",c.style.position="absolute",c.style.display="none",b.appendChild(c));
b=document.createElement("META");b.setAttribute("name","namespace");b.setAttribute("content",a);b.setAttribute("index",d.toString());c.appendChild(b)}}Wa(this)}Va.prototype.addEventListener=function(a,b){this.body.addEventListener(a,b)};function Wa(a){if(!(0<a.i.length)){var b=U(a.body,"environment").split("|");var d="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];b=d?d.call(b):{next:aa(b)};for(d=b.next();!d.done;d=b.next())(d=d.value)&&a.i.push(d)}};function V(){this.i={}}V.prototype.clear=function(){this.i={}};V.prototype.set=function(a,b){this.i[a]=b};V.prototype.get=function(a){return this.i[a]};function Xa(a,b){if(b){b=JSON.parse(b);for(var d in b)b.hasOwnProperty(d)&&a.set(d,b[d])}};function Ya(a){var b=a.target,d=a.C,c=a.D;if(window.IntersectionObserver){var e=!1;(new IntersectionObserver(function(f){0!==f.length&&f[0].isIntersecting&&(!e&&d&&d(),e=!0,c&&c())},{threshold:a.threshold})).observe(b)}};function W(){this.channel=1;(this.i=!(!window.mys||!window.mys.pingback))&&this.setData(43,Date.now()-window.mys.pingback.getBaseTime())}W.prototype.setAttribute=function(a,b){this.i&&window.mys.pingback.setAttribute(a,b)};W.prototype.setData=function(a,b){this.i&&window.mys.pingback.setData(a,b,this.channel)};W.prototype.send=function(a){this.i&&window.mys.pingback.send(a)};W.prototype.tick=function(a,b){this.i&&(this.setData(a,Date.now()-window.mys.pingback.getBaseTime()),this.send(b))};function X(a){this.context=a;this.l=new V;this.pingback=new W}X.prototype.i=function(){};function Y(){X.apply(this,arguments)}t(Y,X);function Z(a){Y.call(this,a)}t(Z,Y);Z.prototype.i=function(){Ya({threshold:.9,target:document.querySelector(".x-layout"),C:function(){var a=document.querySelector(".x-layout");a&&a.classList.add("web-on-show")}})};function Za(){Z.apply(this,arguments)}t(Za,Z);
(function(a){var b=document.head,d=document.getElementById("mys-content");if(d){b=new Va(b,d);var c=new a(b);Xa(c.l,U(b.body,"runtime_data"));a=Ha(U(b.body,"render_config")||"[]");var e;Wa(b);0<=b.i.indexOf("amp")||(null==(e=va(va(a,La,1),Ja,10))?0:xa(ua(e)))||(e=mys.engine?mys.engine.stage():0,0===(e&1)&&b.addEventListener("overallStart",function(){}),0!==(e&4)&&c.i(),b.addEventListener("browserStart",function(){}),b.addEventListener("browserReady",function(){c.i()}),b.addEventListener("browserQuiet",
function(){}))}})(Za);}).call(this);