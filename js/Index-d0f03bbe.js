import{D as e,C as n}from"./DemoDisplay-d6102924.js";import"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as l,P as a,T as t}from"./Footer-492e9d3a.js";import{d as r,c as o,i as u,g as s,f as i,m as d,j as m,l as p,r as v,e as c,t as _,F as f,x as g}from"./index-4bdb761c.js";import{_ as h}from"./ApiIntro-e7a82855.js";import{g as x,a as b}from"./helper-f72534c2.js";import{_ as w}from"./Slider-0110e9bf.js";const y=p("p",null,"滑动型输入器，展示当前值和可选范围。",-1),C=p("ul",null,[p("li",null,"Slider: 主要组件")],-1),S=p("ul",null,[p("li",null,"当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。")],-1),j=r({__name:"Intro",setup:e=>(e,n)=>(o(),u(d(t),null,{default:s((()=>[i(d(l),null,{default:s((()=>[m("简介")])),_:1}),i(d(a),null,{default:s((()=>[y])),_:1}),i(d(l),null,{default:s((()=>[m("组件概览")])),_:1}),i(d(a),null,{default:s((()=>[C])),_:1}),i(d(l),null,{default:s((()=>[m("使用场景")])),_:1}),i(d(a),null,{default:s((()=>[S])),_:1})])),_:1}))}),D=r({__name:"Api",setup(e){const n=[{rowIndex:1,"事件名称":"change","说明":"当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入","回调参数":"Function(value)"},{rowIndex:1,"事件名称":"afterChange","说明":"与 mouseup 触发时机一致，把当前值作为参数传入。","回调参数":"Function(value)"}],l=[{componentName:"Slider",attrContent:[{rowIndex:1,"属性":"value(v-model)","说明":"设置当前取值","类型":"number","默认值":"0"},{rowIndex:2,"属性":"disabled","说明":"禁用","类型":"boolean","默认值":"false"}]}];return(e,a)=>(o(),u(h,{"attr-content-arr":l,"event-content":n}))}});var I=e=>{e.__sourceCode='<template>\n  <Slider v-model:value="value" :style="{ width: \'300px\' }" />\n  <div style="margin-top: 50px">\n    {{ value }}\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Slider } from \'@/lib\'\n\nconst value = ref<number>(50)\nconst disabled = ref<boolean>(false)\n<\/script>',e.__sourceTitle="示例一"};const T={style:{"margin-top":"50px"}},A=r({__name:"DemoOne",setup(e){const n=v(50);return v(!1),(e,l)=>(o(),c(f,null,[i(d(w),{value:n.value,"onUpdate:value":l[0]||(l[0]=e=>n.value=e),style:{width:"300px"}},null,8,["value"]),p("div",T,_(n.value),1)],64))}});I(A);var F=e=>{e.__sourceCode='<template>\n  <div>\n    <Slider\n      v-model:value="value"\n      :style="{ width: \'300px\' }"\n      @change="onChange"\n      @afterChange="onAfterChange"\n    />\n    <div style="margin-top: 50px">\n      {{ value }}\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Slider } from \'@/lib\'\n\nconst value = ref<number>(20)\n\nconst onChange = (newValue: number) => {\n  // console.log(newValue)\n}\nconst onAfterChange = (newValue: number) => {\n  console.log(newValue)\n}\n<\/script>',e.__sourceTitle="监听change事件"};const U={style:{"margin-top":"50px"}},V=r({__name:"DemoTwo",setup(e){const n=v(20),l=e=>{},a=e=>{console.log(e)};return(e,t)=>(o(),c("div",null,[i(d(w),{value:n.value,"onUpdate:value":t[0]||(t[0]=e=>n.value=e),style:{width:"300px"},onChange:l,onAfterChange:a},null,8,["value"]),p("div",U,_(n.value),1)]))}});F(V);var N=e=>{e.__sourceCode='<template>\n  <div>\n    <Slider v-model:value="value" disabled :style="{ width: \'300px\' }" />\n    <div style="margin-top: 50px">\n      {{ value }}\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Slider } from \'@/lib\'\n\nconst value = ref<number>(20)\n<\/script>',e.__sourceTitle="禁用"};const O={style:{"margin-top":"50px"}},P=r({__name:"DemoThree",setup(e){const n=v(20);return(e,l)=>(o(),c("div",null,[i(d(w),{value:n.value,"onUpdate:value":l[0]||(l[0]=e=>n.value=e),disabled:"",style:{width:"300px"}},null,8,["value"]),p("div",O,_(n.value),1)]))}});N(P);const k=r({__name:"Demo",setup(n){const l=g((()=>[A,V,P].map(((e,n)=>x(e,"slider",n)))));return(n,a)=>(o(),u(e,{"demo-arr":d(l)},null,8,["demo-arr"]))}}),q=r({__name:"Index",setup(e){v(null);const l=["基本用法","监听change事件","禁用"],a=g((()=>b("slider",l)));return(e,l)=>(o(),u(n,{"nav-arr":d(a),title:"Slider 滑动输入条","component-name":"slider"},{intro:s((()=>[i(j)])),demo:s((()=>[i(k)])),api:s((()=>[i(D)])),_:1},8,["nav-arr"]))}});export{q as default};