import{u as F,i as ee,j as M,k as j,J as ae,l as le,t as se,n as x,p as D,q as te,s as B,v as l,x as _,y as I,z as U,A as re,B as ue,C as ie,D as ne,R as oe,O as ce,E as ve,G as pe,H as he,I as ye,K as de,L as me,M as b,N as fe}from"./app-rjaaUb-0.js";const ge="SEARCH_PRO_QUERY_HISTORY",y=F(ge,[]),He=()=>{const{queryHistoryCount:r}=b,n=r>0;return{enabled:n,queryHistory:y,addQueryHistory:t=>{n&&(y.value.length<r?y.value=Array.from(new Set([t,...y.value])):y.value=Array.from(new Set([t,...y.value.slice(0,r-1)])))},removeQueryHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}},Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:E}=b,d=F(Qe,[]),Re=()=>{const r=M(),n=E>0,t=s=>r.resolve({name:s.key,..."anchor"in s?{hash:`#${s.anchor}`}:{}}).fullPath;return{enabled:n,resultHistory:d,addResultHistory:s=>{if(n){const u={link:t(s),display:s.display};"header"in s&&(u.header=s.header),d.value.length<E?d.value=[u,...d.value]:d.value=[u,...d.value.slice(0,E-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},ke=r=>{const n=oe(),t=j(),{search:s,terminate:u}=ce(),f=x(!1),g=ve([]);return pe(()=>{const m=()=>{g.value=[],f.value=!1},w=fe(H=>{f.value=!0,H?s({type:"search",query:H,locale:t.value,options:n}).then(h=>{g.value=h,f.value=!1}).catch(h=>{console.error(h),m()}):m()},b.searchDelay);B([r,t],()=>w(r.value),{immediate:!0}),he(()=>{u()})}),{searching:f,results:g}};var we=ee({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(r,{emit:n}){const t=M(),s=j(),u=ae(le),{enabled:f,addQueryHistory:g,queryHistory:m,removeQueryHistory:w}=He(),{enabled:H,resultHistory:h,addResultHistory:L,removeResultHistory:J}=Re(),O=f||H,S=se(r,"query"),{results:Q,searching:Y}=ke(S),o=x({isQuery:!0,index:0}),p=x(0),c=x(0),P=D(()=>O&&(m.value.length>0||h.value.length>0)),C=D(()=>Q.value.length>0),q=D(()=>Q.value[p.value]||null),T=e=>t.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,z=()=>{const{isQuery:e,index:a}=o.value;a===0?o.value={isQuery:!e,index:e?h.value.length-1:m.value.length-1}:o.value={isQuery:e,index:a-1}},G=()=>{const{isQuery:e,index:a}=o.value;a===(e?m.value.length-1:h.value.length-1)?o.value={isQuery:!e,index:0}:o.value={isQuery:e,index:a+1}},K=()=>{p.value=p.value>0?p.value-1:Q.value.length-1,c.value=q.value.contents.length-1},N=()=>{p.value=p.value<Q.value.length-1?p.value+1:0,c.value=0},V=()=>{c.value<q.value.contents.length-1?c.value=c.value+1:N()},W=()=>{c.value>0?c.value=c.value-1:K()},A=e=>e.map(a=>ye(a)?a:l(a[0],a[1])),X=e=>{if(e.type==="customField"){const a=de[e.index]||"$content",[i,k=""]=me(a)?a[s.value].split("$content"):a.split("$content");return e.display.map(v=>l("div",A([i,...v,k])))}return e.display.map(a=>l("div",A(a)))},R=()=>{p.value=0,c.value=0,n("updateQuery",""),n("close")};return te("keydown",e=>{if(r.isFocusing){if(C.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const a=q.value.contents[c.value],i=T(a);g(r.query),L(a),t.push(i),R()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:a}=o.value;o.value.isQuery?(n("updateQuery",m.value[a]),e.preventDefault()):(t.push(h.value[a].link),R())}}}}),B([p,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:S.value?!C.value:!P.value}],id:"search-pro-results"},S.value===""?O?P.value?[f?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.history),m.value.map((e,a)=>l("div",{class:["search-pro-result-item",{active:o.value.isQuery&&o.value.index===a}],onClick:()=>{n("updateQuery",e)}},[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(a)}})]))])):null,H?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.history),h.value.map((e,a)=>l(U,{to:e.link,class:["search-pro-result-item",{active:!o.value.isQuery&&o.value.index===a}],onClick:()=>{R()}},()=>[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(i=>A(i)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),J(a)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult:Y.value?l(re,{hint:u.value.searching}):C.value?l("ul",{class:"search-pro-result-list"},Q.value.map(({title:e,contents:a},i)=>{const k=p.value===i;return l("li",{class:["search-pro-result-list-item",{active:k}]},[l("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),a.map((v,Z)=>{const $=k&&c.value===Z;return l(U,{to:T(v),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{g(r.query),L(v),R()}},()=>[v.type==="text"?null:l(v.type==="title"?ue:v.type==="heading"?ie:ne,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[v.type==="text"&&v.header?l("div",{class:"content-header"},v.header):null,l("div",X(v))])])})])})):u.value.emptyResult)}});export{we as default};