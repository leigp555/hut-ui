import{_ as n,P as t,T as e,g as a,D as l,C as s,a as r}from"./DemoDisplay-d14d3ff9.js";import{_ as o}from"./Paragraph.vue_vue_type_style_index_0_lang-1a82c502.js";import{d as i,o as c,c as p,b as u,t as d,v as m,n as _,z as f,y,l as v,g as b,w as g,e as k,h as B,r as x,_ as C,p as S,j as w}from"./index-54c84176.js";/* empty css                                                */import{_ as I}from"./ApiIntro-50aaf7d6.js";import{_ as z}from"./Slider-fb028034.js";const h={class:"ui-card-title"},D={class:"card-title"},P={class:"card-action"},j={class:"ui-card-content"},T=i({__name:"Card",props:{border:{type:Boolean,default:!0},title:null,shadow:{type:Boolean,default:!1}},setup:n=>(t,e)=>(c(),p("div",{class:_(["ui-card-wrap",{bordered:n.border,shadow:n.shadow}])},[u("div",h,[u("div",D,d(n.title),1),u("div",P,[m(t.$slots,"extra")])]),u("div",j,[m(t.$slots,"default")])],2))}),$=i({__name:"Space",props:{direction:{default:"row"},size:{default:"5px"},alignItems:{default:"start"},justifyContent:{default:"start"}},setup(n){const t=n,e=f((()=>"string"==typeof t.size?t.size:`${t.size}px`));return(t,a)=>(c(),p("div",{class:"ui-space-wrap",style:y({flexDirection:n.direction,gap:v(e),alignItems:n.alignItems,justifyContent:n.justifyContent})},[m(t.$slots,"default")],4))}}),A=u("p",null,"设置组件之间的间距。",-1),L=u("ul",null,[u("li",null,"Space：主要组件")],-1),F=u("p",null,"避免组件紧贴在一起，拉开统一的空间。",-1),M=u("ul",null,[u("li",null,"适合行内元素的水平间距。"),u("li",null,"可以设置各种水平对齐方式。")],-1),N=i({__name:"Intro",setup:a=>(a,l)=>(c(),b(v(e),null,{default:g((()=>[k(v(n),null,{default:g((()=>[B("简介")])),_:1}),k(v(t),null,{default:g((()=>[A])),_:1}),k(v(n),null,{default:g((()=>[B("组件概述")])),_:1}),k(v(t),null,{default:g((()=>[L])),_:1}),k(v(n),null,{default:g((()=>[B("使用场景")])),_:1}),k(v(t),null,{default:g((()=>[F,M])),_:1})])),_:1}))}),O=i({__name:"Api",setup(n){const t=[],e=[{componentName:"Space",attrContent:[{rowIndex:1,"属性":"direction","说明":"分布方式","类型":"'row' | 'column'","默认值":"row"},{rowIndex:2,"属性":"size","说明":"间距大小","类型":"string|number","默认值":"false"},{rowIndex:3,"属性":"alignItems","说明":"垂直分布","类型":"'start' | 'center' | 'end' | 'baseline'","默认值":"start"},{rowIndex:4,"属性":"justifyContent","说明":"水平分布","类型":"'start' | 'center' | 'end'","默认值":"start"}]}];return(n,a)=>(c(),b(I,{"attr-content-arr":e,"event-content":t}))}});var U=n=>{n.__sourceCode='<template>\n  <Space direction="row" :size="50">\n    <Button>button</Button>\n    <Button>button</Button>\n    <Button>button</Button>\n  </Space>\n</template>\n\n<script setup lang="ts">\nimport { Space, Button } from \'ant\'\n<\/script>',n.__sourceTitle=" 基本用法 "};const q=i({__name:"DemoOne",setup:n=>(n,t)=>(c(),b(v($),{direction:"row",size:50},{default:g((()=>[k(v(o),null,{default:g((()=>[B("button")])),_:1}),k(v(o),null,{default:g((()=>[B("button")])),_:1}),k(v(o),null,{default:g((()=>[B("button")])),_:1})])),_:1}))});U(q);var E=n=>{n.__sourceCode='<template>\n  <div>\n    <Slider v-model:value="size" />\n    <br />\n    <br />\n    <Space :size="size">\n      <Button type="primary">Primary</Button>\n      <Button>Default</Button>\n      <Button type="dashed">Dashed</Button>\n      <Button type="link">Link</Button>\n    </Space>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Space, Button, Slider } from \'@/lib\'\n\nconst size = ref<number>(8)\n<\/script>',n.__sourceTitle="自定义间距"};const G=u("br",null,null,-1),H=u("br",null,null,-1),J=i({__name:"DemoTwo",setup(n){const t=x(8);return(n,e)=>(c(),p("div",null,[k(v(z),{value:t.value,"onUpdate:value":e[0]||(e[0]=n=>t.value=n)},null,8,["value"]),G,H,k(v($),{size:t.value},{default:g((()=>[k(v(o),{type:"primary"},{default:g((()=>[B("Primary")])),_:1}),k(v(o),null,{default:g((()=>[B("Default")])),_:1}),k(v(o),{type:"dashed"},{default:g((()=>[B("Dashed")])),_:1}),k(v(o),{type:"link"},{default:g((()=>[B("Link")])),_:1})])),_:1},8,["size"])]))}});E(J);var K=n=>{n.__sourceCode='<template>\n  <Space direction="column" :size="20">\n    <Card title="Card" style="width: 300px">\n      <p>Card content</p>\n      <p>Card content</p>\n    </Card>\n    <Card title="Card" style="width: 300px">\n      <p>Card content</p>\n      <p>Card content</p>\n    </Card>\n  </Space>\n</template>\n\n<script setup lang="ts">\nimport { Space, Card } from \'ant\'\n<\/script>',n.__sourceTitle=" 垂直间距 "};const Q=u("p",null,"Card content",-1),R=u("p",null,"Card content",-1),V=u("p",null,"Card content",-1),W=u("p",null,"Card content",-1),X=i({__name:"DemoThree",setup:n=>(n,t)=>(c(),b(v($),{direction:"column",size:20},{default:g((()=>[k(v(T),{title:"Card",style:{width:"300px"}},{default:g((()=>[Q,R])),_:1}),k(v(T),{title:"Card",style:{width:"300px"}},{default:g((()=>[V,W])),_:1})])),_:1}))});K(X);var Y=n=>{n.__sourceCode='<template>\n  <div class="space-align-container">\n    <div class="space-align-block">\n      <Space alignItems="center">\n        center\n        <Button>Primary</Button>\n        <span class="mock-block">Block</span>\n      </Space>\n    </div>\n    <div class="space-align-block">\n      <Space alignItems="start">\n        start\n        <Button type="primary">Primary</Button>\n        <span class="mock-block">Block</span>\n      </Space>\n    </div>\n    <div class="space-align-block">\n      <Space alignItems="end">\n        end\n        <Button type="primary">Primary</Button>\n        <span class="mock-block">Block</span>\n      </Space>\n    </div>\n    <div class="space-align-block">\n      <Space alignItems="baseline">\n        baseline\n        <Button type="primary">Primary</Button>\n        <span class="mock-block">Block</span>\n      </Space>\n    </div>\n  </div>\n</template>\n<script lang="ts" setup>\nimport { Space, Button } from \'ant\'\n<\/script>\n\n<style scoped>\n.space-align-container {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.space-align-block {\n  margin: 8px 4px;\n  border: 1px solid #40a9ff;\n  padding: 4px;\n  flex: none;\n}\n.space-align-block .mock-block {\n  display: inline-block;\n  padding: 32px 8px 16px;\n  background: rgba(150, 150, 150, 0.2);\n}\n</style>',n.__sourceTitle=" 设置对齐模式 "};const Z=n=>(S("data-v-43189882"),n=n(),w(),n),nn={class:"space-align-container"},tn={class:"space-align-block"},en=Z((()=>u("span",{class:"mock-block"},"Block",-1))),an={class:"space-align-block"},ln=Z((()=>u("span",{class:"mock-block"},"Block",-1))),sn={class:"space-align-block"},rn=Z((()=>u("span",{class:"mock-block"},"Block",-1))),on={class:"space-align-block"},cn=Z((()=>u("span",{class:"mock-block"},"Block",-1))),pn=i({__name:"DemoFour",setup:n=>(n,t)=>(c(),p("div",nn,[u("div",tn,[k(v($),{alignItems:"center"},{default:g((()=>[B(" center "),k(v(o),null,{default:g((()=>[B("Primary")])),_:1}),en])),_:1})]),u("div",an,[k(v($),{alignItems:"start"},{default:g((()=>[B(" start "),k(v(o),{type:"primary"},{default:g((()=>[B("Primary")])),_:1}),ln])),_:1})]),u("div",sn,[k(v($),{alignItems:"end"},{default:g((()=>[B(" end "),k(v(o),{type:"primary"},{default:g((()=>[B("Primary")])),_:1}),rn])),_:1})]),u("div",on,[k(v($),{alignItems:"baseline"},{default:g((()=>[B(" baseline "),k(v(o),{type:"primary"},{default:g((()=>[B("Primary")])),_:1}),cn])),_:1})])]))});Y(pn);var un=C(pn,[["__scopeId","data-v-43189882"]]);const dn=i({__name:"Demo",setup(n){const t=f((()=>[q,J,X,un].map(((n,t)=>a(n,"space",t)))));return(n,e)=>(c(),b(l,{"demo-arr":v(t)},null,8,["demo-arr"]))}}),mn=i({__name:"Index",setup(n){x(null);const t=["基本用法","自定义间距","垂直间距","设置对齐模式"],e=f((()=>r("space",t)));return(n,t)=>(c(),b(s,{"nav-arr":v(e),title:"Space 间距","component-name":"space"},{intro:g((()=>[k(N)])),demo:g((()=>[k(dn)])),api:g((()=>[k(O)])),_:1},8,["nav-arr"]))}});export{mn as default};
