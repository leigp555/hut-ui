import{d as a,k as e,r as l,z as i,N as t,o as s,c as n,b as u,n as o,l as p,e as c,A as g,F as d,f as r,t as v,v as h,x as m}from"./index-c5a7ce44.js";import"./Upload.vue_vue_type_style_index_0_lang-5a132e89.js";const b={class:"ui-pageSizeIcon"},w=["data-pageSize"],z=u("span",null,"跳至",-1),S=u("span",null,"页",-1),k=u("span",null,"共",-1),y=u("span",null,"页",-1),f=a({__name:"Pagination",props:{current:{default:1},total:{default:0},pageSize:{default:10},disabled:{type:Boolean,default:!1},showQuickJumper:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},showSizeChanger:{type:Boolean,default:!1},pageSizeOptions:{default:()=>["10","20","30","40","50"]}},emits:["update:current","update:pageSize","pageSizeChange","change"],setup(a,{emit:f}){const C=a,{current:_,total:x,pageSize:L,disabled:I,showSizeChanger:B,showQuickJumper:N,showTotal:T,pageSizeOptions:A}=e(C),J=l(null),O=i((()=>Math.ceil(x.value/L.value))),j=i((()=>O.value<=5?0:_.value>=3&&_.value+2<=O.value?_.value-3:_.value>=3&&_.value+1===O.value?_.value-4:_.value>=3&&_.value===O.value?_.value-5:0));t((()=>{_.value<=1?f("change",1):_.value>=O.value&&f("change",O.value)}));const D=()=>{_.value>1&&f("change",_.value-1)},M=()=>{_.value<O.value&&f("change",_.value+1)},P=a=>{const e=a.target,l=e.getAttribute("data-spec");"li"===e.tagName.toLowerCase()&&"pageNumber"===l&&f("change",parseInt(e.innerText,10))},Q=()=>{J.value.classList.add("list-show")},q=()=>{J.value.classList.remove("list-show")},F=a=>{const e=a.target,l=e.getAttribute("data-pageSize");"li"===e.tagName.toLowerCase()&&l&&(f("pageSizeChange",parseInt(l,10)),J.value.classList.remove("list-show"))},U=a=>{const e=a.target,l=e.value.trim();let i;try{i=parseInt(l,10),i?i>O.value?(f("change",O.value),e.value=""):i<1?(f("change",1),e.value=""):(f("change",i),e.value=""):e.value=""}catch(t){e.value=""}};return(a,e)=>(s(),n("div",{class:o(["ui-pagination-wrap",{disabled:p(I)}])},[u("ol",{class:o(["ui-pagination-ol",{disabled:p(I)}]),onClick:P},[u("li",{onClick:D,class:o(["ui-pagination-subIcon ui-pagination-item",{subDisabled:p(_)<=1}])},[c(g,{name:"back",width:"1em",height:"1em"})],2),(s(!0),n(d,null,r(p(O)<=5?p(O):5,(a=>(s(),n("li",{key:a,class:o(["ui-pagination-item",{"ui-pagination-currentPage":p(j)+a===p(_)}]),"data-spec":"pageNumber"},v(p(j)+a),3)))),128)),u("li",{onClick:M,class:o(["ui-pagination-addIcon ui-pagination-item",{addDisabled:p(_)>=p(O)}])},[c(g,{name:"back",width:"1em",height:"1em"})],2)],2),u("div",{class:o(["ui-pageSizeList-wrap",{disabled:p(I)}])},[p(B)?(s(),n("div",{key:0,class:"ui-pagination-pageSize ui-pagination-item",onClick:Q,onBlur:q,tabindex:"-1"},[h(a.$slots,"buildOptionText",{value:p(L)}),u("span",b,[c(g,{name:"back",width:"1em",height:"1em"})])],32)):m("",!0),u("ol",{class:"pageSize-list",ref_key:"pageSizeList",ref:J,onMousedown:F},[(s(!0),n(d,null,r(p(A),(a=>(s(),n("li",{key:a,class:o({selected:a===p(L).toString()}),"data-pageSize":a},v(a)+"条/页 ",11,w)))),128))],544)],2),p(N)?(s(),n("div",{key:0,class:o(["ui-quickJumper-wrap",{disabled:p(I)}])},[z,u("input",{type:"text",onChange:U},null,32),S],2)):m("",!0),p(T)?(s(),n("div",{key:1,class:o(["ui-pageTotal-wrap",{disabled:p(I)}])},[k,u("span",null,v(p(_))+"/"+v(p(O)),1),y],2)):m("",!0)],2))}});export{f as _};
