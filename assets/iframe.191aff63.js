import{i as p,z as f,F as s,M as t,U as o,P as c,Q as u,Z as _,X as g,W as y,E as d}from"./vendor.50d702f0.js";import{N as v,L as I}from"./navbar.47085c6d.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const E=p({name:"iframe-renderer",components:{Navbar:v,Loading:I},props:{src:{type:String,required:!0},repository:{type:String,required:!0},legacy:{type:Boolean,default:!1}},setup(){const e=f({loading:!0,error:null}),r=()=>{e.loading=!1};return{state:e,handleIframeLoaded:r,handleIframeError:n=>{r(),e.error=n.message}}}}),L=["src"],C={key:0,class:"loading-box"};function N(e,r,l,n,b,B){const i=d("navbar"),m=d("loading");return s(),t("div",{class:y(["iframe-renderer",{legacy:e.legacy}])},[o(i,{class:"header",repository:e.repository},null,8,["repository"]),c("iframe",{class:"iframe",src:e.src,onLoad:r[0]||(r[0]=(...a)=>e.handleIframeLoaded&&e.handleIframeLoaded(...a)),onError:r[1]||(r[1]=(...a)=>e.handleIframeError&&e.handleIframeError(...a))},null,40,L),o(g,{name:"module"},{default:u(()=>[e.state.loading?(s(),t("div",C,[o(m)])):_("",!0)]),_:1})],2)}var q=h(E,[["render",N],["__scopeId","data-v-3748806f"]]);export{q as I};
