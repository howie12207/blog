import{p as e,a as l,c as a,o as t,b as s,n as o,u as n,e as d,g as r,k as u,i,d as c,G as v,M as m,r as p,f as g,P as b,t as y,F as f,D as x,m as C,R as w,h as k,w as h,E as _,B as z}from"./vendor.67514f8f.js";import{s as S,_ as I,b as T,t as j}from"./index.05931314.js";import{i as P}from"./common.8fd1db50.js";import{s as B}from"./scrollTo.ee32d387.js";e("data-v-9060080e");const M=[d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1),d("div",null,null,-1)];l();var D=I({props:{mainColor:{type:String,default:"#f00"},size:{type:Number,default:80}},setup(e){const l=e,d=a((()=>({"--loadingColor":l.mainColor,"--loadingSize":`${l.size}px`,"--loadingScale":l.size/40})));return(e,l)=>(t(),s("div",{style:o(n(d)),class:"icon_loading"},M,4))}},[["__scopeId","data-v-9060080e"]]);e("data-v-be38853c");const L=["type"];l();var R=I({props:{mainColor:{type:String,default:"#10b981"},disabledColor:{type:String,default:"#d1d5db"},loadingColor:{type:String,default:"#d1d5db"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},type:{type:String,default:"button",validator:e=>["button","submit","reset"].includes(e)}},emits:["click"],setup(e,{emit:l}){const d=e,v=e=>{d.disabled||l("click",e)},m=a((()=>({"--buttonMainColor":d.mainColor,"--buttonDisabledColor":d.disabledColor})));return(l,a)=>(t(),s("button",{style:o(n(m)),type:e.type,class:c(["base_button",{disabled:e.disabled},{loading:e.loading}]),onClick:v},[e.loading?(t(),r(D,{key:0,mainColor:e.loadingColor,class:"icon",size:16},null,8,["mainColor"])):u("",!0),i(l.$slots,"default",{},void 0,!0)],14,L))}},[["__scopeId","data-v-be38853c"]]);e("data-v-6df6e5c6");const $={class:"article xl:w-xl xl:mx-auto mx-4 p-4 lg:p-10 mb-4 bg-red-50 rounded shadow dark:bg-yellow-900 dark:text-red-200"},E={class:"lg:flex justify-between text-xs text-gray-500"},H={class:"text-3xl my-8 text-red-700 font-black dark:text-red-400"},U=["innerHTML"],F={class:"mt-12 text-yellow-700"},G={class:"text-right mt-2"},N=z("送出"),V={class:"text-gray-500 font-bold"},q={class:"text-xs text-gray-400"},A={class:"comment_content text-sm"};l();var J=I({setup(e){const l=v(),a=m(),o=p(null),i=p(0);g((async()=>{await Promise.all([I(),O()]),i.value=o.value.getBoundingClientRect().top-56}));const c=p({}),I=async()=>{c.value=await T(a.params.id)},M=p(""),D=async()=>{var e;if(!l.getters.isLogin)return void _({type:"error",message:"請先登入",showClose:!0});if(!M.value.trim())return void _({type:"error",message:"請填寫內容",showClose:!0});const t={account:null==(e=l.state.userData)?void 0:e.account,content:M.value.trim(),articleId:a.params.id};var s;await(s=t,S({url:"/comment",method:"post",data:s}))&&(M.value="",_({type:"success",message:"留言成功",showClose:!0}),O())},L=p([]),J=p(0),K=p({page:0,size:10,articleId:a.params.id}),O=async(e=K.value)=>{const l=await function(e){return S({url:`/comment/${e.articleId}`,method:"get",params:e})}(e);L.value=(null==l?void 0:l.content)||[],J.value=(null==l?void 0:l.totalElements)||0},Q=p(1),W=e=>{K.value.page=e-1,O(),B(i.value)};return(e,l)=>{const a=b;return t(),s("div",$,[d("div",E,[d("p",null," 建立時間： "+y(n(j)(c.value.createTime)),1),d("p",null," 最近一次更新時間： "+y(n(j)(c.value.updateTime)),1)]),d("div",H,y(c.value.name),1),d("div",{class:"content",innerHTML:c.value.content},null,8,U),d("div",F,[(t(!0),s(f,null,x(c.value.sorts,((e,l)=>(t(),s("span",{key:l,class:"mr-2"},"#"+y(e),1)))),128))]),d("div",{class:"text-3xl my-4 py-4 font-bold border-solid border-t-4 border-b-4 border-light-blue-500 dark:border-yellow-700",ref:(e,l)=>{l.commentRef=e,o.value=e}}," 留言區 ",512),C(d("textarea",{"onUpdate:modelValue":l[0]||(l[0]=e=>M.value=e),placeholder:"請輸入留言內容",class:"p-4 w-full focus:outline-none shadow focus:ring-1 bg-gray-200 rounded resize-none transition-shadow dark:bg-gray-700",rows:"10"},null,512),[[w,M.value]]),d("div",G,[k(R,{onClick:D},{default:h((()=>[N])),_:1})]),(t(!0),s(f,null,x(L.value,((e,l)=>(t(),s("div",{key:l,class:"p-4 my-4 bg-red-100 rounded shadow"},[d("p",V,[z(y(e.account)+" ",1),d("span",q,"("+y(n(j)(e.createTime))+")",1)]),d("p",A,y(e.content),1)])))),128)),J.value?(t(),r(a,{key:0,currentPage:Q.value,"onUpdate:currentPage":l[1]||(l[1]=e=>Q.value=e),class:"text-center",background:"",layout:"prev, pager, next",total:J.value,"pager-count":5,small:!n(P)(),onCurrentChange:W},null,8,["currentPage","total","small"])):u("",!0)])}}},[["__scopeId","data-v-6df6e5c6"]]);export{J as default};