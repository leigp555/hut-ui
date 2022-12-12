import{D as e,C as t}from"./DemoDisplay-53a9c10a.js";import{d as n,M as u,E as l,c as a,e as i,n as m,t as o,z as p,q as s,G as d,F as y,i as r,j as M,L as I,g as c,f as g,k,r as V,s as f,h as _,l as h,J as O}from"./index-6bb449f3.js";import{_ as b,P as v,T as S}from"./Paragraph-138135f0.js";import{_ as w}from"./ApiIntro-fdf4ccdf.js";import{g as K,a as G}from"./helper-7416cab9.js";import{_ as N}from"./MenuItem-3be84024.js";const T={class:"ui-menuGroup-content"},x=["data-setKey"],C=n({__name:"MenuItemGroup",props:{title:null,paddingLeft:null,keyValue:null,totalTitle:null},setup(e){const t=u().default(),n=l("ui_menu_selectedArr"),c=l("ui_menu_mode"),g=e=>!!(null==n?void 0:n.value)&&(null==n?void 0:n.value.indexOf(e.props.keyValue))>=0;return(u,l)=>(a(),i("div",{class:p(["ui-menuGroup-wrap",{"ui-menuGroup-wrap-column":"column"===s(c)}])},[m("div",{class:p(["ui-menuGroup-title",{"ui-menuGroup-title-selected":s(n).indexOf(e.keyValue)>=0}]),style:d({paddingLeft:"column"===s(c)?e.paddingLeft-16+"px":"8px 16px"})},o(e.title),7),m("ul",T,[(a(!0),i(y,null,r(s(t),(t=>(a(),i("li",{key:t,class:p(["ui-menuGroup-item",{"ui-menuGroup-item-selected":g(t)}]),"data-setKey":t.props.keyValue},[(a(),M(I(t),{isNested:!0,paddingLeft:e.paddingLeft,totalTitle:[...e.totalTitle,e.keyValue]},null,8,["paddingLeft","totalTitle"]))],10,x)))),128))])],2))}}),D=m("p",null,"为页面和功能提供导航的菜单列表。",-1),j=m("ul",null,[m("li",null,"Menu"),m("li",null,"MenuItem"),m("li",null,"MenuItemGroup"),m("li",null,"SubMenu")],-1),L=m("ul",null,[m("li",null,"使用导航菜单可以快速在网站的页面间跳转。"),m("li",null,"导航同级之间在逻辑上需为并列且互斥的关系。")],-1),z=n({__name:"Intro",setup:e=>(e,t)=>(a(),M(s(S),null,{default:c((()=>[g(s(b),null,{default:c((()=>[k("简介")])),_:1}),g(s(v),null,{default:c((()=>[D])),_:1}),g(s(b),null,{default:c((()=>[k("组件概览")])),_:1}),g(s(v),null,{default:c((()=>[j])),_:1}),g(s(b),null,{default:c((()=>[k("使用场景")])),_:1}),g(s(v),null,{default:c((()=>[L])),_:1})])),_:1}))}),U=n({__name:"Api",setup(e){const t=[{rowIndex:1,"事件名称":"change","说明":"点击标题时的回调","回调参数":"(string[]) => void"}],n=[{componentName:"Menu",attrContent:[{rowIndex:1,"属性":"selectedKeys","说明":"选中的标题","类型":"string[]","默认值":"[]"},{rowIndex:2,"属性":"mode","说明":"排布方式（水平|垂直）","类型":"'horizontal' | 'column'","默认值":"horizontal"}]},{componentName:"MenuItem",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"disabled","说明":"禁用","类型":"boolean","默认值":"false"}]},{componentName:"MenuItemGroup",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"title","说明":"标题","类型":"string","默认值":"null"}]},{componentName:"SubMenu",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"collapsible","说明":"是否可折叠","类型":"boolean","默认值":"true"}]}];return(e,u)=>(a(),M(w,{"attr-content-arr":n,"event-content":t}))}});var A=e=>{e.__sourceCode='<template>\n  <Menu v-model:selectedKeys="selectedKeys" mode="horizontal" @change="onChange">\n    <MenuItem keyValue="mail">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      Navigation One\n    </MenuItem>\n    <MenuItem keyValue="app" :disabled="true">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      Navigation Two\n    </MenuItem>\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three - Submenu</template>\n      <MenuItemGroup title="Item 1" keyValue="Item 1">\n        <MenuItem keyValue="setting:1">Option 1</MenuItem>\n        <MenuItem keyValue="setting:2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup title="Item 2" keyValue="Item 2">\n        <MenuItem keyValue="setting:3">Option 3</MenuItem>\n        <MenuItem keyValue="setting:4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'mail\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="横向菜单栏"};const F=n({__name:"DemoOne",setup(e){const t=V(["mail"]),n=e=>{console.log(e)};return(e,u)=>(a(),M(s(h),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),mode:"horizontal",onChange:n},{default:c((()=>[g(s(N),{keyValue:"mail"},{icon:c((()=>[g(s(f),{name:"email",width:"1em",height:"1em"})])),default:c((()=>[k(" Navigation One ")])),_:1}),g(s(N),{keyValue:"app",disabled:!0},{icon:c((()=>[g(s(f),{name:"apps",width:"1em",height:"1em"})])),default:c((()=>[k(" Navigation Two ")])),_:1}),g(s(_),{keyValue:"sub1"},{icon:c((()=>[g(s(f),{name:"setting",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation Three - Submenu")])),default:c((()=>[g(s(C),{title:"Item 1",keyValue:"Item 1"},{default:c((()=>[g(s(N),{keyValue:"setting:1"},{default:c((()=>[k("Option 1")])),_:1}),g(s(N),{keyValue:"setting:2"},{default:c((()=>[k("Option 2")])),_:1})])),_:1}),g(s(C),{title:"Item 2",keyValue:"Item 2"},{default:c((()=>[g(s(N),{keyValue:"setting:3"},{default:c((()=>[k("Option 3")])),_:1}),g(s(N),{keyValue:"setting:4"},{default:c((()=>[k("Option 4")])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});A(F);var P=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="垂直菜单栏"};const q=n({__name:"DemoTwo",setup(e){const t=V(["sub1","g1","1"]),n=e=>{console.log(e)};return(e,u)=>(a(),M(s(h),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:n},{default:c((()=>[g(s(_),{keyValue:"sub1"},{icon:c((()=>[g(s(f),{name:"email",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation One")])),default:c((()=>[g(s(C),{keyValue:"g1",title:"Item 1"},{default:c((()=>[g(s(N),{keyValue:"1"},{default:c((()=>[k("Option 1")])),_:1}),g(s(N),{keyValue:"2"},{default:c((()=>[k("Option 2")])),_:1})])),_:1}),g(s(C),{keyValue:"g2",title:"Item 2"},{default:c((()=>[g(s(N),{keyValue:"3"},{default:c((()=>[k("Option 3")])),_:1}),g(s(N),{keyValue:"4"},{default:c((()=>[k("Option 4")])),_:1})])),_:1})])),_:1}),g(s(_),{keyValue:"sub2"},{icon:c((()=>[g(s(f),{name:"apps",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation Two")])),default:c((()=>[g(s(N),{keyValue:"5"},{default:c((()=>[k("Option 5")])),_:1}),g(s(N),{keyValue:"6"},{default:c((()=>[k("Option 6")])),_:1}),g(s(_),{keyValue:"sub3"},{title:c((()=>[k("Submenu")])),default:c((()=>[g(s(N),{keyValue:"7"},{default:c((()=>[k("Option 7")])),_:1}),g(s(N),{keyValue:"8"},{default:c((()=>[k("Option 8")])),_:1})])),_:1})])),_:1}),g(s(_),{keyValue:"sub4"},{icon:c((()=>[g(s(f),{name:"setting",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation Three")])),default:c((()=>[g(s(N),{keyValue:"9"},{default:c((()=>[k("Option 9")])),_:1}),g(s(N),{keyValue:"10"},{default:c((()=>[k("Option 10")])),_:1}),g(s(N),{keyValue:"11"},{default:c((()=>[k("Option 11")])),_:1}),g(s(N),{keyValue:"12"},{default:c((()=>[k("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});P(q);var E=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3" :collapsible="false">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="菜单栏不折叠"};const J=n({__name:"DemoThree",setup(e){const t=V(["sub1","g1","1"]),n=e=>{console.log(e)};return(e,u)=>(a(),M(s(h),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:n},{default:c((()=>[g(s(_),{keyValue:"sub1",collapsible:!1},{icon:c((()=>[g(s(f),{name:"email",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation One")])),default:c((()=>[g(s(C),{keyValue:"g1",title:"Item 1"},{default:c((()=>[g(s(N),{keyValue:"1"},{default:c((()=>[k("Option 1")])),_:1}),g(s(N),{keyValue:"2"},{default:c((()=>[k("Option 2")])),_:1})])),_:1}),g(s(C),{keyValue:"g2",title:"Item 2"},{default:c((()=>[g(s(N),{keyValue:"3"},{default:c((()=>[k("Option 3")])),_:1}),g(s(N),{keyValue:"4"},{default:c((()=>[k("Option 4")])),_:1})])),_:1})])),_:1}),g(s(_),{keyValue:"sub2",collapsible:!1},{icon:c((()=>[g(s(f),{name:"apps",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation Two")])),default:c((()=>[g(s(N),{keyValue:"5"},{default:c((()=>[k("Option 5")])),_:1}),g(s(N),{keyValue:"6"},{default:c((()=>[k("Option 6")])),_:1}),g(s(_),{keyValue:"sub3",collapsible:!1},{title:c((()=>[k("Submenu")])),default:c((()=>[g(s(N),{keyValue:"7"},{default:c((()=>[k("Option 7")])),_:1}),g(s(N),{keyValue:"8"},{default:c((()=>[k("Option 8")])),_:1})])),_:1})])),_:1}),g(s(_),{keyValue:"sub4",collapsible:!1},{icon:c((()=>[g(s(f),{name:"setting",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation Three")])),default:c((()=>[g(s(N),{keyValue:"9"},{default:c((()=>[k("Option 9")])),_:1}),g(s(N),{keyValue:"10"},{default:c((()=>[k("Option 10")])),_:1}),g(s(N),{keyValue:"11"},{default:c((()=>[k("Option 11")])),_:1}),g(s(N),{keyValue:"12"},{default:c((()=>[k("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});E(J);var B=e=>{e.__sourceCode='<template>\n  <Menu\n    v-model:selectedKeys="selectedKeys"\n    style="width: 256px"\n    mode="column"\n    @change="onChange"\n  >\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n      <SubMenu keyValue="sub5">\n        <template #icon>\n          <SvgIcon name="setting" width="1em" height="1em" />\n        </template>\n        <template #title>Navigation Three</template>\n        <MenuItem keyValue="13">Option 13</MenuItem>\n        <MenuItem keyValue="14">Option 14</MenuItem>\n        <MenuItem keyValue="15">Option 15</MenuItem>\n        <MenuItem keyValue="16">Option 16</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n        <SubMenu keyValue="sub4">\n          <template #icon>\n            <SvgIcon name="setting" width="1em" height="1em" />\n          </template>\n          <template #title>Navigation Three</template>\n          <MenuItem keyValue="9">Option 9</MenuItem>\n          <MenuItem keyValue="10">Option 10</MenuItem>\n          <MenuItem keyValue="11">Option 11</MenuItem>\n          <MenuItem keyValue="12">Option 12</MenuItem>\n        </SubMenu>\n      </SubMenu>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nconst onChange = (selectKey: string[]) => {\n  console.log(selectKey)\n}\n<\/script>',e.__sourceTitle="树形菜单栏(嵌套)"};const H=n({__name:"DemoFour",setup(e){const t=V(["sub1","g1","1"]),n=e=>{console.log(e)};return(e,u)=>(a(),M(s(h),{selectedKeys:t.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>t.value=e),style:{width:"256px"},mode:"column",onChange:n},{default:c((()=>[g(s(_),{keyValue:"sub1"},{icon:c((()=>[g(s(f),{name:"email",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation One")])),default:c((()=>[g(s(C),{keyValue:"g1",title:"Item 1"},{default:c((()=>[g(s(N),{keyValue:"1"},{default:c((()=>[k("Option 1")])),_:1}),g(s(N),{keyValue:"2"},{default:c((()=>[k("Option 2")])),_:1})])),_:1}),g(s(C),{keyValue:"g2",title:"Item 2"},{default:c((()=>[g(s(N),{keyValue:"3"},{default:c((()=>[k("Option 3")])),_:1}),g(s(N),{keyValue:"4"},{default:c((()=>[k("Option 4")])),_:1})])),_:1}),g(s(_),{keyValue:"sub5"},{icon:c((()=>[g(s(f),{name:"setting",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation Three")])),default:c((()=>[g(s(N),{keyValue:"13"},{default:c((()=>[k("Option 13")])),_:1}),g(s(N),{keyValue:"14"},{default:c((()=>[k("Option 14")])),_:1}),g(s(N),{keyValue:"15"},{default:c((()=>[k("Option 15")])),_:1}),g(s(N),{keyValue:"16"},{default:c((()=>[k("Option 16")])),_:1})])),_:1})])),_:1}),g(s(_),{keyValue:"sub2"},{icon:c((()=>[g(s(f),{name:"apps",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation Two")])),default:c((()=>[g(s(N),{keyValue:"5"},{default:c((()=>[k("Option 5")])),_:1}),g(s(N),{keyValue:"6"},{default:c((()=>[k("Option 6")])),_:1}),g(s(_),{keyValue:"sub3"},{title:c((()=>[k("Submenu")])),default:c((()=>[g(s(N),{keyValue:"7"},{default:c((()=>[k("Option 7")])),_:1}),g(s(N),{keyValue:"8"},{default:c((()=>[k("Option 8")])),_:1}),g(s(_),{keyValue:"sub4"},{icon:c((()=>[g(s(f),{name:"setting",width:"1em",height:"1em"})])),title:c((()=>[k("Navigation Three")])),default:c((()=>[g(s(N),{keyValue:"9"},{default:c((()=>[k("Option 9")])),_:1}),g(s(N),{keyValue:"10"},{default:c((()=>[k("Option 10")])),_:1}),g(s(N),{keyValue:"11"},{default:c((()=>[k("Option 11")])),_:1}),g(s(N),{keyValue:"12"},{default:c((()=>[k("Option 12")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});B(H);const Q=n({__name:"Demo",setup(t){const n=O((()=>[F,q,J,H].map(((e,t)=>K(e,"menu",t)))));return(t,u)=>(a(),M(e,{"demo-arr":s(n)},null,8,["demo-arr"]))}}),R=n({__name:"Index",setup(e){V(null);const n=["横向菜单栏","垂直菜单栏","菜单栏不折叠","树形菜单栏(嵌套)"],u=O((()=>G("menu",n)));return(e,n)=>(a(),M(t,{"nav-arr":s(u),title:"Menu 导航菜单","component-name":"menu"},{intro:c((()=>[g(z)])),demo:c((()=>[g(Q)])),api:c((()=>[g(U)])),_:1},8,["nav-arr"]))}});export{R as default};