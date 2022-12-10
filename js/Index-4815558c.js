import{D as e,C as t}from"./DemoDisplay-d6102924.js";import{e as n,_ as a,a as r}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as l,P as s,T as o}from"./Footer-492e9d3a.js";import{d as c,v as u,r as i,x as d,c as f,e as p,l as v,f as m,g as h,j as _,t as g,m as k,L as T,i as x}from"./index-4bdb761c.js";import{_ as A}from"./ApiIntro-e7a82855.js";import{g as $,a as C}from"./helper-f72534c2.js";import{_ as O}from"./CheckboxGroup-675c4c30.js";const b={class:"ui-transfer-wrap"},D={class:"ui-transfer-source"},j={class:"transfer-source-title"},w={class:"transfer-source-content"},I={class:"transfer-action-wrap"},U={class:"transfer-actions"},y={class:"ui-transfer-source"},E={class:"transfer-source-title"},S={class:"transfer-source-content"},V=c({__name:"Transfer",props:{source:{default:()=>[]},selected:{default:()=>[]},titles:{default:()=>[]}},emits:["change","update:source","update:selected"],setup(e,{emit:t}){const l=e,{source:s,selected:o,titles:c}=u(l),x=i(!1),A=i(!1),$=i([]),C=d((()=>`${$.value.length} / ${l.source.length} 项 ${l.titles[0]}`)),V=i([]),F=d((()=>`${V.value.length} / ${l.selected.length} 项 ${l.titles[1]}`)),G=e=>{e?(s.value.forEach((e=>{e.checked=!0})),$.value=s.value):($.value=[],s.value.forEach((e=>{e.checked=!1})))},L=e=>{e?(o.value.forEach((e=>{e.checked=!0})),V.value=o.value):(o.value.forEach((e=>{e.checked=!1})),V.value=[])},N=()=>{$.value.forEach((e=>{e.checked=!1}));const e=[...$.value,...l.selected];t("update:selected",e);const n=[...l.source];for(let t=0;t<n.length;t++)for(let e=0;e<$.value.length;e++)if(n[t].value===$.value[e].value){n.splice(t,1),t>1?t-=1:t=-1;break}t("update:source",n),t("change",n,e),$.value=[],x.value&&(x.value=!1)},P=()=>{V.value.forEach((e=>{e.checked=!1}));const e=[...V.value,...l.source];t("update:source",e);const n=[...l.selected];for(let t=0;t<n.length;t++)for(let e=0;e<V.value.length;e++)if(n[t].value===V.value[e].value){n.splice(t,1),t>1?t-=1:t=-1;break}t("update:selected",n),t("change",e,n),V.value=[],A.value&&(A.value=!1)};return(e,t)=>(f(),p("div",b,[v("section",D,[v("div",j,[m(n,{checked:x.value,"onUpdate:checked":t[0]||(t[0]=e=>x.value=e),onChange:G},{default:h((()=>[_(g(k(C)),1)])),_:1},8,["checked"])]),v("div",w,[m(O,{value:$.value,"onUpdate:value":t[1]||(t[1]=e=>$.value=e),options:k(s),direction:"column"},null,8,["value","options"])])]),v("section",I,[v("div",U,[m(r,{onClick:N},{icon:h((()=>[m(a,{name:"back",width:"1em",height:"1em",style:T({transform:"rotate(180deg)"})},null,8,["style"])])),_:1}),m(r,{type:"default",onClick:P},{icon:h((()=>[m(a,{name:"back",width:"1em",height:"1em"})])),_:1})])]),v("section",y,[v("div",E,[m(n,{checked:A.value,"onUpdate:checked":t[2]||(t[2]=e=>A.value=e),onChange:L},{default:h((()=>[_(g(k(F)),1)])),_:1},8,["checked"])]),v("div",S,[m(O,{value:V.value,"onUpdate:value":t[3]||(t[3]=e=>V.value=e),options:k(o),direction:"column"},null,8,["value","options"])])])]))}}),F=v("p",null,"双栏穿梭选择框。",-1),G=v("ul",null,[v("li",null,"Transfer")],-1),L=v("ul",null,[v("li",null,"需要在多个可选项中进行多选时。"),v("li",null," 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。 ")],-1),N=c({__name:"Intro",setup:e=>(e,t)=>(f(),x(k(o),null,{default:h((()=>[m(k(l),{level:4},{default:h((()=>[_("简介")])),_:1}),m(k(s),null,{default:h((()=>[F])),_:1}),m(k(l),{level:4},{default:h((()=>[_("组件概述")])),_:1}),m(k(s),null,{default:h((()=>[G])),_:1}),m(k(l),{level:4},{default:h((()=>[_("使用场景")])),_:1}),m(k(s),null,{default:h((()=>[L])),_:1})])),_:1}))}),P=c({__name:"Api",setup(e){const t=[{rowIndex:1,"事件名称":"change","说明":"选项在两栏之间转移时的回调函数","回调参数":"Function(sourceArr: TransferOptions, targetArr: TransferOptions)"}],n=[{componentName:"Transfer",attrContent:[{rowIndex:1,"属性":"source","说明":"数据源，其中的数据将会被渲染到左边一栏中","类型":"TransferOptions[]","默认值":"[]"},{rowIndex:2,"属性":"source","说明":"选中的项，其中的数据将会被渲染到右边一栏中","类型":"TransferOptions[]","默认值":"[]"},{rowIndex:3,"属性":"titles","说明":"标题集合，顺序从左至右标题集合，顺序从左至右","类型":"string[]","默认值":"[]"}]}];return(e,a)=>(f(),x(A,{"attr-content-arr":n,"event-content":t}))}});var q=e=>{e.__sourceCode="<template>\n  <Transfer\n    v-model:source=\"sourceValue\"\n    v-model:selected=\"selectedValue\"\n    :titles=\"['Source', 'Target']\"\n    @change=\"handleChange\"\n  />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Transfer, TransferOptions } from '@/lib'\n\n// 模拟数据\nconst mockData: TransferOptions[] = []\nfor (let i = 0; i < 20; i++) {\n  mockData.push({\n    label: `content${i + 1}`,\n    value: `content${i + 1}`,\n    checked: false,\n    description: `description of content${i + 1}`\n  })\n}\n\nconst sourceValue = ref<TransferOptions[]>(\n  mockData.filter((item, index) => index % 2 !== 0)\n)\nconst selectedValue = ref<TransferOptions[]>(\n  mockData.filter((item, index) => index % 2 === 0)\n)\n\nconst handleChange = (sourceArr: TransferOptions, targetArr: TransferOptions) => {\n  console.log('sourceArr: ', sourceArr)\n  console.log('targetArr: ', targetArr)\n}\n<\/script>",e.__sourceTitle="基本用法"};const z=c({__name:"DemoOne",setup(e){const t=[];for(let l=0;l<20;l++)t.push({label:`content${l+1}`,value:`content${l+1}`,checked:!1,description:`description of content${l+1}`});const n=i(t.filter(((e,t)=>t%2!=0))),a=i(t.filter(((e,t)=>t%2==0))),r=(e,t)=>{console.log("sourceArr: ",e),console.log("targetArr: ",t)};return(e,t)=>(f(),x(k(V),{source:n.value,"onUpdate:source":t[0]||(t[0]=e=>n.value=e),selected:a.value,"onUpdate:selected":t[1]||(t[1]=e=>a.value=e),titles:["Source","Target"],onChange:r},null,8,["source","selected"]))}});q(z);const B=c({__name:"Demo",setup(t){const n=d((()=>[z].map(((e,t)=>$(e,"transfer",t)))));return(t,a)=>(f(),x(e,{"demo-arr":k(n)},null,8,["demo-arr"]))}}),H=c({__name:"Index",setup(e){i(null);const n=["基本用法"],a=d((()=>C("transfer",n)));return(e,n)=>(f(),x(t,{"nav-arr":k(a),title:"Transfer 穿梭框","component-name":"transfer"},{intro:h((()=>[m(N)])),demo:h((()=>[m(B)])),api:h((()=>[m(P)])),_:1},8,["nav-arr"]))}});export{H as default};