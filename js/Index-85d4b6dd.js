import{D as l,C as s}from"./DemoDisplay-53a9c10a.js";import{d as a,c as o,j as c,g as n,f as t,q as e,k as p,n as h,e as u,F as i,_ as f,p as d,m as g,J as _,r as C}from"./index-6bb449f3.js";import{_ as r,P as m,T as w}from"./Paragraph-138135f0.js";import{_ as R}from"./ApiIntro-fdf4ccdf.js";import{g as y,a as x}from"./helper-7416cab9.js";import{_ as b,a as v}from"./Row-c00c5a42.js";const j=h("p",null,"100 栅格系统。",-1),I=h("ul",null,[h("li",null,"Col：横向布局"),h("li",null,"Row：纵向布局")],-1),k=h("p",null," 我们将整个设计建议区域按照 100 等分的原则进行划分。便于快速对区域进行横向布局 ",-1),J=a({__name:"Intro",setup:l=>(l,s)=>(o(),c(e(w),null,{default:n((()=>[t(e(r),{level:"4"},{default:n((()=>[p("简介")])),_:1}),t(e(m),null,{default:n((()=>[j])),_:1}),t(e(r),{level:"4"},{default:n((()=>[p("组件概述")])),_:1}),t(e(m),null,{default:n((()=>[I])),_:1}),t(e(r),{level:"4"},{default:n((()=>[p("使用场景")])),_:1}),t(e(m),null,{default:n((()=>[k])),_:1})])),_:1}))}),T=a({__name:"Api",setup(l){const s=[],a=[{componentName:"Row",attrContent:[{rowIndex:1,"属性":"gap","说明":"子元素间距","类型":"string","默认值":"8px"},{rowIndex:2,"属性":"justify","说明":"水平方向布局","类型":"'center' | 'start' | 'end' | 'space-between' | 'space-around'","默认值":"start"},{rowIndex:3,"属性":"alignItems","说明":"垂直方向布局","类型":"'center' | 'start' | 'end'","默认值":"center"}]},{componentName:"Col",attrContent:[{rowIndex:1,"属性":"span","说明":"元素宽度","类型":"number","默认值":"100"},{rowIndex:2,"属性":"offset","说明":"元素左边偏移量","类型":"number | 'auto'","默认值":"0"}]}];return(l,n)=>(o(),c(R,{"attr-content-arr":a,"event-content":s}))}});var D=l=>{l.__sourceCode='<template>\n  <Row style="height: 54px">\n    <Col :span="50" class="col">col-50</Col>\n    <Col :span="50" class="col">col-50</Col>\n  </Row>\n  <Row style="height: 54px">\n    <Col :span="25" class="col">col-25</Col>\n    <Col :span="25" class="col">col-25</Col>\n    <Col :span="25" class="col">col-25</Col>\n    <Col :span="25" class="col">col-25</Col>\n  </Row>\n  <Row style="height: 54px">\n    <Col :span="50" class="col">col-50</Col>\n    <Col :span="10" class="col">col-10</Col>\n    <Col :span="20" class="col">col-20</Col>\n    <Col :span="20" class="col">col-20</Col>\n  </Row>\n</template>\n\n<script setup lang="ts">\nimport { Row, Col } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.col {\n  background-color: #0092ff;\n  &:nth-child(odd) {\n    background-color: #40adff;\n  }\n}\n</style>',l.__sourceTitle=" 基本示例 "};const A=a({__name:"DemoOne",setup:l=>(l,s)=>(o(),u(i,null,[t(e(v),{style:{height:"54px"}},{default:n((()=>[t(e(b),{span:50,class:"col"},{default:n((()=>[p("col-50")])),_:1}),t(e(b),{span:50,class:"col"},{default:n((()=>[p("col-50")])),_:1})])),_:1}),t(e(v),{style:{height:"54px"}},{default:n((()=>[t(e(b),{span:25,class:"col"},{default:n((()=>[p("col-25")])),_:1}),t(e(b),{span:25,class:"col"},{default:n((()=>[p("col-25")])),_:1}),t(e(b),{span:25,class:"col"},{default:n((()=>[p("col-25")])),_:1}),t(e(b),{span:25,class:"col"},{default:n((()=>[p("col-25")])),_:1})])),_:1}),t(e(v),{style:{height:"54px"}},{default:n((()=>[t(e(b),{span:50,class:"col"},{default:n((()=>[p("col-50")])),_:1}),t(e(b),{span:10,class:"col"},{default:n((()=>[p("col-10")])),_:1}),t(e(b),{span:20,class:"col"},{default:n((()=>[p("col-20")])),_:1}),t(e(b),{span:20,class:"col"},{default:n((()=>[p("col-20")])),_:1})])),_:1})],64))});D(A);var G=f(A,[["__scopeId","data-v-2006bc30"]]),F=l=>{l.__sourceCode='<template>\n  <p>Align Top</p>\n  <Row align-items="start">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n\n  <p>Align Center</p>\n  <Row align-items="center">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n\n  <p>Align Bottom</p>\n  <Row align-items="end">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n</template>\n\n<script setup lang="ts">\nimport { Row, Col } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.col {\n  background-color: #0092ff;\n  height: 54px;\n  &:nth-child(odd) {\n    background-color: #40adff;\n    height: 100px;\n  }\n}\n</style>',l.__sourceTitle=" 子元素垂直对齐 "};const B=l=>(d("data-v-061fc340"),l=l(),g(),l),N=B((()=>h("p",null,"Align Top",-1))),P=B((()=>h("p",{class:"height-100"},"col-4",-1))),q=B((()=>h("p",{class:"height-50"},"col-4",-1))),O=B((()=>h("p",{class:"height-120"},"col-4",-1))),z=B((()=>h("p",{class:"height-80"},"col-4",-1))),E=B((()=>h("p",null,"Align Center",-1))),H=B((()=>h("p",{class:"height-100"},"col-4",-1))),K=B((()=>h("p",{class:"height-50"},"col-4",-1))),L=B((()=>h("p",{class:"height-120"},"col-4",-1))),M=B((()=>h("p",{class:"height-80"},"col-4",-1))),Q=B((()=>h("p",null,"Align Bottom",-1))),S=B((()=>h("p",{class:"height-100"},"col-4",-1))),U=B((()=>h("p",{class:"height-50"},"col-4",-1))),V=B((()=>h("p",{class:"height-120"},"col-4",-1))),W=B((()=>h("p",{class:"height-80"},"col-4",-1))),X=a({__name:"DemoTwo",setup:l=>(l,s)=>(o(),u(i,null,[N,t(e(v),{"align-items":"start"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[P])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[q])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[O])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[z])),_:1})])),_:1}),E,t(e(v),{"align-items":"center"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[H])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[K])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[L])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[M])),_:1})])),_:1}),Q,t(e(v),{"align-items":"end"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[S])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[U])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[V])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[W])),_:1})])),_:1})],64))});F(X);var Y=f(X,[["__scopeId","data-v-061fc340"]]),Z=l=>{l.__sourceCode='<template>\n  <p>Justify start</p>\n  <Row justify="start">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n\n  <p>Justify center</p>\n  <Row justify="center">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n\n  <p>Justify end</p>\n  <Row justify="end">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n\n  <p>Justify space-between</p>\n  <Row justify="space-between">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n\n  <p>Justify space-around</p>\n  <Row justify="space-around">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n</template>\n\n<script setup lang="ts">\nimport { Row, Col } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.col {\n  background-color: #0092ff;\n  height: 54px;\n  &:nth-child(odd) {\n    background-color: #40adff;\n  }\n}\n</style>',l.__sourceTitle=" 子元素水平分布 "};const $=l=>(d("data-v-dd76610c"),l=l(),g(),l),ll=$((()=>h("p",null,"Justify start",-1))),sl=$((()=>h("p",{class:"height-100"},"col-4",-1))),al=$((()=>h("p",{class:"height-50"},"col-4",-1))),ol=$((()=>h("p",{class:"height-120"},"col-4",-1))),cl=$((()=>h("p",{class:"height-80"},"col-4",-1))),nl=$((()=>h("p",null,"Justify center",-1))),tl=$((()=>h("p",{class:"height-100"},"col-4",-1))),el=$((()=>h("p",{class:"height-50"},"col-4",-1))),pl=$((()=>h("p",{class:"height-120"},"col-4",-1))),hl=$((()=>h("p",{class:"height-80"},"col-4",-1))),ul=$((()=>h("p",null,"Justify end",-1))),il=$((()=>h("p",{class:"height-100"},"col-4",-1))),fl=$((()=>h("p",{class:"height-50"},"col-4",-1))),dl=$((()=>h("p",{class:"height-120"},"col-4",-1))),gl=$((()=>h("p",{class:"height-80"},"col-4",-1))),_l=$((()=>h("p",null,"Justify space-between",-1))),Cl=$((()=>h("p",{class:"height-100"},"col-4",-1))),rl=$((()=>h("p",{class:"height-50"},"col-4",-1))),ml=$((()=>h("p",{class:"height-120"},"col-4",-1))),wl=$((()=>h("p",{class:"height-80"},"col-4",-1))),Rl=$((()=>h("p",null,"Justify space-around",-1))),yl=$((()=>h("p",{class:"height-100"},"col-4",-1))),xl=$((()=>h("p",{class:"height-50"},"col-4",-1))),bl=$((()=>h("p",{class:"height-120"},"col-4",-1))),vl=$((()=>h("p",{class:"height-80"},"col-4",-1))),jl=a({__name:"DemoThree",setup:l=>(l,s)=>(o(),u(i,null,[ll,t(e(v),{justify:"start"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[sl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[al])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[ol])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[cl])),_:1})])),_:1}),nl,t(e(v),{justify:"center"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[tl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[el])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[pl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[hl])),_:1})])),_:1}),ul,t(e(v),{justify:"end"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[il])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[fl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[dl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[gl])),_:1})])),_:1}),_l,t(e(v),{justify:"space-between"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[Cl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[rl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[ml])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[wl])),_:1})])),_:1}),Rl,t(e(v),{justify:"space-around"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[yl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[xl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[bl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[vl])),_:1})])),_:1})],64))});Z(jl);var Il=f(jl,[["__scopeId","data-v-dd76610c"]]),kl=l=>{l.__sourceCode='<template>\n  <p>Gap 50px</p>\n  <Row gap="50px">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n\n  <p>Gap 100</p>\n  <Row gap="100px">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n\n  <p>Gap 20%</p>\n  <Row gap="20%">\n    <Col :span="15" class="col">\n      <p class="height-100">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-50">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-120">col-4</p>\n    </Col>\n    <Col :span="15" class="col">\n      <p class="height-80">col-4</p>\n    </Col>\n  </Row>\n</template>\n\n<script setup lang="ts">\nimport { Row, Col } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.col {\n  background-color: #0092ff;\n  height: 54px;\n  &:nth-child(odd) {\n    background-color: #40adff;\n  }\n}\n</style>',l.__sourceTitle=" 调整子元素间距 "};const Jl=l=>(d("data-v-31c519dc"),l=l(),g(),l),Tl=Jl((()=>h("p",null,"Gap 50px",-1))),Dl=Jl((()=>h("p",{class:"height-100"},"col-4",-1))),Al=Jl((()=>h("p",{class:"height-50"},"col-4",-1))),Gl=Jl((()=>h("p",{class:"height-120"},"col-4",-1))),Fl=Jl((()=>h("p",{class:"height-80"},"col-4",-1))),Bl=Jl((()=>h("p",null,"Gap 100",-1))),Nl=Jl((()=>h("p",{class:"height-100"},"col-4",-1))),Pl=Jl((()=>h("p",{class:"height-50"},"col-4",-1))),ql=Jl((()=>h("p",{class:"height-120"},"col-4",-1))),Ol=Jl((()=>h("p",{class:"height-80"},"col-4",-1))),zl=Jl((()=>h("p",null,"Gap 20%",-1))),El=Jl((()=>h("p",{class:"height-100"},"col-4",-1))),Hl=Jl((()=>h("p",{class:"height-50"},"col-4",-1))),Kl=Jl((()=>h("p",{class:"height-120"},"col-4",-1))),Ll=Jl((()=>h("p",{class:"height-80"},"col-4",-1))),Ml=a({__name:"DemoFour",setup:l=>(l,s)=>(o(),u(i,null,[Tl,t(e(v),{gap:"50px"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[Dl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[Al])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[Gl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[Fl])),_:1})])),_:1}),Bl,t(e(v),{gap:"100px"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[Nl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[Pl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[ql])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[Ol])),_:1})])),_:1}),zl,t(e(v),{gap:"20%"},{default:n((()=>[t(e(b),{span:15,class:"col"},{default:n((()=>[El])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[Hl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[Kl])),_:1}),t(e(b),{span:15,class:"col"},{default:n((()=>[Ll])),_:1})])),_:1})],64))});kl(Ml);var Ql=f(Ml,[["__scopeId","data-v-31c519dc"]]),Sl=l=>{l.__sourceCode='<template>\n  <Row>\n    <Col :span="25" class="col">col-8</Col>\n    <Col :span="25" :offset="20" class="col">col-8</Col>\n  </Row>\n  <Row>\n    <Col :span="25" :offset="10" class="col">col-6 col-offset-6</Col>\n    <Col :span="25" :offset="20" class="col">col-6 col-offset-6</Col>\n  </Row>\n  <Row>\n    <Col :span="50" :offset="30" class="col">col-12 col-offset-6</Col>\n  </Row>\n</template>\n\n<script setup lang="ts">\nimport { Row, Col } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.col {\n  background-color: #0092ff;\n  height: 54px;\n  &:nth-child(odd) {\n    background-color: #40adff;\n  }\n}\n</style>',l.__sourceTitle=" 设置偏移量 "};const Ul=a({__name:"DemoFive",setup:l=>(l,s)=>(o(),u(i,null,[t(e(v),null,{default:n((()=>[t(e(b),{span:25,class:"col"},{default:n((()=>[p("col-8")])),_:1}),t(e(b),{span:25,offset:20,class:"col"},{default:n((()=>[p("col-8")])),_:1})])),_:1}),t(e(v),null,{default:n((()=>[t(e(b),{span:25,offset:10,class:"col"},{default:n((()=>[p("col-6 col-offset-6")])),_:1}),t(e(b),{span:25,offset:20,class:"col"},{default:n((()=>[p("col-6 col-offset-6")])),_:1})])),_:1}),t(e(v),null,{default:n((()=>[t(e(b),{span:50,offset:30,class:"col"},{default:n((()=>[p("col-12 col-offset-6")])),_:1})])),_:1})],64))});Sl(Ul);var Vl=f(Ul,[["__scopeId","data-v-650249b4"]]);const Wl=a({__name:"Demo",setup(s){const a=_((()=>[G,Y,Il,Ql,Vl].map(((l,s)=>y(l,"grid",s)))));return(s,n)=>(o(),c(l,{"demo-arr":e(a)},null,8,["demo-arr"]))}}),Xl=a({__name:"Index",setup(l){C(null);const a=["基本示例","子元素垂直对齐","子元素水平分布","调整子元素间距","设置偏移量"],p=_((()=>x("grid",a)));return(l,a)=>(o(),c(s,{"nav-arr":e(p),title:"Grid 栅格","component-name":"grid"},{intro:n((()=>[t(J)])),demo:n((()=>[t(Wl)])),api:n((()=>[t(T)])),_:1},8,["nav-arr"]))}});export{Xl as default};