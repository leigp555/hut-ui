import"./Upload.vue_vue_type_style_index_0_lang-5a132e89.js";import{d as e,k as a,r as l,N as t,P as n,E as u,o,c as s,b as v,v as i,n as r}from"./index-c5a7ce44.js";const f=e({__name:"Affix",props:{offsetTop:{default:50},scrollContainer:{type:Function,default:()=>window}},emits:["change"],setup(e,{emit:f}){const c=e,{scrollContainer:p,offsetTop:d}=a(c),m=l(null),g=l(null),_=l(0),x=l(!1),T=l();const w=function(e,a){let l=(new Date).getTime();return()=>{const t=(new Date).getTime();t-l>=a&&(e(),l=t)}}((()=>{if(T.value){const e=m.value.offsetTop-T.value.offsetTop;T.value.scrollTop>e-d.value?x.value=!0:T.value.scrollTop<e-d.value&&(x.value=!1)}}),10);return t((()=>{var e;p.value()===window?T.value=document.documentElement:T.value=p.value(),null==(e=T.value)||e.addEventListener("scroll",w),_.value=g.value.getBoundingClientRect().height,m.value.style.height=`${_.value}px`})),n((()=>{var e;null==(e=T.value)||e.removeEventListener("scroll",w)})),u(x,(()=>{f("change",x.value),x.value&&T.value&&(g.value.style.top=`${d.value+T.value.getBoundingClientRect().top}px`)})),(e,a)=>(o(),s("div",{class:"ui-affix-wrap",ref_key:"containerRef",ref:m},[v("div",{ref_key:"innerRef",ref:g,class:r(["ui-affix-inner",{fixed:x.value}])},[i(e.$slots,"default")],2)],512))}});export{f as _};
