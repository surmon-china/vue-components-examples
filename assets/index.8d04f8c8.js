var J=Object.defineProperty,W=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var D=(e,t,r)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&D(e,r,t[r]);if(h)for(var r of h(t))T.call(t,r)&&D(e,r,t[r]);return e},m=(e,t)=>W(e,q(t));var _=(e,t)=>{var r={};for(var s in e)P.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&h)for(var s of h(e))t.indexOf(s)<0&&T.call(e,s)&&(r[s]=e[s]);return r};import{c as K,o as Y,g as X,a as Z,s as Q,p as ee,x as te,j as re,b as se,l as ne,d as oe,e as ae,n as ie,f as ce,h as ue,i as le,t as de,k as I,m as v,r as w,q as U,u as ge,v as pe,w as he,y as me,z as C,A as _e,B as ve,C as ye,D as fe,E as be,F as Ae,G as Se,H as Ee,I as Oe,J as De,K as Pe,L as Te}from"./vendor.5caa36e3.js";const Re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};Re();var ke="",Le="";const R={go:X,css:Z,sql:Q,php:ee,xml:te,json:re,bash:se,less:ne,scss:oe,shell:ae,nginx:ie,stylus:ce,python:ue,javascript:le,typescript:de};Object.keys(R).forEach(e=>K.registerLanguage(e,R[e]));const Ie=e=>e?Le:ke,we=(e,t={})=>new Promise((r,s)=>{const n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script"),O=t,{src:a,domain:i,type:u="text/javascript",charset:E="utf-8",defer:f=!1,async:b=!1}=O,g=_(O,["src","domain","type","charset","defer","async"]);if(o.type=u,o.defer=f,o.async=b,o.src=a||e,Object.keys(g).forEach(d=>{o[d]=g[d]}),i){const d=document.createElement("link");d.href=i,d.rel="preconnect",n.appendChild(d)}n.appendChild(o),o.onload=r,o.onerror=s}),G="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",Ue=e=>I({name:"Adsense",props:{class:String,insClass:{type:String,default:""},insStyle:{type:String,default:"display:block;"},dataAdClient:String,dataAdSlot:String,dataAdLayoutKey:String,dataAdTest:String,dataAdFormat:String,dataFullWidthResponsive:[Boolean,String]},setup(t){return()=>{const g=t,{class:r,insClass:s,insStyle:n,dataAdClient:o,dataAdSlot:a,dataAdLayoutKey:i,dataAdTest:u,dataAdFormat:E,dataFullWidthResponsive:f}=g,b=_(g,["class","insClass","insStyle","dataAdClient","dataAdSlot","dataAdLayoutKey","dataAdTest","dataAdFormat","dataFullWidthResponsive"]);return v("div",{class:["mammon-box",r],placeholder:"AD"},[v("script",{type:"text/javascript",async:"true",src:G}),v("ins",p({class:["adsbygoogle",s],style:n,"data-ad-client":o||e,"data-ad-slot":a,"data-ad-layout-key":i,"data-ad-test":u,"data-ad-format":E,"data-full-width-responsive":f},b)),v("script","(adsbygoogle = window.adsbygoogle || []).push({})")])}}});var Ce={install(e,t){const r=Ue(t.ID);e.component(r.name,r),t.enabledAutoAD&&we(G,{async:!0}).then(()=>{(window.adsbygoogle||[]).push({google_ad_client:t.ID,enable_page_level_ads:!0})})}};const H=e=>localStorage.getItem(e),j=(e,t)=>localStorage.setItem(e,t),Ge=e=>localStorage.removeItem(e),He=(e,t)=>j(e,JSON.stringify(t)),je=e=>{let t=null;const r=H(e);if(!r)return t;try{t=JSON.parse(r)}catch{t=null}return t};var M={get:H,set:j,remove:Ge,setJSON:He,getJSON:je},N=(e=>(e.Light="light",e.Dark="dark",e))(N||{});const V="__theme",Me=()=>{const e=M.get(V);return e?e==="dark"?"dark":"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":(window.matchMedia("(prefers-color-scheme: light)").matches,"light")},B=Symbol("theme"),Ne=e=>{const t=ge(e),r=n=>{["light","dark"].includes(n)&&n!==t.value&&(t.value=n,M.set(V,n))},s=()=>{r(t.value==="dark"?"light":"dark")};return{theme:w(t),set:r,toggle:s}},Ve=e=>{const t=Ne(e);return m(p({},t),{install(r){r.provide(B,t)}})},Be=()=>U(B),$e="modulepreload",k={},xe="https://cdn.jsdelivr.net/gh/surmon-china/surmon-china.github.io@release/",c=function(t,r){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=`${xe}${s}`,s in k)return;k[s]=!0;const n=s.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":$e,n||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),n)return new Promise((i,u)=>{a.addEventListener("load",i),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};var $=(e=>(e.Readme="readme",e.Naivebayes="naivebayes",e.VueAwesomeSwiper="vue-awesome-swiper",e.VueQuillEditor="vue-quill-editor",e.VueVideoPlayer="vue-video-player",e.VueCodemirror="vue-codemirror",e.VueTouchRipple="vue-touch-ripple",e.VueDragZone="vue-drag-zone",e))($||{});const ze=[{path:"/",name:"home",component:()=>c(()=>import("./home.831b8008.js"),["assets/home.831b8008.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.5caa36e3.js"])},{path:"/readme",name:"readme",component:()=>c(()=>import("./readme.668fba7d.js"),["assets/readme.668fba7d.js","assets/navbar.d8c5a1db.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.5caa36e3.js"])},{path:"/naivebayes",name:"naivebayes",component:()=>c(()=>import("./naivebayes.eadd20e9.js"),["assets/naivebayes.eadd20e9.js","assets/navbar.d8c5a1db.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.5caa36e3.js","assets/iframe.ca1b6460.js"])},{path:"/vue-awesome-swiper",name:"vue-awesome-swiper",component:()=>c(()=>import("./vue-awesome-swiper.02909769.js"),["assets/vue-awesome-swiper.02909769.js","assets/navbar.d8c5a1db.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.5caa36e3.js"])},{path:"/vue-codemirror",name:"vue-codemirror",component:()=>c(()=>import("./vue-codemirror.d322da45.js"),["assets/vue-codemirror.d322da45.js","assets/navbar.d8c5a1db.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.5caa36e3.js","assets/iframe.ca1b6460.js"])},{path:"/vue-drag-zone",name:"vue-drag-zone",component:()=>c(()=>import("./vue-drag-zone.7456ff37.js"),["assets/vue-drag-zone.7456ff37.js","assets/navbar.d8c5a1db.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.5caa36e3.js","assets/iframe.ca1b6460.js"])},{path:"/vue-quill-editor",name:"vue-quill-editor",component:()=>c(()=>import("./vue-quill-editor.a7a22803.js"),["assets/vue-quill-editor.a7a22803.js","assets/navbar.d8c5a1db.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.5caa36e3.js","assets/iframe.ca1b6460.js"])},{path:"/vue-touch-ripple",name:"vue-touch-ripple",component:()=>c(()=>import("./vue-touch-ripple.1947c396.js"),["assets/vue-touch-ripple.1947c396.js","assets/navbar.d8c5a1db.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.5caa36e3.js","assets/iframe.ca1b6460.js"])},{name:"error",path:"/:error(.*)",component:()=>c(()=>import("./home.831b8008.js"),["assets/home.831b8008.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.5caa36e3.js"])}],Fe="github.surmon.me",Je="Surmon's GitHub repositorys homepage.",We="2.0.0",qe="https://github.surmon.me",Ke={name:"Surmon",url:"https://github.com/surmon-china"},Ye={type:"git",url:"https://github.com/surmon-china/surmon-china.github.io"},Xe={dev:"vite",build:"vite build",generate:"node prerender",preview:"vite preview"},Ze={"@codemirror/basic-setup":"^0.19.1","@codemirror/lang-javascript":"^0.19.7","@highlightjs/vue-plugin":"^2.1.0","@vueuse/head":"^0.7.5",axios:"^0.26.0",dedent:"^0.7.0","highlight.js":"^11.4.0",lodash:"^4.17.21",naivebayes:"^0.5.0",pinia:"^2.0.11",segmentit:"^2.0.3",swiper:"^8.0.7",vue:"^3.2.31","vue-router":"^4.0.13"},Qe={"@types/dedent":"^0.7.0","@types/node":"^17.0.21","@vitejs/plugin-vue":"^2.2.4",eslint:"^8.10.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.5.0",prettier:"^2.5.1",sass:"^1.49.9",typescript:"^4.6.2",vite:"^2.8.6"};var et={name:Fe,description:Je,version:We,homepage:qe,author:Ke,repository:Ye,scripts:Xe,dependencies:Ze,devDependencies:Qe};const tt=et.homepage,rt="surmon",l="surmon-china",x="surmon-china.github.io",st=`https://github.com/${l}`,nt=`https://github.com/${l}?tab=followers`,ot=`https://github.com/sponsors/${l}`,A=`https://raw.githubusercontent.com/${l}/${l}/release`,at={image:"",url:""},it=[{image:"",url:""}],ct=`https://cdn.jsdelivr.net/gh/${l}/${x}@release/`,ut="https://v1.github.surmon.me/",z="ca-pub-4710915636313788",lt={title:"Surmon's open-source projects",description:"Surmon's GitHub repository pages.",keywords:[l,...Object.values($)].join(",")};var Ot=Object.freeze(Object.defineProperty({__proto__:null,PROJECT_URL:tt,NPM_UID:rt,GITHUB_UID:l,GITHUB_PROJECT_NAME:x,GITHUB_USER_URL:st,GITHUB_FOLLOWERS_URL:nt,GITHUB_SPONSORS_URL:ot,GITHUB_DATA_JSON_URL_PATH:A,IMAGE_AD:at,SWIPER_ADS:it,CDN_PREFIX:ct,V1_LEGACY_URL:ut,GOOGLE_ADSENSE_CLIENT:z,APP_META:lt},Symbol.toStringTag,{value:"Module"}));const dt=()=>{const e=he();return m(p({},e),{renderToString(){return pe(e)},install(t,...r){return t.use(e,...r),e}})};function gt(e){const t=C(()=>{const u=typeof e=="function"?e():e,{title:s,keywords:n,description:o}=u,a=_(u,["title","keywords","description"]),i=a.meta||[];return n&&i.push({key:"keywords",name:"keywords",content:n}),o&&i.push({key:"description",name:"description",content:o}),m(p({},a),{title:s,meta:i})});return me(t)}const L=e=>({language:e.language,userAgent:e.userAgent,isZhLangGuest:e.language.includes("zh-CN"),isMobileDevice:/Android/i.test(e.userAgent)||/webOS/i.test(e.userAgent)||/iPhone/i.test(e.userAgent)||/iPad/i.test(e.userAgent)||/iPod/i.test(e.userAgent)||/BlackBerry/i.test(e.userAgent)||/Windows Phone/i.test(e.userAgent)}),F=Symbol("visitor"),pt=e=>{const t=_e(L(e)),r=()=>{Object.assign(t,L({language:navigator.language,userAgent:navigator.userAgent}))},s=w(t);return{state:s,resetStateOnClient:r,install(n){n.provide(F,s)}}},Dt=()=>U(F),S=ve.create();S.interceptors.response.use(e=>e.data,e=>(console.error("Fetch failed:",e),Promise.reject(e)));const ht=ye("global",{state:()=>({initialized:!1,githubData:null,npmData:null}),getters:{githubUserinfo:e=>{var t;return(t=e.githubData)==null?void 0:t.userinfo},githubRepositories:e=>{var t;return((t=e.githubData)==null?void 0:t.repositories)||[]},githubOrganizations:e=>{var t;return((t=e.githubData)==null?void 0:t.organizations)||[]},npmPackages:e=>{var t;return((t=e.npmData)==null?void 0:t.packages)||[]},npmPackagesDownloadsMap:e=>{var r;const t=((r=e.npmData)==null?void 0:r.downloads)||{};return new Map(Object.keys(t).map(s=>[s,t[s]]))},githubOwnRepositories(){return this.githubRepositories.filter(e=>!e.fork).sort((e,t)=>t.stargazers_count-e.stargazers_count)},githubNPMRepositories(){return this.githubRepositories.filter(e=>Boolean(this.getRepositoryNPMPackage(e.name)))},getGitHubRepositoryDetail(){return e=>this.githubRepositories.find(t=>t.name===e)},getRepositoryNPMPackage(){return e=>{const t=this.getGitHubRepositoryDetail(e);if(t)return this.npmPackages.find(r=>r.package.name===e||r.package.links.repository===t.html_url)}}},actions:{fetchGitHubAggregateData(){return S.get(`${A}/github.json`).then(e=>{this.githubData=e})},fetchNPMAggregateData(){return S.get(`${A}/npm.json`).then(e=>{this.npmData=e})},init(){return Promise.all([this.fetchGitHubAggregateData(),this.fetchNPMAggregateData()]).finally(()=>{this.initialized=!0})}}});const mt={class:"app"},_t=I({setup(e){const t=ht(),r=Be();return gt(()=>({htmlAttrs:{theme:r.theme.value}})),fe(()=>t.init()),(s,n)=>{const o=be("router-view");return Ee(),Ae("div",mt,[Se(o)])}}}),vt=e=>{const t=e.appCreator(_t),r=Oe(),s=dt(),n=Ve(e.initTheme),o=pt({language:e.language,userAgent:e.userAgent}),a=De({routes:ze,strict:!0,history:e.routerHistory,linkActiveClass:"link-active",scrollBehavior:()=>({top:0,behavior:"smooth"})});return t.use(a),t.use(r),t.use(s),t.use(n),t.use(o),{app:t,router:a,pinia:r,meta:s,theme:n,visitor:o}},{app:y,router:yt,meta:ft,theme:bt,visitor:At}=vt({appCreator:Pe,routerHistory:Te(),initTheme:Me(),language:navigator.language,userAgent:navigator.userAgent});ft.addHeadObjs(C(()=>({style:[{key:"markdown",children:Ie(bt.theme.value===N.Dark)}]})));y.use(Y);y.use(Ce,{ID:z,enabledAutoAD:!1});At.resetStateOnClient();yt.isReady().finally(()=>{y.mount("#app").$nextTick(()=>{console.log("App mounted:",y)})});export{lt as A,Ot as C,st as G,at as I,$ as R,it as S,N as T,ut as V,l as a,Be as b,ht as c,x as d,z as e,Dt as f,gt as u};
