import{_ as e,g as a}from"./index.e6d06783.js";import{p as s,a as t,K as r,f as l,M as n,o,b as i,e as c}from"./vendor.7c19785e.js";s("data-v-1ef85e5e");const p={class:"waiting text-white flex justify-center items-center"},d=[c("div",{class:"text-3xl p-4 bg-gray-700 bg-opacity-60 rounded"},[c("p",{class:"mb-4"},"因使用heroku call api，需要約30秒喚醒時間"),c("p",null,"喚醒完會自動導回頁面，請耐心等候，謝謝")],-1)];t();var u=e({setup(e){const s=r();let t=null;return l((()=>{t=setInterval((async()=>{if(await a()){const e=sessionStorage.getItem("url")||"/";s.push(e)}}),6e3)})),n((()=>{clearInterval(t)})),(e,a)=>(o(),i("div",p,d))}},[["__scopeId","data-v-1ef85e5e"]]);export{u as default};
