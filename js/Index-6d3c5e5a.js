import{D as t,C as a}from"./DemoDisplay-d9d5cf75.js";import{d as n,v as e,M as o,J as l,c as i,e as s,f as r,g as u,m as d,F as c,h as p,q as m,i as g,L as v,x as f,y as _,B as k,C as h,j as L,r as y,o as S,t as b,I,s as x}from"./index-be6a3e2f.js";import{_ as z,P as D,T as w}from"./Paragraph-710a31b9.js";import{a as C,b as j,_ as M}from"./ApiIntro.vue_vue_type_style_index_0_lang-25ff9f5b.js";import{g as B,a as A}from"./helper-84db427e.js";import{a as P}from"./ajax-ad257d80.js";import{_ as $}from"./Avatar.vue_vue_type_script_setup_true_lang-fab4e153.js";import{_ as O}from"./Pagination.vue_vue_type_script_setup_true_lang-8189ea97.js";const T={class:"ui-list-wrap"},N={class:"ui-list-content"},E={class:"ui-list-skeleton"},J={class:"ui-list-skeleton"},Q={key:0,class:"ui-list-loadMore"},U={key:1,class:"ui-list-pagination"},q=n({__name:"List",props:{dataSource:null,loading:{type:Boolean,default:!1},mode:{default:"normal"},skeletonAvatar:{type:Boolean,default:!0}},setup(t){const a=t,{mode:n,dataSource:L,loading:y}=e(a),S=o().default(),b=l((()=>"pagination"===n.value&&!L.value[0])),I=l((()=>y.value&&"pagination"===n.value&&!!L.value[0]));return(a,e)=>(i(),s("div",T,[r(j,{loading:m(I),style:{top:"40%"}},{default:u((()=>[d("ol",N,[(i(!0),s(c,null,p(m(L),(t=>(i(),s("li",{class:"ui-list-item",key:t},[(i(),g(v(m(S)[0]),{data:t},null,8,["data"]))])))),128)),f(d("li",E,[r(C,{avatar:t.skeletonAvatar,active:"",paragraph:{rows:3},loading:m(y)},null,8,["avatar","loading"])],512),[[_,m(y)&&"pagination"!==m(n)]]),f(d("li",J,[(i(),s(c,null,p(3,(a=>r(C,{key:a,avatar:t.skeletonAvatar,active:"",paragraph:{rows:2},loading:m(y)},null,8,["avatar","loading"]))),64))],512),[[_,m(b)]])]),"loadMore"===m(n)?(i(),s("div",Q,[k(a.$slots,"loadMore")])):h("",!0),"pagination"===m(n)?(i(),s("div",U,[k(a.$slots,"pagination")])):h("",!0)])),_:3},8,["loading"])]))}}),F={class:"ui-listItem-wrap"},G={key:0,class:"ui-listItem-avatar"},H={class:"ui-listItem-content-wrap"},K={key:0,class:"ui-listItem-title"},R={class:"ui-listItem-content"},V={key:0,class:"ui-listItem-description"},W={key:1,class:"ui-listItem-actions"},X=n({__name:"ListItem",props:{data:null},setup:t=>(a,n)=>(i(),s("div",F,[a.$slots.avatar?(i(),s("div",G,[k(a.$slots,"avatar",{data:t.data})])):h("",!0),d("div",H,[a.$slots.title?(i(),s("h4",K,[k(a.$slots,"title",{data:t.data})])):h("",!0),d("div",R,[a.$slots.description?(i(),s("div",V,[k(a.$slots,"description",{data:t.data})])):h("",!0),a.$slots.actions?(i(),s("div",W,[k(a.$slots,"actions",{data:t.data})])):h("",!0)])])]))}),Y=d("p",null,"通用列表。",-1),Z=d("ul",null,[d("li",null,"List: 主要组件"),d("li",null,"ListItem: 子组件")],-1),tt=d("ul",null,[d("li",null," 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。 ")],-1),at=n({__name:"Intro",setup:t=>(t,a)=>(i(),g(m(w),null,{default:u((()=>[r(m(z),null,{default:u((()=>[L("简介")])),_:1}),r(m(D),null,{default:u((()=>[Y])),_:1}),r(m(z),null,{default:u((()=>[L("组件概览")])),_:1}),r(m(D),null,{default:u((()=>[Z])),_:1}),r(m(z),null,{default:u((()=>[L("使用场景")])),_:1}),r(m(D),null,{default:u((()=>[tt])),_:1})])),_:1}))}),nt=n({__name:"Api",setup(t){const a=[],n=[{componentName:"List",attrContent:[{rowIndex:1,"属性":"dataSource","说明":"list数据","类型":"ListData[]","默认值":"[]"},{rowIndex:2,"属性":"loading","说明":"是否处于加载中状态","类型":"boolean","默认值":"false"},{rowIndex:3,"属性":"mode","说明":"加载模式","类型":"'loadMore' | 'normal' | 'pagination'","默认值":"normal"},{rowIndex:4,"属性":"skeletonAvatar","说明":"是否需要头像骨架图","类型":"boolean","默认值":"true"}]}];return(t,e)=>(i(),g(M,{"attr-content-arr":n,"event-content":a}))}}),et=n({__name:"DemoOne",setup(t){const a=y(!1),n=y([]);y(1),y(5),y(["5","10","20","30","40"]);return S((()=>{((t,e=3)=>{"/mock"===t&&(a.value=!0,P(t,e,0,0).then((t=>{n.value=[...n.value,...t],a.value=!1})).catch((t=>{console.log(t),a.value=!1})))})("/mock")})),(t,e)=>(i(),g(m(q),{"skeleton-avatar":!1,dataSource:n.value,loading:a.value},{default:u((()=>[r(m(X),null,{title:u((t=>[d("span",null,b(t.data.title),1)])),description:u((t=>[d("span",null,b(t.data.description),1)])),_:1})])),_:1},8,["dataSource","loading"]))}}),ot=t=>{t.__sourceCode="<template>\n  <List :skeleton-avatar=\"false\" :dataSource=\"data\" :loading=\"loading\">\n    <ListItem>\n      <template #title=\"item\">\n        <span>{{ item.data.title }}</span>\n      </template>\n      <template #description=\"item\">\n        <span>\n          {{ item.data.description }}\n        </span>\n      </template>\n    </ListItem>\n  </List>\n</template>\n\n<script setup lang=\"ts\">\nimport { onMounted, ref } from 'vue'\nimport { ListItem, List, ListData } from '@/lib'\n\nimport { ajax } from '@/eg/ajax'\n\nconst loading = ref<boolean>(false)\nconst data = ref<ListData[]>([])\nconst current = ref<number>(1)\nconst pageSize = ref<number>(5)\nconst pageSizeOptions = ref<string[]>(['5', '10', '20', '30', '40'])\n\nconst fetch = (url: string, count: number = 3) => {\n  if (url === '/mock') {\n    loading.value = true\n    ;(ajax(url, count, 0, 0) as Promise<ListData[]>)\n      .then((res) => {\n        data.value = [...data.value, ...res]\n        loading.value = false\n      })\n      .catch((err) => {\n        console.log(err)\n        loading.value = false\n      })\n  }\n}\nonMounted(() => {\n  fetch('/mock')\n})\n<\/script>",t.__sourceTitle="基本用法"};ot(et);const lt=n({__name:"DemoTwo",setup(t){const a=y(!1),n=y([]);y(1),y(5),y(["5","10","20","30","40"]);const e=(t,e=3)=>{"/mock"===t&&(a.value=!0,P(t,e,0,0).then((t=>{n.value=[...n.value,...t],a.value=!1})).catch((t=>{console.log(t),a.value=!1})))};S((()=>{e("/mock")}));const o=()=>{e("/mock")};return(t,e)=>(i(),g(m(q),{mode:"loadMore",dataSource:n.value,loading:a.value},{loadMore:u((()=>[d("div",null,[f(r(m(I),{type:"default",onClick:o},{default:u((()=>[L("loading more")])),_:1},512),[[_,!a.value]])])])),default:u((()=>[r(m(X),null,{avatar:u((t=>[r(m($),{size:32,src:t.data.avatar,style:{"background-color":"#ffffff",padding:"0"}},{icon:u((()=>[r(m(x),{name:"user",width:"2em",height:"2em"})])),_:2},1032,["src"])])),title:u((t=>[d("span",null,b(t.data.title),1)])),description:u((t=>[d("span",null,b(t.data.description),1)])),actions:u((t=>[r(m(I),{type:"link",onClick:a=>(t=>{console.log(t)})(t.data)},{default:u((()=>[L("edit")])),_:2},1032,["onClick"]),r(m(I),{type:"link",onClick:a=>(t=>{console.log(t)})(t.data)},{default:u((()=>[L("more")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["dataSource","loading"]))}}),it=t=>{t.__sourceCode='<template>\n  <List mode="loadMore" :dataSource="data" :loading="loading">\n    <ListItem>\n      <template #avatar="item">\n        <Avatar\n          :size="32"\n          :src="item.data.avatar"\n          style="background-color: #ffffff; padding: 0"\n        >\n          <template #icon>\n            <SvgIcon name="user" width="2em" height="2em" />\n          </template>\n        </Avatar>\n      </template>\n      <template #title="item">\n        <span>{{ item.data.title }}</span>\n      </template>\n      <template #description="item">\n        <span>\n          {{ item.data.description }}\n        </span>\n      </template>\n      <template #actions="item">\n        <Button type="link" @click="onEdit(item.data)">edit</Button>\n        <Button type="link" @click="onMore(item.data)">more</Button>\n      </template>\n    </ListItem>\n    <template #loadMore>\n      <div>\n        <Button type="default" @click="onLoadMore" v-show="!loading"\n          >loading more</Button\n        >\n      </div>\n    </template>\n  </List>\n</template>\n\n<script setup lang="ts">\nimport { onMounted, ref } from \'vue\'\nimport { ListItem, List, Avatar, SvgIcon, Button, ListData } from \'@/lib\'\n\nimport { ajax } from \'@/eg/ajax\'\n\nconst loading = ref<boolean>(false)\nconst data = ref<ListData[]>([])\nconst current = ref<number>(1)\nconst pageSize = ref<number>(5)\nconst pageSizeOptions = ref<string[]>([\'5\', \'10\', \'20\', \'30\', \'40\'])\n\nconst fetch = (url: string, count: number = 3) => {\n  if (url === \'/mock\') {\n    loading.value = true\n    ;(ajax(url, count, 0, 0) as Promise<ListData[]>)\n      .then((res) => {\n        data.value = [...data.value, ...res]\n        loading.value = false\n      })\n      .catch((err) => {\n        console.log(err)\n        loading.value = false\n      })\n  }\n}\nonMounted(() => {\n  fetch(\'/mock\')\n})\n\nconst onEdit = (item: ListData) => {\n  console.log(item)\n}\nconst onMore = (item: ListData) => {\n  console.log(item)\n}\n// 加载更多\nconst onLoadMore = () => {\n  fetch(\'/mock\')\n}\n<\/script>',t.__sourceTitle="加载更多"};it(lt);const st={style:{display:"flex","justify-content":"center","margin-top":"50px"}},rt=n({__name:"DemoThree",setup(t){const a=y(!1),n=y([]),e=y(1),o=y(5),l=y(["5","10","20","30","40"]),s=y(0),c=(t,l=3)=>{"/pagination"===t&&(a.value=!0,P(t,l,e.value,o.value).then((t=>{n.value=[...t.data],s.value=t.totalDateNum,a.value=!1})).catch((t=>{console.log(t),a.value=!1})))};S((()=>{c("/pagination")}));const p=t=>{e.value=t,c("/pagination")};return(t,c)=>(i(),g(m(q),{mode:"pagination",dataSource:n.value,loading:a.value},{pagination:u((()=>[d("div",st,[r(m(O),{current:e.value,"onUpdate:current":c[0]||(c[0]=t=>e.value=t),total:s.value,pageSize:o.value,"onUpdate:pageSize":c[1]||(c[1]=t=>o.value=t),onPageSizeChange:c[2]||(c[2]=t=>o.value=t),disabled:a.value,pageSizeOptions:l.value,showQuickJumper:"",showSizeChanger:"",showTotal:"",onChange:p},{buildOptionText:u((t=>[d("span",null,b(t.value)+"条/页",1)])),_:1},8,["current","total","pageSize","disabled","pageSizeOptions"])])])),default:u((()=>[r(m(X),null,{avatar:u((t=>[r(m($),{size:32,src:t.data.avatar,style:{"background-color":"#ffffff",padding:"0"}},{icon:u((()=>[r(m(x),{name:"user",width:"2em",height:"2em"})])),_:2},1032,["src"])])),title:u((t=>[d("span",null,b(t.data.title),1)])),description:u((t=>[d("span",null,b(t.data.description),1)])),actions:u((t=>[r(m(I),{type:"link",onClick:a=>(t=>{console.log(t)})(t.data)},{default:u((()=>[L("edit")])),_:2},1032,["onClick"]),r(m(I),{type:"link",onClick:a=>(t=>{console.log(t)})(t.data)},{default:u((()=>[L("more")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["dataSource","loading"]))}}),ut=t=>{t.__sourceCode='<template>\n  <List mode="pagination" :dataSource="data" :loading="loading">\n    <ListItem>\n      <template #avatar="item">\n        <Avatar\n          :size="32"\n          :src="item.data.avatar"\n          style="background-color: #ffffff; padding: 0"\n        >\n          <template #icon>\n            <SvgIcon name="user" width="2em" height="2em" />\n          </template>\n        </Avatar>\n      </template>\n      <template #title="item">\n        <span>{{ item.data.title }}</span>\n      </template>\n      <template #description="item">\n        <span>\n          {{ item.data.description }}\n        </span>\n      </template>\n      <template #actions="item">\n        <Button type="link" @click="onEdit(item.data)">edit</Button>\n        <Button type="link" @click="onMore(item.data)">more</Button>\n      </template>\n    </ListItem>\n    <template #pagination>\n      <div style="display: flex; justify-content: center; margin-top: 50px">\n        <Pagination\n          v-model:current="current"\n          :total="dataNum"\n          v-model:pageSize="pageSize"\n          @pageSizeChange="pageSize = $event"\n          :disabled="loading"\n          :pageSizeOptions="pageSizeOptions"\n          showQuickJumper\n          showSizeChanger\n          showTotal\n          @change="onChange"\n        >\n          <template #buildOptionText="props">\n            <span>{{ props.value }}条/页</span>\n          </template>\n        </Pagination>\n      </div>\n    </template>\n  </List>\n</template>\n\n<script setup lang="ts">\nimport { onMounted, ref } from \'vue\'\nimport { ListItem, List, Avatar, SvgIcon, Button, Pagination, ListData } from \'@/lib\'\n\nimport { ajax } from \'@/eg/ajax\'\n\nconst loading = ref<boolean>(false)\nconst data = ref<ListData[]>([])\nconst current = ref<number>(1)\nconst pageSize = ref<number>(5)\nconst pageSizeOptions = ref<string[]>([\'5\', \'10\', \'20\', \'30\', \'40\'])\nconst dataNum = ref<number>(0)\n\nconst fetch = (url: string, count: number = 3) => {\n  if (url === \'/pagination\') {\n    loading.value = true\n    ;(\n      ajax(url, count, current.value, pageSize.value) as Promise<{\n        data: ListData[]\n        totalDateNum: number\n      }>\n    )\n      .then((res) => {\n        data.value = [...res.data]\n        dataNum.value = res.totalDateNum\n        loading.value = false\n      })\n      .catch((err) => {\n        console.log(err)\n        loading.value = false\n      })\n  }\n}\nonMounted(() => {\n  fetch(\'/pagination\')\n})\n\nconst onEdit = (item: ListData) => {\n  console.log(item)\n}\nconst onMore = (item: ListData) => {\n  console.log(item)\n}\n\n// 页码变动时发一次请求\nconst onChange = (newPageNum: number) => {\n  current.value = newPageNum\n  fetch(\'/pagination\')\n}\n<\/script>',t.__sourceTitle="分页加载"};ut(rt);const dt=n({__name:"Demo",setup(a){const n=l((()=>[et,lt,rt].map(((t,a)=>B(t,"list",a)))));return(a,e)=>(i(),g(t,{"demo-arr":m(n)},null,8,["demo-arr"]))}}),ct=n({__name:"Index",setup(t){y(null);const n=["基本用法","加载更多","分页加载"],e=l((()=>A("list",n)));return(t,n)=>(i(),g(a,{"nav-arr":m(e),title:"List 列表","component-name":"list"},{intro:u((()=>[r(at)])),demo:u((()=>[r(dt)])),api:u((()=>[r(nt)])),_:1},8,["nav-arr"]))}});export{ct as default};
