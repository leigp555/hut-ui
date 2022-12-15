import{D as t,C as n}from"./DemoDisplay-5c75c5c6.js";import{d as e,r as l,c as o,e as p,f as a,g as s,z as i,G as u,B as r,C as m,T as c,m as d,i as f,q as _,j as T,I as v,p as x,l as g,n as B,F as L,h as y,t as h,L as b}from"./index-d036eac4.js";import{_ as w,P as C,T as k}from"./Paragraph-90b9bde5.js";import{_ as I}from"./ApiIntro.vue_vue_type_style_index_0_lang-cb80a9b7.js";import{g as j,a as D}from"./helper-0b2cce03.js";const R=e({__name:"Tooltip",props:{placement:{default:"topCenter"},color:{default:"#fff"}},setup(t){const n=l(!1),e=()=>{n.value=!0},f=()=>{n.value=!1};return(l,_)=>(o(),p("div",{class:"ui-tooltip-wrap",onMouseover:e,onMouseleave:f},[a(c,{name:"tooltip"},{default:s((()=>[n.value?(o(),p("span",{key:0,class:i(["ui-tooltip-tip",{[t.placement]:!0}]),style:u({backgroundColor:t.color})},[r(l.$slots,"title")],6)):m("",!0)])),_:3}),d("div",null,[r(l.$slots,"default")])],32))}}),P=d("p",null,"简单的文字提示气泡框。",-1),A=d("ul",null,[d("li",null,"Tooltip: 主要组件")],-1),M=d("ul",null,[d("li",null,"鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。"),d("li",null,"可用来代替系统默认的 title 提示，提供一个 按钮/文字/操作 的文案解释。")],-1),$=e({__name:"Intro",setup:t=>(t,n)=>(o(),f(_(k),null,{default:s((()=>[a(_(w),null,{default:s((()=>[T("简介")])),_:1}),a(_(C),null,{default:s((()=>[P])),_:1}),a(_(w),null,{default:s((()=>[T("组件概览")])),_:1}),a(_(C),null,{default:s((()=>[A])),_:1}),a(_(w),null,{default:s((()=>[T("使用场景")])),_:1}),a(_(C),null,{default:s((()=>[M])),_:1})])),_:1}))}),q=e({__name:"Api",setup(t){const n=[],e=[{componentName:"Tooltip",attrContent:[{rowIndex:1,"属性":"placement","说明":"弹出位置","类型":"Position","默认值":"topCenter"},{rowIndex:2,"属性":"color","说明":"背景颜色","类型":"string","默认值":"#ffffff"}]}];return(t,l)=>(o(),f(I,{"attr-content-arr":e,"event-content":n}))}}),z=t=>(x("data-v-5704a10a"),t=t(),g(),t),F={class:"wrap"},G={class:"top"},N=z((()=>d("span",null,"prompt text",-1))),O=z((()=>d("span",null,"prompt text",-1))),E=z((()=>d("span",null,"prompt text",-1))),H={class:"left-right"},J={class:"left"},K=z((()=>d("span",null,"prompt text",-1))),Q=z((()=>d("span",null,"prompt text",-1))),S=z((()=>d("span",null,"prompt text",-1))),U={class:"right"},V=z((()=>d("span",null,"prompt text",-1))),W=z((()=>d("span",null,"prompt text",-1))),X=z((()=>d("span",null,"prompt text",-1))),Y={class:"bottom"},Z=z((()=>d("span",null,"prompt text",-1))),tt=z((()=>d("span",null,"prompt text",-1))),nt=z((()=>d("span",null,"prompt text",-1))),et=e({__name:"DemoOne",setup:t=>(t,n)=>(o(),p("div",F,[d("div",G,[a(_(R),{placement:"topLeft"},{title:s((()=>[N])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1}),a(_(R),{placement:"topCenter"},{title:s((()=>[O])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1}),a(_(R),{placement:"topRight"},{title:s((()=>[E])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1})]),d("div",H,[d("div",J,[a(_(R),{placement:"leftTop"},{title:s((()=>[K])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1}),a(_(R),{placement:"leftCenter"},{title:s((()=>[Q])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1}),a(_(R),{placement:"leftBottom"},{title:s((()=>[S])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1})]),d("div",U,[a(_(R),{placement:"rightTop"},{title:s((()=>[V])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1}),a(_(R),{placement:"rightCenter"},{title:s((()=>[W])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1}),a(_(R),{placement:"rightBottom"},{title:s((()=>[X])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1})])]),d("div",Y,[a(_(R),{placement:"bottomLeft"},{title:s((()=>[Z])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1}),a(_(R),{placement:"bottomCenter"},{title:s((()=>[tt])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1}),a(_(R),{placement:"bottomRight"},{title:s((()=>[nt])),default:s((()=>[a(_(v),null,{default:s((()=>[T("TL")])),_:1})])),_:1})])]))}),lt=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <div class="top">\n      <Tooltip placement="topLeft">\n        <template #title>\n          <span>prompt text</span>\n        </template>\n        <Button>TL</Button>\n      </Tooltip>\n      <Tooltip placement="topCenter">\n        <template #title>\n          <span>prompt text</span>\n        </template>\n        <Button>TL</Button>\n      </Tooltip>\n      <Tooltip placement="topRight">\n        <template #title>\n          <span>prompt text</span>\n        </template>\n        <Button>TL</Button>\n      </Tooltip>\n    </div>\n    <div class="left-right">\n      <div class="left">\n        <Tooltip placement="leftTop">\n          <template #title>\n            <span>prompt text</span>\n          </template>\n          <Button>TL</Button>\n        </Tooltip>\n        <Tooltip placement="leftCenter">\n          <template #title>\n            <span>prompt text</span>\n          </template>\n          <Button>TL</Button>\n        </Tooltip>\n        <Tooltip placement="leftBottom">\n          <template #title>\n            <span>prompt text</span>\n          </template>\n          <Button>TL</Button>\n        </Tooltip>\n      </div>\n      <div class="right">\n        <Tooltip placement="rightTop">\n          <template #title>\n            <span>prompt text</span>\n          </template>\n          <Button>TL</Button>\n        </Tooltip>\n        <Tooltip placement="rightCenter">\n          <template #title>\n            <span>prompt text</span>\n          </template>\n          <Button>TL</Button>\n        </Tooltip>\n        <Tooltip placement="rightBottom">\n          <template #title>\n            <span>prompt text</span>\n          </template>\n          <Button>TL</Button>\n        </Tooltip>\n      </div>\n    </div>\n    <div class="bottom">\n      <Tooltip placement="bottomLeft">\n        <template #title>\n          <span>prompt text</span>\n        </template>\n        <Button>TL</Button>\n      </Tooltip>\n      <Tooltip placement="bottomCenter">\n        <template #title>\n          <span>prompt text</span>\n        </template>\n        <Button>TL</Button>\n      </Tooltip>\n      <Tooltip placement="bottomRight">\n        <template #title>\n          <span>prompt text</span>\n        </template>\n        <Button>TL</Button>\n      </Tooltip>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Tooltip, Button } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  .top,\n  .bottom {\n    display: flex;\n    gap: 40px;\n    justify-content: center;\n  }\n  .left-right {\n    display: flex;\n    justify-content: center;\n    gap: 240px;\n    > .left,\n    .right {\n      display: flex;\n      flex-direction: column;\n      gap: 40px;\n    }\n  }\n}\n</style>',t.__sourceTitle=" 基本用法 "};lt(et);const ot=B(et,[["__scopeId","data-v-5704a10a"]]),pt={class:"wrap"},at=(t=>(x("data-v-d24af9bc"),t=t(),g(),t))((()=>d("span",null,"prompt text",-1))),st=e({__name:"DemoTwo",setup(t){const n=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];return(t,e)=>(o(),p("div",pt,[(o(),p(L,null,y(n,(t=>d("div",{key:t},[a(_(R),{color:t},{title:s((()=>[at])),default:s((()=>[a(_(v),null,{default:s((()=>[T(h(t),1)])),_:2},1024)])),_:2},1032,["color"])]))),64))]))}}),it=t=>{t.__sourceCode="<template>\n  <div class=\"wrap\">\n    <div v-for=\"color in colors\" :key=\"color\">\n      <Tooltip :color=\"color\">\n        <template #title>\n          <span>prompt text</span>\n        </template>\n        <Button>{{ color }}</Button>\n      </Tooltip>\n    </div>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { Tooltip, Button } from 'hut-ui'\n\nconst colors = [\n  'pink',\n  'red',\n  'yellow',\n  'orange',\n  'cyan',\n  'green',\n  'blue',\n  'purple',\n  'geekblue',\n  'magenta',\n  'volcano',\n  'gold',\n  'lime'\n]\n<\/script>\n\n<style lang=\"scss\" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>",t.__sourceTitle=" 自定义颜色 "};it(st);const ut=B(st,[["__scopeId","data-v-d24af9bc"]]),rt={class:"wrap"},mt=(t=>(x("data-v-1309aa7e"),t=t(),g(),t))((()=>d("span",null,"prompt text",-1))),ct=e({__name:"DemoThree",setup(t){const n=["#f50","#2db7f5","#87d068","#108ee9"];return(t,e)=>(o(),p("div",rt,[(o(),p(L,null,y(n,(t=>d("div",{key:t},[a(_(R),{color:t},{title:s((()=>[mt])),default:s((()=>[a(_(v),null,{default:s((()=>[T(h(t),1)])),_:2},1024)])),_:2},1032,["color"])]))),64))]))}}),dt=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <div v-for="color in customColors" :key="color">\n      <Tooltip :color="color">\n        <template #title>\n          <span>prompt text</span>\n        </template>\n        <Button>{{ color }}</Button>\n      </Tooltip>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Tooltip, Button } from \'hut-ui\'\n\nconst customColors = [\'#f50\', \'#2db7f5\', \'#87d068\', \'#108ee9\']\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>',t.__sourceTitle=" 自定背景颜色 "};dt(ct);const ft=B(ct,[["__scopeId","data-v-1309aa7e"]]),_t=e({__name:"Demo",setup(n){const e=b((()=>[ot,ut,ft].map(((t,n)=>j(t,"tooltip",n)))));return(n,l)=>(o(),f(t,{"demo-arr":_(e)},null,8,["demo-arr"]))}}),Tt=e({__name:"Index",setup(t){l(null);const e=["基本用法","自定义颜色","自定背景颜色"],p=b((()=>D("tooltip",e)));return(t,e)=>(o(),f(n,{"nav-arr":_(p),title:"Tooltip 文字提示","component-name":"tooltip"},{intro:s((()=>[a($)])),demo:s((()=>[a(_t)])),api:s((()=>[a(q)])),_:1},8,["nav-arr"]))}});export{Tt as default};