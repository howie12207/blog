import{c as e,o as t,b as a,n as r,u as l,d as o,p as n,a as s,B as i,e as c,t as u,h as d,w as p,A as v,J as g,K as m,f,r as x,L as b,F as h,C as y,g as w,M as C,k as _}from"./vendor.8319490c.js";import{_ as k,t as B,a as E,f as L}from"./index.29aa4184.js";function M(){return!navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i)}var P=k({props:{size:{type:Number,default:24},mainColor:{type:String,default:"currentColor"},borderColor:{type:String,default:"transparent"},bgColor:{type:String,default:"transparent"},direction:{type:String,default:"left",validator:e=>["left","top","right","bottom"].includes(e)},lineWidth:{type:Number,default:2},pointer:{type:Boolean,default:!1}},setup(n){const s=n,i=e((()=>({"--chevronSize":`${s.size}px`,"--chevronColor":s.mainColor,"--chevronBorderColor":s.borderColor,"--chevronBgColor":s.bgColor,"--chevronLineWidth":`${s.lineWidth}px`})));return(e,s)=>(t(),a("div",{style:r(l(i)),class:o(["icon_chevron",n.direction,{pointer:n.pointer}])},null,6))}},[["__scopeId","data-v-8b453c74"]]);n("data-v-4b48f4ee");const S={class:"text-xs lg:text-sm shadow-xl bg-red-50 rounded p-4 overflow-hidden"},z={class:"text-right text-xs mb-2"},q={class:"text-xl mb-2 text-red-700 font-black"},A=["innerHTML"],N=v("READ MORE");s();var O=k({props:{article:{type:Object,default:()=>({})}},setup:e=>(r,o)=>{const n=i("router-link");return t(),a("article",S,[c("div",z,u(l(B)(e.article.createTime)),1),c("div",q,u(e.article.name),1),c("div",{class:"content overflow-hidden overflow-ellipsis line-clamp-6",innerHTML:e.article.content},null,8,A),d(n,{to:`/articles/${e.article._id}?title=${e.article.name}`,class:"flex items-center text-red-400 text-right underline my-1 ml-auto w-max group"},{default:p((()=>[N,d(P,{size:14,class:"ml-1 group-hover:animate-bounce",direction:"right"})])),_:1},8,["to"]),d(E,{tags:e.article.sorts},null,8,["tags"])])}},[["__scopeId","data-v-4b48f4ee"]]);const T={class:"xl:w-xl xl:mx-auto p-2 sm:p-4"},$={class:"grid lg:grid-cols-2 gap-8 mb-8"},j={setup(e){const r=g(),o=m();f((()=>{window.addEventListener("popstate",v),u()}));const n=x([]),s=x(0),i=x({page:r.query.page||0,size:10}),u=async(e=i.value)=>{const t=await L(e)||{};n.value=t.content||[],s.value=t.totalElements||0},d=x(Number(r.query.page)+1||1),p=e=>{i.value.page=e-1,o.push({query:i.value}),u(),window.scrollTo(0,0)},v=()=>{const e=Number(r.query.page)+1||1;d.value=e,i.value.page=e-1,u()};return b((()=>{window.removeEventListener("popstate",v)})),(e,r)=>(t(),a("main",T,[c("section",$,[(t(!0),a(h,null,y(n.value,(e=>(t(),w(O,{article:e,key:e._id},null,8,["article"])))),128))]),s.value?(t(),w(l(C),{key:0,currentPage:d.value,"onUpdate:currentPage":r[0]||(r[0]=e=>d.value=e),class:"text-center",background:"",layout:"prev, pager, next",total:s.value,"pager-count":5,small:!l(M)(),onCurrentChange:p},null,8,["currentPage","total","small"])):_("",!0)]))}};export{j as default};
