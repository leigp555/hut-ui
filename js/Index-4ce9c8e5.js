import{D as e,C as l}from"./DemoDisplay-d9d5cf75.js";import{d as n,r as t,E as a,b as o,c as r,e as s,F as u,h as i,m as c,z as d,i as p,q as v,a5 as h,C as m,t as _,f,v as g,a6 as C,X as N,g as S,j as w,J as T}from"./index-be6a3e2f.js";import{_ as P,P as x,T as D}from"./Paragraph-710a31b9.js";import{_ as y}from"./ApiIntro.vue_vue_type_style_index_0_lang-25ff9f5b.js";import{g as b,a as j}from"./helper-84db427e.js";const k={class:"ui-treePop-wrap"},I={class:"treePop-section"},O=["onClick"],L=n({__name:"TreePop",props:{options:null},setup(e){const l=t(""),n=t(""),g=a("change_treeSelect_value"),C=e=>{const l=e.target;g&&g(l.innerText)};return(t,a)=>{const g=o("TreePop",!0);return r(),s("div",k,[(r(!0),s(u,null,i(e.options,(e=>(r(),s("section",{class:"ui-treePop-section",key:e.value},[c("div",I,[c("span",{class:d(["ui-treePop-icon",{isOpen:n.value===e.value}]),onClick:t=>(e=>{e.children&&(l.value!==e.children[0].value?(l.value=e.children[0].value,n.value=e.value):(l.value="",n.value=""))})(e)},[e.children?(r(),p(v(h),{key:0,name:"sanjiao",width:"0.6em",height:"0.6em",fill:"rgba(0,0,0,0.85)"})):m("",!0)],10,O),c("span",{class:"ui-treePop-title",onClick:C},_(e.title),1)]),e.children?(r(),s("div",{key:0,class:d(["ui-treePop-repeat",{"treePop-repeat-open":l.value===e.children[0].value}])},[f(g,{options:e.children},null,8,["options"])],2)):m("",!0)])))),128))])}}}),A={class:"ui-treeSelect-wrap"},B=["placeholder","value"],F={class:"input-icon"},R=n({__name:"TreeSelect",props:{value:null,treeData:null,placeholder:{default:"请选择"}},emits:["update:value","change"],setup(e,{emit:l}){const n=e,{value:a}=g(n),o=t(null),u=t(!1),i=t(!1),p=()=>{var e;null==(e=o.value)||e.classList.add("wrap-focus"),u.value=!0},h=()=>{var e;i.value||(null==(e=o.value)||e.classList.remove("wrap-focus"),u.value=!1)},m=()=>{var e;i.value=!1,null==(e=o.value)||e.classList.remove("wrap-focus"),u.value=!1},_=()=>{i.value=!0};return N("change_treeSelect_value",(e=>{l("update:value",e),l("change",e)})),(l,n)=>(r(),s("div",A,[c("label",{class:"ui-label-wrap",tabindex:"-1",ref_key:"wrapRef",ref:o},[c("input",{class:"ui-input",type:"text",placeholder:e.placeholder,value:v(a),onFocus:p,onBlur:h,readonly:""},null,40,B),c("span",F,[f(v(C),{name:"down",width:"1em",height:"1em"})])],512),c("div",{tabindex:"-1",class:d(["ui-treeSelect-pop ui-scroll-container",{"treeSelect-pop-show":u.value}]),onMousedown:_,onBlur:m,ref:"popRef"},[f(L,{options:e.treeData},null,8,["options"])],34)]))}}),q=c("p",null,"树型选择控件。",-1),z=c("ul",null,[c("li",null,"TreeSelect")],-1),E=c("p",null," 类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。 ",-1),J=n({__name:"Intro",setup:e=>(e,l)=>(r(),p(v(D),null,{default:S((()=>[f(v(P),{level:4},{default:S((()=>[w("简介")])),_:1}),f(v(x),null,{default:S((()=>[q])),_:1}),f(v(P),{level:4},{default:S((()=>[w("组件概述")])),_:1}),f(v(x),null,{default:S((()=>[z])),_:1}),f(v(P),{level:4},{default:S((()=>[w("使用场景")])),_:1}),f(v(x),null,{default:S((()=>[E])),_:1})])),_:1}))}),M=n({__name:"Api",setup(e){const l=[{rowIndex:1,"事件名称":"change","说明":"选中树节点时调用此函数","回调参数":"function(value:string)"}],n=[{componentName:"TreeSelect",attrContent:[{rowIndex:1,"属性":"value(v-model)","说明":"指定当前选中的条目","类型":"string","默认值":""},{rowIndex:2,"属性":"treeData","说明":"treeNodes 数据","类型":"TreeSelectOptions[]","默认值":"[]"},{rowIndex:3,"属性":"placeholder","说明":"选择框默认文字","类型":"string","默认值":"请选择"}]}];return(e,t)=>(r(),p(y,{"attr-content-arr":n,"event-content":l}))}}),U=n({__name:"DemoOne",setup(e){const l=[{title:"Node1",value:"0-0",children:[{title:"Child Node1",value:"0-0-0"}]},{title:"Node2",value:"0-1",children:[{title:"Child Node3",value:"0-1-0",children:[{title:"Child Node10",value:"0-1-0"},{title:"Child Node11",value:"0-1-1"},{title:"Child Node12",value:"0-1-2"}]},{title:"Child Node4",value:"0-1-1"},{title:"Child Node5",value:"0-1-2"}]}],n=t(""),a=e=>{console.log(e)};return(e,t)=>(r(),p(v(R),{value:n.value,"onUpdate:value":t[0]||(t[0]=e=>n.value=e),treeData:l,placeholder:"Please select",onChange:a},null,8,["value"]))}}),X=e=>{e.__sourceCode="<template>\n  <TreeSelect\n    v-model:value=\"value\"\n    :treeData=\"treeData\"\n    placeholder=\"Please select\"\n    @change=\"onChange\"\n  />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { TreeSelect, TreeSelectOptions } from '@/lib'\n\nconst treeData: TreeSelectOptions[] = [\n  {\n    title: 'Node1',\n    value: '0-0',\n    children: [\n      {\n        title: 'Child Node1',\n        value: '0-0-0'\n      }\n    ]\n  },\n  {\n    title: 'Node2',\n    value: '0-1',\n\n    children: [\n      {\n        title: 'Child Node3',\n        value: '0-1-0',\n        children: [\n          {\n            title: 'Child Node10',\n            value: '0-1-0'\n          },\n          {\n            title: 'Child Node11',\n            value: '0-1-1'\n          },\n          {\n            title: 'Child Node12',\n            value: '0-1-2'\n          }\n        ]\n      },\n      {\n        title: 'Child Node4',\n        value: '0-1-1'\n      },\n      {\n        title: 'Child Node5',\n        value: '0-1-2'\n      }\n    ]\n  }\n]\n\nconst value = ref<string>('')\n\nconst onChange = (select: string) => {\n  console.log(select)\n}\n<\/script>",e.__sourceTitle="示例一"};X(U);const G=n({__name:"Demo",setup(l){const n=T((()=>[U].map(((e,l)=>b(e,"treeSelect",l)))));return(l,t)=>(r(),p(e,{"demo-arr":v(n)},null,8,["demo-arr"]))}}),H=n({__name:"Index",setup(e){t(null);const n=["基本用法"],a=T((()=>j("treeSelect",n)));return(e,n)=>(r(),p(l,{"nav-arr":v(a),title:"TreeSelect 树选择","component-name":"treeSelect"},{intro:S((()=>[f(J)])),demo:S((()=>[f(G)])),api:S((()=>[f(M)])),_:1},8,["nav-arr"]))}});export{H as default};
