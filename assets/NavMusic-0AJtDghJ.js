import{i as m,n as f,G as p,j as _,P as M,Q as v,r as P,o as b,g as h,w as A,a as l,S as g,T as w,d as E,U as G,_ as x}from"./app-PkLUv2Vk.js";import{a as C}from"./axios-QLjAsgXu.js";const S={class:"MyMusic"},I=l("div",{id:"GlobalAPlayer"},null,-1),B=m({__name:"NavMusic",setup(k){let s,o=f(!1),i=[];const y=()=>{o.value=!o.value},r=()=>{o.value&&(o.value=!1)},u=()=>{const t=document.querySelector(".vp-navbar-end");if(!t)return;if(!document.querySelector("#MyMusic_Menu")){const n=document.createElement("div");n.id="MyMusic_Menu",n.classList.add("nav-item"),n.innerHTML='<div id="MyMusic_icon" class="btnImg"></div>',t.appendChild(n)}const e=document.querySelector("#MyMusic_Menu");e.onclick=n=>{y(),n.stopPropagation()};const a=document.querySelector(".MyMusic");a.onclick=n=>{n.stopPropagation()}},d=()=>{if(!s)return;const t=window,e=document.getElementById("GlobalAPlayer");!e||i.length<1||(c(),e.classList.contains("aplayer"))||(t.GlobalAPlayer=new s({container:document.getElementById("GlobalAPlayer"),audio:i,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:1,storageName:"GlobalAPlayer"}),t.GlobalAPlayer.on("play",function(){c()}),t.GlobalAPlayer.on("pause",function(){c()}))};function c(){var e,a;const t=window;t.GlobalAPlayer&&t.GlobalAPlayer.mode&&(t.GlobalAPlayer.paused?(e=document.getElementById("MyMusic_icon"))==null||e.setAttribute("spin","false"):(a=document.getElementById("MyMusic_icon"))==null||a.setAttribute("spin","true"))}return p(()=>{const t=_();C({method:"get",url:"//file.fanliu.top/music/list.json",params:{}}).then(e=>{var a=e.data;a&&a.length>0&&(a.forEach(n=>{n.hasOwnProperty("title")&&(n.name=n.title,delete n.title)}),i=a)}),M(()=>import("./APlayer.min-GBNn7yKx.js").then(e=>e.A),__vite__mapDeps([])).then(e=>{v(()=>{s=e.default,u(),d(),window.document.body.onclick=()=>{r()}}),t.beforeEach(()=>{setTimeout(()=>{u(),d()},50)})})}),(t,e)=>{const a=P("ClientOnly");return b(),h(a,null,{default:A(()=>[l("div",S,[l("div",{class:g(["MyMusic_Play",{hide:!w(o)}])},[l("div",{class:"close",onClick:r},[E(G,{name:"guanbi"})]),I],2)])]),_:1})}}}),L=x(B,[["__file","NavMusic.vue"]]);export{L as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}