import{D as e,C as t}from"./DemoDisplay-6c845355.js";import{d as n,c as s,i as o,g as l,f as u,q as a,j as r,m as i,J as p,s as m,Q as c,r as d}from"./index-3d4a6970.js";import{_,P as y,T as f}from"./Paragraph-097073d3.js";import{_ as h}from"./ApiIntro.vue_vue_type_style_index_0_lang-ac37dd22.js";import{g,a as C}from"./helper-44ceac23.js";import{_ as S}from"./Result.vue_vue_type_script_setup_true_lang-4c507e83.js";const x=i("p",null,"用于反馈一系列操作任务的处理结果。",-1),v=i("ul",null,[i("li",null,"Result")],-1),B=i("p",null,"当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。",-1),R=n({__name:"Intro",setup:e=>(e,t)=>(s(),o(a(f),null,{default:l((()=>[u(a(_),{level:4},{default:l((()=>[r("简介")])),_:1}),u(a(y),null,{default:l((()=>[x])),_:1}),u(a(_),{level:4},{default:l((()=>[r("组件概述")])),_:1}),u(a(y),null,{default:l((()=>[v])),_:1}),u(a(_),{level:4},{default:l((()=>[r("使用场景")])),_:1}),u(a(y),null,{default:l((()=>[B])),_:1})])),_:1}))}),b=n({__name:"Api",setup(e){const t=[],n=[{componentName:"Result",attrContent:[{rowIndex:1,"属性":"status","说明":"结果的状态,决定图标和颜色","类型":"'error' | 'info' | 'warning' | 'success'","默认值":""}]}];return(e,l)=>(s(),o(h,{"attr-content-arr":n,"event-content":t}))}}),w=n({__name:"DemoOne",setup:e=>(e,t)=>(s(),o(a(S),{status:"success"},{title:l((()=>[r(" Successfully Purchased Cloud Server ECS! ")])),subTitle:l((()=>[r(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur dolore eum ex ipsum optio, qui voluptatum. Aliquid consectetur deserunt distinctio doloremque est, harum itaque nam odio quibusdam recusandae sapiente. ")])),extra:l((()=>[u(a(p),{key:"console",type:"primary"},{default:l((()=>[r("Go Console")])),_:1}),u(a(p),{key:"buy"},{default:l((()=>[r("Buy Again")])),_:1})])),_:1}))}),T=e=>{e.__sourceCode='<template>\n  <Result status="success">\n    <template #title> Successfully Purchased Cloud Server ECS! </template>\n    <template #subTitle>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur\n      dolore eum ex ipsum optio, qui voluptatum. Aliquid consectetur deserunt distinctio\n      doloremque est, harum itaque nam odio quibusdam recusandae sapiente.\n    </template>\n    <template #extra>\n      <Button key="console" type="primary">Go Console</Button>\n      <Button key="buy">Buy Again</Button>\n    </template>\n  </Result>\n</template>\n\n<script setup lang="ts">\nimport { Result, Button } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" success "};T(w);const k=n({__name:"DemoTwo",setup:e=>(e,t)=>(s(),o(a(S),{status:"info"},{title:l((()=>[r(" Successfully Purchased Cloud Server ECS! ")])),extra:l((()=>[u(a(p),{key:"console",type:"primary"},{default:l((()=>[r("Go Console")])),_:1})])),_:1}))}),P=e=>{e.__sourceCode='<template>\n  <Result status="info">\n    <template #title> Successfully Purchased Cloud Server ECS! </template>\n    <template #extra>\n      <Button key="console" type="primary">Go Console</Button>\n    </template>\n  </Result>\n</template>\n\n<script setup lang="ts">\nimport { Result, Button } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" info "};P(k);const A=n({__name:"DemoThree",setup:e=>(e,t)=>(s(),o(a(S),{status:"warning"},{title:l((()=>[r(" Successfully Purchased Cloud Server ECS! ")])),extra:l((()=>[u(a(p),{key:"console",type:"primary"},{default:l((()=>[r("Go Console")])),_:1})])),_:1}))}),G=e=>{e.__sourceCode='<template>\n  <Result status="warning">\n    <template #title> Successfully Purchased Cloud Server ECS! </template>\n    <template #extra>\n      <Button key="console" type="primary">Go Console</Button>\n    </template>\n  </Result>\n</template>\n\n<script setup lang="ts">\nimport { Result, Button } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" warning "};G(A);const q=n({__name:"DemoFour",setup:e=>(e,t)=>(s(),o(a(S),{status:"error"},{title:l((()=>[r(" Successfully Purchased Cloud Server ECS! ")])),extra:l((()=>[u(a(p),{key:"console",type:"primary"},{default:l((()=>[r("Go Console")])),_:1})])),_:1}))}),D=e=>{e.__sourceCode='<template>\n  <Result status="error">\n    <template #title> Successfully Purchased Cloud Server ECS! </template>\n    <template #extra>\n      <Button key="console" type="primary">Go Console</Button>\n    </template>\n  </Result>\n</template>\n\n<script setup lang="ts">\nimport { Result, Button } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" error "};D(q);const E=n({__name:"DemoFive",setup:e=>(e,t)=>(s(),o(a(S),null,{icon:l((()=>[u(a(m),{name:"notFound",width:"250px",height:"300px"})])),title:l((()=>[r(" Successfully Purchased Cloud Server ECS! ")])),extra:l((()=>[u(a(p),{key:"console",type:"primary"},{default:l((()=>[r("Go Home")])),_:1})])),_:1}))}),I=e=>{e.__sourceCode='<template>\n  <Result>\n    <template #icon>\n      <SvgIcon name="notFound" width="250px" height="300px" />\n    </template>\n    <template #title> Successfully Purchased Cloud Server ECS! </template>\n    <template #extra>\n      <Button key="console" type="primary">Go Home</Button>\n    </template>\n  </Result>\n</template>\n\n<script setup lang="ts">\nimport { Result, Button, SvgIcon } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" 404 "};I(E);const j={class:"desc"},F=i("p",{style:{"font-size":"16px"}},[i("strong",null,"The content you submitted has the following error:")],-1),z=i("a",null,"Thaw immediately >",-1),Y=i("a",null,"Apply Unlock >",-1),H=n({__name:"DemoSix",setup:e=>(e,t)=>(s(),o(a(S),{status:"error"},{title:l((()=>[r(" Submission Failed ")])),subTitle:l((()=>[r(" Please check and modify the following information before resubmitting.")])),extra:l((()=>[u(a(p),{type:"primary"},{default:l((()=>[r("Go Console")])),_:1}),u(a(p),null,{default:l((()=>[r("Buy Again")])),_:1})])),desc:l((()=>[i("div",j,[F,i("p",null,[u(a(m),{name:"cha",width:"14px",height:"14px",fill:"red"}),r(" Your account has been frozen "),z]),i("p",null,[u(a(m),{name:"cha",width:"12px",height:"12px",fill:"red"}),r(" Your account is not yet eligible to apply "),Y])])])),_:1}))}),L=e=>{e.__sourceCode='<template>\n  <Result status="error">\n    <template #title> Submission Failed </template>\n    <template #subTitle>\n      Please check and modify the following information before resubmitting.</template\n    >\n    <template #extra>\n      <Button type="primary">Go Console</Button>\n      <Button>Buy Again</Button>\n    </template>\n    <template #desc>\n      <div class="desc">\n        <p style="font-size: 16px">\n          <strong>The content you submitted has the following error:</strong>\n        </p>\n        <p>\n          <SvgIcon name="cha" width="14px" height="14px" fill="red" />\n          Your account has been frozen\n          <a>Thaw immediately &gt;</a>\n        </p>\n        <p>\n          <SvgIcon name="cha" width="12px" height="12px" fill="red" />\n          Your account is not yet eligible to apply\n          <a>Apply Unlock &gt;</a>\n        </p>\n      </div>\n    </template>\n  </Result>\n</template>\n\n<script setup lang="ts">\nimport { Result, Button, SvgIcon } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" 复杂的错误反馈。 "};L(H);const U=n({__name:"Demo",setup(t){const n=c((()=>[w,k,A,q,E,H].map(((e,t)=>g(e,"result",t)))));return(t,l)=>(s(),o(e,{"demo-arr":a(n)},null,8,["demo-arr"]))}}),J=n({__name:"Index",setup(e){d(null);const n=["success","info","warning","error","404","复杂的错误反馈。"],r=c((()=>C("result",n)));return(e,n)=>(s(),o(t,{"nav-arr":a(r),title:"Result 结果","component-name":"result"},{intro:l((()=>[u(R)])),demo:l((()=>[u(U)])),api:l((()=>[u(b)])),_:1},8,["nav-arr"]))}});export{J as default};