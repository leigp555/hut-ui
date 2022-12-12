import{D as e,C as n}from"./DemoDisplay-53a9c10a.js";import{d as t,c as o,j as l,g as a,f as s,q as u,k as c,n as r,r as i,V as p,t as m,e as v,F as d,i as g,s as h,I as x,_ as f,J as _}from"./index-6bb449f3.js";import{_ as C,P as S,T as y}from"./Paragraph-138135f0.js";import{_ as b}from"./ApiIntro-fdf4ccdf.js";import{g as w,a as A}from"./helper-7416cab9.js";const I=r("p",null,"输入框自动完成功能。",-1),T=r("ul",null,[r("li",null,"AutoComplete: 主要组件")],-1),D=r("ul",null,[r("li",null,"需要一个输入框而不是选择器。"),r("li",null,"需要输入建议/辅助提示。")],-1),V=t({__name:"Intro",setup:e=>(e,n)=>(o(),l(u(y),null,{default:a((()=>[s(u(C),null,{default:a((()=>[c("简介")])),_:1}),s(u(S),null,{default:a((()=>[I])),_:1}),s(u(C),null,{default:a((()=>[c("组件概览")])),_:1}),s(u(S),null,{default:a((()=>[T])),_:1}),s(u(C),null,{default:a((()=>[c("使用场景")])),_:1}),s(u(S),null,{default:a((()=>[D])),_:1})])),_:1}))}),$=t({__name:"Api",setup(e){const n=[{rowIndex:1,"事件名称":"search","说明":"搜索补全项的时候调用","回调参数":"(value)=>({value:any}[])"},{rowIndex:1,"事件名称":"select","说明":"被选中时调用，参数为选中项的 value 值","回调参数":"(value)=>void"}],t=[{componentName:"AutoComplete",attrContent:[{rowIndex:1,"属性":"value","说明":"输入框文字","类型":"string","默认值":"null"},{rowIndex:2,"属性":"options","说明":"弹出框内容","类型":"{value:any}[]","默认值":"[]"},{rowIndex:3,"属性":"placeholder","说明":"输入框提示内容","类型":"string","默认值":"null"},{rowIndex:4,"属性":"custom","说明":"自定义弹出框","类型":"boolean","默认值":"false"}]}];return(e,a)=>(o(),l(b,{"attr-content-arr":t,"event-content":n}))}});var k=e=>{e.__sourceCode='<template>\n  <AutoComplete\n    v-model:value="value"\n    :options="options"\n    style="width: 200px"\n    placeholder="input here"\n    @select="onSelect"\n    @search="onSearch"\n  />\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { AutoComplete } from \'@/lib\'\n\ninterface MockVal {\n  value: string\n}\nconst value = ref(\'\')\nconst options = ref<MockVal[]>([])\nconst onSearch = (searchText: string) => {\n  options.value = !searchText\n    ? []\n    : [\n        { value: `${searchText}@qq.com` },\n        { value: `${searchText}@google.com` },\n        { value: `${searchText}@138.com` }\n      ]\n}\nconst onSelect = (text: string) => {\n  console.log(\'onSelect\', text)\n}\n<\/script>',e.__sourceTitle="基本用法"};const q=t({__name:"DemoOne",setup(e){const n=i(""),t=i([]),a=e=>{t.value=e?[{value:`${e}@qq.com`},{value:`${e}@google.com`},{value:`${e}@138.com`}]:[]},s=e=>{console.log("onSelect",e)};return(e,c)=>(o(),l(u(p),{value:n.value,"onUpdate:value":c[0]||(c[0]=e=>n.value=e),options:t.value,style:{width:"200px"},placeholder:"input here",onSelect:s,onSearch:a},null,8,["value","options"]))}});k(q);var M=e=>{e.__sourceCode='<template>\n  <AutoComplete\n    v-model:value="value"\n    :options="options"\n    style="width: 200px"\n    placeholder="input here"\n    @select="onSelect"\n    @search="onSearch"\n  >\n    <template #option="item">\n      <span style="color: red">{{ item.value }}</span>\n    </template>\n  </AutoComplete>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { AutoComplete } from \'@/lib\'\n\ninterface MockVal {\n  value: string\n}\nconst value = ref(\'\')\nconst options = ref<MockVal[]>([])\nconst onSearch = (searchText: string) => {\n  options.value = !searchText\n    ? []\n    : [\n        { value: `${searchText}@qq.com` },\n        { value: `${searchText}@google.com` },\n        { value: `${searchText}@138.com` },\n        { value: `${searchText}@189.com` },\n        { value: `${searchText}@email.com` }\n      ]\n}\nconst onSelect = (text: string) => {\n  console.log(\'onSelect\', text)\n}\n<\/script>',e.__sourceTitle="自定义每条数据渲染方式"};const j={style:{color:"red"}},F=t({__name:"DemoTwo",setup(e){const n=i(""),t=i([]),s=e=>{t.value=e?[{value:`${e}@qq.com`},{value:`${e}@google.com`},{value:`${e}@138.com`},{value:`${e}@189.com`},{value:`${e}@email.com`}]:[]},c=e=>{console.log("onSelect",e)};return(e,i)=>(o(),l(u(p),{value:n.value,"onUpdate:value":i[0]||(i[0]=e=>n.value=e),options:t.value,style:{width:"200px"},placeholder:"input here",onSelect:c,onSearch:s},{option:a((e=>[r("span",j,m(e.value),1)])),_:1},8,["value","options"]))}});M(F);var U=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <AutoComplete\n      v-model:value="value"\n      :options="dataSource"\n      style="width: 200px"\n      placeholder="input here"\n      custom\n    >\n      <template #option="item">\n        <div style="color: orange; margin-bottom: 10px">\n          <span style="font-size: 12px; padding: 4px 11px">{{ item.value.label }}</span>\n          <div\n            v-for="s in item.value.options"\n            :key="s"\n            class="item"\n            @mousedown="value = s.value"\n          >\n            <span>{{ s.value }}</span>\n            <div class="count">\n              <span>\n                <SvgIcon name="user" width="12px" height="12px" fill="orange" />\n              </span>\n              <span>{{ s.count }}</span>\n            </div>\n          </div>\n        </div>\n      </template>\n    </AutoComplete>\n    <Button @click="onSubmit">\n      <template #icon>\n        <SvgIcon name="search"></SvgIcon>\n      </template>\n    </Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { AutoComplete, SvgIcon, Button } from \'@/lib\'\n\ninterface MockVal {\n  value: string\n}\nconst value = ref(\'\')\nconst options = ref<MockVal[]>([])\nconst onSelect = (text: string) => {\n  console.log(\'onSelect\', text)\n}\nconst onSubmit = () => {\n  console.log(value.value)\n}\nconst dataSource = [\n  {\n    value: {\n      label: \'Libraries\',\n      options: [\n        {\n          value: \'CustomDesignVue\',\n          count: 10000\n        },\n        {\n          value: \'CustomDesignVue UI\',\n          count: 10600\n        }\n      ]\n    }\n  },\n  {\n    value: {\n      label: \'Solutions\',\n      options: [\n        {\n          value: \'CustomDesignVue FQA\',\n          count: 546456\n        },\n        {\n          value: \'CustomDesignVue UI FQA\',\n          count: 534534\n        }\n      ]\n    }\n  },\n  {\n    value: {\n      label: \'Articles\',\n      options: [\n        {\n          value: \'CustomDesignVue Fly\',\n          count: 878787\n        }\n      ]\n    }\n  }\n]\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  align-items: stretch;\n  .item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 300px;\n    padding: 4px 11px;\n    line-height: 1.5em;\n    &:hover {\n      background: #1890ff;\n      cursor: pointer;\n    }\n    > .count {\n      display: flex;\n      align-items: center;\n      gap: 5px;\n      text-align: center;\n      span {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n}\n</style>',e.__sourceTitle="更复杂的渲染"};const Q={class:"wrap"},B={style:{color:"orange","margin-bottom":"10px"}},z={style:{"font-size":"12px",padding:"4px 11px"}},L=["onMousedown"],P={class:"count"},J=t({__name:"DemoThree",setup(e){const n=i("");i([]);const t=()=>{console.log(n.value)},l=[{value:{label:"Libraries",options:[{value:"CustomDesignVue",count:1e4},{value:"CustomDesignVue UI",count:10600}]}},{value:{label:"Solutions",options:[{value:"CustomDesignVue FQA",count:546456},{value:"CustomDesignVue UI FQA",count:534534}]}},{value:{label:"Articles",options:[{value:"CustomDesignVue Fly",count:878787}]}}];return(e,c)=>(o(),v("div",Q,[s(u(p),{value:n.value,"onUpdate:value":c[0]||(c[0]=e=>n.value=e),options:l,style:{width:"200px"},placeholder:"input here",custom:""},{option:a((e=>[r("div",B,[r("span",z,m(e.value.label),1),(o(!0),v(d,null,g(e.value.options,(e=>(o(),v("div",{key:e,class:"item",onMousedown:t=>n.value=e.value},[r("span",null,m(e.value),1),r("div",P,[r("span",null,[s(u(h),{name:"user",width:"12px",height:"12px",fill:"orange"})]),r("span",null,m(e.count),1)])],40,L)))),128))])])),_:1},8,["value"]),s(u(x),{onClick:t},{icon:a((()=>[s(u(h),{name:"search"})])),_:1})]))}});U(J);var N=f(J,[["__scopeId","data-v-2ddff54c"]]);const O=t({__name:"Demo",setup(n){const t=_((()=>[q,F,N].map(((e,n)=>w(e,"autoComplete",n)))));return(n,a)=>(o(),l(e,{"demo-arr":u(t)},null,8,["demo-arr"]))}}),E=t({__name:"Index",setup(e){i(null);const t=["基本用法","自定义每条数据渲染方式","更复杂的渲染"],c=_((()=>A("autoComplete",t)));return(e,t)=>(o(),l(n,{"nav-arr":u(c),title:"AutoComplete 自动完成","component-name":"autoComplete"},{intro:a((()=>[s(V)])),demo:a((()=>[s(O)])),api:a((()=>[s($)])),_:1},8,["nav-arr"]))}});export{E as default};