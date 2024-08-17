import{_ as t}from"./app-61K1sjrq.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://talk2.fanliu.top/"};const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-61K1sjrq.js").then(r=>r.a7),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}