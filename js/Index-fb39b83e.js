import{D as e,C as n}from"./DemoDisplay-53a9c10a.js";import{d as t,c as a,j as r,g as i,f as s,q as o,k as l,n as d,R as c,S as p,_ as m,p as v,m as f,J as u,r as h}from"./index-6bb449f3.js";import{_,P as w,T as g}from"./Paragraph-138135f0.js";import{_ as j}from"./ApiIntro-fdf4ccdf.js";import{g as k,a as x}from"./helper-7416cab9.js";const D=d("p",null,"一组可收起展开的列表或动作，用于过滤、排序，或将动作折叠到菜单中。",-1),b=d("ul",null,[d("li",null,"使用导航菜单可以快速在网站的页面间跳转。"),d("li",null,"导航同级之间在逻辑上需为并列且互斥的关系。")],-1),C=d("p",null," 当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。 ",-1),y=d("ul",null,[d("li",null,"用于收罗一组命令操作。"),d("li",null,"Select 用于选择，而 Dropdown 是命令集合。")],-1),I=t({__name:"Intro",setup:e=>(e,n)=>(a(),r(o(g),null,{default:i((()=>[s(o(_),null,{default:i((()=>[l("简介")])),_:1}),s(o(w),null,{default:i((()=>[D])),_:1}),s(o(_),null,{default:i((()=>[l("组件概览")])),_:1}),s(o(w),null,{default:i((()=>[b])),_:1}),s(o(_),null,{default:i((()=>[l("使用场景")])),_:1}),s(o(w),null,{default:i((()=>[C,y])),_:1})])),_:1}))}),T=t({__name:"Api",setup(e){const n=[],t=[{componentName:"Dropdown",attrContent:[{rowIndex:1,"属性":"trigger","说明":"触发方式","类型":"'hover' | 'click' | 'contextmenu'","默认值":"hover"}]}];return(e,i)=>(a(),r(j,{"attr-content-arr":t,"event-content":n}))}});var A=e=>{e.__sourceCode='<template>\n  <Dropdown>\n    <a class="dropdown-link" @click.prevent> Hover me </a>\n    <template #pop>\n      <div class="item">\n        <a href="javascript:;">1st drawer item</a>\n      </div>\n      <div class="item">\n        <a href="javascript:;">2st drawer item</a>\n      </div>\n      <div class="item">\n        <a href="javascript:;">3st drawer item</a>\n      </div>\n      <div class="item">\n        <a href="javascript:;">4st drawer item</a>\n      </div>\n    </template>\n  </Dropdown>\n</template>\n\n<script setup lang="ts">\nimport { Dropdown } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\na {\n  text-decoration: none;\n  color: inherit;\n  &.dropdown-link {\n    color: #1890ff;\n  }\n}\n.item {\n  padding: 4px 14px;\n  &:hover {\n    background-color: #f5f5f5;\n  }\n}\n</style>',e.__sourceTitle=" hover触发 "};const H=e=>(v("data-v-924dceea"),e=e(),f(),e),R=H((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"1st drawer item")],-1))),P=H((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"2st drawer item")],-1))),S=H((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"3st drawer item")],-1))),q=H((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"4st drawer item")],-1))),J=t({__name:"DemoOne",setup:e=>(e,n)=>(a(),r(o(p),null,{pop:i((()=>[R,P,S,q])),default:i((()=>[d("a",{class:"dropdown-link",onClick:n[0]||(n[0]=c((()=>{}),["prevent"]))}," Hover me ")])),_:1}))});A(J);var N=m(J,[["__scopeId","data-v-924dceea"]]),O=e=>{e.__sourceCode='<template>\n  <Dropdown trigger="click">\n    <a class="dropdown-link" @click.prevent> Click me </a>\n    <template #pop>\n      <div class="item">\n        <a href="javascript:;">1st drawer item</a>\n      </div>\n      <div class="item">\n        <a href="javascript:;">2st drawer item</a>\n      </div>\n      <div class="item">\n        <a href="javascript:;">3st drawer item</a>\n      </div>\n    </template>\n  </Dropdown>\n</template>\n\n<script setup lang="ts">\nimport { Dropdown } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\na {\n  text-decoration: none;\n  color: inherit;\n  &.dropdown-link {\n    color: #1890ff;\n  }\n}\n.item {\n  padding: 4px 14px;\n  &:hover {\n    background-color: #f5f5f5;\n  }\n}\n</style>',e.__sourceTitle=" click触发 "};const z=e=>(v("data-v-7b06957b"),e=e(),f(),e),B=z((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"1st drawer item")],-1))),E=z((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"2st drawer item")],-1))),F=z((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"3st drawer item")],-1))),G=t({__name:"DemoTwo",setup:e=>(e,n)=>(a(),r(o(p),{trigger:"click"},{pop:i((()=>[B,E,F])),default:i((()=>[d("a",{class:"dropdown-link",onClick:n[0]||(n[0]=c((()=>{}),["prevent"]))}," Click me ")])),_:1}))});O(G);var K=m(G,[["__scopeId","data-v-7b06957b"]]),L=e=>{e.__sourceCode='<template>\n  <Dropdown trigger="contextmenu">\n    <div\n      :style="{\n        textAlign: \'center\',\n        background: \'#f7f7f7\',\n        height: \'200px\',\n        width: \'100%\',\n        lineHeight: \'200px\',\n        color: \'#777\'\n      }"\n    >\n      Right Click on here\n    </div>\n    <template #pop>\n      <div class="item">\n        <a href="javascript:;">1st drawer item</a>\n      </div>\n      <div class="item">\n        <a href="javascript:;">2st drawer item</a>\n      </div>\n      <div class="item">\n        <a href="javascript:;">3st drawer item</a>\n      </div>\n    </template>\n  </Dropdown>\n</template>\n\n<script setup lang="ts">\nimport { Dropdown } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\na {\n  text-decoration: none;\n  color: inherit;\n}\n.item {\n  padding: 4px 14px;\n  &:hover {\n    background-color: #f5f5f5;\n  }\n}\n</style>',e.__sourceTitle=" 右键触发 "};const M=e=>(v("data-v-1c744277"),e=e(),f(),e),Q=M((()=>d("div",{style:{textAlign:"center",background:"#f7f7f7",height:"200px",width:"100%",lineHeight:"200px",color:"#777"}}," Right Click on here ",-1))),U=M((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"1st drawer item")],-1))),V=M((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"2st drawer item")],-1))),W=M((()=>d("div",{class:"item"},[d("a",{href:"javascript:;"},"3st drawer item")],-1))),X=t({__name:"DemoThree",setup:e=>(e,n)=>(a(),r(o(p),{trigger:"contextmenu"},{pop:i((()=>[U,V,W])),default:i((()=>[Q])),_:1}))});L(X);var Y=m(X,[["__scopeId","data-v-1c744277"]]);const Z=t({__name:"Demo",setup(n){const t=u((()=>[N,K,Y].map(((e,n)=>k(e,"dropdown",n)))));return(n,i)=>(a(),r(e,{"demo-arr":o(t)},null,8,["demo-arr"]))}}),$=t({__name:"Index",setup(e){h(null);const t=["hover触发","click触发","右键触发"],l=u((()=>x("dropdown",t)));return(e,t)=>(a(),r(n,{"nav-arr":o(l),title:"Dropdown 下拉菜单","component-name":"dropdown"},{intro:i((()=>[s(I)])),demo:i((()=>[s(Z)])),api:i((()=>[s(T)])),_:1},8,["nav-arr"]))}});export{$ as default};