import{_ as e,P as a,T as l,g as n,D as u,C as t,a as s}from"./DemoDisplay-d14d3ff9.js";import"./Paragraph.vue_vue_type_style_index_0_lang-1a82c502.js";import{d as r,k as o,r as p,o as m,c as i,b as v,l as d,e as c,y as _,A as f,g as b,w as y,h as w,t as g,F as x,z as I}from"./index-54c84176.js";/* empty css                                                */import{_ as h}from"./ApiIntro-50aaf7d6.js";const N=["value"],k={class:"input-icon"},j=r({__name:"InputNumber",props:{value:{default:0}},emits:["update:value"],setup(e,{emit:a}){const l=e,{value:n}=o(l),u=p(null),t=p(null),s=()=>{var e;null==(e=u.value)||e.classList.add("wrap-focus")},r=()=>{var e;null==(e=u.value)||e.classList.remove("wrap-focus")},b=()=>{var e;a("update:value",null==(e=t.value)?void 0:e.value)},y=()=>{var e;null==(e=u.value)||e.classList.add("wrap-focus"),a("update:value",n.value+1)},w=()=>{var e;null==(e=u.value)||e.classList.add("wrap-focus"),a("update:value",n.value-1)};return(e,a)=>(m(),i("div",{class:"ui-label-wrap",tabindex:"-1",ref_key:"wrapRef",ref:u},[v("input",{class:"ui-input",type:"number",value:d(n),ref_key:"inputRef",ref:t,onFocus:s,onBlur:r,onInput:b},null,40,N),v("div",k,[v("span",{class:"ui-up ui-span",onClick:y},[c(f,{name:"back",width:"0.8em",height:"0.8em",style:_({transform:"rotate(90deg)"})},null,8,["style"])]),v("span",{class:"ui-down ui-span",onClick:w},[c(f,{name:"back",width:"0.8em",height:"0.8em",style:_({transform:"rotate(-90deg)"})},null,8,["style"])])])],512))}}),C=v("p",null,"通过鼠标或键盘，输入范围内的数值。",-1),D=v("ul",null,[v("li",null,"InputNumber")],-1),L=v("p",null,"当需要获取标准数值时。",-1),A=r({__name:"Intro",setup:n=>(n,u)=>(m(),b(d(l),null,{default:y((()=>[c(d(e),{level:4},{default:y((()=>[w("简介")])),_:1}),c(d(a),null,{default:y((()=>[C])),_:1}),c(d(e),{level:4},{default:y((()=>[w("组件概述")])),_:1}),c(d(a),null,{default:y((()=>[D])),_:1}),c(d(e),{level:4},{default:y((()=>[w("使用场景")])),_:1}),c(d(a),null,{default:y((()=>[L])),_:1})])),_:1}))}),B=r({__name:"Api",setup(e){const a=[],l=[{componentName:"InputNumber",attrContent:[{rowIndex:1,"属性":"value(v-model)","说明":"当前值","类型":"当前值","默认值":"0"}]}];return(e,n)=>(m(),b(h,{"attr-content-arr":l,"event-content":a}))}});var F=e=>{e.__sourceCode="<template>\n  <InputNumber\n    v-model:value=\"value\"\n    :style=\"{ width: '100px', marginBottom: '20px' }\"\n  />\n  <span style=\"user-select: none\"> 当前值：{{ value }} </span>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { InputNumber } from '@/lib'\n\nconst value = ref<number>(0)\n<\/script>",e.__sourceTitle="基本用法"};const P={style:{"user-select":"none"}},R=r({__name:"DemoOne",setup(e){const a=p(0);return(e,l)=>(m(),i(x,null,[c(d(j),{value:a.value,"onUpdate:value":l[0]||(l[0]=e=>a.value=e),style:{width:"100px",marginBottom:"20px"}},null,8,["value"]),v("span",P," 当前值："+g(a.value),1)],64))}});F(R);const T=r({__name:"Demo",setup(e){const a=I((()=>[R].map(((e,a)=>n(e,"inputNumber",a)))));return(e,l)=>(m(),b(u,{"demo-arr":d(a)},null,8,["demo-arr"]))}}),z=r({__name:"Index",setup(e){p(null);const a=["基本用法"],l=I((()=>s("inputNumber",a)));return(e,a)=>(m(),b(t,{"nav-arr":d(l),title:"InputNumber 数字输入框","component-name":"inputNumber"},{intro:y((()=>[c(A)])),demo:y((()=>[c(T)])),api:y((()=>[c(B)])),_:1},8,["nav-arr"]))}});export{z as default};
