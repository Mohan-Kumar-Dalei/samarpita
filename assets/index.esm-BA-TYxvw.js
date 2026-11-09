import{F as Ad,q as Et,L as Rd,t as Yt,u as Bs,v as Pd,l as Vd,e as Ec,w as Sd,i as bd,x as Cd,y as Rs,z as vc,S as xd,h as Dd,C as kd,r as uu}from"./index.esm2017-ZduRdsCL.js";var cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Le,wc;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function I(){}I.prototype=p.prototype,T.D=p.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,v,R){for(var y=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)y[Ht-2]=arguments[Ht];return p.prototype[v].apply(E,y)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,I){I||(I=0);var E=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)E[v]=p.charCodeAt(I++)|p.charCodeAt(I++)<<8|p.charCodeAt(I++)<<16|p.charCodeAt(I++)<<24;else for(v=0;16>v;++v)E[v]=p[I++]|p[I++]<<8|p[I++]<<16|p[I++]<<24;p=T.g[0],I=T.g[1],v=T.g[2];var R=T.g[3],y=p+(R^I&(v^R))+E[0]+3614090360&4294967295;p=I+(y<<7&4294967295|y>>>25),y=R+(v^p&(I^v))+E[1]+3905402710&4294967295,R=p+(y<<12&4294967295|y>>>20),y=v+(I^R&(p^I))+E[2]+606105819&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(p^v&(R^p))+E[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(R^I&(v^R))+E[4]+4118548399&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(v^p&(I^v))+E[5]+1200080426&4294967295,R=p+(y<<12&4294967295|y>>>20),y=v+(I^R&(p^I))+E[6]+2821735955&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(p^v&(R^p))+E[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(R^I&(v^R))+E[8]+1770035416&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(v^p&(I^v))+E[9]+2336552879&4294967295,R=p+(y<<12&4294967295|y>>>20),y=v+(I^R&(p^I))+E[10]+4294925233&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(p^v&(R^p))+E[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(R^I&(v^R))+E[12]+1804603682&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(v^p&(I^v))+E[13]+4254626195&4294967295,R=p+(y<<12&4294967295|y>>>20),y=v+(I^R&(p^I))+E[14]+2792965006&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(p^v&(R^p))+E[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(v^R&(I^v))+E[1]+4129170786&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(p^I))+E[6]+3225465664&4294967295,R=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(R^p))+E[11]+643717713&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(v^R))+E[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^R&(I^v))+E[5]+3593408605&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(p^I))+E[10]+38016083&4294967295,R=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(R^p))+E[15]+3634488961&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(v^R))+E[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^R&(I^v))+E[9]+568446438&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(p^I))+E[14]+3275163606&4294967295,R=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(R^p))+E[3]+4107603335&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(v^R))+E[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^R&(I^v))+E[13]+2850285829&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(p^I))+E[2]+4243563512&4294967295,R=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(R^p))+E[7]+1735328473&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(v^R))+E[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(I^v^R)+E[5]+4294588738&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^v)+E[8]+2272392833&4294967295,R=p+(y<<11&4294967295|y>>>21),y=v+(R^p^I)+E[11]+1839030562&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^p)+E[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^R)+E[1]+2763975236&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^v)+E[4]+1272893353&4294967295,R=p+(y<<11&4294967295|y>>>21),y=v+(R^p^I)+E[7]+4139469664&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^p)+E[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^R)+E[13]+681279174&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^v)+E[0]+3936430074&4294967295,R=p+(y<<11&4294967295|y>>>21),y=v+(R^p^I)+E[3]+3572445317&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^p)+E[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^R)+E[9]+3654602809&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^v)+E[12]+3873151461&4294967295,R=p+(y<<11&4294967295|y>>>21),y=v+(R^p^I)+E[15]+530742520&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^p)+E[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(v^(I|~R))+E[0]+4096336452&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~v))+E[7]+1126891415&4294967295,R=p+(y<<10&4294967295|y>>>22),y=v+(p^(R|~I))+E[14]+2878612391&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~p))+E[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~R))+E[12]+1700485571&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~v))+E[3]+2399980690&4294967295,R=p+(y<<10&4294967295|y>>>22),y=v+(p^(R|~I))+E[10]+4293915773&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~p))+E[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~R))+E[8]+1873313359&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~v))+E[15]+4264355552&4294967295,R=p+(y<<10&4294967295|y>>>22),y=v+(p^(R|~I))+E[6]+2734768916&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~p))+E[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~R))+E[4]+4149444226&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~v))+E[11]+3174756917&4294967295,R=p+(y<<10&4294967295|y>>>22),y=v+(p^(R|~I))+E[2]+718787259&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var I=p-this.blockSize,E=this.B,v=this.h,R=0;R<p;){if(v==0)for(;R<=I;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<p;)if(E[v++]=T.charCodeAt(R++),v==this.blockSize){s(this,E),v=0;break}}else for(;R<p;)if(E[v++]=T[R++],v==this.blockSize){s(this,E),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var I=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=I&255,I/=256;for(this.u(T),T=Array(16),p=I=0;4>p;++p)for(var E=0;32>E;E+=8)T[I++]=this.g[p]>>>E&255;return T};function i(T,p){var I=u;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=p(T)}function a(T,p){this.h=p;for(var I=[],E=!0,v=T.length-1;0<=v;v--){var R=T[v]|0;E&&R==p||(I[v]=R,E=!1)}this.g=I}var u={};function c(T){return-128<=T&&128>T?i(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return b(d(-T));for(var p=[],I=1,E=0;T>=I;E++)p[E]=T/I|0,I*=4294967296;return new a(p,0)}function f(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return b(f(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(p,8)),E=g,v=0;v<T.length;v+=8){var R=Math.min(8,T.length-v),y=parseInt(T.substring(v,v+R),p);8>R?(R=d(Math.pow(p,R)),E=E.j(R).add(d(y))):(E=E.j(I),E=E.add(d(y)))}return E}var g=c(0),_=c(1),P=c(16777216);r=a.prototype,r.m=function(){if(k(this))return-b(this).m();for(var T=0,p=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(k(this))return"-"+b(this).toString(T);for(var p=d(Math.pow(T,6)),I=this,E="";;){var v=Q(I,p).g;I=U(I,v.j(p));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=v,D(I))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function k(T){return T.h==-1}r.l=function(T){return T=U(this,T),k(T)?-1:D(T)?0:1};function b(T){for(var p=T.g.length,I=[],E=0;E<p;E++)I[E]=~T.g[E];return new a(I,~T.h).add(_)}r.abs=function(){return k(this)?b(this):this},r.add=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0,v=0;v<=p;v++){var R=E+(this.i(v)&65535)+(T.i(v)&65535),y=(R>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);E=y>>>16,R&=65535,y&=65535,I[v]=y<<16|R}return new a(I,I[I.length-1]&-2147483648?-1:0)};function U(T,p){return T.add(b(p))}r.j=function(T){if(D(this)||D(T))return g;if(k(this))return k(T)?b(this).j(b(T)):b(b(this).j(T));if(k(T))return b(this.j(b(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var p=this.g.length+T.g.length,I=[],E=0;E<2*p;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<T.g.length;v++){var R=this.i(E)>>>16,y=this.i(E)&65535,Ht=T.i(v)>>>16,Un=T.i(v)&65535;I[2*E+2*v]+=y*Un,G(I,2*E+2*v),I[2*E+2*v+1]+=R*Un,G(I,2*E+2*v+1),I[2*E+2*v+1]+=y*Ht,G(I,2*E+2*v+1),I[2*E+2*v+2]+=R*Ht,G(I,2*E+2*v+2)}for(E=0;E<p;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=p;E<2*p;E++)I[E]=0;return new a(I,0)};function G(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function B(T,p){this.g=T,this.h=p}function Q(T,p){if(D(p))throw Error("division by zero");if(D(T))return new B(g,g);if(k(T))return p=Q(b(T),p),new B(b(p.g),b(p.h));if(k(p))return p=Q(T,b(p)),new B(b(p.g),p.h);if(30<T.g.length){if(k(T)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var I=_,E=p;0>=E.l(T);)I=Y(I),E=Y(E);var v=K(I,1),R=K(E,1);for(E=K(E,2),I=K(I,2);!D(E);){var y=R.add(E);0>=y.l(T)&&(v=v.add(I),R=y),E=K(E,1),I=K(I,1)}return p=U(T,v.j(p)),new B(v,p)}for(v=g;0<=T.l(p);){for(I=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(I),y=R.j(p);k(y)||0<y.l(T);)I-=E,R=d(I),y=R.j(p);D(R)&&(R=_),v=v.add(R),T=U(T,y)}return new B(v,T)}r.A=function(T){return Q(this,T).h},r.and=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)&T.i(E);return new a(I,this.h&T.h)},r.or=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)|T.i(E);return new a(I,this.h|T.h)},r.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)^T.i(E);return new a(I,this.h^T.h)};function Y(T){for(var p=T.g.length+1,I=[],E=0;E<p;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(I,T.h)}function K(T,p){var I=p>>5;p%=32;for(var E=T.g.length-I,v=[],R=0;R<E;R++)v[R]=0<p?T.i(R+I)>>>p|T.i(R+I+1)<<32-p:T.i(R+I);return new a(v,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,wc=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Le=a}).apply(typeof cu<"u"?cu:typeof self<"u"?self:typeof window<"u"?window:{});var us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ac,cr,Rc,ps,qi,Pc,Vc,Sc;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof us=="object"&&us];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,l){if(l)t:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in h))break t;h=h[A]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,m=!1,A={next:function(){if(!m&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function _(o,l,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function P(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function D(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,A,S){for(var M=Array(arguments.length-2),et=2;et<arguments.length;et++)M[et-2]=arguments[et];return l.prototype[A].apply(m,M)}}function k(o){const l=o.length;if(0<l){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function b(o,l){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(c(m)){const A=o.length||0,S=m.length||0;o.length=A+S;for(let M=0;M<S;M++)o[A+M]=m[M]}else o.push(m)}}class U{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function G(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var Y=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function K(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function T(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function p(o){const l={};for(const h in o)l[h]=o[h];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)o[h]=m[h];for(let S=0;S<I.length;S++)h=I[S],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function v(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function y(){var o=li;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ht{constructor(){this.h=this.g=null}add(l,h){const m=Un.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Un=new U(()=>new zh,o=>o.reset());class zh{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,zn=!1,li=new Ht,ua=()=>{const o=u.Promise.resolve(void 0);Gn=()=>{o.then(jh)}};var jh=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){R(h)}var l=Un;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}zn=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var Kh=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return o}();function jn(o,l){if(Pt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Y){t:{try{Q(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&jn.aa.h.call(this)}}D(jn,Pt);var Qh={2:"touch",3:"pen",4:"mouse"};jn.prototype.h=function(){jn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),$h=0;function Wh(o,l,h,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=A,this.key=++$h,this.da=this.fa=!1}function jr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Kr(o){this.src=o,this.g={},this.h=0}Kr.prototype.add=function(o,l,h,m,A){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var M=di(o,l,m,A);return-1<M?(l=o[M],h||(l.fa=!1)):(l=new Wh(l,this.src,S,!!m,A),l.fa=h,o.push(l)),l};function hi(o,l){var h=l.type;if(h in o.g){var m=o.g[h],A=Array.prototype.indexOf.call(m,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(m,A,1),S&&(jr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function di(o,l,h,m){for(var A=0;A<o.length;++A){var S=o[A];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==m)return A}return-1}var fi="closure_lm_"+(1e6*Math.random()|0),mi={};function ca(o,l,h,m,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)ca(o,l[S],h,m,A);return null}return h=da(h),o&&o[zr]?o.K(l,h,d(m)?!!m.capture:!1,A):Hh(o,l,h,!1,m,A)}function Hh(o,l,h,m,A,S){if(!l)throw Error("Invalid event type");var M=d(A)?!!A.capture:!!A,et=pi(o);if(et||(o[fi]=et=new Kr(o)),h=et.add(l,h,m,M,S),h.proxy)return h;if(m=Jh(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)Kh||(A=M),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(ha(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Jh(){function o(h){return l.call(o.src,o.listener,h)}const l=Xh;return o}function la(o,l,h,m,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)la(o,l[S],h,m,A);else m=d(m)?!!m.capture:!!m,h=da(h),o&&o[zr]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=di(S,h,m,A),-1<h&&(jr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=pi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=di(l,h,m,A)),(h=-1<o?l[o]:null)&&gi(h))}function gi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[zr])hi(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent(ha(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=pi(l))?(hi(h,o),h.h==0&&(h.src=null,l[fi]=null)):jr(o)}}}function ha(o){return o in mi?mi[o]:mi[o]="on"+o}function Xh(o,l){if(o.da)o=!0;else{l=new jn(l,this);var h=o.listener,m=o.ha||o.src;o.fa&&gi(o),o=h.call(m,l)}return o}function pi(o){return o=o[fi],o instanceof Kr?o:null}var _i="__closure_events_fn_"+(1e9*Math.random()>>>0);function da(o){return typeof o=="function"?o:(o[_i]||(o[_i]=function(l){return o.handleEvent(l)}),o[_i])}function Vt(){oe.call(this),this.i=new Kr(this),this.M=this,this.F=null}D(Vt,oe),Vt.prototype[zr]=!0,Vt.prototype.removeEventListener=function(o,l,h,m){la(this,o,l,h,m)};function Nt(o,l){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new Pt(l,o);else if(l instanceof Pt)l.target=l.target||o;else{var A=l;l=new Pt(m,o),E(l,A)}if(A=!0,h)for(var S=h.length-1;0<=S;S--){var M=l.g=h[S];A=Qr(M,m,!0,l)&&A}if(M=l.g=o,A=Qr(M,m,!0,l)&&A,A=Qr(M,m,!1,l)&&A,h)for(S=0;S<h.length;S++)M=l.g=h[S],A=Qr(M,m,!1,l)&&A}Vt.prototype.N=function(){if(Vt.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],m=0;m<h.length;m++)jr(h[m]);delete o.g[l],o.h--}}this.F=null},Vt.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},Vt.prototype.L=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function Qr(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var M=l[S];if(M&&!M.da&&M.capture==h){var et=M.listener,vt=M.ha||M.src;M.fa&&hi(o.i,M),A=et.call(vt,m)!==!1&&A}}return A&&!m.defaultPrevented}function fa(o,l,h){if(typeof o=="function")h&&(o=_(o,h));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function ma(o){o.g=fa(()=>{o.g=null,o.i&&(o.i=!1,ma(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Yh extends oe{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ma(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(o){oe.call(this),this.h=o,this.g={}}D(Kn,oe);var ga=[];function pa(o){K(o.g,function(l,h){this.g.hasOwnProperty(h)&&gi(l)},o),o.g={}}Kn.prototype.N=function(){Kn.aa.N.call(this),pa(this)},Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yi=u.JSON.stringify,Zh=u.JSON.parse,td=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ii(){}Ii.prototype.h=null;function _a(o){return o.h||(o.h=o.i())}function ya(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ti(){Pt.call(this,"d")}D(Ti,Pt);function Ei(){Pt.call(this,"c")}D(Ei,Pt);var Ve={},Ia=null;function $r(){return Ia=Ia||new Vt}Ve.La="serverreachability";function Ta(o){Pt.call(this,Ve.La,o)}D(Ta,Pt);function $n(o){const l=$r();Nt(l,new Ta(l))}Ve.STAT_EVENT="statevent";function Ea(o,l){Pt.call(this,Ve.STAT_EVENT,o),this.stat=l}D(Ea,Pt);function Mt(o){const l=$r();Nt(l,new Ea(l,o))}Ve.Ma="timingevent";function va(o,l){Pt.call(this,Ve.Ma,o),this.size=l}D(va,Pt);function Wn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function ed(o,l,h,m,A,S){o.info(function(){if(o.g)if(S)for(var M="",et=S.split("&"),vt=0;vt<et.length;vt++){var X=et[vt].split("=");if(1<X.length){var St=X[0];X=X[1];var bt=St.split("_");M=2<=bt.length&&bt[1]=="type"?M+(St+"="+X+"&"):M+(St+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+h+`
`+M})}function nd(o,l,h,m,A,S,M){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+h+`
`+S+" "+M})}function Ze(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+sd(o,h)+(m?" "+m:"")})}function rd(o,l){o.info(function(){return"TIMEOUT: "+l})}Hn.prototype.info=function(){};function sd(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<A.length;M++)A[M]=""}}}}return yi(h)}catch{return l}}var Wr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vi;function Hr(){}D(Hr,Ii),Hr.prototype.g=function(){return new XMLHttpRequest},Hr.prototype.i=function(){return{}},vi=new Hr;function ae(o,l,h,m){this.j=o,this.i=l,this.l=h,this.R=m||1,this.U=new Kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Aa}function Aa(){this.i=null,this.g="",this.h=!1}var Ra={},wi={};function Ai(o,l,h){o.L=1,o.v=Zr(Jt(l)),o.m=h,o.P=!0,Pa(o,null)}function Pa(o,l){o.F=Date.now(),Jr(o),o.A=Jt(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),qa(h.i,"t",m),o.C=0,h=o.j.J,o.h=new Aa,o.g=su(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Yh(_(o.Y,o,o.g),o.O)),l=o.U,h=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(ga[0]=A.toString()),A=ga);for(var S=0;S<A.length;S++){var M=ca(h,A[S],m||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),$n(),ed(o.i,o.u,o.A,o.l,o.R,o.m)}ae.prototype.ca=function(o){o=o.target;const l=this.M;l&&Xt(o)==3?l.j():this.Y(o)},ae.prototype.Y=function(o){try{if(o==this.g)t:{const bt=Xt(this.g);var l=this.g.Ba();const nn=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||$a(this.g)))){this.J||bt!=4||l==7||(l==8||0>=nn?$n(3):$n(2)),Ri(this);var h=this.g.Z();this.X=h;e:if(Va(this)){var m=$a(this.g);o="";var A=m.length,S=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Se(this),Jn(this);var M="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(S&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,nd(this.i,this.u,this.A,this.l,this.R,bt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,vt=this.g;if((et=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(et)){var X=et;break e}}X=null}if(h=X)Ze(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pi(this,h);else{this.o=!1,this.s=3,Mt(12),Se(this),Jn(this);break t}}if(this.P){h=!0;let Gt;for(;!this.J&&this.C<M.length;)if(Gt=id(this,M),Gt==wi){bt==4&&(this.s=4,Mt(14),h=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Ra){this.s=4,Mt(15),Ze(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else Ze(this.i,this.l,Gt,null),Pi(this,Gt);if(Va(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||M.length!=0||this.h.h||(this.s=1,Mt(16),h=!1),this.o=this.o&&h,!h)Ze(this.i,this.l,M,"[Invalid Chunked Response]"),Se(this),Jn(this);else if(0<M.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Di(St),St.M=!0,Mt(11))}}else Ze(this.i,this.l,M,null),Pi(this,M);bt==4&&Se(this),this.o&&!this.J&&(bt==4?tu(this.j,this):(this.o=!1,Jr(this)))}else vd(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),Se(this),Jn(this)}}}catch{}finally{}};function Va(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function id(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?wi:(h=Number(l.substring(h,m)),isNaN(h)?Ra:(m+=1,m+h>l.length?wi:(l=l.slice(m,m+h),o.C=m+h,l)))}ae.prototype.cancel=function(){this.J=!0,Se(this)};function Jr(o){o.S=Date.now()+o.I,Sa(o,o.I)}function Sa(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wn(_(o.ba,o),l)}function Ri(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ae.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(rd(this.i,this.A),this.L!=2&&($n(),Mt(17)),Se(this),this.s=2,Jn(this)):Sa(this,this.S-o)};function Jn(o){o.j.G==0||o.J||tu(o.j,o)}function Se(o){Ri(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,pa(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Pi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Vi(h.h,o))){if(!o.K&&Vi(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)is(h),rs(h);else break t;xi(h),Mt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Wn(_(h.Za,h),6e3));if(1>=xa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ce(h,11)}else if((o.K||h.g==o)&&is(h),!G(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let X=A[l];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const St=X[3];St!=null&&(h.la=St,h.j.info("VER="+h.la));const bt=X[4];bt!=null&&(h.Aa=bt,h.j.info("SVER="+h.Aa));const nn=X[5];nn!=null&&typeof nn=="number"&&0<nn&&(m=1.5*nn,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Gt=o.g;if(Gt){const as=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(as){var S=m.h;S.g||as.indexOf("spdy")==-1&&as.indexOf("quic")==-1&&as.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Si(S,S.h),S.h=null))}if(m.D){const ki=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;ki&&(m.ya=ki,st(m.I,m.D,ki))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var M=o;if(m.qa=ru(m,m.J?m.ia:null,m.W),M.K){Da(m.h,M);var et=M,vt=m.L;vt&&(et.I=vt),et.B&&(Ri(et),Jr(et)),m.g=M}else Ya(m);0<h.i.length&&ss(h)}else X[0]!="stop"&&X[0]!="close"||Ce(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Ce(h,7):Ci(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}$n(4)}catch{}}var od=class{constructor(o,l){this.g=o,this.map=l}};function ba(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ca(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function xa(o){return o.h?1:o.g?o.g.size:0}function Vi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Si(o,l){o.g?o.g.add(l):o.h=l}function Da(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ba.prototype.cancel=function(){if(this.i=ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ka(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return k(o.i)}function ad(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],h=o.length,m=0;m<h;m++)l.push(o[m]);return l}l=[],h=0;for(m in o)l[h++]=o[m];return l}function ud(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const m in o)l[h++]=m;return l}}}function Na(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=ud(o),m=ad(o),A=m.length,S=0;S<A;S++)l.call(void 0,m[S],h&&h[S],o)}var Ma=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cd(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),A=null;if(0<=m){var S=o[h].substring(0,m);A=o[h].substring(m+1)}else S=o[h];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function be(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof be){this.h=o.h,Xr(this,o.j),this.o=o.o,this.g=o.g,Yr(this,o.s),this.l=o.l;var l=o.i,h=new Zn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Fa(this,h),this.m=o.m}else o&&(l=String(o).match(Ma))?(this.h=!1,Xr(this,l[1]||"",!0),this.o=Xn(l[2]||""),this.g=Xn(l[3]||"",!0),Yr(this,l[4]),this.l=Xn(l[5]||"",!0),Fa(this,l[6]||"",!0),this.m=Xn(l[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}be.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Yn(l,Oa,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Yn(l,Oa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Yn(h,h.charAt(0)=="/"?dd:hd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Yn(h,md)),o.join("")};function Jt(o){return new be(o)}function Xr(o,l,h){o.j=h?Xn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Yr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Fa(o,l,h){l instanceof Zn?(o.i=l,gd(o.i,o.h)):(h||(l=Yn(l,fd)),o.i=new Zn(l,o.h))}function st(o,l,h){o.i.set(l,h)}function Zr(o){return st(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Xn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,ld),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ld(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Oa=/[#\/\?@]/g,hd=/[#\?:]/g,dd=/[#\?]/g,fd=/[#\?@]/g,md=/#/g;function Zn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ue(o){o.g||(o.g=new Map,o.h=0,o.i&&cd(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=Zn.prototype,r.add=function(o,l){ue(this),this.i=null,o=tn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function La(o,l){ue(o),l=tn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ba(o,l){return ue(o),l=tn(o,l),o.g.has(l)}r.forEach=function(o,l){ue(this),this.g.forEach(function(h,m){h.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){ue(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let m=0;m<l.length;m++){const A=o[m];for(let S=0;S<A.length;S++)h.push(l[m])}return h},r.V=function(o){ue(this);let l=[];if(typeof o=="string")Ba(this,o)&&(l=l.concat(this.g.get(tn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},r.set=function(o,l){return ue(this),this.i=null,o=tn(this,o),Ba(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function qa(o,l,h){La(o,l),0<h.length&&(o.i=null,o.g.set(tn(o,l),k(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var m=l[h];const S=encodeURIComponent(String(m)),M=this.V(m);for(m=0;m<M.length;m++){var A=S;M[m]!==""&&(A+="="+encodeURIComponent(String(M[m]))),o.push(A)}}return this.i=o.join("&")};function tn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function gd(o,l){l&&!o.j&&(ue(o),o.i=null,o.g.forEach(function(h,m){var A=m.toLowerCase();m!=A&&(La(this,m),qa(this,A,h))},o)),o.j=l}function pd(o,l){const h=new Hn;if(u.Image){const m=new Image;m.onload=P(ce,h,"TestLoadImage: loaded",!0,l,m),m.onerror=P(ce,h,"TestLoadImage: error",!1,l,m),m.onabort=P(ce,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=P(ce,h,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function _d(o,l){const h=new Hn,m=new AbortController,A=setTimeout(()=>{m.abort(),ce(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(S=>{clearTimeout(A),S.ok?ce(h,"TestPingServer: ok",!0,l):ce(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),ce(h,"TestPingServer: error",!1,l)})}function ce(o,l,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function yd(){this.g=new td}function Id(o,l,h){const m=h||"";try{Na(o,function(A,S){let M=A;d(A)&&(M=yi(A)),l.push(m+S+"="+encodeURIComponent(M))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function ts(o){this.l=o.Ub||null,this.j=o.eb||!1}D(ts,Ii),ts.prototype.g=function(){return new es(this.l,this.j)},ts.prototype.i=function(o){return function(){return o}}({});function es(o,l){Vt.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(es,Vt),r=es.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,er(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ua(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ua(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?tr(this):er(this),this.readyState==3&&Ua(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,tr(this))},r.Qa=function(o){this.g&&(this.response=o,tr(this))},r.ga=function(){this.g&&tr(this)};function tr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,er(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function er(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ga(o){let l="";return K(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function bi(o,l,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=Ga(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):st(o,l,h))}function ht(o){Vt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ht,Vt);var Td=/^https?$/i,Ed=["POST","PUT"];r=ht.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vi.g(),this.v=this.o?_a(this.o):_a(vi),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){za(this,S);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())h.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Ed,l,void 0))||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of h)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qa(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){za(this,S)}};function za(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ja(o),ns(o)}function ja(o){o.A||(o.A=!0,Nt(o,"complete"),Nt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Nt(this,"complete"),Nt(this,"abort"),ns(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ns(this,!0)),ht.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ka(this):this.bb())},r.bb=function(){Ka(this)};function Ka(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xt(o)!=4||o.Z()!=2)){if(o.u&&Xt(o)==4)fa(o.Ea,0,o);else if(Nt(o,"readystatechange"),Xt(o)==4){o.h=!1;try{const M=o.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var m;if(m=M===0){var A=String(o.D).match(Ma)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Td.test(A?A.toLowerCase():"")}h=m}if(h)Nt(o,"complete"),Nt(o,"success");else{o.m=6;try{var S=2<Xt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",ja(o)}}finally{ns(o)}}}}function ns(o,l){if(o.g){Qa(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Nt(o,"ready");try{h.onreadystatechange=m}catch{}}}function Qa(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Xt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Zh(l)}};function $a(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vd(o){const l={};o=(o.g&&2<=Xt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(G(o[m]))continue;var h=v(o[m]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[A]||[];l[A]=S,S.push(h)}T(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Wa(o){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,o),this.cb=nr("retryDelaySeedMs",1e4,o),this.Wa=nr("forwardChannelMaxRetries",2,o),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ba(o&&o.concurrentRequestLimit),this.Da=new yd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Wa.prototype,r.la=8,r.G=1,r.connect=function(o,l,h,m){Mt(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=ru(this,null,this.W),ss(this)};function Ci(o){if(Ha(o),o.G==3){var l=o.U++,h=Jt(o.I);if(st(h,"SID",o.K),st(h,"RID",l),st(h,"TYPE","terminate"),rr(o,h),l=new ae(o,o.j,l),l.L=2,l.v=Zr(Jt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=su(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Jr(l)}nu(o)}function rs(o){o.g&&(Di(o),o.g.cancel(),o.g=null)}function Ha(o){rs(o),o.u&&(u.clearTimeout(o.u),o.u=null),is(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ss(o){if(!Ca(o.h)&&!o.s){o.s=!0;var l=o.Ga;Gn||ua(),zn||(Gn(),zn=!0),li.add(l,o),o.B=0}}function wd(o,l){return xa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wn(_(o.Ga,o,l),eu(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new ae(this,this.j,o);let S=this.o;if(this.S&&(S?(S=p(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=Xa(this,A,l),h=Jt(this.I),st(h,"RID",o),st(h,"CVER",22),this.D&&st(h,"X-HTTP-Session-Id",this.D),rr(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(Ga(S)))+"&"+l:this.m&&bi(h,this.m,S)),Si(this.h,A),this.Ua&&st(h,"TYPE","init"),this.P?(st(h,"$req",l),st(h,"SID","null"),A.T=!0,Ai(A,h,null)):Ai(A,h,l),this.G=2}}else this.G==3&&(o?Ja(this,o):this.i.length==0||Ca(this.h)||Ja(this))};function Ja(o,l){var h;l?h=l.l:h=o.U++;const m=Jt(o.I);st(m,"SID",o.K),st(m,"RID",h),st(m,"AID",o.T),rr(o,m),o.m&&o.o&&bi(m,o.m,o.o),h=new ae(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Xa(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Si(o.h,h),Ai(h,m,l)}function rr(o,l){o.H&&K(o.H,function(h,m){st(l,m,h)}),o.l&&Na({},function(h,m){st(l,m,h)})}function Xa(o,l,h){h=Math.min(o.i.length,h);var m=o.l?_(o.l.Na,o.l,o):null;t:{var A=o.i;let S=-1;for(;;){const M=["count="+h];S==-1?0<h?(S=A[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let et=!0;for(let vt=0;vt<h;vt++){let X=A[vt].g;const St=A[vt].map;if(X-=S,0>X)S=Math.max(0,A[vt].g-100),et=!1;else try{Id(St,M,"req"+X+"_")}catch{m&&m(St)}}if(et){m=M.join("&");break t}}}return o=o.i.splice(0,h),l.D=o,m}function Ya(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Gn||ua(),zn||(Gn(),zn=!0),li.add(l,o),o.v=0}}function xi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wn(_(o.Fa,o),eu(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Za(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wn(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),rs(this),Za(this))};function Di(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Za(o){o.g=new ae(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Jt(o.qa);st(l,"RID","rpc"),st(l,"SID",o.K),st(l,"AID",o.T),st(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&st(l,"TO",o.ja),st(l,"TYPE","xmlhttp"),rr(o,l),o.m&&o.o&&bi(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Zr(Jt(l)),h.m=null,h.P=!0,Pa(h,o)}r.Za=function(){this.C!=null&&(this.C=null,rs(this),xi(this),Mt(19))};function is(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function tu(o,l){var h=null;if(o.g==l){is(o),Di(o),o.g=null;var m=2}else if(Vi(o.h,l))h=l.D,Da(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=$r(),Nt(m,new va(m,h)),ss(o)}else Ya(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&wd(o,l)||m==2&&xi(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:Ce(o,5);break;case 4:Ce(o,10);break;case 3:Ce(o,6);break;default:Ce(o,2)}}}function eu(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Ce(o,l){if(o.j.info("Error code "+l),l==2){var h=_(o.fb,o),m=o.Xa;const A=!m;m=new be(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Xr(m,"https"),Zr(m),A?pd(m.toString(),h):_d(m.toString(),h)}else Mt(2);o.G=0,o.l&&o.l.sa(l),nu(o),Ha(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function nu(o){if(o.G=0,o.ka=[],o.l){const l=ka(o.h);(l.length!=0||o.i.length!=0)&&(b(o.ka,l),b(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function ru(o,l,h){var m=h instanceof be?Jt(h):new be(h);if(m.g!="")l&&(m.g=l+"."+m.g),Yr(m,m.s);else{var A=u.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new be(null);m&&Xr(S,m),l&&(S.g=l),A&&Yr(S,A),h&&(S.l=h),m=S}return h=o.D,l=o.ya,h&&l&&st(m,h,l),st(m,"VER",o.la),rr(o,m),m}function su(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ht(new ts({eb:h})):new ht(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function iu(){}r=iu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function os(){}os.prototype.g=function(o,l){return new Bt(o,l)};function Bt(o,l){Vt.call(this),this.g=new Wa(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!G(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!G(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new en(this)}D(Bt,Vt),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Ci(this.g)},Bt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=yi(o),o=h);l.i.push(new od(l.Ya++,o)),l.G==3&&ss(l)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Ci(this.g),delete this.g,Bt.aa.N.call(this)};function ou(o){Ti.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}D(ou,Ti);function au(){Ei.call(this),this.status=1}D(au,Ei);function en(o){this.g=o}D(en,iu),en.prototype.ua=function(){Nt(this.g,"a")},en.prototype.ta=function(o){Nt(this.g,new ou(o))},en.prototype.sa=function(o){Nt(this.g,new au)},en.prototype.ra=function(){Nt(this.g,"b")},os.prototype.createWebChannel=os.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,Sc=function(){return new os},Vc=function(){return $r()},Pc=Ve,qi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wr.NO_ERROR=0,Wr.TIMEOUT=8,Wr.HTTP_ERROR=6,ps=Wr,wa.COMPLETE="complete",Rc=wa,ya.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",Vt.prototype.listen=Vt.prototype.K,cr=ya,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,Ac=ht}).apply(typeof us<"u"?us:typeof self<"u"?self:typeof window<"u"?window:{});const lu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Rd("@firebase/firestore");function un(){return pe.logLevel}function fp(r){pe.setLogLevel(r)}function C(r,...t){if(pe.logLevel<=Yt.DEBUG){const e=t.map(ao);pe.debug(`Firestore (${xn}): ${r}`,...e)}}function ft(r,...t){if(pe.logLevel<=Yt.ERROR){const e=t.map(ao);pe.error(`Firestore (${xn}): ${r}`,...e)}}function Ut(r,...t){if(pe.logLevel<=Yt.WARN){const e=t.map(ao);pe.warn(`Firestore (${xn}): ${r}`,...e)}}function ao(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r="Unexpected state"){const t=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+r;throw ft(t),new Error(t)}function L(r,t){r||O()}function mp(r,t){r||O()}function N(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ad{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class Md{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Fd{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new bc(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new It(t)}}class Od{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=It.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ld{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Od(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){L(this.o===void 0);const n=i=>{i.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string"),this.R=e.token,new Cc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class gp{getToken(){return Promise.resolve(new Cc(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=qd(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function mn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function Dc(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ct(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(t){return new q(t)}static min(){return new q(new ct(0,0))}static max(){return new q(new ct(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return yr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yr?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends yr{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Ud=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends yr{construct(t,e,n){return new at(t,e,n)}static isValidIdentifier(t){return Ud.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new x(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(W.fromString(t))}static fromName(t){return new F(W.fromString(t).popFirst(5))}static empty(){return new F(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new W(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function Ui(r){return r.fields.find(t=>t.kind===2)}function De(r){return r.fields.filter(t=>t.kind!==2)}function Gd(r,t){let e=z(r.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let n=0;n<Math.min(r.fields.length,t.fields.length);++n)if(e=zd(r.fields[n],t.fields[n]),e!==0)return e;return z(r.fields.length,t.fields.length)}gn.UNKNOWN_ID=-1;class Be{constructor(t,e){this.fieldPath=t,this.kind=e}}function zd(r,t){const e=at.comparator(r.fieldPath,t.fieldPath);return e!==0?e:z(r.kind,t.kind)}class pn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new pn(0,qt.min())}}function kc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=q.fromTimestamp(n===1e9?new ct(e+1,0):new ct(e,n));return new qt(s,F.empty(),t)}function Nc(r){return new qt(r.readTime,r.key,-1)}class qt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new qt(q.min(),F.empty(),-1)}static max(){return new qt(q.max(),F.empty(),-1)}}function uo(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Mc)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new w((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof w?e:w.resolve(e)}catch(e){return w.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):w.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):w.reject(e)}static resolve(t){return new w((e,n)=>{e(t)})}static reject(t){return new w((e,n)=>{n(t)})}static waitFor(t){return new w((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},c=>n(c))}),a=!0,i===s&&e()})}static or(t){let e=w.resolve(!1);for(const n of t)e=e.next(s=>s?w.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new w((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let c=0;c<i;c++){const d=c;e(t[d]).next(f=>{a[d]=f,++u,u===i&&n(a)},f=>s(f))}})}static doWhile(t,e){return new w((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{static open(t,e,n,s){try{return new qs(e,t.transaction(s,n))}catch(i){throw new fr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new fr(t,e.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=co(n.target.error);this.V.reject(new fr(t,s))}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(C("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Kd(e)}}class Kt{static delete(t){return C("SimpleDb","Removing database:",t),ke(window.indexedDB.deleteDatabase(t)).toPromise()}static p(){if(!Cd())return!1;if(Kt.S())return!0;const t=Rs(),e=Kt.D(t),n=0<e&&e<10,s=Oc(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static S(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.v)==="YES"}static C(t,e){return t.store(e)}static D(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.F=n,Kt.D(Rs())===12.2&&ft("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async M(t){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new fr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new x(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new x(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new fr(t,a))},s.onupgradeneeded=i=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.F.O(a,s.transaction,i.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(t){this.N=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(t);const u=qs.open(this.db,t,i?"readonly":"readwrite",n),c=s(u).next(d=>(u.g(),d)).catch(d=>(u.abort(d),w.reject(d))).toPromise();return c.catch(()=>{}),await u.m,c}catch(u){const c=u,d=c.name!=="FirebaseError"&&a<3;if(C("SimpleDb","Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Oc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class jd{constructor(t){this.B=t,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(t){this.B=t}done(){this.k=!0}$(t){this.q=t}delete(){return ke(this.B.delete())}}class fr extends x{constructor(t,e){super(V.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function we(r){return r.name==="IndexedDbTransactionError"}class Kd{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(C("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),ke(n)}add(t){return C("SimpleDb","ADD",this.store.name,t,t),ke(this.store.add(t))}get(t){return ke(this.store.get(t)).next(e=>(e===void 0&&(e=null),C("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return C("SimpleDb","DELETE",this.store.name,t),ke(this.store.delete(t))}count(){return C("SimpleDb","COUNT",this.store.name),ke(this.store.count())}U(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}})}{const i=this.cursor(n),a=[];return this.W(i,(u,c)=>{a.push(c)}).next(()=>a)}}G(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}j(t,e){C("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const s=this.cursor(n);return this.W(s,(i,a,u)=>u.delete())}J(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.W(s,e)}Y(t){const e=this.cursor({});return new w((n,s)=>{e.onerror=i=>{const a=co(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}W(t,e){const n=[];return new w((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new jd(u),d=e(u.primaryKey,u.value,c);if(d instanceof w){const f=d.catch(g=>(c.done(),w.reject(g)));n.push(f)}c.isDone?s():c.K===null?u.continue():u.continue(c.K)}}).next(()=>w.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function ke(r){return new w((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=co(n.target.error);e(s)}})}let hu=!1;function co(r){const t=Kt.D(Rs());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hu||(hu=!0,setTimeout(()=>{throw n},0)),n}}return r}class Qd{constructor(t,e){this.asyncQueue=t,this.Z=e,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(t){C("IndexBackfiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){we(e)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await ve(e)}await this.X(6e4)})}}class $d{constructor(t,e){this.localStore=t,this.persistence=e}async ee(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.te(e,t))}te(t,e){const n=new Set;let s=e,i=!0;return w.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return C("IndexBackfiller",`Processing collection: ${a}`),this.ne(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}ne(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.re(s,i)).next(u=>(C("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}re(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Nc(i);uo(a,n)>0&&(n=a)}),new qt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ft.oe=-1;function br(r){return r==null}function Ir(r){return r===0&&1/r==-1/0}function Lc(r){return typeof r=="number"&&Number.isInteger(r)&&!Ir(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=du(t)),t=Wd(r.get(e),t);return du(t)}function Wd(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case"":e+="";break;default:e+=i}}return e}function du(r){return r+""}function zt(r){const t=r.length;if(L(t>=2),t===2)return L(r.charAt(0)===""&&r.charAt(1)===""),W.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf("",i);switch((a<0||a>e)&&O(),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O()}i=a+2}return new W(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(r,t){return[r,Dt(t)]}function Bc(r,t,e){return[r,Dt(t),e]}const Hd={},Jd=["prefixPath","collectionGroup","readTime","documentId"],Xd=["prefixPath","collectionGroup","documentId"],Yd=["collectionGroup","readTime","prefixPath","documentId"],Zd=["canonicalId","targetId"],tf=["targetId","path"],ef=["path","targetId"],nf=["collectionId","parent"],rf=["indexId","uid"],sf=["uid","sequenceNumber"],of=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],af=["indexId","uid","orderedDocumentKey"],uf=["userId","collectionPath","documentId"],cf=["userId","collectionPath","largestBatchId"],lf=["userId","collectionGroup","largestBatchId"],qc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],hf=[...qc,"documentOverlays"],Uc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Gc=Uc,lo=[...Gc,"indexConfiguration","indexState","indexEntries"],df=lo,ff=[...lo,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Fc{constructor(t,e){super(),this._e=t,this.currentSequenceNumber=e}}function _t(r,t){const e=N(r);return Kt.C(e._e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ae(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function zc(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function jc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||wt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cs(this.root,t,this.comparator,!1)}getReverseIterator(){return new cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cs(this.root,t,this.comparator,!0)}}class cs{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class wt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??wt.RED,this.left=s??wt.EMPTY,this.right=i??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new wt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new gu(this.data.getIterator())}getIteratorFrom(t){return new gu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new tt(this.comparator);return e.data=t,e}}class gu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function rn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new tt(at.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return mn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Kc("Invalid base64 string: "+i):i}}(t);return new dt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const mf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(r){if(L(!!r),typeof r=="string"){let t=0;const e=mf.exec(r);if(L(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ot(r.seconds),nanos:ot(r.nanos)}}function ot(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ee(r){return typeof r=="string"?dt.fromBase64String(r):dt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Gs(r){const t=r.mapValue.fields.__previous_value__;return Us(t)?Gs(t):t}function Tr(r){const t=te(r.mapValue.fields.__local_write_time__.timestampValue);return new ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,e,n,s,i,a,u,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class qe{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ys={nullValue:"NULL_VALUE"};function _e(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Us(r)?4:Qc(r)?9007199254740991:zs(r)?10:11:O()}function Wt(r,t){if(r===t)return!0;const e=_e(r);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Tr(r).isEqual(Tr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=te(s.timestampValue),u=te(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ee(s.bytesValue).isEqual(ee(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ot(s.doubleValue),u=ot(i.doubleValue);return a===u?Ir(a)===Ir(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return mn(r.arrayValue.values||[],t.arrayValue.values||[],Wt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(mu(a)!==mu(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Wt(a[c],u[c])))return!1;return!0}(r,t);default:return O()}}function Er(r,t){return(r.values||[]).find(e=>Wt(e,t))!==void 0}function ye(r,t){if(r===t)return 0;const e=_e(r),n=_e(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=ot(i.integerValue||i.doubleValue),c=ot(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,t);case 3:return pu(r.timestampValue,t.timestampValue);case 4:return pu(Tr(r),Tr(t));case 5:return z(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ee(i),c=ee(a);return u.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const f=z(u[d],c[d]);if(f!==0)return f}return z(u.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=z(ot(i.latitude),ot(a.latitude));return u!==0?u:z(ot(i.longitude),ot(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return _u(r.arrayValue,t.arrayValue);case 10:return function(i,a){var u,c,d,f;const g=i.fields||{},_=a.fields||{},P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,D=(c=_.value)===null||c===void 0?void 0:c.arrayValue,k=z(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:_u(P,D)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===ge.mapValue&&a===ge.mapValue)return 0;if(i===ge.mapValue)return 1;if(a===ge.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=z(c[g],f[g]);if(_!==0)return _;const P=ye(u[c[g]],d[f[g]]);if(P!==0)return P}return z(c.length,f.length)}(r.mapValue,t.mapValue);default:throw O()}}function pu(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=te(r),n=te(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function _u(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=ye(e[s],n[s]);if(i)return i}return z(e.length,n.length)}function _n(r){return zi(r)}function zi(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=te(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ee(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return F.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=zi(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${zi(e.fields[a])}`;return s+"}"}(r.mapValue):O()}function Is(r){switch(_e(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Gs(r);return t?16+Is(t):16;case 5:return 2*r.stringValue.length;case 6:return ee(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Is(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Ae(n.fields,(i,a)=>{s+=i.length+Is(a)}),s}(r.mapValue);default:throw O()}}function Ue(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ji(r){return!!r&&"integerValue"in r}function vr(r){return!!r&&"arrayValue"in r}function yu(r){return!!r&&"nullValue"in r}function Iu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ts(r){return!!r&&"mapValue"in r}function zs(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function mr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Ae(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=mr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=mr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Qc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const $c={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function pf(r){return"nullValue"in r?ys:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Ue(qe.empty(),F.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?zs(r)?$c:{mapValue:{}}:O()}function _f(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Ue(qe.empty(),F.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?$c:"mapValue"in r?zs(r)?{mapValue:{}}:ge:O()}function Tu(r,t){const e=ye(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function Eu(r,t){const e=ye(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ts(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mr(e)}setAll(t){let e=at.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=mr(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ts(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ts(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ae(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new At(mr(this.value))}}function Wc(r){const t=[];return Ae(r.fields,(e,n)=>{const s=new at([e]);if(Ts(n)){const i=Wc(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new it(t,0,q.min(),q.min(),q.min(),At.empty(),0)}static newFoundDocument(t,e,n,s){return new it(t,1,e,q.min(),n,s,0)}static newNoDocument(t,e){return new it(t,2,e,q.min(),q.min(),At.empty(),0)}static newUnknownDocument(t,e){return new it(t,3,e,q.min(),q.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof it&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.position=t,this.inclusive=e}}function vu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=F.comparator(F.fromName(a.referenceValue),e.key):n=ye(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function wu(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Wt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e="asc"){this.field=t,this.dir=e}}function yf(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{}class H extends Hc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new If(t,e,n):e==="array-contains"?new vf(t,n):e==="in"?new el(t,n):e==="not-in"?new wf(t,n):e==="array-contains-any"?new Af(t,n):new H(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Tf(t,n):new Ef(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends Hc{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Z(t,e)}matches(t){return yn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yn(r){return r.op==="and"}function Ki(r){return r.op==="or"}function ho(r){return Jc(r)&&yn(r)}function Jc(r){for(const t of r.filters)if(t instanceof Z)return!1;return!0}function Qi(r){if(r instanceof H)return r.field.canonicalString()+r.op.toString()+_n(r.value);if(ho(r))return r.filters.map(t=>Qi(t)).join(",");{const t=r.filters.map(e=>Qi(e)).join(",");return`${r.op}(${t})`}}function Xc(r,t){return r instanceof H?function(n,s){return s instanceof H&&n.op===s.op&&n.field.isEqual(s.field)&&Wt(n.value,s.value)}(r,t):r instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Xc(a,s.filters[u]),!0):!1}(r,t):void O()}function Yc(r,t){const e=r.filters.concat(t);return Z.create(e,r.op)}function Zc(r){return r instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${_n(e.value)}`}(r):r instanceof Z?function(e){return e.op.toString()+" {"+e.getFilters().map(Zc).join(" ,")+"}"}(r):"Filter"}class If extends H{constructor(t,e,n){super(t,e,n),this.key=F.fromName(n.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tf extends H{constructor(t,e){super(t,"in",e),this.keys=tl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ef extends H{constructor(t,e){super(t,"not-in",e),this.keys=tl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function tl(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>F.fromName(n.referenceValue))}class vf extends H{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return vr(e)&&Er(e.arrayValue,this.value)}}class el extends H{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Er(this.value.arrayValue,e)}}class wf extends H{constructor(t,e){super(t,"not-in",e)}matches(t){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Er(this.value.arrayValue,e)}}class Af extends H{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!vr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Er(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function $i(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Rf(r,t,e,n,s,i,a)}function Ge(r){const t=N(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Qi(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),br(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>_n(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>_n(n)).join(",")),t.ue=e}return t.ue}function Cr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!yf(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Xc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!wu(r.startAt,t.startAt)&&wu(r.endAt,t.endAt)}function Ps(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Vs(r,t){return r.filters.filter(e=>e instanceof H&&e.field.isEqual(t))}function Au(r,t,e){let n=ys,s=!0;for(const i of Vs(r,t)){let a=ys,u=!0;switch(i.op){case"<":case"<=":a=pf(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=ys}Tu({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Tu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function Ru(r,t,e){let n=ge,s=!0;for(const i of Vs(r,t)){let a=ge,u=!0;switch(i.op){case">=":case">":a=_f(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=ge}Eu({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Eu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nl(r,t,e,n,s,i,a,u){return new ne(r,t,e,n,s,i,a,u)}function Dn(r){return new ne(r)}function Pu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function fo(r){return r.collectionGroup!==null}function dn(r){const t=N(r);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new tt(at.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new wr(i,n))}),e.has(at.keyField().canonicalString())||t.ce.push(new wr(at.keyField(),n))}return t.ce}function kt(r){const t=N(r);return t.le||(t.le=sl(t,dn(r))),t.le}function rl(r){const t=N(r);return t.he||(t.he=sl(t,r.explicitOrderBy)),t.he}function sl(r,t){if(r.limitType==="F")return $i(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new wr(s.field,i)});const e=r.endAt?new Ie(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ie(r.startAt.position,r.startAt.inclusive):null;return $i(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Wi(r,t){const e=r.filters.concat([t]);return new ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Ss(r,t,e){return new ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function xr(r,t){return Cr(kt(r),kt(t))&&r.limitType===t.limitType}function il(r){return`${Ge(kt(r))}|lt:${r.limitType}`}function cn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Zc(s)).join(", ")}]`),br(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_n(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_n(s)).join(",")),`Target(${n})`}(kt(r))}; limitType=${r.limitType})`}function Dr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of dn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,c){const d=vu(a,u,c);return a.inclusive?d<=0:d<0}(n.startAt,dn(n),s)||n.endAt&&!function(a,u,c){const d=vu(a,u,c);return a.inclusive?d>=0:d>0}(n.endAt,dn(n),s))}(r,t)}function ol(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function al(r){return(t,e)=>{let n=!1;for(const s of dn(r)){const i=Pf(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Pf(r,t,e){const n=r.field.isKeyField()?F.comparator(t.key,e.key):function(i,a,u){const c=a.data.field(i),d=u.data.field(i);return c!==null&&d!==null?ye(c,d):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ae(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return jc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new rt(F.comparator);function Lt(){return Vf}const ul=new rt(F.comparator);function lr(...r){let t=ul;for(const e of r)t=t.insert(e.key,e);return t}function cl(r){let t=ul;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function jt(){return gr()}function ll(){return gr()}function gr(){return new re(r=>r.toString(),(r,t)=>r.isEqual(t))}const Sf=new rt(F.comparator),bf=new tt(F.comparator);function j(...r){let t=bf;for(const e of r)t=t.add(e);return t}const Cf=new tt(z);function mo(){return Cf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ir(t)?"-0":t}}function hl(r){return{integerValue:""+r}}function dl(r,t){return Lc(t)?hl(t):go(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this._=void 0}}function xf(r,t,e){return r instanceof In?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Us(i)&&(i=Gs(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(e,t):r instanceof ze?ml(r,t):r instanceof je?gl(r,t):function(s,i){const a=fl(s,i),u=Vu(a)+Vu(s.Pe);return ji(a)&&ji(s.Pe)?hl(u):go(s.serializer,u)}(r,t)}function Df(r,t,e){return r instanceof ze?ml(r,t):r instanceof je?gl(r,t):e}function fl(r,t){return r instanceof Tn?function(n){return ji(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class In extends js{}class ze extends js{constructor(t){super(),this.elements=t}}function ml(r,t){const e=pl(t);for(const n of r.elements)e.some(s=>Wt(s,n))||e.push(n);return{arrayValue:{values:e}}}class je extends js{constructor(t){super(),this.elements=t}}function gl(r,t){let e=pl(t);for(const n of r.elements)e=e.filter(s=>!Wt(s,n));return{arrayValue:{values:e}}}class Tn extends js{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Vu(r){return ot(r.integerValue||r.doubleValue)}function pl(r){return vr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e){this.field=t,this.transform=e}}function kf(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof ze&&s instanceof ze||n instanceof je&&s instanceof je?mn(n.elements,s.elements,Wt):n instanceof Tn&&s instanceof Tn?Wt(n.Pe,s.Pe):n instanceof In&&s instanceof In}(r.transform,t.transform)}class Nf{constructor(t,e){this.version=t,this.transformResults=e}}class ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ut}static exists(t){return new ut(void 0,t)}static updateTime(t){return new ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Es(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ks{}function _l(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Nn(r.key,ut.none()):new kn(r.key,r.data,ut.none());{const e=r.data,n=At.empty();let s=new tt(at.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new se(r.key,n,new Ot(s.toArray()),ut.none())}}function Mf(r,t,e){r instanceof kn?function(s,i,a){const u=s.value.clone(),c=bu(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof se?function(s,i,a){if(!Es(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=bu(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(yl(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function pr(r,t,e,n){return r instanceof kn?function(i,a,u,c){if(!Es(i.precondition,a))return u;const d=i.value.clone(),f=Cu(i.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof se?function(i,a,u,c){if(!Es(i.precondition,a))return u;const d=Cu(i.fieldTransforms,c,a),f=a.data;return f.setAll(yl(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(i,a,u){return Es(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function Ff(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=fl(n.transform,s||null);i!=null&&(e===null&&(e=At.empty()),e.set(n.field,i))}return e||null}function Su(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mn(n,s,(i,a)=>kf(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class kn extends Ks{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends Ks{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function bu(r,t,e){const n=new Map;L(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Df(a,u,e[s]))}return n}function Cu(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,xf(i,a,t))}return n}class Nn extends Ks{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class po extends Ks{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Mf(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=pr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=pr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ll();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const c=_l(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&mn(this.mutations,t.mutations,(e,n)=>Su(e,n))&&mn(this.baseMutations,t.baseMutations,(e,n)=>Su(e,n))}}class yo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length);let s=function(){return Sf}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new yo(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,J;function Tl(r){switch(r){default:return O();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function El(r){if(r===void 0)return ft("GRPC error has no .code"),V.UNKNOWN;switch(r){case pt.OK:return V.OK;case pt.CANCELLED:return V.CANCELLED;case pt.UNKNOWN:return V.UNKNOWN;case pt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case pt.INTERNAL:return V.INTERNAL;case pt.UNAVAILABLE:return V.UNAVAILABLE;case pt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case pt.NOT_FOUND:return V.NOT_FOUND;case pt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case pt.ABORTED:return V.ABORTED;case pt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case pt.DATA_LOSS:return V.DATA_LOSS;default:return O()}}(J=pt||(pt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Le([4294967295,4294967295],0);function xu(r){const t=vl().encode(r),e=new wc;return e.update(t),new Uint8Array(e.digest())}function Du(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Le([e,n],0),new Le([s,i],0)]}class To{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new hr(`Invalid padding: ${e}`);if(n<0)throw new hr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new hr(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=Le.fromNumber(this.Te)}Ee(t,e,n){let s=t.add(e.multiply(Le.fromNumber(n)));return s.compare(Lf)===1&&(s=new Le([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=xu(t),[n,s]=Du(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);if(!this.de(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new To(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Te===0)return;const e=xu(t),[n,s]=Du(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Mr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Nr(q.min(),s,new rt(z),Lt(),j())}}class Mr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Mr(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class wl{constructor(t,e){this.targetId=t,this.me=e}}class Al{constructor(t,e,n=dt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ku{constructor(){this.fe=0,this.ge=Nu(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=j(),e=j(),n=j();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O()}}),new Mr(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Nu()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Bf{constructor(t){this.Le=t,this.Be=new Map,this.ke=Lt(),this.qe=ls(),this.Qe=ls(),this.Ke=new rt(z)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.je(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,n=t.me.count,s=this.Ye(e);if(s){const i=s.target;if(Ps(i))if(n===0){const a=new F(i.path);this.We(e,a,it.newNoDocument(a,q.min()))}else L(n===1);else{const a=this.Ze(e);if(a!==n){const u=this.Xe(t),c=u?this.et(u,t,a):1;if(c!==0){this.He(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}bs==null||bs.tt(function(f,g,_,P,D){var k,b,U,G,B,Q;const Y={localCacheCount:f,existenceFilterCount:g.count,databaseId:_.database,projectId:_.projectId},K=g.unchangedNames;return K&&(Y.bloomFilter={applied:D===0,hashCount:(k=K==null?void 0:K.hashCount)!==null&&k!==void 0?k:0,bitmapLength:(G=(U=(b=K==null?void 0:K.bits)===null||b===void 0?void 0:b.bitmap)===null||U===void 0?void 0:U.length)!==null&&G!==void 0?G:0,padding:(Q=(B=K==null?void 0:K.bits)===null||B===void 0?void 0:B.padding)!==null&&Q!==void 0?Q:0,mightContain:T=>{var p;return(p=P==null?void 0:P.mightContain(T))!==null&&p!==void 0&&p}}),Y}(a,t.me,this.Le.nt(),u,c))}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ee(n).toUint8Array()}catch(c){if(c instanceof Kc)return Ut("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new To(a,s,i)}catch(c){return Ut(c instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Te===0?null:u}et(t,e,n){return e.me.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Le.nt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.We(e,i,null),s++)}),s}it(t){const e=new Map;this.Be.forEach((i,a)=>{const u=this.Ye(a);if(u){if(i.current&&Ps(u.target)){const c=new F(u.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,it.newNoDocument(c,t))}i.be&&(e.set(a,i.ve()),i.Ce())}});let n=j();this.Qe.forEach((i,a)=>{let u=!0;a.forEachWhile(c=>{const d=this.Ye(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new Nr(t,e,this.Ke,this.ke,n);return this.ke=Lt(),this.qe=ls(),this.Qe=ls(),this.Ke=new rt(z),s}Ue(t,e){if(!this.je(t))return;const n=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const s=this.ze(t);this.ot(t,e)?s.Fe(e,1):s.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new ku,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new tt(z),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new tt(z),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||C("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new ku),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ls(){return new rt(F.comparator)}function Nu(){return new rt(F.comparator)}const qf={asc:"ASCENDING",desc:"DESCENDING"},Uf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gf={and:"AND",or:"OR"};class zf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Hi(r,t){return r.useProto3Json||br(t)?t:{value:t}}function En(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rl(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function jf(r,t){return En(r,t.toTimestamp())}function mt(r){return L(!!r),q.fromTimestamp(function(e){const n=te(e);return new ct(n.seconds,n.nanos)}(r))}function Eo(r,t){return Ji(r,t).canonicalString()}function Ji(r,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Pl(r){const t=W.fromString(r);return L(Fl(t)),t}function Ar(r,t){return Eo(r.databaseId,t.path)}function Qt(r,t){const e=Pl(t);if(e.get(1)!==r.databaseId.projectId)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new F(bl(e))}function Vl(r,t){return Eo(r.databaseId,t)}function Sl(r){const t=Pl(r);return t.length===4?W.emptyPath():bl(t)}function Xi(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function bl(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Mu(r,t,e){return{name:Ar(r,t),fields:e.value.mapValue.fields}}function Cl(r,t,e){const n=Qt(r,t.name),s=mt(t.updateTime),i=t.createTime?mt(t.createTime):q.min(),a=new At({mapValue:{fields:t.fields}}),u=it.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Kf(r,t){return"found"in t?function(n,s){L(!!s.found),s.found.name,s.found.updateTime;const i=Qt(n,s.found.name),a=mt(s.found.updateTime),u=s.found.createTime?mt(s.found.createTime):q.min(),c=new At({mapValue:{fields:s.found.fields}});return it.newFoundDocument(i,a,u,c)}(r,t):"missing"in t?function(n,s){L(!!s.missing),L(!!s.readTime);const i=Qt(n,s.missing),a=mt(s.readTime);return it.newNoDocument(i,a)}(r,t):O()}function Qf(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(L(f===void 0||typeof f=="string"),dt.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),dt.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const f=d.code===void 0?V.UNKNOWN:El(d.code);return new x(f,d.message||"")}(a);e=new Al(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Qt(r,n.document.name),i=mt(n.document.updateTime),a=n.document.createTime?mt(n.document.createTime):q.min(),u=new At({mapValue:{fields:n.document.fields}}),c=it.newFoundDocument(s,i,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];e=new vs(d,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Qt(r,n.document),i=n.readTime?mt(n.readTime):q.min(),a=it.newNoDocument(s,i),u=n.removedTargetIds||[];e=new vs([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Qt(r,n.document),i=n.removedTargetIds||[];e=new vs([],i,s,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Of(s,i),u=n.targetId;e=new wl(u,a)}}return e}function Rr(r,t){let e;if(t instanceof kn)e={update:Mu(r,t.key,t.value)};else if(t instanceof Nn)e={delete:Ar(r,t.key)};else if(t instanceof se)e={update:Mu(r,t.key,t.data),updateMask:Yf(t.fieldMask)};else{if(!(t instanceof po))return O();e={verify:Ar(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof In)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof ze)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof je)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Tn)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jf(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(r,t.precondition)),e}function Yi(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?ut.updateTime(mt(i.updateTime)):i.exists!==void 0?ut.exists(i.exists):ut.none()}(t.currentDocument):ut.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),c=new In;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new ze(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new je(f)}else"increment"in u?c=new Tn(a,u.increment):O();const d=at.fromServerFormat(u.fieldPath);return new kr(d,c)}(r,s)):[];if(t.update){t.update.name;const s=Qt(r,t.update.name),i=new At({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(c){const d=c.fieldPaths||[];return new Ot(d.map(f=>at.fromServerFormat(f)))}(t.updateMask);return new se(s,i,a,e,n)}return new kn(s,i,e,n)}if(t.delete){const s=Qt(r,t.delete);return new Nn(s,e)}if(t.verify){const s=Qt(r,t.verify);return new po(s,e)}return O()}function $f(r,t){return r&&r.length>0?(L(t!==void 0),r.map(e=>function(s,i){let a=s.updateTime?mt(s.updateTime):mt(i);return a.isEqual(q.min())&&(a=mt(i)),new Nf(a,s.transformResults||[])}(e,t))):[]}function xl(r,t){return{documents:[Vl(r,t.path)]}}function Qs(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Vl(r,s);const i=function(d){if(d.length!==0)return Ml(Z.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:de(_.field),direction:Hf(_.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Hi(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ct:e,parent:s}}function Dl(r,t,e,n){const{ct:s,parent:i}=Qs(r,t),a={},u=[];let c=0;return e.forEach(d=>{const f=n?d.alias:"aggregate_"+c++;a[f]=d.alias,d.aggregateType==="count"?u.push({alias:f,count:{}}):d.aggregateType==="avg"?u.push({alias:f,avg:{field:de(d.fieldPath)}}):d.aggregateType==="sum"&&u.push({alias:f,sum:{field:de(d.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:s.structuredQuery},parent:s.parent},lt:a,parent:i}}function kl(r){let t=Sl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(g){const _=Nl(g);return _ instanceof Z&&ho(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(_=>function(D){return new wr(ln(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(_))}(e.orderBy));let u=null;e.limit&&(u=function(g){let _;return _=typeof g=="object"?g.value:g,br(_)?null:_}(e.limit));let c=null;e.startAt&&(c=function(g){const _=!!g.before,P=g.values||[];return new Ie(P,_)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const _=!g.before,P=g.values||[];return new Ie(P,_)}(e.endAt)),nl(t,s,a,i,u,"F",c,d)}function Wf(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Nl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ln(e.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ln(e.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ln(e.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ln(e.unaryFilter.field);return H.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return H.create(ln(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Z.create(e.compositeFilter.filters.map(n=>Nl(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function Hf(r){return qf[r]}function Jf(r){return Uf[r]}function Xf(r){return Gf[r]}function de(r){return{fieldPath:r.canonicalString()}}function ln(r){return at.fromServerFormat(r.fieldPath)}function Ml(r){return r instanceof H?function(e){if(e.op==="=="){if(Iu(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NAN"}};if(yu(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Iu(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NAN"}};if(yu(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(e.field),op:Jf(e.op),value:e.value}}}(r):r instanceof Z?function(e){const n=e.getFilters().map(s=>Ml(s));return n.length===1?n[0]:{compositeFilter:{op:Xf(e.op),filters:n}}}(r):O()}function Yf(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Fl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e,n,s,i=q.min(),a=q.min(),u=dt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new Zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.ht=t}}function Zf(r,t){let e;if(t.document)e=Cl(r.ht,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=F.fromSegments(t.noDocument.path),s=Qe(t.noDocument.readTime);e=it.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O();{const n=F.fromSegments(t.unknownDocument.path),s=Qe(t.unknownDocument.version);e=it.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new ct(s[0],s[1]);return q.fromTimestamp(i)}(t.readTime)),e}function Fu(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Cs(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:Ar(i,a.key),fields:a.data.value.mapValue.fields,updateTime:En(i,a.version.toTimestamp()),createTime:En(i,a.createTime.toTimestamp())}}(r.ht,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Ke(t.version)};else{if(!t.isUnknownDocument())return O();n.unknownDocument={path:e.path.toArray(),version:Ke(t.version)}}return n}function Cs(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Ke(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Qe(r){const t=new ct(r.seconds,r.nanoseconds);return q.fromTimestamp(t)}function Ne(r,t){const e=(t.baseMutations||[]).map(i=>Yi(r.ht,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>Yi(r.ht,i)),s=ct.fromMillis(t.localWriteTimeMs);return new _o(t.batchId,s,e,n)}function dr(r){const t=Qe(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Qe(r.lastLimboFreeSnapshotVersion):q.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return L(i.documents.length===1),kt(Dn(Sl(i.documents[0])))}(r.query):function(i){return kt(kl(i))}(r.query),new Zt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,dt.fromBase64String(r.resumeToken))}function Ll(r,t){const e=Ke(t.snapshotVersion),n=Ke(t.lastLimboFreeSnapshotVersion);let s;s=Ps(t.target)?xl(r.ht,t.target):Qs(r.ht,t.target).ct;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ge(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function vo(r){const t=kl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ss(t,t.limit,"L"):t}function Ni(r,t){return new Io(t.largestBatchId,Yi(r.ht,t.overlayMutation))}function Ou(r,t){const e=t.path.lastSegment();return[r,Dt(t.path.popLast()),e]}function Lu(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Ke(n.readTime),documentKey:Dt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{getBundleMetadata(t,e){return Bu(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Qe(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return Bu(t).put(function(s){return{bundleId:s.id,createTime:Ke(mt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return qu(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:vo(i.bundledQuery),readTime:Qe(i.readTime)}}(n)})}saveNamedQuery(t,e){return qu(t).put(function(s){return{name:s.name,readTime:Ke(mt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function Bu(r){return _t(r,"bundles")}function qu(r){return _t(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e){this.serializer=t,this.userId=e}static Pt(t,e){const n=e.uid||"";return new $s(t,n)}getOverlay(t,e){return sr(t).get(Ou(this.userId,e)).next(n=>n?Ni(this.serializer,n):null)}getOverlays(t,e){const n=jt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new Io(e,a);s.push(this.Tt(t,u))}),w.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(Dt(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(sr(t).j("collectionPathOverlayIndex",u))}),w.waitFor(i)}getOverlaysForCollection(t,e,n){const s=jt(),i=Dt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return sr(t).U("collectionPathOverlayIndex",a).next(u=>{for(const c of u){const d=Ni(this.serializer,c);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=jt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return sr(t).J({index:"collectionGroupOverlayIndex",range:u},(c,d,f)=>{const g=Ni(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):f.done()}).next(()=>i)}Tt(t,e){return sr(t).put(function(s,i,a){const[u,c,d]=Ou(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Rr(s.ht,a.mutation)}}(this.serializer,this.userId,e))}}function sr(r){return _t(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{It(t){return _t(t,"globals")}getSessionToken(t){return this.It(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?dt.fromUint8Array(n):dt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.It(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(){}Et(t,e){this.dt(t,e),e.At()}dt(t,e){if("nullValue"in t)this.Rt(e,5);else if("booleanValue"in t)this.Rt(e,10),e.Vt(t.booleanValue?1:0);else if("integerValue"in t)this.Rt(e,15),e.Vt(ot(t.integerValue));else if("doubleValue"in t){const n=ot(t.doubleValue);isNaN(n)?this.Rt(e,13):(this.Rt(e,15),Ir(n)?e.Vt(0):e.Vt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Rt(e,20),typeof n=="string"&&(n=te(n)),e.ft(`${n.seconds||""}`),e.Vt(n.nanos||0)}else if("stringValue"in t)this.gt(t.stringValue,e),this.yt(e);else if("bytesValue"in t)this.Rt(e,30),e.wt(ee(t.bytesValue)),this.yt(e);else if("referenceValue"in t)this.St(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Rt(e,45),e.Vt(n.latitude||0),e.Vt(n.longitude||0)}else"mapValue"in t?Qc(t)?this.Rt(e,Number.MAX_SAFE_INTEGER):zs(t)?this.bt(t.mapValue,e):(this.Dt(t.mapValue,e),this.yt(e)):"arrayValue"in t?(this.vt(t.arrayValue,e),this.yt(e)):O()}gt(t,e){this.Rt(e,25),this.Ct(t,e)}Ct(t,e){e.ft(t)}Dt(t,e){const n=t.fields||{};this.Rt(e,55);for(const s of Object.keys(n))this.gt(s,e),this.dt(n[s],e)}bt(t,e){var n,s;const i=t.fields||{};this.Rt(e,53);const a="value",u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Rt(e,15),e.Vt(ot(u)),this.gt(a,e),this.dt(i[a],e)}vt(t,e){const n=t.values||[];this.Rt(e,50);for(const s of n)this.dt(s,e)}St(t,e){this.Rt(e,37),F.fromName(t).path.forEach(n=>{this.Rt(e,60),this.Ct(n,e)})}Rt(t,e){t.Vt(e)}yt(t){t.Vt(2)}}Me.Ft=new Me;function nm(r){if(r===0)return 8;let t=0;return!(r>>4)&&(t+=4,r<<=4),!(r>>6)&&(t+=2,r<<=2),!(r>>7)&&(t+=1),t}function Uu(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=nm(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class rm{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Mt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.xt(n.value),n=e.next();this.Ot()}Nt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Lt(n.value),n=e.next();this.Bt()}kt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.xt(n);else if(n<2048)this.xt(960|n>>>6),this.xt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.xt(480|n>>>12),this.xt(128|63&n>>>6),this.xt(128|63&n);else{const s=e.codePointAt(0);this.xt(240|s>>>18),this.xt(128|63&s>>>12),this.xt(128|63&s>>>6),this.xt(128|63&s)}}this.Ot()}qt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Lt(n);else if(n<2048)this.Lt(960|n>>>6),this.Lt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Lt(480|n>>>12),this.Lt(128|63&n>>>6),this.Lt(128|63&n);else{const s=e.codePointAt(0);this.Lt(240|s>>>18),this.Lt(128|63&s>>>12),this.Lt(128|63&s>>>6),this.Lt(128|63&s)}}this.Bt()}Qt(t){const e=this.Kt(t),n=Uu(e);this.$t(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}Ut(t){const e=this.Kt(t),n=Uu(e);this.$t(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}Wt(){this.Gt(255),this.Gt(255)}zt(){this.jt(255),this.jt(255)}reset(){this.position=0}seed(t){this.$t(t.length),this.buffer.set(t,this.position),this.position+=t.length}Ht(){return this.buffer.slice(0,this.position)}Kt(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=(128&e[0])!=0;e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}xt(t){const e=255&t;e===0?(this.Gt(0),this.Gt(255)):e===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Lt(t){const e=255&t;e===0?(this.jt(0),this.jt(255)):e===255?(this.jt(255),this.jt(0)):this.jt(t)}Ot(){this.Gt(0),this.Gt(1)}Bt(){this.jt(0),this.jt(1)}Gt(t){this.$t(1),this.buffer[this.position++]=t}jt(t){this.$t(1),this.buffer[this.position++]=~t}$t(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class sm{constructor(t){this.Jt=t}wt(t){this.Jt.Mt(t)}ft(t){this.Jt.kt(t)}Vt(t){this.Jt.Qt(t)}At(){this.Jt.Wt()}}class im{constructor(t){this.Jt=t}wt(t){this.Jt.Nt(t)}ft(t){this.Jt.qt(t)}Vt(t){this.Jt.Ut(t)}At(){this.Jt.zt()}}class ir{constructor(){this.Jt=new rm,this.Yt=new sm(this.Jt),this.Zt=new im(this.Jt)}seed(t){this.Jt.seed(t)}Xt(t){return t===0?this.Yt:this.Zt}Ht(){return this.Jt.Ht()}reset(){this.Jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}en(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Fe(this.indexId,this.documentKey,this.arrayValue,n)}}function le(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=Gu(r.arrayValue,t.arrayValue),e!==0?e:(e=Gu(r.directionalValue,t.directionalValue),e!==0?e:F.comparator(r.documentKey,t.documentKey)))}function Gu(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.tn=new tt((e,n)=>at.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.nn=t.orderBy,this.rn=[];for(const e of t.filters){const n=e;n.isInequality()?this.tn=this.tn.add(n):this.rn.push(n)}}get sn(){return this.tn.size>1}on(t){if(L(t.collectionGroup===this.collectionId),this.sn)return!1;const e=Ui(t);if(e!==void 0&&!this._n(e))return!1;const n=De(t);let s=new Set,i=0,a=0;for(;i<n.length&&this._n(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.tn.size>0){const u=this.tn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.an(u,c)||!this.un(this.nn[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.nn.length||!this.un(this.nn[a++],u))return!1}return!0}cn(){if(this.sn)return null;let t=new tt(at.comparator);const e=[];for(const n of this.rn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Be(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Be(n.field,0))}for(const n of this.nn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Be(n.field,n.dir==="asc"?0:1)));return new gn(gn.UNKNOWN_ID,this.collectionId,e,pn.empty())}_n(t){for(const e of this.rn)if(this.an(e,t))return!0;return!1}an(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}un(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(r){var t,e;if(L(r instanceof H||r instanceof Z),r instanceof H){if(r instanceof el){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(i=>H.create(r.field,"==",i)))||[];return Z.create(s,"or")}return r}const n=r.filters.map(s=>Bl(s));return Z.create(n,r.op)}function om(r){if(r.getFilters().length===0)return[];const t=eo(Bl(r));return L(ql(t)),Zi(t)||to(t)?[t]:t.getFilters()}function Zi(r){return r instanceof H}function to(r){return r instanceof Z&&ho(r)}function ql(r){return Zi(r)||to(r)||function(e){if(e instanceof Z&&Ki(e)){for(const n of e.getFilters())if(!Zi(n)&&!to(n))return!1;return!0}return!1}(r)}function eo(r){if(L(r instanceof H||r instanceof Z),r instanceof H)return r;if(r.filters.length===1)return eo(r.filters[0]);const t=r.filters.map(n=>eo(n));let e=Z.create(t,r.op);return e=xs(e),ql(e)?e:(L(e instanceof Z),L(yn(e)),L(e.filters.length>1),e.filters.reduce((n,s)=>wo(n,s)))}function wo(r,t){let e;return L(r instanceof H||r instanceof Z),L(t instanceof H||t instanceof Z),e=r instanceof H?t instanceof H?function(s,i){return Z.create([s,i],"and")}(r,t):ju(r,t):t instanceof H?ju(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0),yn(s)&&yn(i))return Yc(s,i.getFilters());const a=Ki(s)?s:i,u=Ki(s)?i:s,c=a.filters.map(d=>wo(d,u));return Z.create(c,"or")}(r,t),xs(e)}function ju(r,t){if(yn(t))return Yc(t,r.getFilters());{const e=t.filters.map(n=>wo(r,n));return Z.create(e,"or")}}function xs(r){if(L(r instanceof H||r instanceof Z),r instanceof H)return r;const t=r.getFilters();if(t.length===1)return xs(t[0]);if(Jc(r))return r;const e=t.map(s=>xs(s)),n=[];return e.forEach(s=>{s instanceof H?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Z.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.ln=new Ao}addToCollectionParentIndex(t,e){return this.ln.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(qt.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class Ao{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new tt(W.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new tt(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Uint8Array(0);class um{constructor(t,e){this.databaseId=e,this.hn=new Ao,this.Pn=new re(n=>Ge(n),(n,s)=>Cr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.hn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.hn.add(e)});const i={collectionId:n,parent:Dt(s)};return Ku(t).put(i)}return w.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Dc(e),""],!1,!0);return Ku(t).U(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(zt(a.parent))}return n})}addFieldIndex(t,e){const n=or(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=on(t);return i.next(u=>{a.put(Lu(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=or(t),s=on(t),i=sn(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=or(t),n=sn(t),s=on(t);return e.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(t,e){return w.forEach(this.Tn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new zu(n).cn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=sn(t);let s=!0;const i=new Map;return w.forEach(this.Tn(e),a=>this.In(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=j();const u=[];return w.forEach(i,(c,d)=>{C("IndexedDbIndexManager",`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(c)} to execute ${Ge(e)}`);const f=function(B,Q){const Y=Ui(Q);if(Y===void 0)return null;for(const K of Vs(B,Y.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(d,c),g=function(B,Q){const Y=new Map;for(const K of De(Q))for(const T of Vs(B,K.fieldPath))switch(T.op){case"==":case"in":Y.set(K.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return Y.set(K.fieldPath.canonicalString(),T.value),Array.from(Y.values())}return null}(d,c),_=function(B,Q){const Y=[];let K=!0;for(const T of De(Q)){const p=T.kind===0?Au(B,T.fieldPath,B.startAt):Ru(B,T.fieldPath,B.startAt);Y.push(p.value),K&&(K=p.inclusive)}return new Ie(Y,K)}(d,c),P=function(B,Q){const Y=[];let K=!0;for(const T of De(Q)){const p=T.kind===0?Ru(B,T.fieldPath,B.endAt):Au(B,T.fieldPath,B.endAt);Y.push(p.value),K&&(K=p.inclusive)}return new Ie(Y,K)}(d,c),D=this.En(c,d,_),k=this.En(c,d,P),b=this.dn(c,d,g),U=this.An(c.indexId,f,D,_.inclusive,k,P.inclusive,b);return w.forEach(U,G=>n.G(G,e.limit).next(B=>{B.forEach(Q=>{const Y=F.fromSegments(Q.documentKey);a.has(Y)||(a=a.add(Y),u.push(Y))})}))}).next(()=>u)}return w.resolve(null)})}Tn(t){let e=this.Pn.get(t);return e||(t.filters.length===0?e=[t]:e=om(Z.create(t.filters,"and")).map(n=>$i(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Pn.set(t,e),e)}An(t,e,n,s,i,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,i.length),d=c/(e!=null?e.length:1),f=[];for(let g=0;g<c;++g){const _=e?this.Rn(e[g/d]):hs,P=this.Vn(t,_,n[g%d],s),D=this.mn(t,_,i[g%d],a),k=u.map(b=>this.Vn(t,_,b,!0));f.push(...this.createRange(P,D,k))}return f}Vn(t,e,n,s){const i=new Fe(t,F.empty(),e,n);return s?i:i.en()}mn(t,e,n,s){const i=new Fe(t,F.empty(),e,n);return s?i.en():i}In(t,e){const n=new zu(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.on(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.Tn(e);return w.forEach(s,i=>this.In(t,i).next(a=>{a?n!==0&&a.fields.length<function(c){let d=new tt(at.comparator),f=!1;for(const g of c.filters)for(const _ of g.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:d=d.add(_.field));for(const g of c.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}fn(t,e){const n=new ir;for(const s of De(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Xt(s.kind);Me.Ft.Et(i,a)}return n.Ht()}Rn(t){const e=new ir;return Me.Ft.Et(t,e.Xt(0)),e.Ht()}gn(t,e){const n=new ir;return Me.Ft.Et(Ue(this.databaseId,e),n.Xt(function(i){const a=De(i);return a.length===0?0:a[a.length-1].kind}(t))),n.Ht()}dn(t,e,n){if(n===null)return[];let s=[];s.push(new ir);let i=0;for(const a of De(t)){const u=n[i++];for(const c of s)if(this.pn(e,a.fieldPath)&&vr(u))s=this.yn(s,a,u);else{const d=c.Xt(a.kind);Me.Ft.Et(u,d)}}return this.wn(s)}En(t,e,n){return this.dn(t,e,n.position)}wn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Ht();return e}yn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new ir;c.seed(u.Ht()),Me.Ft.Et(a,c.Xt(e.kind)),i.push(c)}return i}pn(t,e){return!!t.filters.find(n=>n instanceof H&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=or(t),s=on(t);return(e?n.U("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.U()).next(i=>{const a=[];return w.forEach(i,u=>s.get([u.indexId,this.uid]).next(c=>{a.push(function(f,g){const _=g?new pn(g.sequenceNumber,new qt(Qe(g.readTime),new F(zt(g.documentKey)),g.largestBatchId)):pn.empty(),P=f.fields.map(([D,k])=>new Be(at.fromServerFormat(D),k));return new gn(f.indexId,f.collectionGroup,P,_)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:z(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=or(t),i=on(t);return this.Sn(t).next(a=>s.U("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(u=>w.forEach(u,c=>i.put(Lu(c.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),w.forEach(u,c=>this.bn(t,s,c).next(d=>{const f=this.Dn(i,c);return d.isEqual(f)?w.resolve():this.vn(t,i,c,d,f)}))))})}Cn(t,e,n,s){return sn(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(n,e.key),documentKey:e.key.path.toArray()})}Fn(t,e,n,s){return sn(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(n,e.key),e.key.path.toArray()])}bn(t,e,n){const s=sn(t);let i=new tt(le);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,e)])},(a,u)=>{i=i.add(new Fe(n.indexId,e,u.arrayValue,u.directionalValue))}).next(()=>i)}Dn(t,e){let n=new tt(le);const s=this.fn(e,t);if(s==null)return n;const i=Ui(e);if(i!=null){const a=t.data.field(i.fieldPath);if(vr(a))for(const u of a.arrayValue.values||[])n=n.add(new Fe(e.indexId,t.key,this.Rn(u),s))}else n=n.add(new Fe(e.indexId,t.key,hs,s));return n}vn(t,e,n,s,i){C("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const a=[];return function(c,d,f,g,_){const P=c.getIterator(),D=d.getIterator();let k=rn(P),b=rn(D);for(;k||b;){let U=!1,G=!1;if(k&&b){const B=f(k,b);B<0?G=!0:B>0&&(U=!0)}else k!=null?G=!0:U=!0;U?(g(b),b=rn(D)):G?(_(k),k=rn(P)):(k=rn(P),b=rn(D))}}(s,i,le,u=>{a.push(this.Cn(t,e,n,u))},u=>{a.push(this.Fn(t,e,n,u))}),w.waitFor(a)}Sn(t){let e=1;return on(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>le(a,u)).filter((a,u,c)=>!u||le(a,c[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=le(a,t),c=le(a,e);if(u===0)s[0]=t.en();else if(u>0&&c<0)s.push(a),s.push(a.en());else if(c>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Mn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,hs,[]],c=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,hs,[]];i.push(IDBKeyRange.bound(u,c))}return i}Mn(t,e){return le(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Qu)}getMinOffset(t,e){return w.mapArray(this.Tn(e),n=>this.In(t,n).next(s=>s||O())).next(Qu)}}function Ku(r){return _t(r,"collectionParents")}function sn(r){return _t(r,"indexEntries")}function or(r){return _t(r,"indexConfiguration")}function on(r){return _t(r,"indexState")}function Qu(r){L(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;uo(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new qt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class xt{static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(r,t,e){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.J({range:a},(f,g,_)=>(u++,_.delete()));i.push(c.next(()=>{L(u===1)}));const d=[];for(const f of e.mutations){const g=Bc(t,f.key.path,e.batchId);i.push(s.delete(g)),d.push(f.key)}return w.waitFor(i).next(()=>d)}function Ds(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O();t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(41943040,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);class Ws{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.xn={}}static Pt(t,e,n,s){L(t.uid!=="");const i=t.isAuthenticated()?t.uid:"";return new Ws(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return he(t).J({index:"userMutationsIndex",range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=hn(t),a=he(t);return a.add({}).next(u=>{L(typeof u=="number");const c=new _o(u,e,n,s),d=function(P,D,k){const b=k.baseMutations.map(G=>Rr(P.ht,G)),U=k.mutations.map(G=>Rr(P.ht,G));return{userId:D,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:b,mutations:U}}(this.serializer,this.userId,c),f=[];let g=new tt((_,P)=>z(_.canonicalString(),P.canonicalString()));for(const _ of s){const P=Bc(this.userId,_.key.path,u);g=g.add(_.key.path.popLast()),f.push(a.put(d)),f.push(i.put(P,Hd))}return g.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(t,_))}),t.addOnCommittedListener(()=>{this.xn[u]=c.keys()}),w.waitFor(f).next(()=>c)})}lookupMutationBatch(t,e){return he(t).get(e).next(n=>n?(L(n.userId===this.userId),Ne(this.serializer,n)):null)}On(t,e){return this.xn[e]?w.resolve(this.xn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.xn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return he(t).J({index:"userMutationsIndex",range:s},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n),i=Ne(this.serializer,u)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return he(t).J({index:"userMutationsIndex",range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return he(t).U("userMutationsIndex",e).next(n=>n.map(s=>Ne(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=_s(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return hn(t).J({range:s},(a,u,c)=>{const[d,f,g]=a,_=zt(f);if(d===this.userId&&e.path.isEqual(_))return he(t).get(g).next(P=>{if(!P)throw O();L(P.userId===this.userId),i.push(Ne(this.serializer,P))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(z);const s=[];return e.forEach(i=>{const a=_s(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=hn(t).J({range:u},(d,f,g)=>{const[_,P,D]=d,k=zt(P);_===this.userId&&i.path.isEqual(k)?n=n.add(D):g.done()});s.push(c)}),w.waitFor(s).next(()=>this.Nn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=_s(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new tt(z);return hn(t).J({range:a},(c,d,f)=>{const[g,_,P]=c,D=zt(_);g===this.userId&&n.isPrefixOf(D)?D.length===s&&(u=u.add(P)):f.done()}).next(()=>this.Nn(t,u))}Nn(t,e){const n=[],s=[];return e.forEach(i=>{s.push(he(t).get(i).next(a=>{if(a===null)throw O();L(a.userId===this.userId),n.push(Ne(this.serializer,a))}))}),w.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return Ul(t._e,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.Ln(e.batchId)}),w.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}Ln(t){delete this.xn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return hn(t).J({range:n},(i,a,u)=>{if(i[0]===this.userId){const c=zt(i[1]);s.push(c)}else u.done()}).next(()=>{L(s.length===0)})})}containsKey(t,e){return Gl(t,this.userId,e)}Bn(t){return zl(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Gl(r,t,e){const n=_s(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return hn(r).J({range:i,H:!0},(u,c,d)=>{const[f,g,_]=u;f===t&&g===s&&(a=!0),d.done()}).next(()=>a)}function he(r){return _t(r,"mutations")}function hn(r){return _t(r,"documentMutations")}function zl(r){return _t(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new $e(0)}static Qn(){return new $e(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Kn(t).next(e=>{const n=new $e(e.highestTargetId);return e.highestTargetId=n.next(),this.$n(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Kn(t).next(e=>q.fromTimestamp(new ct(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Kn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.Kn(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.$n(t,s)))}addTargetData(t,e){return this.Un(t,e).next(()=>this.Kn(t).next(n=>(n.targetCount+=1,this.Wn(e,n),this.$n(t,n))))}updateTargetData(t,e){return this.Un(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>an(t).delete(e.targetId)).next(()=>this.Kn(t)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.$n(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return an(t).J((a,u)=>{const c=dr(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(t,c)))}).next(()=>w.waitFor(i)).next(()=>s)}forEachTarget(t,e){return an(t).J((n,s)=>{const i=dr(s);e(i)})}Kn(t){return Wu(t).get("targetGlobalKey").next(e=>(L(e!==null),e))}$n(t,e){return Wu(t).put("targetGlobalKey",e)}Un(t,e){return an(t).put(Ll(this.serializer,e))}Wn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.Kn(t).next(e=>e.targetCount)}getTargetData(t,e){const n=Ge(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return an(t).J({range:s,index:"queryTargetsIndex"},(a,u,c)=>{const d=dr(u);Cr(e,d.target)&&(i=d,c.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=fe(t);return e.forEach(a=>{const u=Dt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),w.waitFor(s)}removeMatchingKeys(t,e,n){const s=fe(t);return w.forEach(e,i=>{const a=Dt(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=fe(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=fe(t);let i=j();return s.J({range:n,H:!0},(a,u,c)=>{const d=zt(a[1]),f=new F(d);i=i.add(f)}).next(()=>i)}containsKey(t,e){const n=Dt(e.path),s=IDBKeyRange.bound([n],[Dc(n)],!1,!0);let i=0;return fe(t).J({index:"documentTargetsIndex",H:!0,range:s},([a,u],c,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}ut(t,e){return an(t).get(e).next(n=>n?dr(n):null)}}function an(r){return _t(r,"targets")}function Wu(r){return _t(r,"targetGlobal")}function fe(r){return _t(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu([r,t],[e,n]){const s=z(r,e);return s===0?z(t,n):s}class lm{constructor(t){this.Gn=t,this.buffer=new tt(Hu),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Hu(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class jl{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){C("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){we(e)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ve(e)}await this.Yn(3e5)})}}class hm{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return w.resolve(Ft.oe);const n=new lm(e);return this.Zn.forEachTarget(t,s=>n.Hn(s.sequenceNumber)).next(()=>this.Zn.er(t,s=>n.Hn(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve($u)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$u):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,s,i,a,u,c,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(t,n,e))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(d=Date.now(),un()<=Yt.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(d-c)+`ms
Total Duration: ${d-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Kl(r,t){return new hm(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t,e){this.db=t,this.garbageCollector=Kl(this,e)}Xn(t){const e=this.nr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}nr(t){let e=0;return this.er(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}er(t,e){return this.rr(t,(n,s)=>e(s))}addReference(t,e,n){return ds(t,n)}removeReference(t,e,n){return ds(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return ds(t,e)}ir(t,e){return function(s,i){let a=!1;return zl(s).Y(u=>Gl(s,u,i).next(c=>(c&&(a=!0),w.resolve(!c)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.rr(t,(a,u)=>{if(u<=e){const c=this.ir(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,q.min()),fe(t).delete(function(g){return[0,Dt(g.path)]}(a))))});s.push(c)}}).next(()=>w.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return ds(t,e)}rr(t,e){const n=fe(t);let s,i=Ft.oe;return n.J({index:"documentTargetsIndex"},([a,u],{path:c,sequenceNumber:d})=>{a===0?(i!==Ft.oe&&e(new F(zt(s)),i),i=d,s=c):i=Ft.oe}).next(()=>{i!==Ft.oe&&e(new F(zt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ds(r,t){return fe(r).put(function(n,s){return{targetId:0,path:Dt(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return xe(t).put(n)}removeEntry(t,e,n){return xe(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Cs(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.sr(t,n)))}getEntry(t,e){let n=it.newInvalidDocument(e);return xe(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(ar(e))},(s,i)=>{n=this._r(e,i)}).next(()=>n)}ar(t,e){let n={size:0,document:it.newInvalidDocument(e)};return xe(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(ar(e))},(s,i)=>{n={document:this._r(e,i),size:Ds(i)}}).next(()=>n)}getEntries(t,e){let n=Lt();return this.ur(t,e,(s,i)=>{const a=this._r(s,i);n=n.insert(s,a)}).next(()=>n)}cr(t,e){let n=Lt(),s=new rt(F.comparator);return this.ur(t,e,(i,a)=>{const u=this._r(i,a);n=n.insert(i,u),s=s.insert(i,Ds(a))}).next(()=>({documents:n,lr:s}))}ur(t,e,n){if(e.isEmpty())return w.resolve();let s=new tt(Yu);e.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(ar(s.first()),ar(s.last())),a=s.getIterator();let u=a.getNext();return xe(t).J({index:"documentKeyIndex",range:i},(c,d,f)=>{const g=F.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Yu(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?f.$(ar(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Cs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return xe(t).U(IDBKeyRange.bound(u,c,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let f=Lt();for(const g of d){const _=this._r(F.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);_.isFoundDocument()&&(Dr(e,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(t,e,n,s){let i=Lt();const a=Xu(e,n),u=Xu(e,qt.max());return xe(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},(c,d,f)=>{const g=this._r(F.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(t){return new mm(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Ju(t).get("remoteDocumentGlobalKey").next(e=>(L(!!e),e))}sr(t,e){return Ju(t).put("remoteDocumentGlobalKey",e)}_r(t,e){if(e){const n=Zf(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(q.min())))return n}return it.newInvalidDocument(t)}}function $l(r){return new fm(r)}class mm extends Ql{constructor(t,e){super(),this.hr=t,this.trackRemovals=e,this.Pr=new re(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new tt((i,a)=>z(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Pr.get(i);if(e.push(this.hr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const c=Fu(this.hr.serializer,a);s=s.add(i.path.popLast());const d=Ds(c);n+=d-u.size,e.push(this.hr.addEntry(t,i,c))}else if(n-=u.size,this.trackRemovals){const c=Fu(this.hr.serializer,a.convertToNoDocument(q.min()));e.push(this.hr.addEntry(t,i,c))}}),s.forEach(i=>{e.push(this.hr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.hr.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.hr.ar(t,e).next(n=>(this.Pr.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.hr.cr(t,e).next(({documents:n,lr:s})=>(s.forEach((i,a)=>{this.Pr.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function Ju(r){return _t(r,"remoteDocumentGlobal")}function xe(r){return _t(r,"remoteDocumentsV14")}function ar(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Xu(r,t){const e=t.documentKey.path.toArray();return[r,Cs(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Yu(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=z(e[i],n[i]),s)return s;return s=z(e.length,n.length),s||(s=z(e[e.length-2],n[n.length-2]),s||z(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&pr(n.mutation,s,Ot.empty(),ct.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const s=jt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=lr();return i.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=jt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Lt();const a=gr(),u=function(){return gr()}();return e.forEach((c,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof se)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),pr(f.mutation,d,f.mutation.getFieldMask(),ct.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var g;return u.set(d,new gm(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(t,e){const n=gr();let s=new rt((a,u)=>a-u),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(c=>{const d=e.get(c);if(d===null)return;let f=n.get(c)||Ot.empty();f=u.applyToLocalView(d,f),n.set(c,f);const g=(s.get(u.batchId)||j()).add(c);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,f=c.value,g=ll();f.forEach(_=>{if(!i.has(_)){const P=_l(e.get(_),n.get(_));P!==null&&g.set(_,P),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):w.resolve(jt());let u=-1,c=i;return a.next(d=>w.forEach(d,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(f)?w.resolve():this.remoteDocumentCache.getEntry(t,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,c,d,j())).next(f=>({batchId:u,changes:cl(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(n=>{let s=lr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=lr();return this.indexManager.getCollectionParents(t,i).next(u=>w.forEach(u,c=>{const d=function(g,_){return new ne(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,it.newInvalidDocument(f)))});let u=lr();return a.forEach((c,d)=>{const f=i.get(c);f!==void 0&&pr(f.mutation,d,Ot.empty(),ct.now()),Dr(e,d)&&(u=u.insert(c,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return w.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:mt(s.createTime)}}(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(s){return{name:s.name,query:vo(s.bundledQuery),readTime:mt(s.readTime)}}(e)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.overlays=new rt(F.comparator),this.Er=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=jt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.Tt(t,e,i)}),w.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Er.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const s=jt(),i=e.length+1,a=new F(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new rt((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=jt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=jt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=s)););return w.resolve(u)}Tt(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(n.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Io(e,n));let i=this.Er.get(e);i===void 0&&(i=j(),this.Er.set(e,i)),this.Er.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.dr=new tt(yt.Ar),this.Rr=new tt(yt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new yt(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.gr(new yt(t,e))}pr(t,e){t.forEach(n=>this.removeReference(n,e))}yr(t){const e=new F(new W([])),n=new yt(e,t),s=new yt(e,t+1),i=[];return this.Rr.forEachInRange([n,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new F(new W([])),n=new yt(e,t),s=new yt(e,t+1);let i=j();return this.Rr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new yt(t,0),n=this.dr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class yt{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return F.comparator(t.key,e.key)||z(t.br,e.br)}static Vr(t,e){return z(t.br,e.br)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new tt(yt.Ar)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _o(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.vr=this.vr.add(new yt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Fr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new yt(e,0),s=new yt(e,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,s],a=>{const u=this.Cr(a.br);i.push(u)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(z);return e.forEach(s=>{const i=new yt(s,0),a=new yt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],u=>{n=n.add(u.br)})}),w.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;F.isDocumentKey(i)||(i=i.child(""));const a=new yt(new F(i),0);let u=new tt(z);return this.vr.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(c.br)),!0)},a),w.resolve(this.Mr(u))}Mr(t){const e=[];return t.forEach(n=>{const s=this.Cr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return w.forEach(e.mutations,s=>{const i=new yt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.vr=n})}Ln(t){}containsKey(t,e){const n=new yt(e,0),s=this.vr.firstAfterOrEqual(n);return w.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t){this.Nr=t,this.docs=function(){return new rt(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():it.newInvalidDocument(e))}getEntries(t,e){let n=Lt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Lt();const a=e.path,u=new F(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||uo(Nc(f),n)<=0||(s.has(f.key)||Dr(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O()}Lr(t,e){return w.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Em(this)}getSize(t){return w.resolve(this.size)}}class Em extends Ql{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.hr.addEntry(t,s)):this.hr.removeEntry(n)}),w.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(t){this.persistence=t,this.Br=new re(e=>Ge(e),Cr),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ro,this.targetCount=0,this.Qr=$e.qn()}forEachTarget(t,e){return this.Br.forEach((n,s)=>e(s)),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),w.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new $e(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.Un(e),w.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Br.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),w.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this.qr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,e){this.Kr={},this.overlays={},this.$r=new Ft(0),this.Ur=!1,this.Ur=!0,this.Wr=new ym,this.referenceDelegate=t(this),this.Gr=new vm(this),this.indexManager=new am,this.remoteDocumentCache=function(s){return new Tm(s)}(n=>this.referenceDelegate.zr(n)),this.serializer=new Ol(e),this.jr=new pm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new _m,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new Im(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){C("MemoryPersistence","Starting transaction:",t);const s=new wm(this.$r.next());return this.referenceDelegate.Hr(),n(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(t,e){return w.or(Object.values(this.Kr).map(n=>()=>n.containsKey(t,e)))}}class wm extends Fc{constructor(t){super(),this.currentSequenceNumber=t}}class Hs{constructor(t){this.persistence=t,this.Zr=new Ro,this.Xr=null}static ei(t){return new Hs(t)}get ti(){if(this.Xr)return this.Xr;throw O()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),w.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(s=>this.ti.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.ti,n=>{const s=F.fromPath(n);return this.ni(t,s).next(i=>{i||e.removeEntry(s,q.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(n=>{n?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return w.or([()=>w.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class ks{constructor(t,e){this.persistence=t,this.ri=new re(n=>Dt(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Kl(this,e)}static ei(t,e){return new ks(t,e)}Hr(){}Jr(t){return w.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}nr(t){let e=0;return this.er(t,n=>{e++}).next(()=>e)}er(t,e){return w.forEach(this.ri,(n,s)=>this.ir(t,n,s).next(i=>i?w.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(t,a=>this.ir(t,a,e).next(u=>{u||(n++,i.removeEntry(a,q.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),w.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),w.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),w.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),w.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Is(t.data.value)),e}ir(t,e,n){return w.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.ri.get(e);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t){this.serializer=t}O(t,e,n,s){const i=new qs("createOrUpgrade",e);n<1&&s>=1&&(function(c){c.createObjectStore("owner")}(t),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fu,{unique:!0}),c.createObjectStore("documentMutations")}(t),Zu(t),function(c){c.createObjectStore("remoteDocuments")}(t));let a=w.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(t),Zu(t)),a=a.next(()=>function(c){const d=c.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(c,d){return d.store("mutations").U().next(f=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fu,{unique:!0});const g=d.store("mutations"),_=f.map(P=>g.put(P));return w.waitFor(_)})}(t,i))),a=a.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.ii(i))),n<6&&s>=6&&(a=a.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(t),this.si(i)))),n<7&&s>=7&&(a=a.next(()=>this.oi(i))),n<8&&s>=8&&(a=a.next(()=>this._i(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.ai(i))),n<11&&s>=11&&(a=a.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(c){const d=c.createObjectStore("documentOverlays",{keyPath:uf});d.createIndex("collectionPathOverlayIndex",cf,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",lf,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(c){const d=c.createObjectStore("remoteDocumentsV14",{keyPath:Jd});d.createIndex("documentKeyIndex",Xd),d.createIndex("collectionGroupIndex",Yd)}(t)).next(()=>this.ui(t,i)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(a=a.next(()=>this.ci(t,i))),n<15&&s>=15&&(a=a.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:rf}).createIndex("sequenceNumberIndex",sf,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:of}).createIndex("documentKeyIndex",af,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore("indexState").clear()}).next(()=>{e.objectStore("indexEntries").clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(t)})),a}si(t){let e=0;return t.store("remoteDocuments").J((n,s)=>{e+=Ds(s)}).next(()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ii(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.U().next(s=>w.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(u=>w.forEach(u,c=>{L(c.userId===i.userId);const d=Ne(this.serializer,c);return Ul(t,i.userId,d).next(()=>{})}))}))}oi(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((a,u)=>{const c=new W(a),d=function(g){return[0,Dt(g)]}(c);i.push(e.get(d).next(f=>f?w.resolve():(g=>e.put({targetId:0,path:Dt(g),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(i))})}_i(t,e){t.createObjectStore("collectionParents",{keyPath:nf});const n=e.store("collectionParents"),s=new Ao,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Dt(c)})}};return e.store("remoteDocuments").J({H:!0},(a,u)=>{const c=new W(a);return i(c.popLast())}).next(()=>e.store("documentMutations").J({H:!0},([a,u,c],d)=>{const f=zt(u);return i(f.popLast())}))}ai(t){const e=t.store("targets");return e.J((n,s)=>{const i=dr(s),a=Ll(this.serializer,i);return e.put(a)})}ui(t,e){const n=e.store("remoteDocuments"),s=[];return n.J((i,a)=>{const u=e.store("remoteDocumentsV14"),c=function(g){return g.document?new F(W.fromString(g.document.name).popFirst(5)):g.noDocument?F.fromSegments(g.noDocument.path):g.unknownDocument?F.fromSegments(g.unknownDocument.path):O()}(a).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>w.waitFor(s))}ci(t,e){const n=e.store("mutations"),s=$l(this.serializer),i=new Po(Hs.ei,this.serializer.ht);return n.U().next(a=>{const u=new Map;return a.forEach(c=>{var d;let f=(d=u.get(c.userId))!==null&&d!==void 0?d:j();Ne(this.serializer,c).keys().forEach(g=>f=f.add(g)),u.set(c.userId,f)}),w.forEach(u,(c,d)=>{const f=new It(d),g=$s.Pt(this.serializer,f),_=i.getIndexManager(f),P=Ws.Pt(f,this.serializer,_,i.referenceDelegate);return new Wl(s,P,g,_).recalculateAndSaveOverlaysForDocumentKeys(new Gi(e,Ft.oe),c).next()})})}}function Zu(r){r.createObjectStore("targetDocuments",{keyPath:tf}).createIndex("documentTargetsIndex",ef,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Zd,{unique:!0}),r.createObjectStore("targetGlobal")}const Mi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Vo{constructor(t,e,n,s,i,a,u,c,d,f,g=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.li=i,this.window=a,this.document=u,this.hi=d,this.Pi=f,this.Ti=g,this.$r=null,this.Ur=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ii=null,this.inForeground=!1,this.Ei=null,this.di=null,this.Ai=Number.NEGATIVE_INFINITY,this.Ri=_=>Promise.resolve(),!Vo.p())throw new x(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new dm(this,s),this.Vi=e+"main",this.serializer=new Ol(c),this.mi=new Kt(this.Vi,this.Ti,new Am(this.serializer)),this.Wr=new em,this.Gr=new cm(this.referenceDelegate,this.serializer),this.remoteDocumentCache=$l(this.serializer),this.jr=new tm,this.window&&this.window.localStorage?this.fi=this.window.localStorage:(this.fi=null,f===!1&&ft("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(V.FAILED_PRECONDITION,Mi);return this.pi(),this.yi(),this.wi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Gr.getHighestSequenceNumber(t))}).then(t=>{this.$r=new Ft(t,this.hi)}).then(()=>{this.Ur=!0}).catch(t=>(this.mi&&this.mi.close(),Promise.reject(t)))}Si(t){return this.Ri=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.mi.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.li.enqueueAndForget(async()=>{this.started&&await this.gi()}))}gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>fs(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.bi(t).next(e=>{e||(this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)))})}).next(()=>this.Di(t)).next(e=>this.isPrimary&&!e?this.vi(t).next(()=>!1):!!e&&this.Ci(t).next(()=>!0))).catch(t=>{if(we(t))return C("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.li.enqueueRetryable(()=>this.Ri(t)),this.isPrimary=t})}bi(t){return ur(t).get("owner").next(e=>w.resolve(this.Fi(e)))}Mi(t){return fs(t).delete(this.clientId)}async xi(){if(this.isPrimary&&!this.Oi(this.Ai,18e5)){this.Ai=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=_t(e,"clientMetadata");return n.U().next(s=>{const i=this.Ni(s,18e5),a=s.filter(u=>i.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.fi)for(const e of t)this.fi.removeItem(this.Li(e.clientId))}}wi(){this.di=this.li.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gi().then(()=>this.xi()).then(()=>this.wi()))}Fi(t){return!!t&&t.ownerId===this.clientId}Di(t){return this.Pi?w.resolve(!0):ur(t).get("owner").next(e=>{if(e!==null&&this.Oi(e.leaseTimestampMs,5e3)&&!this.Bi(e.ownerId)){if(this.Fi(e)&&this.networkEnabled)return!0;if(!this.Fi(e)){if(!e.allowTabSynchronization)throw new x(V.FAILED_PRECONDITION,Mi);return!1}}return!(!this.networkEnabled||!this.inForeground)||fs(t).U().next(n=>this.Ni(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&C("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ur=!1,this.ki(),this.di&&(this.di.cancel(),this.di=null),this.qi(),this.Qi(),await this.mi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new Gi(t,Ft.oe);return this.vi(e).next(()=>this.Mi(e))}),this.mi.close(),this.Ki()}Ni(t,e){return t.filter(n=>this.Oi(n.updateTimeMs,e)&&!this.Bi(n.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",t=>fs(t).U().next(e=>this.Ni(e,18e5).map(n=>n.clientId)))}get started(){return this.Ur}getGlobalsCache(){return this.Wr}getMutationQueue(t,e){return Ws.Pt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new um(t,this.serializer.ht.databaseId)}getDocumentOverlayCache(t){return $s.Pt(this.serializer,t)}getBundleCache(){return this.jr}runTransaction(t,e,n){C("IndexedDbPersistence","Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(c){return c===17?ff:c===16?df:c===15?lo:c===14?Gc:c===13?Uc:c===12?hf:c===11?qc:void O()}(this.Ti);let a;return this.mi.runTransaction(t,s,i,u=>(a=new Gi(u,this.$r?this.$r.next():Ft.oe),e==="readwrite-primary"?this.bi(a).next(c=>!!c||this.Di(a)).next(c=>{if(!c)throw ft(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)),new x(V.FAILED_PRECONDITION,Mc);return n(a)}).next(c=>this.Ci(a).next(()=>c)):this.Ui(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Ui(t){return ur(t).get("owner").next(e=>{if(e!==null&&this.Oi(e.leaseTimestampMs,5e3)&&!this.Bi(e.ownerId)&&!this.Fi(e)&&!(this.Pi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new x(V.FAILED_PRECONDITION,Mi)})}Ci(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ur(t).put("owner",e)}static p(){return Kt.p()}vi(t){const e=ur(t);return e.get("owner").next(n=>this.Fi(n)?(C("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):w.resolve())}Oi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ft(`Detected an update time that is in the future: ${t} > ${n}`),!1))}pi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ei=()=>{this.li.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gi()))},this.document.addEventListener("visibilitychange",this.Ei),this.inForeground=this.document.visibilityState==="visible")}qi(){this.Ei&&(this.document.removeEventListener("visibilitychange",this.Ei),this.Ei=null)}yi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Ii=()=>{this.ki();const e=/(?:Version|Mobile)\/1[456]/;vc()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.li.enterRestrictedMode(!0),this.li.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ii))}Qi(){this.Ii&&(this.window.removeEventListener("pagehide",this.Ii),this.Ii=null)}Bi(t){var e;try{const n=((e=this.fi)===null||e===void 0?void 0:e.getItem(this.Li(t)))!==null;return C("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ft("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}ki(){if(this.fi)try{this.fi.setItem(this.Li(this.clientId),String(Date.now()))}catch(t){ft("Failed to set zombie client id.",t)}}Ki(){if(this.fi)try{this.fi.removeItem(this.Li(this.clientId))}catch{}}Li(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function ur(r){return _t(r,"owner")}function fs(r){return _t(r,"clientMetadata")}function So(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=s}static zi(t,e){let n=j(),s=j();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bo(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return vc()?8:Oc(Rs())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.Xi(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Rm;return this.ts(t,e,a).next(u=>{if(i.result=u,this.Hi)return this.ns(t,e,a,u.size)})}).next(()=>i.result)}ns(t,e,n,s){return n.documentReadCount<this.Ji?(un()<=Yt.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",cn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),w.resolve()):(un()<=Yt.DEBUG&&C("QueryEngine","Query:",cn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Yi*s?(un()<=Yt.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",cn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):w.resolve())}Xi(t,e){if(Pu(e))return w.resolve(null);let n=kt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ss(e,null,"F"),n=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=j(...i);return this.Zi.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(c=>{const d=this.rs(e,u);return this.ss(e,d,a,c.readTime)?this.Xi(t,Ss(e,null,"F")):this.os(t,d,e,c)}))})))}es(t,e,n,s){return Pu(e)||s.isEqual(q.min())?w.resolve(null):this.Zi.getDocuments(t,n).next(i=>{const a=this.rs(e,i);return this.ss(e,a,n,s)?w.resolve(null):(un()<=Yt.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cn(e)),this.os(t,a,e,kc(s,-1)).next(u=>u))})}rs(t,e){let n=new tt(al(t));return e.forEach((s,i)=>{Dr(t,i)&&(n=n.add(i))}),n}ss(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(t,e,n){return un()<=Yt.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",cn(e)),this.Zi.getDocumentsMatchingQuery(t,e,qt.min(),n)}os(t,e,n,s){return this.Zi.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,e,n,s){this.persistence=t,this._s=e,this.serializer=s,this.us=new rt(z),this.cs=new re(i=>Ge(i),Cr),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wl(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function Jl(r,t,e,n){return new Pm(r,t,e,n)}async function Xl(r,t){const e=N(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Ps(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let c=j();for(const d of s){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of i){u.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return e.localDocuments.getDocuments(n,c).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:u}))})})}function Vm(r,t){const e=N(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.hs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,f){const g=d.batch,_=g.keys();let P=w.resolve();return _.forEach(D=>{P=P.next(()=>f.getEntry(c,D)).next(k=>{const b=d.docVersions.get(D);L(b!==null),k.version.compareTo(b)<0&&(g.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),f.addEntry(k)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Yl(r){const t=N(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function Sm(r,t){const e=N(r),n=t.snapshotVersion;let s=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.hs.newChangeBuffer({trackRemovals:!0});s=e.us;const u=[];t.targetChanges.forEach((f,g)=>{const _=s.get(g);if(!_)return;u.push(e.Gr.removeMatchingKeys(i,f.removedDocuments,g).next(()=>e.Gr.addMatchingKeys(i,f.addedDocuments,g)));let P=_.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?P=P.withResumeToken(dt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,n)),s=s.insert(g,P),function(k,b,U){return k.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(_,P,f)&&u.push(e.Gr.updateTargetData(i,P))});let c=Lt(),d=j();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(Zl(i,a,t.documentUpdates).next(f=>{c=f.Is,d=f.Es})),!n.isEqual(q.min())){const f=e.Gr.getLastRemoteSnapshotVersion(i).next(g=>e.Gr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return w.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(e.us=s,i))}function Zl(r,t,e){let n=j(),s=j();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Lt();return e.forEach((u,c)=>{const d=i.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(q.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):C("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Is:a,Es:s}})}function bm(r,t){const e=N(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function vn(r,t){const e=N(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Gr.getTargetData(n,t).next(i=>i?(s=i,w.resolve(s)):e.Gr.allocateTargetId(n).next(a=>(s=new Zt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Gr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.us.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.us=e.us.insert(n.targetId,n),e.cs.set(t,n.targetId)),n})}async function wn(r,t,e){const n=N(r),s=n.us.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!we(a))throw a;C("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.us=n.us.remove(t),n.cs.delete(s.target)}function Ns(r,t,e){const n=N(r);let s=q.min(),i=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const g=N(c),_=g.cs.get(f);return _!==void 0?w.resolve(g.us.get(_)):g.Gr.getTargetData(d,f)}(n,a,kt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(a,u.targetId).next(c=>{i=c})}).next(()=>n._s.getDocumentsMatchingQuery(a,t,e?s:q.min(),e?i:j())).next(u=>(nh(n,ol(t),u),{documents:u,ds:i})))}function th(r,t){const e=N(r),n=N(e.Gr),s=e.us.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",i=>n.ut(i,t).next(a=>a?a.target:null))}function eh(r,t){const e=N(r),n=e.ls.get(t)||q.min();return e.persistence.runTransaction("Get new document changes","readonly",s=>e.hs.getAllFromCollectionGroup(s,t,kc(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(nh(e,t,s),s))}function nh(r,t,e){let n=r.ls.get(t)||q.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.ls.set(t,n)}async function Cm(r,t,e,n){const s=N(r);let i=j(),a=Lt();for(const d of e){const f=t.As(d.metadata.name);d.document&&(i=i.add(f));const g=t.Rs(d);g.setReadTime(t.Vs(d.metadata.readTime)),a=a.insert(f,g)}const u=s.hs.newChangeBuffer({trackRemovals:!0}),c=await vn(s,function(f){return kt(Dn(W.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",d=>Zl(d,u,a).next(f=>(u.apply(d),f)).next(f=>s.Gr.removeMatchingKeysForTargetId(d,c.targetId).next(()=>s.Gr.addMatchingKeys(d,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(d,f.Is,f.Es)).next(()=>f.Is)))}async function xm(r,t,e=j()){const n=await vn(r,kt(vo(t.bundledQuery))),s=N(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const a=mt(t.readTime);if(n.snapshotVersion.compareTo(a)>=0)return s.jr.saveNamedQuery(i,t);const u=n.withResumeToken(dt.EMPTY_BYTE_STRING,a);return s.us=s.us.insert(u.targetId,u),s.Gr.updateTargetData(i,u).next(()=>s.Gr.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.Gr.addMatchingKeys(i,e,n.targetId)).next(()=>s.jr.saveNamedQuery(i,t))})}function tc(r,t){return`firestore_clients_${r}_${t}`}function ec(r,t,e){let n=`firestore_mutations_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}function Fi(r,t){return`firestore_targets_${r}_${t}`}class Ms{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static fs(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new x(s.error.code,s.error.message))),a?new Ms(t,e,s.state,i):(ft("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}gs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class _r{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static fs(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new x(n.error.code,n.error.message))),i?new _r(t,n.state,s):(ft("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}gs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Fs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static fs(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=mo();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=Lc(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Fs(t,i):(ft("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Co{constructor(t,e){this.clientId=t,this.onlineState=e}static fs(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new Co(e.clientId,e.onlineState):(ft("SharedClientState",`Failed to parse online state: ${t}`),null)}}class no{constructor(){this.activeTargetIds=mo()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Oi{constructor(t,e,n,s,i){this.window=t,this.li=e,this.persistenceKey=n,this.ws=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ss=this.bs.bind(this),this.Ds=new rt(z),this.started=!1,this.vs=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Cs=tc(this.persistenceKey,this.ws),this.Fs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ds=this.Ds.insert(this.ws,new no),this.Ms=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.xs=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Os=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.Ns=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Ls=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ss)}static p(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.$i();for(const n of t){if(n===this.ws)continue;const s=this.getItem(tc(this.persistenceKey,n));if(s){const i=Fs.fs(n,s);i&&(this.Ds=this.Ds.insert(i.clientId,i))}}this.Bs();const e=this.storage.getItem(this.Ns);if(e){const n=this.ks(e);n&&this.qs(n)}for(const n of this.vs)this.bs(n);this.vs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Fs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Qs(this.Ds)}isActiveQueryTarget(t){let e=!1;return this.Ds.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Ks(t,"pending")}updateMutationState(t,e,n){this.Ks(t,e,n),this.$s(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(Fi(this.persistenceKey,t));if(s){const i=_r.fs(t,s);i&&(n=i.state)}}return e&&this.Us.ps(t),this.Bs(),n}removeLocalQueryTarget(t){this.Us.ys(t),this.Bs()}isLocalQueryTarget(t){return this.Us.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Fi(this.persistenceKey,t))}updateQueryState(t,e,n){this.Ws(t,e,n)}handleUserChange(t,e,n){e.forEach(s=>{this.$s(s)}),this.currentUser=t,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(t){this.Gs(t)}notifyBundleLoaded(t){this.zs(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ss),this.removeItem(this.Cs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return C("SharedClientState","READ",t,e),e}setItem(t,e){C("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){C("SharedClientState","REMOVE",t),this.storage.removeItem(t)}bs(t){const e=t;if(e.storageArea===this.storage){if(C("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Cs)return void ft("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.li.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.Ms.test(e.key)){if(e.newValue==null){const n=this.js(e.key);return this.Hs(n,null)}{const n=this.Js(e.key,e.newValue);if(n)return this.Hs(n.clientId,n)}}else if(this.xs.test(e.key)){if(e.newValue!==null){const n=this.Ys(e.key,e.newValue);if(n)return this.Zs(n)}}else if(this.Os.test(e.key)){if(e.newValue!==null){const n=this.Xs(e.key,e.newValue);if(n)return this.eo(n)}}else if(e.key===this.Ns){if(e.newValue!==null){const n=this.ks(e.newValue);if(n)return this.qs(n)}}else if(e.key===this.Fs){const n=function(i){let a=Ft.oe;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number"),a=u}catch(u){ft("SharedClientState","Failed to read sequence number from WebStorage",u)}return a}(e.newValue);n!==Ft.oe&&this.sequenceNumberHandler(n)}else if(e.key===this.Ls){const n=this.no(e.newValue);await Promise.all(n.map(s=>this.syncEngine.ro(s)))}}}else this.vs.push(e)})}}get Us(){return this.Ds.get(this.ws)}Bs(){this.setItem(this.Cs,this.Us.gs())}Ks(t,e,n){const s=new Ms(this.currentUser,t,e,n),i=ec(this.persistenceKey,this.currentUser,t);this.setItem(i,s.gs())}$s(t){const e=ec(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Gs(t){const e={clientId:this.ws,onlineState:t};this.storage.setItem(this.Ns,JSON.stringify(e))}Ws(t,e,n){const s=Fi(this.persistenceKey,t),i=new _r(t,e,n);this.setItem(s,i.gs())}zs(t){const e=JSON.stringify(Array.from(t));this.setItem(this.Ls,e)}js(t){const e=this.Ms.exec(t);return e?e[1]:null}Js(t,e){const n=this.js(t);return Fs.fs(n,e)}Ys(t,e){const n=this.xs.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ms.fs(new It(i),s,e)}Xs(t,e){const n=this.Os.exec(t),s=Number(n[1]);return _r.fs(s,e)}ks(t){return Co.fs(t)}no(t){return JSON.parse(t)}async Zs(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.io(t.batchId,t.state,t.error);C("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}eo(t){return this.syncEngine.so(t.targetId,t.state,t.error)}Hs(t,e){const n=e?this.Ds.insert(t,e):this.Ds.remove(t),s=this.Qs(this.Ds),i=this.Qs(n),a=[],u=[];return i.forEach(c=>{s.has(c)||a.push(c)}),s.forEach(c=>{i.has(c)||u.push(c)}),this.syncEngine.oo(a,u).then(()=>{this.Ds=n})}qs(t){this.Ds.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Qs(t){let e=mo();return t.forEach((n,s)=>{e=e.unionWith(s.activeTargetIds)}),e}}class rh{constructor(){this._o=new no,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new no,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms=null;function Li(){return ms===null?ms=function(){return 268435456+Math.round(2147483648*Math.random())}():ms++,"0x"+ms.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class Mm extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+e.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(e,n,s,i,a){const u=Li(),c=this.No(e,n.toUriEncodedString());C("RestConnection",`Sending RPC '${e}' ${u}:`,c,s);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,i,a),this.Bo(e,c,d,s).then(f=>(C("RestConnection",`Received RPC '${e}' ${u}: `,f),f),f=>{throw Ut("RestConnection",`RPC '${e}' ${u} failed with error: `,f,"url: ",c,"request:",s),f})}ko(e,n,s,i,a,u){return this.Oo(e,n,s,i,a)}Lo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),s&&s.headers.forEach((i,a)=>e[a]=i)}No(e,n){const s=km[e];return`${this.Fo}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,s){const i=Li();return new Promise((a,u)=>{const c=new Ac;c.setWithCredentials(!0),c.listenOnce(Rc.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ps.NO_ERROR:const f=c.getResponseJson();C(Ct,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(f)),a(f);break;case ps.TIMEOUT:C(Ct,`RPC '${t}' ${i} timed out`),u(new x(V.DEADLINE_EXCEEDED,"Request time out"));break;case ps.HTTP_ERROR:const g=c.getStatus();if(C(Ct,`RPC '${t}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const P=_==null?void 0:_.error;if(P&&P.status&&P.message){const D=function(b){const U=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(U)>=0?U:V.UNKNOWN}(P.status);u(new x(D,P.message))}else u(new x(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new x(V.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{C(Ct,`RPC '${t}' ${i} completed.`)}});const d=JSON.stringify(s);C(Ct,`RPC '${t}' ${i} sending request:`,s),c.send(e,"POST",d,n,15)})}qo(t,e,n){const s=Li(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Sc(),u=Vc(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const f=i.join("");C(Ct,`Creating RPC '${t}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);let _=!1,P=!1;const D=new Nm({Eo:b=>{P?C(Ct,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(_||(C(Ct,`Opening RPC '${t}' stream ${s} transport.`),g.open(),_=!0),C(Ct,`RPC '${t}' stream ${s} sending:`,b),g.send(b))},Ao:()=>g.close()}),k=(b,U,G)=>{b.listen(U,B=>{try{G(B)}catch(Q){setTimeout(()=>{throw Q},0)}})};return k(g,cr.EventType.OPEN,()=>{P||(C(Ct,`RPC '${t}' stream ${s} transport opened.`),D.So())}),k(g,cr.EventType.CLOSE,()=>{P||(P=!0,C(Ct,`RPC '${t}' stream ${s} transport closed`),D.Do())}),k(g,cr.EventType.ERROR,b=>{P||(P=!0,Ut(Ct,`RPC '${t}' stream ${s} transport errored:`,b),D.Do(new x(V.UNAVAILABLE,"The operation could not be completed")))}),k(g,cr.EventType.MESSAGE,b=>{var U;if(!P){const G=b.data[0];L(!!G);const B=G,Q=(B==null?void 0:B.error)||((U=B[0])===null||U===void 0?void 0:U.error);if(Q){C(Ct,`RPC '${t}' stream ${s} received error:`,Q);const Y=Q.status;let K=function(I){const E=pt[I];if(E!==void 0)return El(E)}(Y),T=Q.message;K===void 0&&(K=V.INTERNAL,T="Unknown error status: "+Y+" with message "+Q.message),P=!0,D.Do(new x(K,T)),g.close()}else C(Ct,`RPC '${t}' stream ${s} received:`,G),D.vo(G)}}),k(u,Pc.STAT_EVENT,b=>{b.stat===qi.PROXY?C(Ct,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===qi.NOPROXY&&C(Ct,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(){return typeof window<"u"?window:null}function ws(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(r){return new zf(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e,n=1e3,s=1.5,i=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),s=Math.max(0,e-n);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e,n,s,i,a,u,c){this.li=t,this.Yo=n,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new xo(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(ft(e.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Xo===e&&this.I_(n,s)},n=>{t(()=>{const s=new x(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(s)})})}I_(t,e){const n=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{n(()=>this.E_(s))}),this.stream.onMessage(s=>{n(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fm extends ih{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=Qf(this.serializer,t),n=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?mt(a.readTime):q.min()}(t);return this.listener.R_(e,n)}V_(t){const e={};e.database=Xi(this.serializer),e.addTarget=function(i,a){let u;const c=a.target;if(u=Ps(c)?{documents:xl(i,c)}:{query:Qs(i,c).ct},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Rl(i,a.resumeToken);const d=Hi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){u.readTime=En(i,a.snapshotVersion.toTimestamp());const d=Hi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=Wf(this.serializer,t);n&&(e.labels=n),this.c_(e)}m_(t){const e={};e.database=Xi(this.serializer),e.removeTarget=t,this.c_(e)}}class Om extends ih{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return L(!!t.streamToken),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=$f(t.writeResults,t.commitTime),n=mt(t.commitTime);return this.listener.y_(n,e)}w_(){const t={};t.database=Xi(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Rr(this.serializer,n))};this.c_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(t,Ji(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(V.UNKNOWN,i.toString())})}ko(t,e,n,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.ko(t,Ji(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(V.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Bm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ft(e),this.C_=!1):C("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{n.enqueueAndForget(async()=>{Re(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=N(c);d.k_.add(4),await Mn(d),d.K_.set("Unknown"),d.k_.delete(4),await Or(d)}(this))})}),this.K_=new Bm(n,s)}}async function Or(r){if(Re(r))for(const t of r.q_)await t(!0)}async function Mn(r){for(const t of r.q_)await t(!1)}function Js(r,t){const e=N(r);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),No(e)?ko(e):On(e).s_()&&Do(e,t))}function An(r,t){const e=N(r),n=On(e);e.B_.delete(t),n.s_()&&oh(e,t),e.B_.size===0&&(n.s_()?n.a_():Re(e)&&e.K_.set("Unknown"))}function Do(r,t){if(r.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}On(r).V_(t)}function oh(r,t){r.U_.xe(t),On(r).m_(t)}function ko(r){r.U_=new Bf({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>r.B_.get(t)||null,nt:()=>r.datastore.serializer.databaseId}),On(r).start(),r.K_.F_()}function No(r){return Re(r)&&!On(r).i_()&&r.B_.size>0}function Re(r){return N(r).k_.size===0}function ah(r){r.U_=void 0}async function Um(r){r.K_.set("Online")}async function Gm(r){r.B_.forEach((t,e)=>{Do(r,t)})}async function zm(r,t){ah(r),No(r)?(r.K_.O_(t),ko(r)):r.K_.set("Unknown")}async function jm(r,t,e){if(r.K_.set("Online"),t instanceof Al&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.B_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.B_.delete(u),s.U_.removeTarget(u))}(r,t)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Os(r,n)}else if(t instanceof vs?r.U_.$e(t):t instanceof wl?r.U_.Je(t):r.U_.Ge(t),!e.isEqual(q.min()))try{const n=await Yl(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.U_.it(a);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.B_.get(d);f&&i.B_.set(d,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,d)=>{const f=i.B_.get(c);if(!f)return;i.B_.set(c,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),oh(i,c);const g=new Zt(f.target,c,d,f.sequenceNumber);Do(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){C("RemoteStore","Failed to raise snapshot:",n),await Os(r,n)}}async function Os(r,t,e){if(!we(t))throw t;r.k_.add(1),await Mn(r),r.K_.set("Offline"),e||(e=()=>Yl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await e(),r.k_.delete(1),await Or(r)})}function uh(r,t){return t().catch(e=>Os(r,e,t))}async function Fn(r){const t=N(r),e=Te(t);let n=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;Km(t);)try{const s=await bm(t.localStore,n);if(s===null){t.L_.length===0&&e.a_();break}n=s.batchId,Qm(t,s)}catch(s){await Os(t,s)}ch(t)&&lh(t)}function Km(r){return Re(r)&&r.L_.length<10}function Qm(r,t){r.L_.push(t);const e=Te(r);e.s_()&&e.f_&&e.g_(t.mutations)}function ch(r){return Re(r)&&!Te(r).i_()&&r.L_.length>0}function lh(r){Te(r).start()}async function $m(r){Te(r).w_()}async function Wm(r){const t=Te(r);for(const e of r.L_)t.g_(e.mutations)}async function Hm(r,t,e){const n=r.L_.shift(),s=yo.from(n,t,e);await uh(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Fn(r)}async function Jm(r,t){t&&Te(r).f_&&await async function(n,s){if(function(a){return Tl(a)&&a!==V.ABORTED}(s.code)){const i=n.L_.shift();Te(n).__(),await uh(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fn(n)}}(r,t),ch(r)&&lh(r)}async function rc(r,t){const e=N(r);e.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const n=Re(e);e.k_.add(3),await Mn(e),n&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await Or(e)}async function ro(r,t){const e=N(r);t?(e.k_.delete(2),await Or(e)):t||(e.k_.add(2),await Mn(e),e.K_.set("Unknown"))}function On(r){return r.W_||(r.W_=function(e,n,s){const i=N(e);return i.b_(),new Fm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:Um.bind(null,r),mo:Gm.bind(null,r),po:zm.bind(null,r),R_:jm.bind(null,r)}),r.q_.push(async t=>{t?(r.W_.__(),No(r)?ko(r):r.K_.set("Unknown")):(await r.W_.stop(),ah(r))})),r.W_}function Te(r){return r.G_||(r.G_=function(e,n,s){const i=N(e);return i.b_(),new Om(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:$m.bind(null,r),po:Jm.bind(null,r),p_:Wm.bind(null,r),y_:Hm.bind(null,r)}),r.q_.push(async t=>{t?(r.G_.__(),await Fn(r)):(await r.G_.stop(),r.L_.length>0&&(C("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new Mo(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ln(r,t){if(ft("AsyncQueue",`${t}: ${r}`),we(r))return new x(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{static emptySet(t){return new fn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||F.comparator(e.key,n.key):(e,n)=>F.comparator(e.key,n.key),this.keyedMap=lr(),this.sortedSet=new rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new fn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.z_=new rt(F.comparator)}track(t){const e=t.doc.key,n=this.z_.get(e);n?t.type!==0&&n.type===3?this.z_=this.z_.insert(e,t):t.type===3&&n.type!==1?this.z_=this.z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.z_=this.z_.remove(e):t.type===1&&n.type===2?this.z_=this.z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):O():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Rn{constructor(t,e,n,s,i,a,u,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Rn(t,e,fn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class Ym{constructor(){this.queries=ic(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,n){const s=N(e),i=s.queries;s.queries=ic(),i.forEach((a,u)=>{for(const c of u.J_)c.onError(n)})})(this,new x(V.ABORTED,"Firestore shutting down"))}}function ic(){return new re(r=>il(r),xr)}async function Fo(r,t){const e=N(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.Y_()&&t.Z_()&&(n=2):(i=new Xm,n=t.Z_()?0:1);try{switch(n){case 0:i.H_=await e.onListen(s,!0);break;case 1:i.H_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Ln(a,`Initialization of query '${cn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.J_.push(t),t.ea(e.onlineState),i.H_&&t.ta(i.H_)&&Lo(e)}async function Oo(r,t){const e=N(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.J_.indexOf(t);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=t.Z_()?0:1:!i.Y_()&&t.Z_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Zm(r,t){const e=N(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.J_)u.ta(s)&&(n=!0);a.H_=s}}n&&Lo(e)}function tg(r,t,e){const n=N(r),s=n.queries.get(t);if(s)for(const i of s.J_)i.onError(e);n.queries.delete(t)}function Lo(r){r.X_.forEach(t=>{t.next()})}var so,oc;(oc=so||(so={})).na="default",oc.Cache="cache";class Bo{constructor(t,e,n){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Rn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const n=e!=="Offline";return(!this.options.ua||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=Rn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==so.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,e){this.ca=t,this.byteLength=e}la(){return"metadata"in this.ca}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.serializer=t}As(t){return Qt(this.serializer,t)}Rs(t){return t.metadata.exists?Cl(this.serializer,t.document,!1):it.newNoDocument(this.As(t.metadata.name),this.Vs(t.metadata.readTime))}Vs(t){return mt(t)}}class ng{constructor(t,e,n){this.ha=t,this.localStore=e,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=hh(t)}Pa(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.ca.namedQuery)this.queries.push(t.ca.namedQuery);else if(t.ca.documentMetadata){this.documents.push({metadata:t.ca.documentMetadata}),t.ca.documentMetadata.exists||++e;const n=W.fromString(t.ca.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.ca.document&&(this.documents[this.documents.length-1].document=t.ca.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}Ta(t){const e=new Map,n=new ac(this.serializer);for(const s of t)if(s.metadata.queries){const i=n.As(s.metadata.name);for(const a of s.metadata.queries){const u=(e.get(a)||j()).add(i);e.set(a,u)}}return e}async complete(){const t=await Cm(this.localStore,new ac(this.serializer),this.documents,this.ha.id),e=this.Ta(this.documents);for(const n of this.queries)await xm(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ia:this.collectionGroups,Ea:t}}}function hh(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t){this.key=t}}class fh{constructor(t){this.key=t}}class mh{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=j(),this.mutatedKeys=j(),this.Va=al(t),this.ma=new fn(this.Va)}get fa(){return this.da}ga(t,e){const n=e?e.pa:new sc,s=e?e.ma:this.ma;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,g)=>{const _=s.get(f),P=Dr(this.query,g)?g:null,D=!!_&&this.mutatedKeys.has(_.key),k=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;_&&P?_.data.isEqual(P.data)?D!==k&&(n.track({type:3,doc:P}),b=!0):this.ya(_,P)||(n.track({type:2,doc:P}),b=!0,(c&&this.Va(P,c)>0||d&&this.Va(P,d)<0)&&(u=!0)):!_&&P?(n.track({type:0,doc:P}),b=!0):_&&!P&&(n.track({type:1,doc:_}),b=!0,(c||d)&&(u=!0)),b&&(P?(a=a.add(P),i=k?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{ma:a,pa:n,ss:u,mutatedKeys:i}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const a=t.pa.j_();a.sort((f,g)=>function(P,D){const k=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return k(P)-k(D)}(f.type,g.type)||this.Va(f.doc,g.doc)),this.wa(n),s=s!=null&&s;const u=e&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,d=c!==this.Aa;return this.Aa=c,a.length!==0||d?{snapshot:new Rn(this.query,t.ma,i,a,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:u}:{ba:u}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new sc,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=j(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const e=[];return t.forEach(n=>{this.Ra.has(n)||e.push(new fh(n))}),this.Ra.forEach(n=>{t.has(n)||e.push(new dh(n))}),e}va(t){this.da=t.ds,this.Ra=j();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Rn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class rg{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class sg{constructor(t){this.key=t,this.Fa=!1}}class ig{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new re(u=>il(u),xr),this.Oa=new Map,this.Na=new Set,this.La=new rt(F.comparator),this.Ba=new Map,this.ka=new Ro,this.qa={},this.Qa=new Map,this.Ka=$e.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function og(r,t,e=!0){const n=Xs(r);let s;const i=n.xa.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await gh(n,t,e,!0),s}async function ag(r,t){const e=Xs(r);await gh(e,t,!0,!1)}async function gh(r,t,e,n){const s=await vn(r.localStore,kt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await qo(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Js(r.remoteStore,s),u}async function qo(r,t,e,n,s){r.Ua=(g,_,P)=>async function(k,b,U,G){let B=b.view.ga(U);B.ss&&(B=await Ns(k.localStore,b.query,!1).then(({documents:T})=>b.view.ga(T,B)));const Q=G&&G.targetChanges.get(b.targetId),Y=G&&G.targetMismatches.get(b.targetId)!=null,K=b.view.applyChanges(B,k.isPrimaryClient,Q,Y);return io(k,b.targetId,K.ba),K.snapshot}(r,g,_,P);const i=await Ns(r.localStore,t,!0),a=new mh(t,i.ds),u=a.ga(i.documents),c=Mr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,c);io(r,e,d.ba);const f=new rg(t,e,a);return r.xa.set(t,f),r.Oa.has(e)?r.Oa.get(e).push(t):r.Oa.set(e,[t]),d.snapshot}async function ug(r,t,e){const n=N(r),s=n.xa.get(t),i=n.Oa.get(s.targetId);if(i.length>1)return n.Oa.set(s.targetId,i.filter(a=>!xr(a,t))),void n.xa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await wn(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&An(n.remoteStore,s.targetId),Pn(n,s.targetId)}).catch(ve)):(Pn(n,s.targetId),await wn(n.localStore,s.targetId,!0))}async function cg(r,t){const e=N(r),n=e.xa.get(t),s=e.Oa.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),An(e.remoteStore,n.targetId))}async function lg(r,t,e){const n=jo(r);try{const s=await function(a,u){const c=N(a),d=ct.now(),f=u.reduce((P,D)=>P.add(D.key),j());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=Lt(),k=j();return c.hs.getEntries(P,f).next(b=>{D=b,D.forEach((U,G)=>{G.isValidDocument()||(k=k.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(P,D)).next(b=>{g=b;const U=[];for(const G of u){const B=Ff(G,g.get(G.key).overlayedDocument);B!=null&&U.push(new se(G.key,B,Wc(B.value.mapValue),ut.exists(!0)))}return c.mutationQueue.addMutationBatch(P,d,U,u)}).next(b=>{_=b;const U=b.applyToLocalDocumentSet(g,k);return c.documentOverlayCache.saveOverlays(P,b.batchId,U)})}).then(()=>({batchId:_.batchId,changes:cl(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let d=a.qa[a.currentUser.toKey()];d||(d=new rt(z)),d=d.insert(u,c),a.qa[a.currentUser.toKey()]=d}(n,s.batchId,e),await ie(n,s.changes),await Fn(n.remoteStore)}catch(s){const i=Ln(s,"Failed to persist write");e.reject(i)}}async function ph(r,t){const e=N(r);try{const n=await Sm(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Ba.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?L(a.Fa):s.removedDocuments.size>0&&(L(a.Fa),a.Fa=!1))}),await ie(e,n,t)}catch(n){await ve(n)}}function uc(r,t,e){const n=N(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.xa.forEach((i,a)=>{const u=a.view.ea(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const c=N(a);c.onlineState=u;let d=!1;c.queries.forEach((f,g)=>{for(const _ of g.J_)_.ea(u)&&(d=!0)}),d&&Lo(c)}(n.eventManager,t),s.length&&n.Ma.R_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function hg(r,t,e){const n=N(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Ba.get(t),i=s&&s.key;if(i){let a=new rt(F.comparator);a=a.insert(i,it.newNoDocument(i,q.min()));const u=j().add(i),c=new Nr(q.min(),new Map,new rt(z),a,u);await ph(n,c),n.La=n.La.remove(i),n.Ba.delete(t),zo(n)}else await wn(n.localStore,t,!1).then(()=>Pn(n,t,e)).catch(ve)}async function dg(r,t){const e=N(r),n=t.batch.batchId;try{const s=await Vm(e.localStore,t);Go(e,n,null),Uo(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ie(e,s)}catch(s){await ve(s)}}async function fg(r,t,e){const n=N(r);try{const s=await function(a,u){const c=N(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,u).next(g=>(L(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(d,g))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(n.localStore,t);Go(n,t,e),Uo(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ie(n,s)}catch(s){await ve(s)}}async function mg(r,t){const e=N(r);Re(e.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=N(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(e.localStore);if(n===-1)return void t.resolve();const s=e.Qa.get(n)||[];s.push(t),e.Qa.set(n,s)}catch(n){const s=Ln(n,"Initialization of waitForPendingWrites() operation failed");t.reject(s)}}function Uo(r,t){(r.Qa.get(t)||[]).forEach(e=>{e.resolve()}),r.Qa.delete(t)}function Go(r,t,e){const n=N(r);let s=n.qa[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.qa[n.currentUser.toKey()]=s}}function Pn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Oa.get(t))r.xa.delete(n),e&&r.Ma.Wa(n,e);r.Oa.delete(t),r.isPrimaryClient&&r.ka.yr(t).forEach(n=>{r.ka.containsKey(n)||_h(r,n)})}function _h(r,t){r.Na.delete(t.path.canonicalString());const e=r.La.get(t);e!==null&&(An(r.remoteStore,e),r.La=r.La.remove(t),r.Ba.delete(e),zo(r))}function io(r,t,e){for(const n of e)n instanceof dh?(r.ka.addReference(n.key,t),gg(r,n)):n instanceof fh?(C("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,t),r.ka.containsKey(n.key)||_h(r,n.key)):O()}function gg(r,t){const e=t.key,n=e.path.canonicalString();r.La.get(e)||r.Na.has(n)||(C("SyncEngine","New document in limbo: "+e),r.Na.add(n),zo(r))}function zo(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const t=r.Na.values().next().value;r.Na.delete(t);const e=new F(W.fromString(t)),n=r.Ka.next();r.Ba.set(n,new sg(e)),r.La=r.La.insert(e,n),Js(r.remoteStore,new Zt(kt(Dn(e.path)),n,"TargetPurposeLimboResolution",Ft.oe))}}async function ie(r,t,e){const n=N(r),s=[],i=[],a=[];n.xa.isEmpty()||(n.xa.forEach((u,c)=>{a.push(n.Ua(c,t,e).then(d=>{var f;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(d){s.push(d);const g=bo.zi(c.targetId,d);i.push(g)}}))}),await Promise.all(a),n.Ma.R_(s),await async function(c,d){const f=N(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>w.forEach(d,_=>w.forEach(_.Wi,P=>f.persistence.referenceDelegate.addReference(g,_.targetId,P)).next(()=>w.forEach(_.Gi,P=>f.persistence.referenceDelegate.removeReference(g,_.targetId,P)))))}catch(g){if(!we(g))throw g;C("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const _=g.targetId;if(!g.fromCache){const P=f.us.get(_),D=P.snapshotVersion,k=P.withLastLimboFreeSnapshotVersion(D);f.us=f.us.insert(_,k)}}}(n.localStore,i))}async function pg(r,t){const e=N(r);if(!e.currentUser.isEqual(t)){C("SyncEngine","User change. New user:",t.toKey());const n=await Xl(e.localStore,t);e.currentUser=t,function(i,a){i.Qa.forEach(u=>{u.forEach(c=>{c.reject(new x(V.CANCELLED,a))})}),i.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ie(e,n.Ts)}}function _g(r,t){const e=N(r),n=e.Ba.get(t);if(n&&n.Fa)return j().add(n.key);{let s=j();const i=e.Oa.get(t);if(!i)return s;for(const a of i){const u=e.xa.get(a);s=s.unionWith(u.view.fa)}return s}}async function yg(r,t){const e=N(r),n=await Ns(e.localStore,t.query,!0),s=t.view.va(n);return e.isPrimaryClient&&io(e,t.targetId,s.ba),s}async function Ig(r,t){const e=N(r);return eh(e.localStore,t).then(n=>ie(e,n))}async function Tg(r,t,e,n){const s=N(r),i=await function(u,c){const d=N(u),f=N(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",g=>f.On(g,c).next(_=>_?d.localDocuments.getDocuments(g,_):w.resolve(null)))}(s.localStore,t);i!==null?(e==="pending"?await Fn(s.remoteStore):e==="acknowledged"||e==="rejected"?(Go(s,t,n||null),Uo(s,t),function(u,c){N(N(u).mutationQueue).Ln(c)}(s.localStore,t)):O(),await ie(s,i)):C("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Eg(r,t){const e=N(r);if(Xs(e),jo(e),t===!0&&e.$a!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await cc(e,n.toArray());e.$a=!0,await ro(e.remoteStore,!0);for(const i of s)Js(e.remoteStore,i)}else if(t===!1&&e.$a!==!1){const n=[];let s=Promise.resolve();e.Oa.forEach((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(Pn(e,a),wn(e.localStore,a,!0))),An(e.remoteStore,a)}),await s,await cc(e,n),function(a){const u=N(a);u.Ba.forEach((c,d)=>{An(u.remoteStore,d)}),u.ka.wr(),u.Ba=new Map,u.La=new rt(F.comparator)}(e),e.$a=!1,await ro(e.remoteStore,!1)}}async function cc(r,t,e){const n=N(r),s=[],i=[];for(const a of t){let u;const c=n.Oa.get(a);if(c&&c.length!==0){u=await vn(n.localStore,kt(c[0]));for(const d of c){const f=n.xa.get(d),g=await yg(n,f);g.snapshot&&i.push(g.snapshot)}}else{const d=await th(n.localStore,a);u=await vn(n.localStore,d),await qo(n,yh(d),a,!1,u.resumeToken)}s.push(u)}return n.Ma.R_(i),s}function yh(r){return nl(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function vg(r){return function(e){return N(N(e).persistence).$i()}(N(r).localStore)}async function wg(r,t,e,n){const s=N(r);if(s.$a)return void C("SyncEngine","Ignoring unexpected query state notification.");const i=s.Oa.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await eh(s.localStore,ol(i[0])),u=Nr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",dt.EMPTY_BYTE_STRING);await ie(s,a,u);break}case"rejected":await wn(s.localStore,t,!0),Pn(s,t,n);break;default:O()}}async function Ag(r,t,e){const n=Xs(r);if(n.$a){for(const s of t){if(n.Oa.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){C("SyncEngine","Adding an already active target "+s);continue}const i=await th(n.localStore,s),a=await vn(n.localStore,i);await qo(n,yh(i),a.targetId,!1,a.resumeToken),Js(n.remoteStore,a)}for(const s of e)n.Oa.has(s)&&await wn(n.localStore,s,!1).then(()=>{An(n.remoteStore,s),Pn(n,s)}).catch(ve)}}function Xs(r){const t=N(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=ph.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_g.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hg.bind(null,t),t.Ma.R_=Zm.bind(null,t.eventManager),t.Ma.Wa=tg.bind(null,t.eventManager),t}function jo(r){const t=N(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fg.bind(null,t),t}function Rg(r,t,e){const n=N(r);(async function(i,a,u){try{const c=await a.getMetadata();if(await function(P,D){const k=N(P),b=mt(D.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",U=>k.jr.getBundleMetadata(U,D.id)).then(U=>!!U&&U.createTime.compareTo(b)>=0)}(i.localStore,c))return await a.close(),u._completeWith(function(P){return{taskState:"Success",documentsLoaded:P.totalDocuments,bytesLoaded:P.totalBytes,totalDocuments:P.totalDocuments,totalBytes:P.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(hh(c));const d=new ng(c,i.localStore,a.serializer);let f=await a.Ga();for(;f;){const _=await d.Pa(f);_&&u._updateProgress(_),f=await a.Ga()}const g=await d.complete();return await ie(i,g.Ea,void 0),await function(P,D){const k=N(P);return k.persistence.runTransaction("Save bundle","readwrite",b=>k.jr.saveBundleMetadata(b,D))}(i.localStore,c),u._completeWith(g.progress),Promise.resolve(g.Ia)}catch(c){return Ut("SyncEngine",`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,t,e).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class Vn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Fr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return Jl(this.persistence,new Hl,t.initialUser,this.serializer)}ja(t){return new Po(Hs.ei,this.serializer)}za(t){return new rh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vn.provider={build:()=>new Vn};class Ko extends Vn{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){L(this.persistence.referenceDelegate instanceof ks);const n=this.persistence.referenceDelegate.garbageCollector;return new jl(n,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Po(n=>ks.ei(n,e),this.serializer)}}class Qo extends Vn{constructor(t,e,n){super(),this.Za=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Za.initialize(this,t),await jo(this.Za.syncEngine),await Fn(this.Za.remoteStore),await this.persistence.Si(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ha(t){return Jl(this.persistence,new Hl,t.initialUser,this.serializer)}Ja(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new jl(n,t.asyncQueue,e)}Ya(t,e){const n=new $d(e,this.persistence);return new Qd(t.asyncQueue,n)}ja(t){const e=So(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Vo(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,sh(),ws(),this.serializer,this.sharedClientState,!!this.forceOwnership)}za(t){return new rh}}class Ih extends Qo{constructor(t,e){super(t,e,!1),this.Za=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Za.syncEngine;this.sharedClientState instanceof Oi&&(this.sharedClientState.syncEngine={io:Tg.bind(null,e),so:wg.bind(null,e),oo:Ag.bind(null,e),$i:vg.bind(null,e),ro:Ig.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Si(async n=>{await Eg(this.Za.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}za(t){const e=sh();if(!Oi.p(e))throw new x(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=So(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Oi(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Ee{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>uc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=pg.bind(null,this.syncEngine),await ro(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ym}()}createDatastore(t){const e=Fr(t.databaseInfo.databaseId),n=function(i){return new Mm(i)}(t.databaseInfo);return function(i,a,u,c){return new Lm(i,a,u,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new qm(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>uc(this.syncEngine,e,0),function(){return nc.p()?new nc:new Dm}())}createSyncEngine(t,e){return function(s,i,a,u,c,d,f){const g=new ig(s,i,a,u,c,d);return f&&(g.$a=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=N(s);C("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Mn(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ee.provider={build:()=>new Ee};function lc(r,t=10240){let e=0;return{async read(){if(e<r.byteLength){const n={value:r.slice(e,e+t),done:!1};return e+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):ft("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,e){this.tu=t,this.serializer=e,this.metadata=new Tt,this.buffer=new Uint8Array,this.nu=function(){return new TextDecoder("utf-8")}(),this.ru().then(n=>{n&&n.la()?this.metadata.resolve(n.ca.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.ca)}`))},n=>this.metadata.reject(n))}close(){return this.tu.cancel()}async getMetadata(){return this.metadata.promise}async Ga(){return await this.getMetadata(),this.ru()}async ru(){const t=await this.iu();if(t===null)return null;const e=this.nu.decode(t),n=Number(e);isNaN(n)&&this.su(`length string (${e}) is not valid number`);const s=await this.ou(n);return new eg(JSON.parse(s),t.length+n)}_u(){return this.buffer.findIndex(t=>t===123)}async iu(){for(;this._u()<0&&!await this.au(););if(this.buffer.length===0)return null;const t=this._u();t<0&&this.su("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ou(t){for(;this.buffer.length<t;)await this.au()&&this.su("Reached the end of bundle when more is expected.");const e=this.nu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}su(t){throw this.tu.cancel(),new Error(`Invalid bundle format: ${t}`)}async au(){const t=await this.tu.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,i){const a=N(s),u={documents:i.map(g=>Ar(a.serializer,g))},c=await a.ko("BatchGetDocuments",a.serializer.databaseId,W.emptyPath(),u,i.length),d=new Map;c.forEach(g=>{const _=Kf(a.serializer,g);d.set(_.key.toString(),_)});const f=[];return i.forEach(g=>{const _=d.get(g.toString());L(!!_),f.push(_)}),f}(this.datastore,t);return e.forEach(n=>this.recordVersion(n)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new Nn(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,n)=>{const s=F.fromPath(n);this.mutations.push(new po(s,this.precondition(s)))}),await async function(n,s){const i=N(n),a={writes:s.map(u=>Rr(i.serializer,u))};await i.Oo("Commit",i.serializer.databaseId,W.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O();e=q.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new x(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(q.min())?ut.exists(!1):ut.updateTime(e):ut.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(q.min()))throw new x(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ut.updateTime(e)}return ut.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this.uu=n.maxAttempts,this.r_=new xo(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{const t=new Vg(this.datastore),e=this.hu(t);e&&e.then(n=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.Pu(s)}))}).catch(n=>{this.Pu(n)})})}hu(t){try{const e=this.updateFunction(t);return!br(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Pu(t){this.uu>0&&this.Tu(t)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(t)}Tu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Tl(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{C("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(C("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ln(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Bi(r,t){r.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Xl(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function hc(r,t){r.asyncQueue.verifyOperationInProgress();const e=await $o(r);C("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>rc(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>rc(t.remoteStore,s)),r._onlineComponents=t}async function $o(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bi(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ut("Error using user provided cache. Falling back to memory cache: "+e),await Bi(r,new Vn)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Bi(r,new Ko(void 0));return r._offlineComponents}async function Zs(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await hc(r,r._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await hc(r,new Ee))),r._onlineComponents}function Th(r){return $o(r).then(t=>t.persistence)}function Bn(r){return $o(r).then(t=>t.localStore)}function Eh(r){return Zs(r).then(t=>t.remoteStore)}function Wo(r){return Zs(r).then(t=>t.syncEngine)}function vh(r){return Zs(r).then(t=>t.datastore)}async function Sn(r){const t=await Zs(r),e=t.eventManager;return e.onListen=og.bind(null,t.syncEngine),e.onUnlisten=ug.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ag.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=cg.bind(null,t.syncEngine),e}function Cg(r){return r.asyncQueue.enqueue(async()=>{const t=await Th(r),e=await Eh(r);return t.setNetworkEnabled(!0),function(s){const i=N(s);return i.k_.delete(0),Or(i)}(e)})}function xg(r){return r.asyncQueue.enqueue(async()=>{const t=await Th(r),e=await Eh(r);return t.setNetworkEnabled(!1),async function(s){const i=N(s);i.k_.add(0),await Mn(i),i.K_.set("Offline")}(e)})}function Dg(r,t){const e=new Tt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await function(d,f){const g=N(d);return g.persistence.runTransaction("read document","readonly",_=>g.localDocuments.getDocument(_,f))}(s,i);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new x(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Ln(u,`Failed to get document '${i} from cache`);a.reject(c)}}(await Bn(r),t,e)),e.promise}function wh(r,t,e={}){const n=new Tt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,d){const f=new Ys({next:_=>{f.eu(),a.enqueueAndForget(()=>Oo(i,g));const P=_.docs.has(u);!P&&_.fromCache?d.reject(new x(V.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&_.fromCache&&c&&c.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Bo(Dn(u.path),f,{includeMetadataChanges:!0,ua:!0});return Fo(i,g)}(await Sn(r),r.asyncQueue,t,e,n)),n.promise}function kg(r,t){const e=new Tt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await Ns(s,i,!0),c=new mh(i,u.ds),d=c.ga(u.documents),f=c.applyChanges(d,!1);a.resolve(f.snapshot)}catch(u){const c=Ln(u,`Failed to execute query '${i} against cache`);a.reject(c)}}(await Bn(r),t,e)),e.promise}function Ah(r,t,e={}){const n=new Tt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,d){const f=new Ys({next:_=>{f.eu(),a.enqueueAndForget(()=>Oo(i,g)),_.fromCache&&c.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Bo(u,f,{includeMetadataChanges:!0,ua:!0});return Fo(i,g)}(await Sn(r),r.asyncQueue,t,e,n)),n.promise}function Ng(r,t,e){const n=new Tt;return r.asyncQueue.enqueueAndForget(async()=>{try{const s=await vh(r);n.resolve(async function(a,u,c){var d;const f=N(a),{request:g,lt:_,parent:P}=Dl(f.serializer,rl(u),c);f.connection.Co||delete g.parent;const D=(await f.ko("RunAggregationQuery",f.serializer.databaseId,P,g,1)).filter(b=>!!b.result);L(D.length===1);const k=(d=D[0].result)===null||d===void 0?void 0:d.aggregateFields;return Object.keys(k).reduce((b,U)=>(b[_[U]]=k[U],b),{})}(s,t,e))}catch(s){n.reject(s)}}),n.promise}function Mg(r,t){const e=new Ys(t);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){N(s).X_.add(i),i.next()}(await Sn(r),e)),()=>{e.eu(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){N(s).X_.delete(i)}(await Sn(r),e))}}function Fg(r,t,e,n){const s=function(a,u){let c;return c=typeof a=="string"?vl().encode(a):a,function(f,g){return new Pg(f,g)}(function(f,g){if(f instanceof Uint8Array)return lc(f,g);if(f instanceof ArrayBuffer)return lc(new Uint8Array(f),g);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(e,Fr(t));r.asyncQueue.enqueueAndForget(async()=>{Rg(await Wo(r),s,n)})}function Og(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){const i=N(n);return i.persistence.runTransaction("Get named query","readonly",a=>i.jr.getNamedQuery(a,s))}(await Bn(r),t))}function Lg(r,t){return r.asyncQueue.enqueue(async()=>async function(n,s){const i=N(n),a=i.indexManager,u=[];return i.persistence.runTransaction("Configure indexes","readwrite",c=>a.getFieldIndexes(c).next(d=>function(g,_,P,D,k){g=[...g],_=[..._],g.sort(P),_.sort(P);const b=g.length,U=_.length;let G=0,B=0;for(;G<U&&B<b;){const Q=P(g[B],_[G]);Q<0?k(g[B++]):Q>0?D(_[G++]):(G++,B++)}for(;G<U;)D(_[G++]);for(;B<b;)k(g[B++])}(d,s,Gd,f=>{u.push(a.addFieldIndex(c,f))},f=>{u.push(a.deleteFieldIndex(c,f))})).next(()=>w.waitFor(u)))}(await Bn(r),t))}function Bg(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){N(n)._s.Hi=s}(await Bn(r),t))}function qg(r){return r.asyncQueue.enqueue(async()=>function(e){const n=N(e),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await Bn(r)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(r,t,e){if(!e)throw new x(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Ug(r,t,e,n){if(t===!0&&n===!0)throw new x(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function fc(r){if(!F.isDocumentKey(r))throw new x(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function mc(r){if(F.isDocumentKey(r))throw new x(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ti(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function $(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ti(r);throw new x(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Ph(r,t){if(t<=0)throw new x(V.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ug("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rh((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Nd;switch(n.type){case"firstParty":return new Ld(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dc.get(e);n&&(C("ComponentProvider","Removing Datastore"),dc.delete(e),n.terminate())}(this),Promise.resolve()}}function Gg(r,t,e,n={}){var s;const i=(r=$(r,Lr))._getSettings(),a=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Ut("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let u,c;if(typeof n.mockUserToken=="string")u=n.mockUserToken,c=It.MOCK_USER;else{u=Pd(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new x(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new It(d)}r._authCredentials=new Md(new bc(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rt(this.firestore,t,this._query)}}class gt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}}class $t extends Rt{constructor(t,e,n){super(t,e,Dn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new F(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function Tp(r,t,...e){if(r=Et(r),Ho("collection","path",t),r instanceof Lr){const n=W.fromString(t,...e);return mc(n),new $t(r,null,n)}{if(!(r instanceof gt||r instanceof $t))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return mc(n),new $t(r.firestore,null,n)}}function Ep(r,t){if(r=$(r,Lr),Ho("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Rt(r,null,function(n){return new ne(W.emptyPath(),n)}(t))}function zg(r,t,...e){if(r=Et(r),arguments.length===1&&(t=xc.newId()),Ho("doc","path",t),r instanceof Lr){const n=W.fromString(t,...e);return fc(n),new gt(r,null,new F(n))}{if(!(r instanceof gt||r instanceof $t))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return fc(n),new gt(r.firestore,r instanceof $t?r.converter:null,new F(n))}}function vp(r,t){return r=Et(r),t=Et(t),(r instanceof gt||r instanceof $t)&&(t instanceof gt||t instanceof $t)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function Vh(r,t){return r=Et(r),t=Et(t),r instanceof Rt&&t instanceof Rt&&r.firestore===t.firestore&&xr(r._query,t._query)&&r.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new xo(this,"async_queue_retry"),this.fu=()=>{const n=ws();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=t;const e=ws();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=ws();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new Tt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!we(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(n=>{this.Au=n,this.Ru=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw ft("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.Ru=!1,n))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const s=Mo.createAndSchedule(this,t,e,n,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&O()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function oo(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class jg{constructor(){this._progressObserver={},this._taskCompletionResolver=new Tt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=-1;class nt extends Lr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new pc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new pc(t),this._firestoreClient=void 0,await t}}}function Ap(r,t,e){e||(e="(default)");const n=Ec(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(Bs(i,t))return s;throw new x(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new x(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:e})}function Rp(r,t){const e=typeof r=="object"?r:Vd(),n=typeof r=="string"?r:t||"(default)",s=Ec(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Sd("firestore");i&&Gg(s,...i)}return s}function lt(r){if(r._terminated)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Sh(r),r._firestoreClient}function Sh(r){var t,e,n;const s=r._freezeSettings(),i=function(u,c,d,f){return new gf(u,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Rh(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new bg(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function Pp(r,t){Ut("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return bh(r,Ee.provider,{build:n=>new Qo(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}async function Vp(r){Ut("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();bh(r,Ee.provider,{build:e=>new Ih(e,t.cacheSizeBytes)})}function bh(r,t,e){if((r=$(r,nt))._firestoreClient||r._terminated)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new x(V.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},Sh(r)}function Sp(r){if(r._initialized&&!r._terminated)throw new x(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Tt;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Kt.p())return Promise.resolve();const s=n+"main";await Kt.delete(s)}(So(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function bp(r){return function(e){const n=new Tt;return e.asyncQueue.enqueueAndForget(async()=>mg(await Wo(e),n)),n.promise}(lt(r=$(r,nt)))}function Cp(r){return Cg(lt(r=$(r,nt)))}function xp(r){return xg(lt(r=$(r,nt)))}function Dp(r){return bd(r.app,"firestore",r._databaseId.database),r._delete()}function kp(r,t){const e=lt(r=$(r,nt)),n=new jg;return Fg(e,r._databaseId,t,n),n}function Np(r,t){return Og(lt(r=$(r,nt)),t).then(e=>e?new Rt(r,null,e.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Kg{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this._byteString=t}static fromBase64String(t){try{return new We(dt.fromBase64String(t))}catch(e){throw new x(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new We(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Mp(){return new He("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=/^__.*__$/;class $g{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new kn(t,this.data,e,this.fieldTransforms)}}class Ch{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function xh(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class ni{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new ni(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:n,Nu:!1});return s.Lu(t),s}Bu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:n,Nu:!1});return s.Fu(),s}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Ls(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(xh(this.Mu)&&Qg.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class Wg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Fr(t)}$u(t,e,n,s=!1){return new ni({Mu:t,methodName:e,Ku:n,path:at.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xe(r){const t=r._freezeSettings(),e=Fr(r._databaseId);return new Wg(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ri(r,t,e,n,s,i={}){const a=r.$u(i.merge||i.mergeFields?2:0,t,e,s);ra("Data must be an object, but it was:",a,n);const u=Nh(n,a);let c,d;if(i.merge)c=new Ot(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=Vr(t,g,e);if(!a.contains(_))throw new x(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Fh(f,_)||f.push(_)}c=new Ot(f),d=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,d=a.fieldTransforms;return new $g(new At(u),c,d)}class Br extends Je{_toFieldTransform(t){if(t.Mu!==2)throw t.Mu===1?t.qu(`${this._methodName}() can only appear at the top level of your update data`):t.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Br}}function Dh(r,t,e){return new ni({Mu:3,Ku:t.settings.Ku,methodName:r._methodName,Nu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Xo extends Je{_toFieldTransform(t){return new kr(t.path,new In)}isEqual(t){return t instanceof Xo}}class Yo extends Je{constructor(t,e){super(t),this.Uu=e}_toFieldTransform(t){const e=Dh(this,t,!0),n=this.Uu.map(i=>Ye(i,e)),s=new ze(n);return new kr(t.path,s)}isEqual(t){return t instanceof Yo&&Bs(this.Uu,t.Uu)}}class Zo extends Je{constructor(t,e){super(t),this.Uu=e}_toFieldTransform(t){const e=Dh(this,t,!0),n=this.Uu.map(i=>Ye(i,e)),s=new je(n);return new kr(t.path,s)}isEqual(t){return t instanceof Zo&&Bs(this.Uu,t.Uu)}}class ta extends Je{constructor(t,e){super(t),this.Wu=e}_toFieldTransform(t){const e=new Tn(t.serializer,dl(t.serializer,this.Wu));return new kr(t.path,e)}isEqual(t){return t instanceof ta&&this.Wu===t.Wu}}function ea(r,t,e,n){const s=r.$u(1,t,e);ra("Data must be an object, but it was:",s,n);const i=[],a=At.empty();Ae(n,(c,d)=>{const f=si(t,c,e);d=Et(d);const g=s.Bu(f);if(d instanceof Br)i.push(f);else{const _=Ye(d,g);_!=null&&(i.push(f),a.set(f,_))}});const u=new Ot(i);return new Ch(a,u,s.fieldTransforms)}function na(r,t,e,n,s,i){const a=r.$u(1,t,e),u=[Vr(t,n,e)],c=[s];if(i.length%2!=0)throw new x(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)u.push(Vr(t,i[_])),c.push(i[_+1]);const d=[],f=At.empty();for(let _=u.length-1;_>=0;--_)if(!Fh(d,u[_])){const P=u[_];let D=c[_];D=Et(D);const k=a.Bu(P);if(D instanceof Br)d.push(P);else{const b=Ye(D,k);b!=null&&(d.push(P),f.set(P,b))}}const g=new Ot(d);return new Ch(f,g,a.fieldTransforms)}function kh(r,t,e,n=!1){return Ye(e,r.$u(n?4:3,t))}function Ye(r,t){if(Mh(r=Et(r)))return ra("Unsupported field value:",t,r),Nh(r,t);if(r instanceof Je)return function(n,s){if(!xh(s.Mu))throw s.qu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let c=Ye(u,s.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return dl(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ct.fromDate(n);return{timestampValue:En(s.serializer,i)}}if(n instanceof ct){const i=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:En(s.serializer,i)}}if(n instanceof Jo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof We)return{bytesValue:Rl(s.serializer,n._byteString)};if(n instanceof gt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Eo(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof ei)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.qu("VectorValues must only contain numeric values.");return go(u.serializer,c)})}}}}}}(n,s);throw s.qu(`Unsupported field value: ${ti(n)}`)}(r,t)}function Nh(r,t){const e={};return jc(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ae(r,(n,s)=>{const i=Ye(s,t.Ou(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function Mh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ct||r instanceof Jo||r instanceof We||r instanceof gt||r instanceof Je||r instanceof ei)}function ra(r,t,e){if(!Mh(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=ti(e);throw n==="an object"?t.qu(r+" a custom object"):t.qu(r+" "+n)}}function Vr(r,t,e){if((t=Et(t))instanceof He)return t._internalPath;if(typeof t=="string")return si(r,t);throw Ls("Field path arguments must be of type string or ",r,!1,void 0,e)}const Hg=new RegExp("[~\\*/\\[\\]]");function si(r,t,e){if(t.search(Hg)>=0)throw Ls(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new He(...t.split("."))._internalPath}catch{throw Ls(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Ls(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new x(V.INVALID_ARGUMENT,u+r+c)}function Fh(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Jg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ii("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Jg extends Sr{data(){return super.data()}}function ii(r,t){return typeof t=="string"?si(r,t):t instanceof He?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sa{}class qr extends sa{}function Fp(r,t,...e){let n=[];t instanceof sa&&n.push(t),n=n.concat(e),function(i){const a=i.filter(c=>c instanceof qn).length,u=i.filter(c=>c instanceof Ur).length;if(a>1||a>0&&u>0)throw new x(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Ur extends qr{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ur(t,e,n)}_apply(t){const e=this._parse(t);return Bh(t._query,e),new Rt(t.firestore,t.converter,Wi(t._query,e))}_parse(t){const e=Xe(t.firestore);return function(i,a,u,c,d,f,g){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){yc(g,f);const P=[];for(const D of g)P.push(_c(c,i,D));_={arrayValue:{values:P}}}else _=_c(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||yc(g,f),_=kh(u,a,g,f==="in"||f==="not-in");return H.create(d,f,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Op(r,t,e){const n=t,s=ii("where",r);return Ur._create(s,n,e)}class qn extends sa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qn(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Z.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)Bh(a,c),a=Wi(a,c)}(t._query,e),new Rt(t.firestore,t.converter,Wi(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Lp(...r){return r.forEach(t=>qh("or",t)),qn._create("or",r)}function Bp(...r){return r.forEach(t=>qh("and",t)),qn._create("and",r)}class ia extends qr{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ia(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new x(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wr(i,a)}(t._query,this._field,this._direction);return new Rt(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new ne(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function qp(r,t="asc"){const e=t,n=ii("orderBy",r);return ia._create(n,e)}class oi extends qr{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new oi(t,e,n)}_apply(t){return new Rt(t.firestore,t.converter,Ss(t._query,this._limit,this._limitType))}}function Up(r){return Ph("limit",r),oi._create("limit",r,"F")}function Gp(r){return Ph("limitToLast",r),oi._create("limitToLast",r,"L")}class ai extends qr{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new ai(t,e,n)}_apply(t){const e=Lh(t,this.type,this._docOrFields,this._inclusive);return new Rt(t.firestore,t.converter,function(s,i){return new ne(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(t._query,e))}}function zp(...r){return ai._create("startAt",r,!0)}function jp(...r){return ai._create("startAfter",r,!1)}class ui extends qr{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new ui(t,e,n)}_apply(t){const e=Lh(t,this.type,this._docOrFields,this._inclusive);return new Rt(t.firestore,t.converter,function(s,i){return new ne(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(t._query,e))}}function Kp(...r){return ui._create("endBefore",r,!1)}function Qp(...r){return ui._create("endAt",r,!0)}function Lh(r,t,e,n){if(e[0]=Et(e[0]),e[0]instanceof Sr)return function(i,a,u,c,d){if(!c)throw new x(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const g of dn(i))if(g.field.isKeyField())f.push(Ue(a,c.key));else{const _=c.data.field(g.field);if(Us(_))throw new x(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const P=g.field.canonicalString();throw new x(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}f.push(_)}return new Ie(f,d)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const s=Xe(r.firestore);return function(a,u,c,d,f,g){const _=a.explicitOrderBy;if(f.length>_.length)throw new x(V.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let D=0;D<f.length;D++){const k=f[D];if(_[D].field.isKeyField()){if(typeof k!="string")throw new x(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof k}`);if(!fo(a)&&k.indexOf("/")!==-1)throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${k}' contains a slash.`);const b=a.path.child(W.fromString(k));if(!F.isDocumentKey(b))throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const U=new F(b);P.push(Ue(u,U))}else{const b=kh(c,d,k);P.push(b)}}return new Ie(P,g)}(r._query,r.firestore._databaseId,s,t,e,n)}}function _c(r,t,e){if(typeof(e=Et(e))=="string"){if(e==="")throw new x(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fo(t)&&e.indexOf("/")!==-1)throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(W.fromString(e));if(!F.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ue(r,new F(n))}if(e instanceof gt)return Ue(r,e._key);throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ti(e)}.`)}function yc(r,t){if(!Array.isArray(r)||r.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Bh(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function qh(r,t){if(!(t instanceof Ur||t instanceof qn))throw new x(V.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Uh{convertValue(t,e="none"){switch(_e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ae(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>ot(a.doubleValue));return new ei(i)}convertGeoPoint(t){return new Jo(ot(t.latitude),ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Gs(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Tr(t));default:return null}}convertTimestamp(t){const e=te(t);return new ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);L(Fl(n));const s=new qe(n.get(1),n.get(3)),i=new F(n.popFirst(5));return s.isEqual(e)||ft(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class Xg extends Uh{constructor(t){super(),this.firestore=t}convertBytes(t){return new We(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(r){return new Pr("sum",Vr("sum",r))}function Wp(r){return new Pr("avg",Vr("average",r))}function Yg(){return new Pr("count")}function Hp(r,t){var e,n;return r instanceof Pr&&t instanceof Pr&&r.aggregateType===t.aggregateType&&((e=r._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())}function Jp(r,t){return Vh(r.query,t.query)&&Bs(r.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bn extends Sr{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new As(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ii("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class As extends bn{data(t={}){return super.data(t)}}class Cn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Oe(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new As(this._firestore,this._userDataWriter,n.key,n,new Oe(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const c=new As(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Oe(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new As(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Oe(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:Zg(u.type),doc:c,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zg(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}function Xp(r,t){return r instanceof bn&&t instanceof bn?r._firestore===t._firestore&&r._key.isEqual(t._key)&&(r._document===null?t._document===null:r._document.isEqual(t._document))&&r._converter===t._converter:r instanceof Cn&&t instanceof Cn&&r._firestore===t._firestore&&Vh(r.query,t.query)&&r.metadata.isEqual(t.metadata)&&r._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(r){r=$(r,gt);const t=$(r.firestore,nt);return wh(lt(t),r._key).then(e=>oa(t,r,e))}class Pe extends Uh{constructor(t){super(),this.firestore=t}convertBytes(t){return new We(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}function Zp(r){r=$(r,gt);const t=$(r.firestore,nt),e=lt(t),n=new Pe(t);return Dg(e,r._key).then(s=>new bn(t,n,r._key,s,new Oe(s!==null&&s.hasLocalMutations,!0),r.converter))}function t_(r){r=$(r,gt);const t=$(r.firestore,nt);return wh(lt(t),r._key,{source:"server"}).then(e=>oa(t,r,e))}function e_(r){r=$(r,Rt);const t=$(r.firestore,nt),e=lt(t),n=new Pe(t);return Oh(r._query),Ah(e,r._query).then(s=>new Cn(t,n,r,s))}function n_(r){r=$(r,Rt);const t=$(r.firestore,nt),e=lt(t),n=new Pe(t);return kg(e,r._query).then(s=>new Cn(t,n,r,s))}function r_(r){r=$(r,Rt);const t=$(r.firestore,nt),e=lt(t),n=new Pe(t);return Ah(e,r._query,{source:"server"}).then(s=>new Cn(t,n,r,s))}function s_(r,t,e){r=$(r,gt);const n=$(r.firestore,nt),s=ci(r.converter,t,e);return Gr(n,[ri(Xe(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,ut.none())])}function i_(r,t,e,...n){r=$(r,gt);const s=$(r.firestore,nt),i=Xe(s);let a;return a=typeof(t=Et(t))=="string"||t instanceof He?na(i,"updateDoc",r._key,t,e,n):ea(i,"updateDoc",r._key,t),Gr(s,[a.toMutation(r._key,ut.exists(!0))])}function o_(r){return Gr($(r.firestore,nt),[new Nn(r._key,ut.none())])}function a_(r,t){const e=$(r.firestore,nt),n=zg(r),s=ci(r.converter,t);return Gr(e,[ri(Xe(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ut.exists(!1))]).then(()=>n)}function u_(r,...t){var e,n,s;r=Et(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||oo(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(oo(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,d,f;if(r instanceof gt)d=$(r.firestore,nt),f=Dn(r._key.path),c={next:g=>{t[a]&&t[a](oa(d,r,g))},error:t[a+1],complete:t[a+2]};else{const g=$(r,Rt);d=$(g.firestore,nt),f=g._query;const _=new Pe(d);c={next:P=>{t[a]&&t[a](new Cn(d,_,g,P))},error:t[a+1],complete:t[a+2]},Oh(r._query)}return function(_,P,D,k){const b=new Ys(k),U=new Bo(P,b,D);return _.asyncQueue.enqueueAndForget(async()=>Fo(await Sn(_),U)),()=>{b.eu(),_.asyncQueue.enqueueAndForget(async()=>Oo(await Sn(_),U))}}(lt(d),f,u,c)}function c_(r,t){return Mg(lt(r=$(r,nt)),oo(t)?t:{next:t})}function Gr(r,t){return function(n,s){const i=new Tt;return n.asyncQueue.enqueueAndForget(async()=>lg(await Wo(n),s,i)),i.promise}(lt(r),t)}function oa(r,t,e){const n=e.docs.get(t._key),s=new Pe(r);return new bn(r,s,t._key,n,new Oe(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(r){return tp(r,{count:Yg()})}function tp(r,t){const e=$(r.firestore,nt),n=lt(e),s=zc(t,(i,a)=>new Il(a,i.aggregateType,i._internalFieldPath));return Ng(n,r._query,s).then(i=>function(u,c,d){const f=new Pe(u);return new Kg(c,f,d)}(e,r,i))}class ep{constructor(t){this.kind="memory",this._onlineComponentProvider=Ee.provider,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new Ko(void 0)}}toJSON(){return{kind:this.kind}}}class np{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=ap(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class rp{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Vn.provider}toJSON(){return{kind:this.kind}}}class sp{constructor(t){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Ko(t)}}toJSON(){return{kind:this.kind}}}function h_(){return new rp}function d_(r){return new sp(r==null?void 0:r.cacheSizeBytes)}function f_(r){return new ep(r)}function m_(r){return new np(r)}class ip{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Ee.provider,this._offlineComponentProvider={build:e=>new Qo(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}class op{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Ee.provider,this._offlineComponentProvider={build:e=>new Ih(e,t==null?void 0:t.cacheSizeBytes)}}}function ap(r){return new ip(r==null?void 0:r.forceOwnership)}function g_(){return new op}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Xe(t)}set(t,e,n){this._verifyNotCommitted();const s=me(t,this._firestore),i=ci(s.converter,e,n),a=ri(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,ut.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=me(t,this._firestore);let a;return a=typeof(e=Et(e))=="string"||e instanceof He?na(this._dataReader,"WriteBatch.update",i._key,e,n,s):ea(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,ut.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=me(t,this._firestore);return this._mutations=this._mutations.concat(new Nn(e._key,ut.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function me(r,t){if((r=Et(r)).firestore!==t)throw new x(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Xe(e)}get(e){const n=me(e,this._firestore),s=new Xg(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return O();const a=i[0];if(a.isFoundDocument())return new Sr(this._firestore,s,a.key,a,n.converter);if(a.isNoDocument())return new Sr(this._firestore,s,n._key,null,n.converter);throw O()})}set(e,n,s){const i=me(e,this._firestore),a=ci(i.converter,n,s),u=ri(this._dataReader,"Transaction.set",i._key,a,i.converter!==null,s);return this._transaction.set(i._key,u),this}update(e,n,s,...i){const a=me(e,this._firestore);let u;return u=typeof(n=Et(n))=="string"||n instanceof He?na(this._dataReader,"Transaction.update",a._key,n,s,i):ea(this._dataReader,"Transaction.update",a._key,n),this._transaction.update(a._key,u),this}delete(e){const n=me(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=me(t,this._firestore),n=new Pe(this._firestore);return super.get(t).then(s=>new bn(this._firestore,n,e._key,s._document,new Oe(!1,!1),e.converter))}}function __(r,t,e){r=$(r,nt);const n=Object.assign(Object.assign({},up),e);return function(i){if(i.maxAttempts<1)throw new x(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,a,u){const c=new Tt;return i.asyncQueue.enqueueAndForget(async()=>{const d=await vh(i);new Sg(i.asyncQueue,d,u,a,c).cu()}),c.promise}(lt(r),s=>t(new lp(r,s)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){return new Br("deleteField")}function I_(){return new Xo("serverTimestamp")}function T_(...r){return new Yo("arrayUnion",r)}function E_(...r){return new Zo("arrayRemove",r)}function v_(r){return new ta("increment",r)}function w_(r){return new ei(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(r){return lt(r=$(r,nt)),new cp(r,t=>Gr(r,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(r,t){const e=lt(r=$(r,nt));if(!e._uninitializedComponentsProvider||e._uninitializedComponentsProvider._offline.kind==="memory")return Ut("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=function(i){const a=typeof i=="string"?function(d){try{return JSON.parse(d)}catch(f){throw new x(V.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}}(i):i,u=[];if(Array.isArray(a.indexes))for(const c of a.indexes){const d=Ic(c,"collectionGroup"),f=[];if(Array.isArray(c.fields))for(const g of c.fields){const _=si("setIndexConfiguration",Ic(g,"fieldPath"));g.arrayConfig==="CONTAINS"?f.push(new Be(_,2)):g.order==="ASCENDING"?f.push(new Be(_,0)):g.order==="DESCENDING"&&f.push(new Be(_,1))}u.push(new gn(gn.UNKNOWN_ID,d,f,pn.empty()))}return u}(t);return Lg(e,n)}function Ic(r,t){if(typeof r[t]!="string")throw new x(V.INVALID_ARGUMENT,"Missing string value for: "+t);return r[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t){this._firestore=t,this.type="PersistentCacheIndexManager"}}function P_(r){var t;r=$(r,nt);const e=Tc.get(r);if(e)return e;if(((t=lt(r)._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offline.kind)!=="persistent")return null;const n=new hp(r);return Tc.set(r,n),n}function V_(r){Gh(r,!0)}function S_(r){Gh(r,!1)}function b_(r){qg(lt(r._firestore)).then(t=>C("deleting all persistent cache indexes succeeded")).catch(t=>Ut("deleting all persistent cache indexes failed",t))}function Gh(r,t){Bg(lt(r._firestore),t).then(e=>C(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>Ut(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const Tc=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(r){var t;const e=(t=lt($(r.firestore,nt))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return e===void 0?null:Qs(e,kt(r._query)).ct}function x_(r,t){var e;const n=zc(t,(i,a)=>new Il(a,i.aggregateType,i._internalFieldPath)),s=(e=lt($(r.firestore,nt))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return s===void 0?null:Dl(s,rl(r._query),n,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return aa.instance.onExistenceFilterMismatch(t)}}class aa{constructor(){this.Gu=new Map}static get instance(){return gs||(gs=new aa,function(e){if(bs)throw new Error("a TestingHooksSpi instance is already set");bs=e}(gs)),gs}tt(t){this.Gu.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),n=this.Gu;return n.set(e,t),()=>n.delete(e)}}let gs=null;(function(t,e=!0){(function(s){xn=s})(xd),Dd(new kd("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new nt(new Fd(n.getProvider("auth-internal")),new Bd(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qe(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),uu(lu,"4.7.5",t),uu(lu,"4.7.5","esm2017")})();export{Uh as AbstractUserDataWriter,Pr as AggregateField,Kg as AggregateQuerySnapshot,We as Bytes,wp as CACHE_SIZE_UNLIMITED,$t as CollectionReference,gt as DocumentReference,bn as DocumentSnapshot,He as FieldPath,Je as FieldValue,nt as Firestore,x as FirestoreError,Jo as GeoPoint,jg as LoadBundleTask,hp as PersistentCacheIndexManager,Rt as Query,qn as QueryCompositeFilterConstraint,qr as QueryConstraint,As as QueryDocumentSnapshot,ui as QueryEndAtConstraint,Ur as QueryFieldFilterConstraint,oi as QueryLimitConstraint,ia as QueryOrderByConstraint,Cn as QuerySnapshot,ai as QueryStartAtConstraint,Oe as SnapshotMetadata,ct as Timestamp,lp as Transaction,ei as VectorValue,cp as WriteBatch,xc as _AutoId,dt as _ByteString,qe as _DatabaseId,F as _DocumentKey,gp as _EmptyAppCheckTokenProvider,Nd as _EmptyAuthCredentialsProvider,at as _FieldPath,D_ as _TestingHooks,$ as _cast,mp as _debugAssert,x_ as _internalAggregationQueryToProtoRunAggregationQueryRequest,C_ as _internalQueryToProtoQueryTarget,_p as _isBase64Available,Ut as _logWarn,Ug as _validateIsNotUsedTogether,a_ as addDoc,Hp as aggregateFieldEqual,Jp as aggregateQuerySnapshotEqual,Bp as and,E_ as arrayRemove,T_ as arrayUnion,Wp as average,Sp as clearIndexedDbPersistence,Tp as collection,Ep as collectionGroup,Gg as connectFirestoreEmulator,Yg as count,b_ as deleteAllPersistentCacheIndexes,o_ as deleteDoc,y_ as deleteField,xp as disableNetwork,S_ as disablePersistentCacheIndexAutoCreation,zg as doc,Mp as documentId,Pp as enableIndexedDbPersistence,Vp as enableMultiTabIndexedDbPersistence,Cp as enableNetwork,V_ as enablePersistentCacheIndexAutoCreation,Qp as endAt,Kp as endBefore,lt as ensureFirestoreConfigured,Gr as executeWrite,tp as getAggregateFromServer,l_ as getCountFromServer,Yp as getDoc,Zp as getDocFromCache,t_ as getDocFromServer,e_ as getDocs,n_ as getDocsFromCache,r_ as getDocsFromServer,Rp as getFirestore,P_ as getPersistentCacheIndexManager,v_ as increment,Ap as initializeFirestore,Up as limit,Gp as limitToLast,kp as loadBundle,h_ as memoryEagerGarbageCollector,f_ as memoryLocalCache,d_ as memoryLruGarbageCollector,Np as namedQuery,u_ as onSnapshot,c_ as onSnapshotsInSync,Lp as or,qp as orderBy,m_ as persistentLocalCache,g_ as persistentMultipleTabManager,ap as persistentSingleTabManager,Fp as query,Vh as queryEqual,vp as refEqual,__ as runTransaction,I_ as serverTimestamp,s_ as setDoc,R_ as setIndexConfiguration,fp as setLogLevel,Xp as snapshotEqual,jp as startAfter,zp as startAt,$p as sum,Dp as terminate,i_ as updateDoc,w_ as vector,bp as waitForPendingWrites,Op as where,A_ as writeBatch};
