import{D as e,C as t}from"./DemoDisplay-d6102924.js";import{_ as n,a}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as o,P as l,T as i}from"./Footer-492e9d3a.js";import{d as s,c as r,e as u,z as d,y as p,s as m,L as c,F as v,f as h,i as g,g as _,m as f,j as k,l as w,r as x,_ as S,x as b}from"./index-4bdb761c.js";import{_ as I,a as y,d as B}from"./ApiIntro-e7a82855.js";import{g as C,a as q}from"./helper-f72534c2.js";const $={key:0},A=s({__name:"SkeletonButton",props:{active:{type:Boolean,default:!1},loading:{type:Boolean,default:!0},width:{default:64},height:{default:32}},setup:e=>(t,n)=>(r(),u(v,null,[e.loading?p("",!0):(r(),u("div",$,[d(t.$slots,"default")])),e.loading?(r(),u("div",{key:1,class:m(["ui-skeletonButton-wrap",{"ui-skeletonButton-active":e.active}]),style:c({width:`${e.width}px`,height:`${e.height}px`,lineHeight:`${e.height}px`})},null,6)):p("",!0)],64))}),T={key:0},D=s({__name:"SkeletonImg",props:{active:{type:Boolean,default:!1},loading:{type:Boolean,default:!0},width:{default:96},height:{default:96}},setup:e=>(t,a)=>(r(),u(v,null,[e.loading?p("",!0):(r(),u("div",T,[d(t.$slots,"default")])),e.loading?(r(),u("div",{key:1,class:m(["ui-skeletonImg-wrap",{"ui-skeletonImg-active":e.active}]),style:c({width:`${e.width}px`,height:`${e.height}px`,lineHeight:`${e.height}px`})},[h(n,{name:"icon-img",width:e.width/2+"px",height:e.height/2+"px",fill:"#bfbfbf"},null,8,["width","height"])],6)):p("",!0)],64))}),j={key:0},L=s({__name:"SkeletonInput",props:{active:{type:Boolean,default:!1},loading:{type:Boolean,default:!0},width:{default:200},height:{default:32}},setup:e=>(t,n)=>(r(),u(v,null,[e.loading?p("",!0):(r(),u("div",j,[d(t.$slots,"default")])),e.loading?(r(),u("div",{key:1,class:m(["ui-skeletonInput-wrap",{"ui-skeletonInput-active":e.active}]),style:c({width:`${e.width}px`,height:`${e.height}px`,lineHeight:`${e.height}px`})},null,6)):p("",!0)],64))}),N=w("p",null,"在需要等待加载内容的位置提供一个占位图形组合。",-1),F=w("ul",null,[w("li",null,"Skeleton"),w("li",null,"SkeletonAvatar"),w("li",null,"SkeletonButton"),w("li",null,"SkeletonImg"),w("li",null,"SkeletonInput")],-1),H=w("ul",null,[w("li",null,"网络较慢，需要长时间等待加载处理的情况下。"),w("li",null,"图文信息内容较多的列表/卡片中。"),w("li",null,"只在第一次加载数据的时候使用。"),w("li",null," 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。 ")],-1),z=s({__name:"Intro",setup:e=>(e,t)=>(r(),g(f(i),null,{default:_((()=>[h(f(o),null,{default:_((()=>[k("简介")])),_:1}),h(f(l),null,{default:_((()=>[N])),_:1}),h(f(o),null,{default:_((()=>[k("组件概览")])),_:1}),h(f(l),null,{default:_((()=>[F])),_:1}),h(f(o),null,{default:_((()=>[k("使用场景")])),_:1}),h(f(l),null,{default:_((()=>[H])),_:1})])),_:1}))}),O=s({__name:"Api",setup(e){const t=[],n=[{componentName:"Skeleton",attrContent:[{rowIndex:1,"属性":"paragraph","说明":"显示段落占位图","类型":"{ rows: number }","默认值":"{ rows: 3 }"},{rowIndex:2,"属性":"avatar","说明":"是否显示头像占位图","类型":"boolean","默认值":"false"},{rowIndex:3,"属性":"active","说明":"是否展示动画效果","类型":"boolean","默认值":"false"},{rowIndex:4,"属性":"loading","说明":"为 true 时，显示占位图。反之则直接展示子组件","类型":"boolean","默认值":"true"},{rowIndex:5,"属性":"titleAppear","说明":"是否显示title占位图","类型":"boolean","默认值":"true"}]},{componentName:"SkeletonAvatar",attrContent:[{rowIndex:1,"属性":"size","说明":"设置头像占位图的大小","类型":"number","默认值":"32"},{rowIndex:2,"属性":"active","说明":"是否展示动画效果","类型":"boolean","默认值":"false"},{rowIndex:3,"属性":"loading","说明":"为 true 时，显示占位图。反之则直接展示子组件","类型":"boolean","默认值":"true"}]},{componentName:"SkeletonButton",attrContent:[{rowIndex:1,"属性":"width","说明":"设置宽度","类型":"number","默认值":"64"},{rowIndex:2,"属性":"height","说明":"设置高度","类型":"number","默认值":"32"},{rowIndex:3,"属性":"active","说明":"是否展示动画效果","类型":"boolean","默认值":"false"},{rowIndex:4,"属性":"loading","说明":"为 true 时，显示占位图。反之则直接展示子组件","类型":"boolean","默认值":"true"}]},{componentName:"SkeletonImg",attrContent:[{rowIndex:1,"属性":"width","说明":"设置宽度","类型":"number","默认值":"96"},{rowIndex:2,"属性":"height","说明":"设置高度","类型":"number","默认值":"96"},{rowIndex:3,"属性":"active","说明":"是否展示动画效果","类型":"boolean","默认值":"false"},{rowIndex:4,"属性":"loading","说明":"为 true 时，显示占位图。反之则直接展示子组件","类型":"boolean","默认值":"true"}]},{componentName:"SkeletonInput",attrContent:[{rowIndex:1,"属性":"width","说明":"设置宽度","类型":"number","默认值":"200"},{rowIndex:2,"属性":"height","说明":"设置高度","类型":"number","默认值":"32"},{rowIndex:3,"属性":"active","说明":"是否展示动画效果","类型":"boolean","默认值":"false"},{rowIndex:4,"属性":"loading","说明":"为 true 时，显示占位图。反之则直接展示子组件","类型":"boolean","默认值":"true"}]}];return(e,a)=>(r(),g(I,{"attr-content-arr":n,"event-content":t}))}});var P=e=>{e.__sourceCode="<template>\n  <Skeleton />\n</template>\n\n<script setup lang=\"ts\">\nimport { Skeleton } from 'ant'\n<\/script>",e.__sourceTitle=" 基本用法 "};const U=s({__name:"DemoOne",setup:e=>(e,t)=>(r(),g(f(y)))});P(U);var E=e=>{e.__sourceCode='<template>\n  <Skeleton :paragraph="{ rows: 8 }" />\n</template>\n\n<script setup lang="ts">\nimport { Skeleton } from \'ant\'\n<\/script>',e.__sourceTitle=" 设置行数 "};const G=s({__name:"DemoTwo",setup:e=>(e,t)=>(r(),g(f(y),{paragraph:{rows:8}}))});E(G);var J=e=>{e.__sourceCode="<template>\n  <Skeleton active />\n</template>\n\n<script setup lang=\"ts\">\nimport { Skeleton } from 'ant'\n<\/script>",e.__sourceTitle=" 动画效果 "};const K=s({__name:"DemoThree",setup:e=>(e,t)=>(r(),g(f(y),{active:""}))});J(K);var M=e=>{e.__sourceCode='<template>\n  <Skeleton avatar active :paragraph="{ rows: 4 }" />\n</template>\n\n<script setup lang="ts">\nimport { Skeleton } from \'ant\'\n<\/script>',e.__sourceTitle=" 更复杂的组合 "};const Q=s({__name:"DemoFour",setup:e=>(e,t)=>(r(),g(f(y),{avatar:"",active:"",paragraph:{rows:4}}))});M(Q);var R=e=>{e.__sourceCode='<template>\n  <Skeleton :loading="loading">\n    <div>\n      <h4>Lorem ipsum dolor sit amet, consectetur</h4>\n      <p style="line-height: 2em">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis\n        commodi delectus, deleniti deserunt eius eveniet expedita iusto minima, natus\n        nihil nostrum optio quasi quia quidem repudiandae sint voluptate voluptatibus!\n      </p>\n      <p style="line-height: 2em">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad blanditiis,\n        consectetur debitis dolore et excepturi id laudantium libero maiores nostrum\n        officia omnis, praesentium quisquam ratione rem repellat soluta voluptatibus.\n      </p>\n    </div>\n  </Skeleton>\n  <div style="margin-top: 20px">\n    <Button :disabled="loading" @click="showSkeleton">Show Skeleton</Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Skeleton, Button } from \'@/lib\'\n\nconst loading = ref<boolean>(false)\n\nconst showSkeleton = () => {\n  loading.value = true\n  setTimeout(() => {\n    loading.value = false\n  }, 3000)\n}\n<\/script>',e.__sourceTitle="占位"};const V=w("div",null,[w("h4",null,"Lorem ipsum dolor sit amet, consectetur"),w("p",{style:{"line-height":"2em"}}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis commodi delectus, deleniti deserunt eius eveniet expedita iusto minima, natus nihil nostrum optio quasi quia quidem repudiandae sint voluptate voluptatibus! "),w("p",{style:{"line-height":"2em"}}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad blanditiis, consectetur debitis dolore et excepturi id laudantium libero maiores nostrum officia omnis, praesentium quisquam ratione rem repellat soluta voluptatibus. ")],-1),W={style:{"margin-top":"20px"}},X=s({__name:"DemoFive",setup(e){const t=x(!1),n=()=>{t.value=!0,setTimeout((()=>{t.value=!1}),3e3)};return(e,o)=>(r(),u(v,null,[h(f(y),{loading:t.value},{default:_((()=>[V])),_:1},8,["loading"]),w("div",W,[h(f(a),{disabled:t.value,onClick:n},{default:_((()=>[k("Show Skeleton")])),_:1},8,["disabled"])])],64))}});R(X);var Y=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Skeleton active />\n    <SkeletonAvatar active />\n    <SkeletonButton active />\n    <SkeletonInput active />\n    <SkeletonImg active />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport {\n  SkeletonAvatar,\n  SkeletonButton,\n  SkeletonImg,\n  SkeletonInput,\n  Skeleton\n} from \'ant\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n</style>',e.__sourceTitle=" 其它类型的骨架图 "};const Z={class:"wrap"},ee=s({__name:"DemoSix",setup:e=>(e,t)=>(r(),u("div",Z,[h(f(y),{active:""}),h(f(B),{active:""}),h(f(A),{active:""}),h(f(L),{active:""}),h(f(D),{active:""})]))});Y(ee);var te=S(ee,[["__scopeId","data-v-e43b0ea6"]]);const ne=s({__name:"Demo",setup(t){const n=b((()=>[U,G,K,Q,X,te].map(((e,t)=>C(e,"skeleton",t)))));return(t,a)=>(r(),g(e,{"demo-arr":f(n)},null,8,["demo-arr"]))}}),ae=s({__name:"Index",setup(e){x(null);const n=["基本用法","设置行数","动画效果","更复杂的组合","占位","其它类型的骨架图"],a=b((()=>q("skeleton",n)));return(e,n)=>(r(),g(t,{"nav-arr":f(a),title:"Skeleton 骨架屏","component-name":"skeleton"},{intro:_((()=>[h(z)])),demo:_((()=>[h(ne)])),api:_((()=>[h(O)])),_:1},8,["nav-arr"]))}});export{ae as default};