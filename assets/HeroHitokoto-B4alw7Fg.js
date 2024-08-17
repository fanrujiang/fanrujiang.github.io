import{a as _}from"./axios-QLjAsgXu.js";import{h as v,E as g,N as f,i as x}from"./app-61K1sjrq.js";import{_ as k}from"./plugin-vue_export-helper-x3n3nnut.js";const E=v({__name:"HeroHitokoto",setup(y){const p=o=>{const t=window;clearInterval(t.Timer);const n=document.getElementsByClassName("vp-blog-hero-description");if(n.length>0){const m=n[0];m.id="hotWord"}const d=document.getElementById("hotWord");if(!d)return;d.innerHTML=`
<div class="word">
  <div class="left">『</div>
    <span id="hitokoto_text"></span>
  <div class="right">』</div>
</div>
<div class="author" id="hitokoto_author"> ——「${o.from}」</div>
  `;const r=document.getElementById("hitokoto_author"),h=document.getElementById("hitokoto_text");if(!h||!r)return;r.style.opacity="0";const c=o.hitokoto.split("");let e=0,s=0,u=60,l=!1,i="";t.Timer=setInterval(()=>{const m=c[e];if(i.length<4?r.style.opacity="0":r.style.opacity="1",s!=0){s--,i.length==0&&s==0&&(clearInterval(t.Timer),a());return}l?i=i.slice(0,e):i+=m,l?e--:e++,e>=c.length&&(l=!0,e=c.length,s=u),e<0&&(l=!1,e=0,s=u),h.innerHTML=i},200)},a=o=>{let t=window.location.pathname;o&&(t=o),t=="/blog/"&&_({method:"get",url:"https://v1.hitokoto.cn",params:{}}).then(n=>{p(n.data)})};return g(()=>{f(()=>{a()}),x().beforeEach(t=>{f(()=>{a(t.fullPath)})})}),()=>{}}}),w=k(E,[["__file","HeroHitokoto.vue"]]);export{w as default};
