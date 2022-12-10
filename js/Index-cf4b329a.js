import{D as e,C as n}from"./DemoDisplay-d6102924.js";import"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as t,P as a,T as c}from"./Footer-492e9d3a.js";import{d as o,c as l,e as s,l as d,s as r,i,g as u,f as p,m as h,j as m,r as _,x as f}from"./index-4bdb761c.js";import{_ as k}from"./ApiIntro-e7a82855.js";import{g as w,a as b}from"./helper-f72534c2.js";const v=o({__name:"Switch",props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:checked","change"],setup(e,{emit:n}){const t=e,a=()=>{t.disabled||(n("update:checked",!t.checked),n("change",!t.checked))};return(n,t)=>(l(),s("div",{class:r(["ui-switch-wrap",{"switch-wrap-checked":e.checked,"switch-wrap-disable":e.disabled}]),onClick:a},[d("span",{class:r(["ui-switch-dot",{"switch-dot-on":e.checked}])},null,2)],2))}}),g=d("p",null,"开关选择器。",-1),C=d("ul",null,[d("li",null,"Switch: 主要组件")],-1),x=d("ul",null,[d("li",null,"需要表示开关状态/两种状态之间的切换时；")],-1),S=o({__name:"Intro",setup:e=>(e,n)=>(l(),i(h(c),null,{default:u((()=>[p(h(t),null,{default:u((()=>[m("简介")])),_:1}),p(h(a),null,{default:u((()=>[g])),_:1}),p(h(t),null,{default:u((()=>[m("组件概览")])),_:1}),p(h(a),null,{default:u((()=>[C])),_:1}),p(h(t),null,{default:u((()=>[m("使用场景")])),_:1}),p(h(a),null,{default:u((()=>[x])),_:1})])),_:1}))}),j=o({__name:"Api",setup(e){const n=[{rowIndex:1,"事件名称":"change","说明":"变化时回调函数","回调参数":"Function(checked: boolean)"}],t=[{componentName:"Switch",attrContent:[{rowIndex:1,"属性":"checked","说明":"开关状态","类型":"boolean","默认值":"false"},{rowIndex:2,"属性":"disabled","说明":"禁用","类型":"boolean","默认值":"false"}]}];return(e,a)=>(l(),i(k,{"attr-content-arr":t,"event-content":n}))}});var D=e=>{e.__sourceCode='<template>\n  <Switch v-model:checked="checked" @change="onChange" />\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Switch } from \'@/lib\'\n\nconst checked = ref<boolean>(false)\n\nconst onChange = (isChecked: boolean) => {\n  console.log(isChecked)\n}\n<\/script>',e.__sourceTitle="基本用法"};const I=o({__name:"DemoOne",setup(e){const n=_(!1),t=e=>{console.log(e)};return(e,a)=>(l(),i(h(v),{checked:n.value,"onUpdate:checked":a[0]||(a[0]=e=>n.value=e),onChange:t},null,8,["checked"]))}});D(I);var y=e=>{e.__sourceCode="<template>\n  <Switch v-model:checked=\"checked\" disabled />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Switch } from '@/lib'\n\nconst checked = ref<boolean>(false)\n<\/script>",e.__sourceTitle="禁用"};const T=o({__name:"DemoTwo",setup(e){const n=_(!1);return(e,t)=>(l(),i(h(v),{checked:n.value,"onUpdate:checked":t[0]||(t[0]=e=>n.value=e),disabled:""},null,8,["checked"]))}});y(T);const U=o({__name:"Demo",setup(n){const t=f((()=>[I,T].map(((e,n)=>w(e,"switch",n)))));return(n,a)=>(l(),i(e,{"demo-arr":h(t)},null,8,["demo-arr"]))}}),A=o({__name:"Index",setup(e){_(null);const t=["基本用法","禁用"],a=f((()=>b("switch",t)));return(e,t)=>(l(),i(n,{"nav-arr":h(a),title:"Switch 开关","component-name":"switch"},{intro:u((()=>[p(S)])),demo:u((()=>[p(U)])),api:u((()=>[p(j)])),_:1},8,["nav-arr"]))}});export{A as default};