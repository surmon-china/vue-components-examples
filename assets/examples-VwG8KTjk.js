import{u as y,t as C,v as N}from"./index-v_z_4G4c.js";import{d as I,j as M,a,x as B,s as i,y as c,t as P,e as s,X as g,c as m,q as b,V as H,Y as j,p as S,b as w,Q as q,f as D,h as x,r as U,o as z,F as E,m as F,Z as R,$ as T,z as Y}from"./index-OftrGeBT.js";import{_ as A}from"./_plugin-vue_export-helper-tg6UUEsf.js";const G=I({name:"modal",props:{visible:{type:Boolean,default:!1},title:{type:String,required:!0},titleUrl:{type:String,required:!0}},emits:["close"]}),V=e=>(S("data-v-a839bd30"),e=e(),w(),e),K={key:0,class:"modal"},L={class:"wrapper"},O={class:"title"},Q=V(()=>s("i",{class:"iconfont icon-link-external"},null,-1)),X=V(()=>s("i",{class:"iconfont icon-close"},null,-1)),Z=[X],J={class:"content"};function W(e,n,r,$,d,k){const h=M("ulink");return a(),B(j,{to:"body"},[i(H,{name:"module"},{default:c(()=>[e.visible?(a(),m("div",K,[s("div",L,[s("p",O,[i(h,{class:"link",href:e.titleUrl},{default:c(()=>[s("span",null,P(e.title),1),Q]),_:1},8,["href"]),s("button",{class:"close",onClick:n[0]||(n[0]=u=>e.$emit("close"))},Z)]),s("div",J,[g(e.$slots,"content",{},void 0,!0)])])])):b("",!0)]),_:3})])}const ee=A(G,[["render",W],["__scopeId","data-v-a839bd30"]]),te=e=>(S("data-v-162714db"),e=e(),w(),e),se={class:"examples"},oe={class:"actions"},ae=["onClick"],ne=te(()=>s("i",{class:"iconfont icon-code"},null,-1)),le=[ne],ie=6,ce=I({__name:"examples",props:{examples:{},disabledAutoAd:{type:Boolean},contentClass:{}},setup(e){const n=e;q();const r=D(null),$=x(()=>Number.isInteger(r.value)),d=x(()=>n.examples[r.value]||null),k=t=>{r.value=t},h=()=>{r.value=null},u=U(n.examples.map(()=>null));return z(()=>{const t=n.examples.length;if(t<=ie){const p=Math.ceil(t/2);u[p-1]=y[0]}else{const p=y,f=t/(p.length+1);p.forEach((_,v)=>{u[Math.ceil(f*(v+1))-1]=_})}}),(t,p)=>{var _,v;const f=M("highlightjs");return a(),m("div",se,[i(ee,{visible:$.value,title:`${(_=d.value)==null?void 0:_.title} (Edit on GitHub)`,"title-url":((v=d.value)==null?void 0:v.url)||"",onClose:h},{content:c(()=>{var o,l;return[i(f,{class:"highlight",contenteditable:"true",onkeydown:"if(event.metaKey) return true; return false;",code:(o=d.value)==null?void 0:o.raw,language:(l=d.value)==null?void 0:l.language},null,8,["code","language"])]}),_:1},8,["visible","title","title-url"]),(a(!0),m(E,null,F(t.examples,(o,l)=>(a(),m("div",{class:"example-item",key:o.name},[i(C,{title:o.title||o.name,"content-class":t.contentClass},{actions:c(()=>[s("div",oe,[g(t.$slots,"actions",{},void 0,!0),s("button",{class:"code-button",onClick:re=>k(l)},le,8,ae)])]),default:c(()=>[g(t.$slots,"component",T(R(o)),void 0,!0)]),_:2},1032,["title","content-class"]),t.disabledAutoAd?b("",!0):(a(),m(E,{key:0},[u[l]?(a(),B(C,{key:0,class:"example-mammon"},{default:c(()=>[i(Y(N),{provider:u[l]||void 0},null,8,["provider"])]),_:2},1024)):b("",!0)],64))]))),128))])}}}),me=A(ce,[["__scopeId","data-v-162714db"]]);export{me as H};
