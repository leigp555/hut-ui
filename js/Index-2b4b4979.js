import{D as e,C as t}from"./DemoDisplay-f307a3ea.js";import{d as a,s as n,r,I as s,c as l,e as o,n as c,f as u,g as i,k as d,t as f,q as p,X as v,S as m,E as h,G as g,j as _}from"./index-85b89606.js";import{_ as k,P as T,T as b}from"./Paragraph-361ff5f9.js";import{_ as x}from"./ApiIntro-a264b77e.js";import{g as A,a as $}from"./helper-e3311bca.js";import{_ as C}from"./CheckboxGroup-de00b432.js";const O={class:"ui-transfer-wrap"},D={class:"ui-transfer-source"},I={class:"transfer-source-title"},j={class:"transfer-source-content"},E={class:"transfer-action-wrap"},w={class:"transfer-actions"},U={class:"ui-transfer-source"},S={class:"transfer-source-title"},y={class:"transfer-source-content"},V=a({__name:"Transfer",props:{source:{default:()=>[]},selected:{default:()=>[]},titles:{default:()=>[]}},emits:["change","update:source","update:selected"],setup(e,{emit:t}){const a=e,{source:_,selected:k,titles:T}=n(a),b=r(!1),x=r(!1),A=r([]),$=s((()=>`${A.value.length} / ${a.source.length} 项 ${a.titles[0]}`)),V=r([]),z=s((()=>`${V.value.length} / ${a.selected.length} 项 ${a.titles[1]}`)),G=e=>{e?(_.value.forEach((e=>{e.checked=!0})),A.value=_.value):(A.value=[],_.value.forEach((e=>{e.checked=!1})))},P=e=>{e?(k.value.forEach((e=>{e.checked=!0})),V.value=k.value):(k.value.forEach((e=>{e.checked=!1})),V.value=[])},q=()=>{A.value.forEach((e=>{e.checked=!1}));const e=[...A.value,...a.selected];t("update:selected",e);const n=[...a.source];for(let t=0;t<n.length;t++)for(let e=0;e<A.value.length;e++)if(n[t].value===A.value[e].value){n.splice(t,1),t>1?t-=1:t=-1;break}t("update:source",n),t("change",n,e),A.value=[],b.value&&(b.value=!1)},F=()=>{V.value.forEach((e=>{e.checked=!1}));const e=[...V.value,...a.source];t("update:source",e);const n=[...a.selected];for(let t=0;t<n.length;t++)for(let e=0;e<V.value.length;e++)if(n[t].value===V.value[e].value){n.splice(t,1),t>1?t-=1:t=-1;break}t("update:selected",n),t("change",e,n),V.value=[],x.value&&(x.value=!1)};return(e,t)=>(l(),o("div",O,[c("section",D,[c("div",I,[u(v,{checked:b.value,"onUpdate:checked":t[0]||(t[0]=e=>b.value=e),onChange:G},{default:i((()=>[d(f(p($)),1)])),_:1},8,["checked"])]),c("div",j,[u(C,{value:A.value,"onUpdate:value":t[1]||(t[1]=e=>A.value=e),options:p(_),direction:"column"},null,8,["value","options"])])]),c("section",E,[c("div",w,[u(g,{onClick:q},{icon:i((()=>[u(p(m),{name:"back",size:"1em",height:"1em",style:h({transform:"rotate(180deg)"})},null,8,["style"])])),_:1}),u(g,{type:"default",onClick:F},{icon:i((()=>[u(p(m),{name:"back",size:"1em",height:"1em"})])),_:1})])]),c("section",U,[c("div",S,[u(v,{checked:x.value,"onUpdate:checked":t[2]||(t[2]=e=>x.value=e),onChange:P},{default:i((()=>[d(f(p(z)),1)])),_:1},8,["checked"])]),c("div",y,[u(C,{value:V.value,"onUpdate:value":t[3]||(t[3]=e=>V.value=e),options:p(k),direction:"column"},null,8,["value","options"])])])]))}}),z=c("p",null,"双栏穿梭选择框。",-1),G=c("ul",null,[c("li",null,"Transfer")],-1),P=c("ul",null,[c("li",null,"需要在多个可选项中进行多选时。"),c("li",null," 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。 ")],-1),q=a({__name:"Intro",setup:e=>(e,t)=>(l(),_(p(b),null,{default:i((()=>[u(p(k),{level:4},{default:i((()=>[d("简介")])),_:1}),u(p(T),null,{default:i((()=>[z])),_:1}),u(p(k),{level:4},{default:i((()=>[d("组件概述")])),_:1}),u(p(T),null,{default:i((()=>[G])),_:1}),u(p(k),{level:4},{default:i((()=>[d("使用场景")])),_:1}),u(p(T),null,{default:i((()=>[P])),_:1})])),_:1}))}),F=a({__name:"Api",setup(e){const t=[{rowIndex:1,"事件名称":"change","说明":"选项在两栏之间转移时的回调函数","回调参数":"Function(sourceArr: TransferOptions, targetArr: TransferOptions)"}],a=[{componentName:"Transfer",attrContent:[{rowIndex:1,"属性":"source","说明":"数据源，其中的数据将会被渲染到左边一栏中","类型":"TransferOptions[]","默认值":"[]"},{rowIndex:2,"属性":"source","说明":"选中的项，其中的数据将会被渲染到右边一栏中","类型":"TransferOptions[]","默认值":"[]"},{rowIndex:3,"属性":"titles","说明":"标题集合，顺序从左至右标题集合，顺序从左至右","类型":"string[]","默认值":"[]"}]}];return(e,n)=>(l(),_(x,{"attr-content-arr":a,"event-content":t}))}});var N=e=>{e.__sourceCode="<template>\n  <Transfer\n    v-model:source=\"sourceValue\"\n    v-model:selected=\"selectedValue\"\n    :titles=\"['Source', 'Target']\"\n    @change=\"handleChange\"\n  />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Transfer, TransferOptions } from '@/lib'\n\n// 模拟数据\nconst mockData: TransferOptions[] = []\nfor (let i = 0; i < 20; i++) {\n  mockData.push({\n    label: `content${i + 1}`,\n    value: `content${i + 1}`,\n    checked: false,\n    description: `description of content${i + 1}`\n  })\n}\n\nconst sourceValue = ref<TransferOptions[]>(\n  mockData.filter((item, index) => index % 2 !== 0)\n)\nconst selectedValue = ref<TransferOptions[]>(\n  mockData.filter((item, index) => index % 2 === 0)\n)\n\nconst handleChange = (sourceArr: TransferOptions, targetArr: TransferOptions) => {\n  console.log('sourceArr: ', sourceArr)\n  console.log('targetArr: ', targetArr)\n}\n<\/script>",e.__sourceTitle="基本用法"};const X=a({__name:"DemoOne",setup(e){const t=[];for(let r=0;r<20;r++)t.push({label:`content${r+1}`,value:`content${r+1}`,checked:!1,description:`description of content${r+1}`});const a=r(t.filter(((e,t)=>t%2!=0))),n=r(t.filter(((e,t)=>t%2==0))),s=(e,t)=>{console.log("sourceArr: ",e),console.log("targetArr: ",t)};return(e,t)=>(l(),_(p(V),{source:a.value,"onUpdate:source":t[0]||(t[0]=e=>a.value=e),selected:n.value,"onUpdate:selected":t[1]||(t[1]=e=>n.value=e),titles:["Source","Target"],onChange:s},null,8,["source","selected"]))}});N(X);const B=a({__name:"Demo",setup(t){const a=s((()=>[X].map(((e,t)=>A(e,"transfer",t)))));return(t,n)=>(l(),_(e,{"demo-arr":p(a)},null,8,["demo-arr"]))}}),H=a({__name:"Index",setup(e){r(null);const a=["基本用法"],n=s((()=>$("transfer",a)));return(e,a)=>(l(),_(t,{"nav-arr":p(n),title:"Transfer 穿梭框","component-name":"transfer"},{intro:i((()=>[u(q)])),demo:i((()=>[u(B)])),api:i((()=>[u(F)])),_:1},8,["nav-arr"]))}});export{H as default};
