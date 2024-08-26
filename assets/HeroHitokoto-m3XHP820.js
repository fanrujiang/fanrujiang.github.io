import{a as v}from"./axios-QLjAsgXu.js";import{i as k,G as x,Q as p,j as g,r as y,o as E,g as T,w as H,a as I,_ as w}from"./app-eVdJebrU.js";const B=I("div",{class:"none"},"一言插件",-1),C=k({__name:"HeroHitokoto",setup(M){let h="https://v1.hitokoto.cn";const _=e=>{const t=window;clearInterval(t.Timer);const o=document.getElementsByClassName("vp-blog-hero-description");if(o.length>0){const d=o[0];d.id="hotWord"}const m=document.getElementById("hotWord");if(!m)return;m.innerHTML=`
<div class="word">
  <div class="left">『</div>
    <span id="hitokoto_text"></span>
  <div class="right">』</div>
</div>
<div class="author" id="hitokoto_author"> ——「${e.from}」</div>
  `;const i=document.getElementById("hitokoto_author"),u=document.getElementById("hitokoto_text");if(!u||!i)return;i.style.opacity="0";const c=e.hitokoto.split("");let n=0,s=0,f=60,l=!1,r="";t.Timer=setInterval(()=>{const d=c[n];if(r.length<4?i.style.opacity="0":i.style.opacity="1",s!=0){s--,r.length==0&&s==0&&clearInterval(t.Timer);return}l?clearInterval(t.Timer):r+=d,l?n--:n++,n>=c.length&&(l=!0,n=c.length,s=f),n<0&&(l=!1,n=0,s=f),u.innerHTML=r},200)},a=e=>{let t=window.location.pathname;e&&(t=e),t=="/blog/"&&v({method:"get",url:h,params:{}}).then(o=>{_(o.data)}).catch(o=>{h="https://international.v1.hitokoto.cn",a()})};return x(()=>{p(()=>{a()}),g().beforeEach(t=>{p(()=>{a(t.fullPath)})})}),(e,t)=>{const o=y("ClientOnly");return E(),T(o,null,{default:H(()=>[B]),_:1})}}}),N=w(C,[["__file","HeroHitokoto.vue"]]);export{N as default};
