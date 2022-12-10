import{D as e,C as t}from"./DemoDisplay-d6102924.js";import{_ as n}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as u,P as l,T as a}from"./Footer-492e9d3a.js";import{d as i,D as m,M as o,c as p,e as s,l as d,t as y,s as r,m as M,L as I,F as c,h as g,i as k,E as V,g as _,f,j as h,r as b,x as O}from"./index-4bdb761c.js";import{_ as v}from"./ApiIntro-e7a82855.js";import{g as S,a as w}from"./helper-f72534c2.js";import{a as K,_ as N,b as G}from"./SubMenu-8b51ef02.js";const T={class:"ui-menuGroup-content"},x=["data-setKey"],C=i({__name:"MenuItemGroup",props:{title:null,paddingLeft:null,keyValue:null,totalTitle:null},setup(e){const t=m().default(),n=o("ui_menu_selectedArr"),u=o("ui_menu_mode"),l=e=>!!(null==n?void 0:n.value)&&(null==n?void 0:n.value.indexOf(e.props.keyValue))>=0;return(a,i)=>(p(),s("div",{class:r(["ui-menuGroup-wrap",{"ui-menuGroup-wrap-column":"column"===M(u)}])},[d("div",{class:r(["ui-menuGroup-title",{"ui-menuGroup-title-selected":M(n).indexOf(e.keyValue)>=0}]),style:I({paddingLeft:"column"===M(u)?e.paddingLeft-16+"px":"8px 16px"})},y(e.title),7),d("ul",T,[(p(!0),s(c,null,g(M(t),(t=>(p(),s("li",{key:t,class:r(["ui-menuGroup-item",{"ui-menuGroup-item-selected":l(t)}]),"data-setKey":t.props.keyValue},[(p(),k(V(t),{isNested:!0,paddingLeft:e.paddingLeft,totalTitle:[...e.totalTitle,e.keyValue]},null,8,["paddingLeft","totalTitle"]))],10,x)))),128))])],2))}}),D=d("p",null,"为页面和功能提供导航的菜单列表。",-1),j=d("ul",null,[d("li",null,"Menu"),d("li",null,"MenuItem"),d("li",null,"MenuItemGroup"),d("li",null,"SubMenu")],-1),L=d("ul",null,[d("li",null,"使用导航菜单可以快速在网站的页面间跳转。"),d("li",null,"导航同级之间在逻辑上需为并列且互斥的关系。")],-1),U=i({__name:"Intro",setup:e=>(e,t)=>(p(),k(M(a),null,{default:_((()=>[f(M(u),null,{default:_((()=>[h("简介")])),_:1}),f(M(l),null,{default:_((()=>[D])),_:1}),f(M(u),null,{default:_((()=>[h("组件概览")])),_:1}),f(M(l),null,{default:_((()=>[j])),_:1}),f(M(u),null,{default:_((()=>[h("使用场景")])),_:1}),f(M(l),null,{default:_((()=>[L])),_:1})])),_:1}))}),z=i({__name:"Api",setup(e){const t=[{rowIndex:1,"事件名称":"change","说明":"点击标题时的回调","回调参数":"(string[]) => void"}],n=[{componentName:"Menu",attrContent:[{rowIndex:1,"属性":"selectedKeys","说明":"选中的标题","类型":"string[]","默认值":"[]"},{rowIndex:2,"属性":"mode","说明":"排布方式（水平|垂直）","类型":"'horizontal' | 'column'","默认值":"horizontal"}]},{componentName:"MenuItem",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"disabled","说明":"禁用","类型":"boolean","默认值":"false"}]},{componentName:"MenuItemGroup",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"title","说明":"标题","类型":"string","默认值":"null"}]},{componentName:"SubMenu",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"collapsible","说明":"是否可折叠","类型":"boolean","默认值":"true"}]}];return(e,u)=>(p(),k(v,{"attr-content-arr":n,"event-content":t}))}});var A=e=>{e.__sourceCode='<template>\n  <Menu v-model:selectedKeys="selectedKeys" mode="horizontal" @change="onChange">\n    <MenuItem keyValue="mail">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      Navigation One\n    </MenuItem>\n    <MenuItem keyValue="app" :disabled="true">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      Navigation Two\n    </MenuItem>\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three - Submenu</template>\n      <MenuItemGroup title="Item 1" keyValue="Item 1">\n        <MenuItem keyValue="setting:1">Option 1</MenuItem>\n        <MenuItem keyValue="setting:2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup title="Item 2" keyValue="Item 2">\n        <MenuItem keyValue="setting:3">Option 3</MenuItem>\n        <MenuItem keyValue="setting:4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'mail\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="横向菜单栏"};const F=i({__name:"DemoOne",setup(e){const t=b(["mail"]),u=e=>{console.log(e)};return(e,l)=>(p(),k(M(G),{selectedKeys:t.value,"onUpdate:selectedKeys":l[0]||(l[0]=e=>t.value=e),mode:"horizontal",onChange:u},{default:_((()=>[f(M(K),{keyValue:"mail"},{icon:_((()=>[f(M(n),{name:"email",width:"1em",height:"1em"})])),default:_((()=>[h(" Navigation One ")])),_:1}),f(M(K),{keyValue:"app",disabled:!0},{icon:_((()=>[f(M(n),{name:"apps",width:"1em",height:"1em"})])),default:_((()=>[h(" Navigation Two ")])),_:1}),f(M(N),{keyValue:"sub1"},{icon:_((()=>[f(M(n),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation Three - Submenu")])),default:_((()=>[f(M(C),{title:"Item 1",keyValue:"Item 1"},{default:_((()=>[f(M(K),{keyValue:"setting:1"},{default:_((()=>[h("Option 1")])),_:1}),f(M(K),{keyValue:"setting:2"},{default:_((()=>[h("Option 2")])),_:1})])),_:1}),f(M(C),{title:"Item 2",keyValue:"Item 2"},{default:_((()=>[f(M(K),{keyValue:"setting:3"},{default:_((()=>[h("Option 3")])),_:1}),f(M(K),{keyValue:"setting:4"},{default:_((()=>[h("Option 4")])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});A(F);var E=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="垂直菜单栏"};const P=i({__name:"DemoTwo",setup(e){const t=b(["sub1","g1","1"]),u=e=>{console.log(e)};return(e,l)=>(p(),k(M(G),{selectedKeys:t.value,"onUpdate:selectedKeys":l[0]||(l[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:u},{default:_((()=>[f(M(N),{keyValue:"sub1"},{icon:_((()=>[f(M(n),{name:"email",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation One")])),default:_((()=>[f(M(C),{keyValue:"g1",title:"Item 1"},{default:_((()=>[f(M(K),{keyValue:"1"},{default:_((()=>[h("Option 1")])),_:1}),f(M(K),{keyValue:"2"},{default:_((()=>[h("Option 2")])),_:1})])),_:1}),f(M(C),{keyValue:"g2",title:"Item 2"},{default:_((()=>[f(M(K),{keyValue:"3"},{default:_((()=>[h("Option 3")])),_:1}),f(M(K),{keyValue:"4"},{default:_((()=>[h("Option 4")])),_:1})])),_:1})])),_:1}),f(M(N),{keyValue:"sub2"},{icon:_((()=>[f(M(n),{name:"apps",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation Two")])),default:_((()=>[f(M(K),{keyValue:"5"},{default:_((()=>[h("Option 5")])),_:1}),f(M(K),{keyValue:"6"},{default:_((()=>[h("Option 6")])),_:1}),f(M(N),{keyValue:"sub3"},{title:_((()=>[h("Submenu")])),default:_((()=>[f(M(K),{keyValue:"7"},{default:_((()=>[h("Option 7")])),_:1}),f(M(K),{keyValue:"8"},{default:_((()=>[h("Option 8")])),_:1})])),_:1})])),_:1}),f(M(N),{keyValue:"sub4"},{icon:_((()=>[f(M(n),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation Three")])),default:_((()=>[f(M(K),{keyValue:"9"},{default:_((()=>[h("Option 9")])),_:1}),f(M(K),{keyValue:"10"},{default:_((()=>[h("Option 10")])),_:1}),f(M(K),{keyValue:"11"},{default:_((()=>[h("Option 11")])),_:1}),f(M(K),{keyValue:"12"},{default:_((()=>[h("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});E(P);var q=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3" :collapsible="false">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="菜单栏不折叠"};const B=i({__name:"DemoThree",setup(e){const t=b(["sub1","g1","1"]),u=e=>{console.log(e)};return(e,l)=>(p(),k(M(G),{selectedKeys:t.value,"onUpdate:selectedKeys":l[0]||(l[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:u},{default:_((()=>[f(M(N),{keyValue:"sub1",collapsible:!1},{icon:_((()=>[f(M(n),{name:"email",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation One")])),default:_((()=>[f(M(C),{keyValue:"g1",title:"Item 1"},{default:_((()=>[f(M(K),{keyValue:"1"},{default:_((()=>[h("Option 1")])),_:1}),f(M(K),{keyValue:"2"},{default:_((()=>[h("Option 2")])),_:1})])),_:1}),f(M(C),{keyValue:"g2",title:"Item 2"},{default:_((()=>[f(M(K),{keyValue:"3"},{default:_((()=>[h("Option 3")])),_:1}),f(M(K),{keyValue:"4"},{default:_((()=>[h("Option 4")])),_:1})])),_:1})])),_:1}),f(M(N),{keyValue:"sub2",collapsible:!1},{icon:_((()=>[f(M(n),{name:"apps",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation Two")])),default:_((()=>[f(M(K),{keyValue:"5"},{default:_((()=>[h("Option 5")])),_:1}),f(M(K),{keyValue:"6"},{default:_((()=>[h("Option 6")])),_:1}),f(M(N),{keyValue:"sub3",collapsible:!1},{title:_((()=>[h("Submenu")])),default:_((()=>[f(M(K),{keyValue:"7"},{default:_((()=>[h("Option 7")])),_:1}),f(M(K),{keyValue:"8"},{default:_((()=>[h("Option 8")])),_:1})])),_:1})])),_:1}),f(M(N),{keyValue:"sub4",collapsible:!1},{icon:_((()=>[f(M(n),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation Three")])),default:_((()=>[f(M(K),{keyValue:"9"},{default:_((()=>[h("Option 9")])),_:1}),f(M(K),{keyValue:"10"},{default:_((()=>[h("Option 10")])),_:1}),f(M(K),{keyValue:"11"},{default:_((()=>[h("Option 11")])),_:1}),f(M(K),{keyValue:"12"},{default:_((()=>[h("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});q(B);var H=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n      <SubMenu keyValue="sub5">\n        <template #icon>\n          <SvgIcon name="setting" width="1em" height="1em" />\n        </template>\n        <template #title>Navigation Three</template>\n        <MenuItem keyValue="13">Option 13</MenuItem>\n        <MenuItem keyValue="14">Option 14</MenuItem>\n        <MenuItem keyValue="15">Option 15</MenuItem>\n        <MenuItem keyValue="16">Option 16</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n        <SubMenu keyValue="sub4">\n          <template #icon>\n            <SvgIcon name="setting" width="1em" height="1em" />\n          </template>\n          <template #title>Navigation Three</template>\n          <MenuItem keyValue="9">Option 9</MenuItem>\n          <MenuItem keyValue="10">Option 10</MenuItem>\n          <MenuItem keyValue="11">Option 11</MenuItem>\n          <MenuItem keyValue="12">Option 12</MenuItem>\n        </SubMenu>\n      </SubMenu>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="树形菜单栏(嵌套)"};const J=i({__name:"DemoFour",setup(e){const t=b(["sub1","g1","1"]),u=e=>{console.log(e)};return(e,l)=>(p(),k(M(G),{selectedKeys:t.value,"onUpdate:selectedKeys":l[0]||(l[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:u},{default:_((()=>[f(M(N),{keyValue:"sub1"},{icon:_((()=>[f(M(n),{name:"email",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation One")])),default:_((()=>[f(M(C),{keyValue:"g1",title:"Item 1"},{default:_((()=>[f(M(K),{keyValue:"1"},{default:_((()=>[h("Option 1")])),_:1}),f(M(K),{keyValue:"2"},{default:_((()=>[h("Option 2")])),_:1})])),_:1}),f(M(C),{keyValue:"g2",title:"Item 2"},{default:_((()=>[f(M(K),{keyValue:"3"},{default:_((()=>[h("Option 3")])),_:1}),f(M(K),{keyValue:"4"},{default:_((()=>[h("Option 4")])),_:1})])),_:1}),f(M(N),{keyValue:"sub5"},{icon:_((()=>[f(M(n),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation Three")])),default:_((()=>[f(M(K),{keyValue:"13"},{default:_((()=>[h("Option 13")])),_:1}),f(M(K),{keyValue:"14"},{default:_((()=>[h("Option 14")])),_:1}),f(M(K),{keyValue:"15"},{default:_((()=>[h("Option 15")])),_:1}),f(M(K),{keyValue:"16"},{default:_((()=>[h("Option 16")])),_:1})])),_:1})])),_:1}),f(M(N),{keyValue:"sub2"},{icon:_((()=>[f(M(n),{name:"apps",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation Two")])),default:_((()=>[f(M(K),{keyValue:"5"},{default:_((()=>[h("Option 5")])),_:1}),f(M(K),{keyValue:"6"},{default:_((()=>[h("Option 6")])),_:1}),f(M(N),{keyValue:"sub3"},{title:_((()=>[h("Submenu")])),default:_((()=>[f(M(K),{keyValue:"7"},{default:_((()=>[h("Option 7")])),_:1}),f(M(K),{keyValue:"8"},{default:_((()=>[h("Option 8")])),_:1}),f(M(N),{keyValue:"sub4"},{icon:_((()=>[f(M(n),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[h("Navigation Three")])),default:_((()=>[f(M(K),{keyValue:"9"},{default:_((()=>[h("Option 9")])),_:1}),f(M(K),{keyValue:"10"},{default:_((()=>[h("Option 10")])),_:1}),f(M(K),{keyValue:"11"},{default:_((()=>[h("Option 11")])),_:1}),f(M(K),{keyValue:"12"},{default:_((()=>[h("Option 12")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});H(J);const Q=i({__name:"Demo",setup(t){const n=O((()=>[F,P,B,J].map(((e,t)=>S(e,"menu",t)))));return(t,u)=>(p(),k(e,{"demo-arr":M(n)},null,8,["demo-arr"]))}}),R=i({__name:"Index",setup(e){b(null);const n=["横向菜单栏","垂直菜单栏","菜单栏不折叠","树形菜单栏(嵌套)"],u=O((()=>w("menu",n)));return(e,n)=>(p(),k(t,{"nav-arr":M(u),title:"Menu 导航菜单","component-name":"menu"},{intro:_((()=>[f(U)])),demo:_((()=>[f(Q)])),api:_((()=>[f(z)])),_:1},8,["nav-arr"]))}});export{R as default};