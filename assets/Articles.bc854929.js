import{c as e,o as t,b as a,n as r,u as l,d as o,p as n,a as s,B as i,e as c,t as u,h as d,w as p,A as g,J as m,K as v,f,r as x,F as b,C as h,g as y,L as C,k as w}from"./vendor.7c19785e.js";import{_,t as k,a as z,f as B}from"./index.e6d06783.js";function P(){return!navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i)}var S=_({props:{size:{type:Number,default:24},mainColor:{type:String,default:"currentColor"},borderColor:{type:String,default:"transparent"},bgColor:{type:String,default:"transparent"},direction:{type:String,default:"left",validator:e=>["left","top","right","bottom"].includes(e)},lineWidth:{type:Number,default:2},pointer:{type:Boolean,default:!1}},setup(n){const s=n,i=e((()=>({"--chevronSize":`${s.size}px`,"--chevronColor":s.mainColor,"--chevronBorderColor":s.borderColor,"--chevronBgColor":s.bgColor,"--chevronLineWidth":`${s.lineWidth}px`})));return(e,s)=>(t(),a("div",{style:r(l(i)),class:o(["icon_chevron",n.direction,{pointer:n.pointer}])},null,6))}},[["__scopeId","data-v-8b453c74"]]);n("data-v-4b48f4ee");const M={class:"text-xs lg:text-sm shadow-xl bg-red-50 rounded p-4 overflow-hidden"},A={class:"text-right text-xs mb-2"},E={class:"text-xl mb-2 text-red-700 font-black"},L=["innerHTML"],O=g("READ MORE");s();var T=_({props:{article:{type:Object,default:()=>({})}},setup:e=>(r,o)=>{const n=i("router-link");return t(),a("article",M,[c("div",A,u(l(k)(e.article.createTime)),1),c("div",E,u(e.article.name),1),c("div",{class:"content overflow-hidden overflow-ellipsis line-clamp-6",innerHTML:e.article.content},null,8,L),d(n,{to:`/articles/${e.article._id}?title=${e.article.name}`,class:"flex items-center text-red-400 text-right underline my-1 ml-auto w-max group"},{default:p((()=>[O,d(S,{size:14,class:"ml-1 group-hover:animate-bounce",direction:"right"})])),_:1},8,["to"]),d(z,{tags:e.article.sorts},null,8,["tags"])])}},[["__scopeId","data-v-4b48f4ee"]]);const $={class:"xl:w-xl xl:mx-auto p-2 sm:p-4"},j={class:"grid lg:grid-cols-2 gap-8 mb-8"},q={setup(e){const r=m(),o=v();f((()=>{u(i.value)}));const n=x([]),s=x(0),i=x({page:r.query.page||0,size:10}),u=async e=>{const t=await B(e)||{};n.value=t.content||[],s.value=t.totalElements||0},d=x(Number(r.query.page)+1||1),p=e=>{const t={page:e-1,size:10};o.push({query:t}),u(t),window.scrollTo(0,0)};return(e,r)=>(t(),a("main",$,[c("section",j,[(t(!0),a(b,null,h(n.value,(e=>(t(),y(T,{article:e,key:e._id},null,8,["article"])))),128))]),s.value?(t(),y(l(C),{key:0,currentPage:d.value,"onUpdate:currentPage":r[0]||(r[0]=e=>d.value=e),class:"text-center",background:"",layout:"prev, pager, next",total:s.value,"pager-count":5,small:!l(P)(),onCurrentChange:p},null,8,["currentPage","total","small"])):w("",!0)]))}};export{q as default};
