(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{228:function(t,e,n){},229:function(t,e,n){var r=n(6),o=n(32),c=n(16),l=n(230),f="["+l+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t,e,n){var o={},f=c((function(){return!!l[t]()||"​"!="​"[t]()})),d=o[t]=f?e(v):l[t];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},230:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},233:function(t,e,n){"use strict";function r(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}n.d(e,"a",(function(){return r}))},234:function(t,e,n){"use strict";var r=n(5),o=n(25),c=n(31),l=n(133),f=n(67),d=n(16),m=n(51).f,h=n(68).f,v=n(15).f,y=n(229).trim,_=r.Number,x=_,C=_.prototype,O="Number"==c(n(90)(C)),j="trim"in String.prototype,R=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=j?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(O?d((function(){C.valueOf.call(n)})):"Number"!=c(n))?l(new x(R(e)),n,_):R(e)};for(var S,E=n(9)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;E.length>w;w++)o(x,S=E[w])&&!o(_,S)&&v(_,S,h(x,S));_.prototype=C,C.constructor=_,n(17)(r,"Number",_)}},236:function(t,e,n){"use strict";var r=n(228);n.n(r).a},238:function(t,e,n){"use strict";var r=n(239),o=n(13),c=n(237),l=n(240),f=n(246),d=n(245),m=Object(o.b)({name:"homepage-examples",props:{examples:{type:Array,required:!0},disabledAutoAd:{type:Boolean,default:!1},exampleClass:{type:String,required:!1,default:""},contentClass:{type:String,required:!1}},components:{Mammon:c.c,Loading:d.a,HomepageBasicCard:f.a,HomepageExampleCard:l.a},setup:function(t,e){var n=e.root,l=Object(o.i)(t.examples.map((function(){return null}))),f=n.$store.state,d=Object(o.a)((function(){return f.inited}));return Object(o.f)((function(){var e=t.examples.length,n=Object(o.a)((function(){return f.isMobileDevice})),d=Object(o.a)((function(){return f.isChinaGuest})),m=Object(o.a)((function(){return!d.value||n.value}));if(e<=6){var h=Math.ceil(e/2);l[h-1]=m.value?c.d[0]:Math.ceil(10*Math.random())>6?c.b[0]:c.d[0]}else{var v=m.value?c.d:[].concat(Object(r.a)(c.b),Object(r.a)(c.d)),y=e/(v.length+1);v.forEach((function(t,e){l[Math.ceil(y*(e+1))-1]=t}))}console.log("AutoMammonProviders",l.slice())})),{inited:d,adProviders:l}}}),h=(n(236),n(11)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homepage-examples"},[n("transition",{attrs:{name:"module",mode:"out-in"}},[t.inited?n("client-only",[n("div",t._l(t.examples,(function(e,r){return n("div",{key:e.name,staticClass:"example-item"},[n("homepage-example-card",{attrs:{path:e.path,title:e.title||e.name,"content-class":t.contentClass}},[n(e.name,{tag:"component",staticClass:"example-component",class:t.exampleClass})],1),t._v(" "),!t.disabledAutoAd&&t.adProviders[r]?n("homepage-basic-card",{staticClass:"example-mammon"},[n("client-only",[n("mammon",{attrs:{provider:t.adProviders[r]}})],1)],1):t._e()],1)})),0)]):n("Loading",{staticClass:"loading"})],1)],1)}),[],!1,null,"6a0d26e8",null);component.options.__file="examples.vue";e.a=component.exports},239:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(71);var o=n(93);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},243:function(t,e,n){var r=n(6),o=n(5).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&o(t)}})},250:function(t,e,n){"use strict";var r=n(6),o=n(21),c=n(91),l="".endsWith;r(r.P+r.F*n(92)("endsWith"),"String",{endsWith:function(t){var e=c(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(e.length),f=void 0===n?r:Math.min(o(n),r),d=String(t);return l?l.call(e,d,f):e.slice(f-d.length,f)===d}})},252:function(t,e,n){var r=n(6),o=n(52),c=n(7),l=(n(5).Reflect||{}).apply,f=Function.apply;r(r.S+r.F*!n(16)((function(){l((function(){}))})),"Reflect",{apply:function(t,e,n){var r=o(t),d=c(n);return l?l(r,e,d):f.call(r,e,d)}})},253:function(t,e){var n="function"==typeof Float32Array;function r(t,e){return 1-3*e+3*t}function o(t,e){return 3*e-6*t}function c(t){return 3*t}function l(t,e,n){return((r(e,n)*t+o(e,n))*t+c(e))*t}function f(t,e,n){return 3*r(e,n)*t*t+2*o(e,n)*t+c(e)}function d(t){return t}t.exports=function(t,e,r,o){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===o)return d;for(var c=n?new Float32Array(11):new Array(11),i=0;i<11;++i)c[i]=l(.1*i,t,r);function m(e){for(var n=0,o=1;10!==o&&c[o]<=e;++o)n+=.1;--o;var d=n+.1*((e-c[o])/(c[o+1]-c[o])),m=f(d,t,r);return m>=.001?function(t,e,n,r){for(var i=0;i<4;++i){var o=f(e,n,r);if(0===o)return e;e-=(l(e,n,r)-t)/o}return e}(e,d,t,r):0===m?d:function(t,e,n,r,o){var c,f,i=0;do{(c=l(f=e+(n-e)/2,r,o)-t)>0?n=f:e=f}while(Math.abs(c)>1e-7&&++i<10);return f}(e,n,n+.1,t,r)}return function(t){return 0===t?0:1===t?1:l(m(t),e,o)}}},257:function(t,e,n){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"touch-ripple-core",props:["id","color","opacity","speed","styles","transition"],data:function(){return{timers:{transform:null,rippleing:null},rippleing:!1,baseSpeed:.5,coreStyle:{transform:"scale(0)"}}},ready:function(){this.startRipple()},mounted:function(){this.startRipple()},beforeDestroy:function(){this.timers.transform&&(clearTimeout(this.timers.transform),this.timers.transform=null),this.timers.rippleing&&(clearTimeout(this.timers.rippleing),this.timers.rippleing=null)},computed:{computeSpeed:function(){return this.baseSpeed/this.speed},computeCoreStyle:function(){return{"z-index":this.id,opacity:this.opacity,top:this.styles.top+"px",left:this.styles.left+"px",width:this.styles.size+"px",height:this.styles.size+"px",transform:this.coreStyle.transform,"background-color":this.color,"transition-duration":this.computeSpeed+"s, 0.4s","transition-timing-function":this.transition+", ease-out"}}},methods:{startRipple:function(){var t=this;this.$nextTick((function(){t.rippleing=!0,t.timers.transform=setTimeout((function(){t.coreStyle.transform="scale(1)"}),0),t.timers.rippleing=setTimeout((function(){t.rippleing=!1,t.$emit("end",t.id)}),1e3*t.computeSpeed)}))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(6));e.default={name:"touch-ripple",props:{color:String,opacity:Number,speed:Number,transition:String,globalOptions:{type:Object,default:function(){return{}}}},components:{RippleCore:r.default},computed:{showRipple:function(){return this.rippleCount>0},options:function(){return Object.assign({color:"#fff",opacity:.3,speed:1,transition:"ease-out"},this.globalOptions)}},data:function(){return{id:0,ripples:[],rippleCount:0,mouseuped:!0,keepLastRipple:!1}},beforeDestroy:function(){this.clearRipples()},methods:{mouseup:function(t){this.mouseuped=!0,this.keepLastRipple&&this.clearRipples()},mousedown:function(t){this.mouseuped=!1;var e=this.$refs.inner.getBoundingClientRect(),n=e.top,i=e.left,s=t.clientX-i,p=t.clientY-n,u=this.getRippleSize(s,p),r=u.size,a=u.left,o=u.top;this.ripples.push({id:this.id+=1,styles:{size:r,left:a,top:o}})},handleRippleEnd:function(t){var e=this.ripples.findIndex((function(e){return e.id===t}));e>-1&&(this.mouseuped||e!==this.ripples.length-1?this.ripples.splice(e,1):this.keepLastRipple=!0)},getRippleSize:function(t,e){var n=this.$refs.inner.clientWidth,i=this.$refs.inner.clientHeight,r=function(t){return t*t},o=[[0,0],[n,0],[0,i],[n,i]].map((function(n){return Math.sqrt(r(n[0]-t)+r(n[1]-e))})),p=2*Math.max.apply({},o);return{size:p,left:t-p/2,top:e-p/2}},clearRipples:function(){this.ripples=[]},rippleEnter:function(){this.rippleCount+=1},rippleLeave:function(){this.rippleCount-=1}}}},function(t,e){t.exports=function(t,e,n,i,r,o){var s,p=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,p=t.default);var a,c="function"==typeof p?p.options:p;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r),o?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=a):i&&(a=i),a){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=a,c.render=function(t,e){return a.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,a):[a]}return{esModule:s,exports:p,options:c}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n.n(r);for(var s in r)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);var p=n(8),c=function(t){n(5)},a=n(2)(o.a,p.a,!1,c,null,null);e.default=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.touchRipple=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(3)),o=e.touchRipple=r.default,s=e.install=function(t,e){e&&(r.default.props.globalOptions.default=function(){return e}),t.component(r.default.name,r.default)};e.default={touchRipple:o,install:s}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n.n(i);for(var o in i)["default","default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s=n(7),u=n(2)(r.a,s.a,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"ripple-core",style:t.computeCoreStyle})},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"inner",staticClass:"v-touch-ripple",on:{mousedown:t.mousedown,mouseup:t.mouseup}},[t._t("default"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showRipple,expression:"showRipple"}],staticClass:"touch-ripple"},[n("transition-group",{staticClass:"ripple-inner",attrs:{tag:"div",name:"ripple"},on:{enter:t.rippleEnter,"after-leave":t.rippleLeave}},t._l(t.ripples,(function(e){return n("ripple-core",{key:e.id,attrs:{id:e.id,color:t.color||t.options.color,speed:t.speed||t.options.speed,opacity:t.opacity||t.options.opacity,transition:t.transition||t.options.transition,styles:e.styles},on:{end:t.handleRippleEnd}})})))],1)],2)},staticRenderFns:[]};e.a=r}])},258:function(t,e,n){},341:function(t,e,n){},342:function(t,e,n){},343:function(t,e,n){},344:function(t,e,n){},345:function(t,e,n){},654:function(t,e,n){"use strict";var r=n(341);n.n(r).a},655:function(t,e,n){"use strict";var r=n(342);n.n(r).a},656:function(t,e,n){"use strict";var r=n(343);n.n(r).a},657:function(t,e,n){"use strict";var r=n(344);n.n(r).a},658:function(t,e,n){"use strict";var r=n(345);n.n(r).a},667:function(t,e,n){"use strict";n.r(e),n.d(e,"example01",(function(){return l})),n.d(e,"example02",(function(){return m})),n.d(e,"example03",(function(){return y})),n.d(e,"example04",(function(){return C})),n.d(e,"example05",(function(){return R}));var r=n(257),o=(n(258),{name:"touch-ripper-example-customize-element",title:"Customize element",components:{touchRipple:r.touchRipple}}),c=(n(654),n(11)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example"},[e("touch-ripple",{staticClass:"love",attrs:{color:"#fff"}},[e("div",{staticClass:"heart"},[e("span",{staticClass:"text"},[this._v("Surmon")])])])],1)}),[],!1,null,"61d0914a",null);component.options.__file="01-customize-element.vue";var l=component.exports,f={name:"touch-ripper-example-image-element",title:"Image element",components:{touchRipple:r.touchRipple}},d=(n(655),Object(c.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example"},[e("touch-ripple",{staticClass:"image-box"},[e("img",{staticClass:"image",attrs:{src:"/images/common/vue-logo.png"}})]),this._v(" "),e("touch-ripple",{staticClass:"image-box",attrs:{color:"#3fa27c",speed:.2,opacity:.2}},[e("img",{staticClass:"image",attrs:{src:"/images/common/vue-logo.png"}})]),this._v(" "),e("touch-ripple",{staticClass:"image-box",attrs:{color:"#36485e",speed:.5,opacity:.2,transition:"cubic-bezier(1, -0.24, 0, 1.92)"}},[e("img",{staticClass:"image",attrs:{src:"/images/common/vue-logo.png"}})])],1)}),[],!1,null,"1a8d5168",null));d.options.__file="02-image.vue";var m=d.exports,h={name:"touch-ripper-example-button-element",title:"Button element",components:{touchRipple:r.touchRipple}},v=(n(656),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"example"},[n("touch-ripple",{staticClass:"button-box",attrs:{speed:2}},[n("button",{staticClass:"button b-1"},[t._v("speed = 2")])]),t._v(" "),n("touch-ripple",{staticClass:"button-box",attrs:{color:"#fff1b3",speed:.7}},[n("button",{staticClass:"button b-2"},[t._v("speed = 0.7; color = #fff1b3")])]),t._v(" "),n("touch-ripple",{staticClass:"button-box",attrs:{speed:1.5}},[n("button",{staticClass:"button b-3"},[t._v("speed = 1.5")])]),t._v(" "),n("touch-ripple",{staticClass:"button-box",attrs:{color:"#eee",speed:.5}},[n("button",{staticClass:"button b-4"},[t._v("speed = 1.5; color = #eee")])]),t._v(" "),n("touch-ripple",{staticClass:"button-box",attrs:{color:"#efefef"}},[n("button",{staticClass:"button b-5"},[t._v("color = #efefef")])]),t._v(" "),n("touch-ripple",{staticClass:"button-box",attrs:{speed:1.1}},[n("button",{staticClass:"button b-6"},[t._v("speed = 1.1")])])],1)}),[],!1,null,"78f4145d",null));v.options.__file="03-button.vue";var y=v.exports,_={name:"touch-ripper-example-typography-element",title:"Typography element",components:{touchRipple:r.touchRipple}},x=(n(657),Object(c.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"example"},[n("touch-ripple",{staticClass:"typography-box",attrs:{color:"#999",speed:2,opacity:.3,transition:"ease-in-out"}},[n("h1",[t._v("Talk is cheap. Show me the code.")])]),t._v(" "),n("touch-ripple",{staticClass:"typography-box",attrs:{color:"#999",speed:2,opacity:.3,transition:"ease-in-out"}},[n("p",[t._v("Stay hungry. Stay foolish.")])]),t._v(" "),n("p",{staticClass:"typography-box"},[n("span",[t._v("Because")]),t._v(" "),n("touch-ripple",{attrs:{color:"#999",speed:2,opacity:.3,transition:"ease-in-out"}},[n("strong",{staticClass:"red"},[t._v("the mountain")])]),t._v(" "),n("span",[t._v("was there.")])],1)],1)}),[],!1,null,"95cf4dce",null));x.options.__file="04-typography.vue";var C=x.exports,O={name:"touch-ripper-example-div-element",title:"Div element",components:{touchRipple:r.touchRipple}},j=(n(658),Object(c.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example"},[e("touch-ripple",{staticClass:"div-box box-1",attrs:{speed:2,opacity:.3,color:"#999",transition:"cubic-bezier(0.18, 0.89, 0.32, 1.28)"}},[e("div",{staticClass:"box"},[e("code",[this._v("cubic-bezier(0.18, 0.89, 0.32, 1.28)")])])]),this._v(" "),e("touch-ripple",{staticClass:"div-box box-2",attrs:{speed:2,opacity:.3,color:"#fff",transition:"cubic-bezier(0.6, -0.28, 0.74, 0.05)"}},[e("div",{staticClass:"box"},[e("code",[this._v("cubic-bezier(0.6, -0.28, 0.74, 0.05)")])])]),this._v(" "),e("touch-ripple",{staticClass:"div-box box-3",attrs:{speed:2,opacity:.3,color:"#eee",transition:"cubic-bezier(0.89, 0.24, 0, 0.94)"}},[e("div",{staticClass:"box"},[e("code",[this._v("cubic-bezier(0.89, 0.24, 0, 0.94)")])])]),this._v(" "),e("touch-ripple",{staticClass:"div-box box-4",attrs:{speed:.7,opacity:.5,color:"#fff",transition:"cubic-bezier(1, -0.24, 0, 1.92)"}},[e("div",{staticClass:"box"},[e("code",[this._v("cubic-bezier(1, -0.24, 0, 1.92)")])])])],1)}),[],!1,null,"a7d6a382",null));j.options.__file="05-div.vue";var R=j.exports},676:function(t,e,n){"use strict";n.r(e);n(89),n(38),n(30),n(14),n(66),n(20);var r=n(2),o=n(233),c=n(13),l=n(247),f=n(4),d=n(39),m=n(238),h=n(249);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y=f.c.VueTouchRipple,_=[];d.a&&Object(l.a)(n(667)).forEach((function(t){var component=t.component,e=t.fileName,n=Object(o.a)(t,["component","fileName"]);_.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},n,{path:e&&"projects/".concat(y,"/examples/").concat(e)})),Object.assign(m.a.components,Object(r.a)({},component.name,component))}));var x=Object(c.b)({name:"page-".concat(y),components:{Homepage:h.a,HomepageExamples:m.a},head:Object(l.b)(y),setup:function(){return{repositorieId:y,examples:_}}}),C=n(11),O=Object(C.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("homepage",{class:this.repositorieId,attrs:{"repositorie-id":this.repositorieId}},[e("homepage-examples",{attrs:{slot:"content",examples:this.examples},slot:"content"})],1)}),[],!1,null,null,null);O.options.__file="vue-touch-ripple.vue";e.default=O.exports}}]);