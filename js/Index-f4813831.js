import{D as e,C as n}from"./DemoDisplay-f307a3ea.js";import{d as o,c as a,j as l,g as c,f as t,q as r,k as u,n as s,r as p,X as h,I as i}from"./index-85b89606.js";import{_ as d,P as m,T as k}from"./Paragraph-361ff5f9.js";import{_ as v}from"./ApiIntro-a264b77e.js";import{g as b,a as C}from"./helper-e3311bca.js";import{_ as f}from"./CheckboxGroup-de00b432.js";const _=s("p",null,"多选框。",-1),g=s("ul",null,[s("li",null,"Checkbox: 主要组件")],-1),x=s("ul",null,[s("li",null,"在一组可选项中进行多项选择时；"),s("li",null," 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。 ")],-1),O=o({__name:"Intro",setup:e=>(e,n)=>(a(),l(r(k),null,{default:c((()=>[t(r(d),null,{default:c((()=>[u("简介")])),_:1}),t(r(m),null,{default:c((()=>[_])),_:1}),t(r(d),null,{default:c((()=>[u("组件概览")])),_:1}),t(r(m),null,{default:c((()=>[g])),_:1}),t(r(d),null,{default:c((()=>[u("使用场景")])),_:1}),t(r(m),null,{default:c((()=>[x])),_:1})])),_:1}))}),w=o({__name:"Api",setup(e){const n=[{rowIndex:1,"事件名称":"change","说明":"选项状态改变时的回调","回调参数":"(checked:boolean) => void"}],o=[{componentName:"Checkbox",attrContent:[{rowIndex:1,"属性":"checked","说明":"是否勾选","类型":"boolean","默认值":"false"},{rowIndex:2,"属性":"disabled","说明":"是否禁用","类型":"boolean","默认值":"false"}]},{componentName:"Title",attrContent:[{rowIndex:1,"属性":"value","说明":"选中的选项","类型":" CheckBoxOption[]","默认值":"[]"},{rowIndex:2,"属性":"options","说明":"选项数据","类型":" CheckBoxOption[]","默认值":"[]"},{rowIndex:3,"属性":"direction","说明":"分布方式","类型":"'row' | 'column'","默认值":"row"}]}];return(e,c)=>(a(),l(v,{"attr-content-arr":o,"event-content":n}))}});var B=e=>{e.__sourceCode='<template>\n  <Checkbox v-model:checked="checked" @change="onChange">Checkbox</Checkbox>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Checkbox } from \'hut-ui\'\n\nconst checked = ref(true)\nconst onChange = (isChecked: boolean) => {\n  console.log(isChecked)\n}\n<\/script>',e.__sourceTitle=" 基本用法 "};const I=o({__name:"DemoOne",setup(e){const n=p(!0),o=e=>{console.log(e)};return(e,t)=>(a(),l(r(h),{checked:n.value,"onUpdate:checked":t[0]||(t[0]=e=>n.value=e),onChange:o},{default:c((()=>[u("Checkbox")])),_:1},8,["checked"]))}});B(I);var D=e=>{e.__sourceCode="<template>\n  <Checkbox v-model:checked=\"checked\" disabled>Checkbox</Checkbox>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Checkbox } from 'hut-ui'\n\nconst checked = ref(true)\n<\/script>",e.__sourceTitle=" 禁用 "};const T=o({__name:"DemoTwo",setup(e){const n=p(!0);return(e,o)=>(a(),l(r(h),{checked:n.value,"onUpdate:checked":o[0]||(o[0]=e=>n.value=e),disabled:""},{default:c((()=>[u("Checkbox")])),_:1},8,["checked"]))}});D(T);var A=e=>{e.__sourceCode="<template>\n  <CheckboxGroup v-model:value=\"value\" :options=\"options\" @change=\"onChange\" />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { CheckboxGroup, CheckBoxOption } from '@/lib'\n\nconst value = ref<CheckBoxOption[]>([])\nconst options = [\n  { label: 'Apple', value: 'apple', checked: false },\n  { label: 'Pear', value: 'pear', checked: false },\n  { label: 'Orange', value: 'orange', checked: false }\n]\nconst onChange = (newValue: CheckBoxOption[]) => {\n  console.log(newValue)\n}\n<\/script>",e.__sourceTitle="多选组"};const P=o({__name:"DemoThree",setup(e){const n=p([]),o=[{label:"Apple",value:"apple",checked:!1},{label:"Pear",value:"pear",checked:!1},{label:"Orange",value:"orange",checked:!1}],c=e=>{console.log(e)};return(e,t)=>(a(),l(r(f),{value:n.value,"onUpdate:value":t[0]||(t[0]=e=>n.value=e),options:o,onChange:c},null,8,["value"]))}});A(P);var j=e=>{e.__sourceCode="<template>\n  <CheckboxGroup v-model:value=\"value\" :options=\"options\" @change=\"onChange\" />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { CheckboxGroup, CheckBoxOption } from '@/lib'\n\nconst value = ref<CheckBoxOption[]>([])\nconst options = [\n  { label: 'Apple', value: 'apple', checked: false },\n  { label: 'Pear', value: 'pear', checked: false },\n  { label: 'Orange', value: 'orange', checked: false, disabled: true }\n]\nconst onChange = (newValue: CheckBoxOption[]) => {\n  console.log(newValue)\n}\n<\/script>",e.__sourceTitle="多选组禁用"};const G=o({__name:"DemoFour",setup(e){const n=p([]),o=[{label:"Apple",value:"apple",checked:!1},{label:"Pear",value:"pear",checked:!1},{label:"Orange",value:"orange",checked:!1,disabled:!0}],c=e=>{console.log(e)};return(e,t)=>(a(),l(r(f),{value:n.value,"onUpdate:value":t[0]||(t[0]=e=>n.value=e),options:o,onChange:c},null,8,["value"]))}});j(G);var V=e=>{e.__sourceCode="<template>\n  <CheckboxGroup\n    v-model:value=\"value\"\n    :options=\"options\"\n    direction=\"column\"\n    @change=\"onChange\"\n  />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { CheckboxGroup, CheckBoxOption } from '@/lib'\n\nconst value = ref<CheckBoxOption[]>([])\nconst options = [\n  { label: 'Apple', value: 'apple', checked: false },\n  { label: 'Pear', value: 'pear', checked: false },\n  { label: 'Orange', value: 'orange', checked: false }\n]\nconst onChange = (newValue: CheckBoxOption[]) => {\n  console.log(newValue)\n}\n<\/script>",e.__sourceTitle="垂直分布"};const U=o({__name:"DemoFive",setup(e){const n=p([]),o=[{label:"Apple",value:"apple",checked:!1},{label:"Pear",value:"pear",checked:!1},{label:"Orange",value:"orange",checked:!1}],c=e=>{console.log(e)};return(e,t)=>(a(),l(r(f),{value:n.value,"onUpdate:value":t[0]||(t[0]=e=>n.value=e),options:o,direction:"column",onChange:c},null,8,["value"]))}});V(U);const F=o({__name:"Demo",setup(n){const o=i((()=>[I,T,P,G,U].map(((e,n)=>b(e,"checkbox",n)))));return(n,c)=>(a(),l(e,{"demo-arr":r(o)},null,8,["demo-arr"]))}}),N=o({__name:"Index",setup(e){p(null);const o=["基本用法","禁用","多选组","多选组禁用","垂直分布"],u=i((()=>C("checkbox",o)));return(e,o)=>(a(),l(n,{"nav-arr":r(u),title:"Checkbox 多选框","component-name":"checkbox"},{intro:c((()=>[t(O)])),demo:c((()=>[t(F)])),api:c((()=>[t(w)])),_:1},8,["nav-arr"]))}});export{N as default};
