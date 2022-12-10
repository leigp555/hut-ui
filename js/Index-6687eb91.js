import{D as n,C as e}from"./DemoDisplay-d6102924.js";import{a as t}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as o,P as a,T as r}from"./Footer-492e9d3a.js";import{d as l,c as s,i,g as f,f as c,m as p,j as u,l as m,r as d,e as _,x}from"./index-4bdb761c.js";import{_ as g}from"./ApiIntro-e7a82855.js";import{g as y,a as v}from"./helper-f72534c2.js";import{_ as b}from"./Affix-eed51b68.js";const A=m("p",null,"将页面元素钉在可视范围。",-1),h=m("ul",null,[m("li",null,"Affix: 主要组件")],-1),B=m("ul",null,[m("li",null," 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。 "),m("li",null,"页面可视范围过小时，慎用此功能以免遮挡页面内容。")],-1),C=l({__name:"Intro",setup:n=>(n,e)=>(s(),i(p(r),null,{default:f((()=>[c(p(o),null,{default:f((()=>[u("简介")])),_:1}),c(p(a),null,{default:f((()=>[A])),_:1}),c(p(o),null,{default:f((()=>[u("组件概览")])),_:1}),c(p(a),null,{default:f((()=>[h])),_:1}),c(p(o),null,{default:f((()=>[u("使用场景")])),_:1}),c(p(a),null,{default:f((()=>[B])),_:1})])),_:1}))}),T=l({__name:"Api",setup(n){const e=[{rowIndex:1,"事件名称":"change","说明":"固定状态改变时触发的回调函数","回调参数":"(affixed?: boolean) => void"}],t=[{componentName:"Affix",attrContent:[{rowIndex:1,"属性":"offsetTop","说明":"距离窗口顶部达到指定偏移量后触发","类型":"number","默认值":"50"},{rowIndex:2,"属性":"scrollContainer","说明":"设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数","类型":"() => HTMLElement","默认值":"() => window"}]}];return(n,o)=>(s(),i(g,{"attr-content-arr":t,"event-content":e}))}});var w=n=>{n.__sourceCode='<template>\n  <Affix :offsetTop="0" :scroll-container="scrollContainer">\n    <Button>距离顶部0px固定</Button>\n  </Affix>\n</template>\n\n<script setup lang="ts">\nimport { Affix, Button } from \'ant\'\n\nconst scrollContainer = () => document.getElementById(\'display-container-wrap\')\n<\/script>',n.__sourceTitle=" 基本用法 "};const j=l({__name:"DemoOne",setup(n){const e=()=>document.getElementById("display-container-wrap");return(n,o)=>(s(),i(p(b),{offsetTop:0,"scroll-container":e},{default:f((()=>[c(p(t),null,{default:f((()=>[u("距离顶部0px固定")])),_:1})])),_:1}))}});w(j);var I=n=>{n.__sourceCode='<template>\n  <Affix :offsetTop="100" :scroll-container="scrollContainer" @change="onChange">\n    <Button>距离顶部100px固定</Button>\n  </Affix>\n</template>\n\n<script setup lang="ts">\nimport { Affix, Button } from \'ant\'\n\nconst scrollContainer = () => document.getElementById(\'display-container-wrap\')\nconst onChange = (fixed: boolean) => {\n  console.log(fixed)\n}\n<\/script>',n.__sourceTitle=" 状态改变的回调 "};const D=l({__name:"DemoTwo",setup(n){const e=()=>document.getElementById("display-container-wrap"),o=n=>{console.log(n)};return(n,a)=>(s(),i(p(b),{offsetTop:100,"scroll-container":e,onChange:o},{default:f((()=>[c(p(t),null,{default:f((()=>[u("距离顶部100px固定")])),_:1})])),_:1}))}});I(D);var E=n=>{n.__sourceCode='<template>\n  <div\n    id="components-affix-demo-target"\n    ref="containerRef"\n    class="scrollable-container"\n  >\n    <div class="background">\n      <Affix :scroll-container="() => containerRef" :offset-top="0">\n        <Button type="primary">Fixed at the top of container</Button>\n      </Affix>\n    </div>\n  </div>\n</template>\n<script lang="ts" setup>\nimport { ref } from \'vue\'\nimport { Affix, Button } from \'@/lib\'\n\nconst containerRef = ref<HTMLElement>()\n<\/script>\n<style>\n#components-affix-demo-target.scrollable-container {\n  height: 100px;\n  overflow-y: scroll;\n}\n#components-affix-demo-target .background {\n  padding-top: 60px;\n  height: 300px;\n  background-image: url(\'https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg\');\n}\n</style>',n.__sourceTitle="设置滚动容器"};const k={class:"background"},R=l({__name:"DemoThree",setup(n){const e=d();return(n,o)=>(s(),_("div",{id:"components-affix-demo-target",ref_key:"containerRef",ref:e,class:"scrollable-container"},[m("div",k,[c(p(b),{"scroll-container":()=>e.value,"offset-top":0},{default:f((()=>[c(p(t),{type:"primary"},{default:f((()=>[u("Fixed at the top of container")])),_:1})])),_:1},8,["scroll-container"])])],512))}});E(R);const F=l({__name:"Demo",setup(e){const t=x((()=>[j,D,R].map(((n,e)=>y(n,"affix",e)))));return(e,o)=>(s(),i(n,{"demo-arr":p(t)},null,8,["demo-arr"]))}}),M=l({__name:"Index",setup(n){const t=["基本用法","状态改变的回调","设置滚动容器"],o=x((()=>v("affix",t)));return(n,t)=>(s(),i(e,{"nav-arr":p(o),title:"Affix 固钉","component-name":"affix"},{intro:f((()=>[c(C)])),demo:f((()=>[c(F)])),api:f((()=>[c(T)])),_:1},8,["nav-arr"]))}});export{M as default};