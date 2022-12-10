import{D as t,C as n}from"./DemoDisplay-d6102924.js";import{a as e}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";import{_ as l,P as p,T as o}from"./Footer-492e9d3a.js";import{d as a,v as i,r as u,c as r,e as c,f as s,g as m,A as d,l as v,s as f,z as C,B as T,T as g,i as _,m as B,j as L,_ as P,p as h,k,x}from"./index-4bdb761c.js";import{_ as b}from"./ApiIntro-e7a82855.js";import{g as y,a as j}from"./helper-f72534c2.js";const w={class:"ui-popover-title"},R={class:"ui-popover-content"},I={style:{"pointer-events":"none"}},D=a({__name:"Popover",props:{placement:{default:"topCenter"},trigger:{default:"hover"}},setup(t){const n=t,{trigger:e}=i(n),l=u(!1),p=()=>{"click"===e.value&&(l.value=!l.value)},o=()=>{"click"===e.value&&(l.value=!1)},a=()=>{"hover"===e.value&&(l.value=!0)},_=()=>{"hover"===e.value&&(l.value=!1)};return(n,e)=>(r(),c("div",{class:"ui-popover-wrap",tabindex:"-1",onClick:p,onMouseover:a,onMouseleave:_,onBlur:o},[s(g,{name:"fade"},{default:m((()=>[d(v("div",{class:f(["ui-popover-tip",{[t.placement]:!0}])},[v("p",w,[C(n.$slots,"title")]),v("div",R,[C(n.$slots,"content")])],2),[[T,l.value]])])),_:3}),v("div",I,[C(n.$slots,"default")])],32))}}),A=v("p",null,"点击/鼠标移入元素，弹出气泡式的卡片浮层。",-1),$=v("ul",null,[v("li",null,"Popover: 主要组件")],-1),M=v("ul",null,[v("li",null," 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。 ")],-1),z=a({__name:"Intro",setup:t=>(t,n)=>(r(),_(B(o),null,{default:m((()=>[s(B(l),null,{default:m((()=>[L("简介")])),_:1}),s(B(p),null,{default:m((()=>[A])),_:1}),s(B(l),null,{default:m((()=>[L("组件概览")])),_:1}),s(B(p),null,{default:m((()=>[$])),_:1}),s(B(l),null,{default:m((()=>[L("使用场景")])),_:1}),s(B(p),null,{default:m((()=>[M])),_:1})])),_:1}))}),F=a({__name:"Api",setup(t){const n=[],e=[{componentName:"Popover",attrContent:[{rowIndex:1,"属性":"placement","说明":"弹出框位置","类型":"Placement","默认值":"topCenter"},{rowIndex:2,"属性":"trigger","说明":"触发方式","类型":"'hover' | 'click'","默认值":"hover"}]}];return(t,l)=>(r(),_(b,{"attr-content-arr":e,"event-content":n}))}});var N=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <div class="top">\n      <Popover placement="topLeft">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="topCenter">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="topRight">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n    </div>\n    <div class="left-right">\n      <div class="left">\n        <Popover placement="leftTop">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="leftCenter">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="leftBottom">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n      </div>\n      <div class="right">\n        <Popover placement="rightTop">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="rightCenter">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="rightBottom">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n      </div>\n    </div>\n    <div class="bottom">\n      <Popover placement="bottomLeft">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="bottomCenter">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="bottomRight">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Popover, Button } from \'ant\'\n<\/script>\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  .top,\n  .bottom {\n    display: flex;\n    gap: 40px;\n    justify-content: center;\n  }\n  .left-right {\n    display: flex;\n    justify-content: center;\n    gap: 240px;\n    > .left,\n    .right {\n      display: flex;\n      flex-direction: column;\n      gap: 40px;\n    }\n  }\n}\n</style>',t.__sourceTitle=" hover触发 "};const O=t=>(h("data-v-73a17997"),t=t(),k(),t),U={class:"wrap"},q={class:"top"},E=O((()=>v("p",null,"Content",-1))),G=O((()=>v("p",null,"Content",-1))),H=O((()=>v("span",null,"Title",-1))),J=O((()=>v("p",null,"Content",-1))),K=O((()=>v("p",null,"Content",-1))),Q=O((()=>v("span",null,"Title",-1))),S=O((()=>v("p",null,"Content",-1))),V=O((()=>v("p",null,"Content",-1))),W=O((()=>v("span",null,"Title",-1))),X={class:"left-right"},Y={class:"left"},Z=O((()=>v("p",null,"Content",-1))),tt=O((()=>v("p",null,"Content",-1))),nt=O((()=>v("span",null,"Title",-1))),et=O((()=>v("p",null,"Content",-1))),lt=O((()=>v("p",null,"Content",-1))),pt=O((()=>v("span",null,"Title",-1))),ot=O((()=>v("p",null,"Content",-1))),at=O((()=>v("p",null,"Content",-1))),it=O((()=>v("span",null,"Title",-1))),ut={class:"right"},rt=O((()=>v("p",null,"Content",-1))),ct=O((()=>v("p",null,"Content",-1))),st=O((()=>v("span",null,"Title",-1))),mt=O((()=>v("p",null,"Content",-1))),dt=O((()=>v("p",null,"Content",-1))),vt=O((()=>v("span",null,"Title",-1))),ft=O((()=>v("p",null,"Content",-1))),Ct=O((()=>v("p",null,"Content",-1))),Tt=O((()=>v("span",null,"Title",-1))),gt={class:"bottom"},_t=O((()=>v("p",null,"Content",-1))),Bt=O((()=>v("p",null,"Content",-1))),Lt=O((()=>v("span",null,"Title",-1))),Pt=O((()=>v("p",null,"Content",-1))),ht=O((()=>v("p",null,"Content",-1))),kt=O((()=>v("span",null,"Title",-1))),xt=O((()=>v("p",null,"Content",-1))),bt=O((()=>v("p",null,"Content",-1))),yt=O((()=>v("span",null,"Title",-1))),jt=a({__name:"DemoOne",setup:t=>(t,n)=>(r(),c("div",U,[v("div",q,[s(B(D),{placement:"topLeft"},{content:m((()=>[E,G])),title:m((()=>[H])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"topCenter"},{content:m((()=>[J,K])),title:m((()=>[Q])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"topRight"},{content:m((()=>[S,V])),title:m((()=>[W])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1})]),v("div",X,[v("div",Y,[s(B(D),{placement:"leftTop"},{content:m((()=>[Z,tt])),title:m((()=>[nt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"leftCenter"},{content:m((()=>[et,lt])),title:m((()=>[pt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"leftBottom"},{content:m((()=>[ot,at])),title:m((()=>[it])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1})]),v("div",ut,[s(B(D),{placement:"rightTop"},{content:m((()=>[rt,ct])),title:m((()=>[st])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"rightCenter"},{content:m((()=>[mt,dt])),title:m((()=>[vt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"rightBottom"},{content:m((()=>[ft,Ct])),title:m((()=>[Tt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1})])]),v("div",gt,[s(B(D),{placement:"bottomLeft"},{content:m((()=>[_t,Bt])),title:m((()=>[Lt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"bottomCenter"},{content:m((()=>[Pt,ht])),title:m((()=>[kt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"bottomRight"},{content:m((()=>[xt,bt])),title:m((()=>[yt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1})])]))});N(jt);var wt=P(jt,[["__scopeId","data-v-73a17997"]]),Rt=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <div class="top">\n      <Popover placement="topLeft" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="topCenter" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="topRight" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n    </div>\n    <div class="left-right">\n      <div class="left">\n        <Popover placement="leftTop" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="leftCenter" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="leftBottom" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n      </div>\n      <div class="right">\n        <Popover placement="rightTop" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="rightCenter" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n        <Popover placement="rightBottom" trigger="click">\n          <template #content>\n            <p>Content</p>\n            <p>Content</p>\n          </template>\n          <template #title>\n            <span>Title</span>\n          </template>\n          <Button>TL</Button>\n        </Popover>\n      </div>\n    </div>\n    <div class="bottom">\n      <Popover placement="bottomLeft" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="bottomCenter" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n      <Popover placement="bottomRight" trigger="click">\n        <template #content>\n          <p>Content</p>\n          <p>Content</p>\n        </template>\n        <template #title>\n          <span>Title</span>\n        </template>\n        <Button>TL</Button>\n      </Popover>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Popover, Button } from \'ant\'\n<\/script>\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  .top,\n  .bottom {\n    display: flex;\n    gap: 40px;\n    justify-content: center;\n  }\n  .left-right {\n    display: flex;\n    justify-content: center;\n    gap: 240px;\n    > .left,\n    .right {\n      display: flex;\n      flex-direction: column;\n      gap: 40px;\n    }\n  }\n}\n</style>',t.__sourceTitle=" click触发 "};const It=t=>(h("data-v-36b80db6"),t=t(),k(),t),Dt={class:"wrap"},At={class:"top"},$t=It((()=>v("p",null,"Content",-1))),Mt=It((()=>v("p",null,"Content",-1))),zt=It((()=>v("span",null,"Title",-1))),Ft=It((()=>v("p",null,"Content",-1))),Nt=It((()=>v("p",null,"Content",-1))),Ot=It((()=>v("span",null,"Title",-1))),Ut=It((()=>v("p",null,"Content",-1))),qt=It((()=>v("p",null,"Content",-1))),Et=It((()=>v("span",null,"Title",-1))),Gt={class:"left-right"},Ht={class:"left"},Jt=It((()=>v("p",null,"Content",-1))),Kt=It((()=>v("p",null,"Content",-1))),Qt=It((()=>v("span",null,"Title",-1))),St=It((()=>v("p",null,"Content",-1))),Vt=It((()=>v("p",null,"Content",-1))),Wt=It((()=>v("span",null,"Title",-1))),Xt=It((()=>v("p",null,"Content",-1))),Yt=It((()=>v("p",null,"Content",-1))),Zt=It((()=>v("span",null,"Title",-1))),tn={class:"right"},nn=It((()=>v("p",null,"Content",-1))),en=It((()=>v("p",null,"Content",-1))),ln=It((()=>v("span",null,"Title",-1))),pn=It((()=>v("p",null,"Content",-1))),on=It((()=>v("p",null,"Content",-1))),an=It((()=>v("span",null,"Title",-1))),un=It((()=>v("p",null,"Content",-1))),rn=It((()=>v("p",null,"Content",-1))),cn=It((()=>v("span",null,"Title",-1))),sn={class:"bottom"},mn=It((()=>v("p",null,"Content",-1))),dn=It((()=>v("p",null,"Content",-1))),vn=It((()=>v("span",null,"Title",-1))),fn=It((()=>v("p",null,"Content",-1))),Cn=It((()=>v("p",null,"Content",-1))),Tn=It((()=>v("span",null,"Title",-1))),gn=It((()=>v("p",null,"Content",-1))),_n=It((()=>v("p",null,"Content",-1))),Bn=It((()=>v("span",null,"Title",-1))),Ln=a({__name:"DemoTwo",setup:t=>(t,n)=>(r(),c("div",Dt,[v("div",At,[s(B(D),{placement:"topLeft",trigger:"click"},{content:m((()=>[$t,Mt])),title:m((()=>[zt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"topCenter",trigger:"click"},{content:m((()=>[Ft,Nt])),title:m((()=>[Ot])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"topRight",trigger:"click"},{content:m((()=>[Ut,qt])),title:m((()=>[Et])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1})]),v("div",Gt,[v("div",Ht,[s(B(D),{placement:"leftTop",trigger:"click"},{content:m((()=>[Jt,Kt])),title:m((()=>[Qt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"leftCenter",trigger:"click"},{content:m((()=>[St,Vt])),title:m((()=>[Wt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"leftBottom",trigger:"click"},{content:m((()=>[Xt,Yt])),title:m((()=>[Zt])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1})]),v("div",tn,[s(B(D),{placement:"rightTop",trigger:"click"},{content:m((()=>[nn,en])),title:m((()=>[ln])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"rightCenter",trigger:"click"},{content:m((()=>[pn,on])),title:m((()=>[an])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"rightBottom",trigger:"click"},{content:m((()=>[un,rn])),title:m((()=>[cn])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1})])]),v("div",sn,[s(B(D),{placement:"bottomLeft",trigger:"click"},{content:m((()=>[mn,dn])),title:m((()=>[vn])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"bottomCenter",trigger:"click"},{content:m((()=>[fn,Cn])),title:m((()=>[Tn])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1}),s(B(D),{placement:"bottomRight",trigger:"click"},{content:m((()=>[gn,_n])),title:m((()=>[Bn])),default:m((()=>[s(B(e),null,{default:m((()=>[L("TL")])),_:1})])),_:1})])]))});Rt(Ln);var Pn=P(Ln,[["__scopeId","data-v-36b80db6"]]);const hn=a({__name:"Demo",setup(n){const e=x((()=>[wt,Pn].map(((t,n)=>y(t,"popover",n)))));return(n,l)=>(r(),_(t,{"demo-arr":B(e)},null,8,["demo-arr"]))}}),kn=a({__name:"Index",setup(t){u(null);const e=["hover触发","click触发"],l=x((()=>j("popover",e)));return(t,e)=>(r(),_(n,{"nav-arr":B(l),title:"Popover 气泡卡片","component-name":"popover"},{intro:m((()=>[s(z)])),demo:m((()=>[s(hn)])),api:m((()=>[s(F)])),_:1},8,["nav-arr"]))}});export{kn as default};