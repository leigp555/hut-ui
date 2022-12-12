import{D as p,C as n}from"./DemoDisplay-53a9c10a.js";import{d as l,r as u,c as a,e,n as t,B as s,j as o,g as r,f as c,q as i,k as m,I as d,_,p as f,m as v,J as T}from"./index-6bb449f3.js";import{_ as k,P as g,T as B}from"./Paragraph-138135f0.js";import{_ as b}from"./ApiIntro-fdf4ccdf.js";import{g as x,a as h}from"./helper-7416cab9.js";const w={class:"ui-backTop-content"},I=l({__name:"BackTop",setup(p){const n=u(null),l=u(0),o=()=>{l.value=n.value.scrollTop;const p=l.value/10,u=setInterval((()=>{l.value>0?(n.value.scrollTo(0,l.value-p),l.value-=p):window.clearInterval(u)}),10)};return(p,l)=>(a(),e("div",{class:"ui-backTop-wrap",ref_key:"wrapRef",ref:n},[t("div",w,[s(p.$slots,"default")]),t("div",{class:"ui-backTop-action",onClick:o},[s(p.$slots,"action")])],512))}}),j=t("p",null,"返回页面顶部的操作按钮。",-1),y=t("ul",null,[t("li",null,"BackTop: 主要组件")],-1),D=t("ul",null,[t("li",null,"当页面内容区域比较长时；"),t("li",null,"当用户需要频繁返回顶部查看相关内容时。")],-1),C=l({__name:"Intro",setup:p=>(p,n)=>(a(),o(i(B),null,{default:r((()=>[c(i(k),null,{default:r((()=>[m("简介")])),_:1}),c(i(g),null,{default:r((()=>[j])),_:1}),c(i(k),null,{default:r((()=>[m("组件概览")])),_:1}),c(i(g),null,{default:r((()=>[y])),_:1}),c(i(k),null,{default:r((()=>[m("使用场景")])),_:1}),c(i(g),null,{default:r((()=>[D])),_:1})])),_:1}))}),A=l({__name:"Api",setup(p){const n=[],l=[];return(p,u)=>(a(),o(b,{"attr-content-arr":l,"event-content":n}))}});var H=p=>{p.__sourceCode='<template>\n  <div class="wrap">\n    <BackTop :style="{ maxHeight: \'500px\' }">\n      <template #action>\n        <Button>go Top</Button>\n      </template>\n      <p>我是最顶端.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n      <p>风吹马尾千条线，雨打羊毛一片毡.....</p>\n    </BackTop>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { BackTop, Button } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  p {\n    font-size: 14px;\n    line-height: 2em;\n  }\n}\n</style>',p.__sourceTitle=" 基本用法 "};const P=p=>(f("data-v-27e1cf1d"),p=p(),v(),p),$={class:"wrap"},q=P((()=>t("p",null,"我是最顶端.....",-1))),z=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),J=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),O=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),R=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),E=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),F=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),G=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),K=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),L=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),M=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),N=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Q=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),S=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),U=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),V=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),W=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),X=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Y=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Z=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),pp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),np=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),lp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),up=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),ap=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),ep=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),tp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),sp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),op=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),rp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),cp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),ip=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),mp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),dp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),_p=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),fp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),vp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Tp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),kp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),gp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Bp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),bp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),xp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),hp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),wp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Ip=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),jp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),yp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Dp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Cp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Ap=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Hp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Pp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),$p=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),qp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),zp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Jp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Op=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Rp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Ep=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Fp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Gp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Kp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Lp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Mp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Np=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Qp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Sp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Up=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Vp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Wp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Xp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Yp=P((()=>t("p",null,"风吹马尾千条线，雨打羊毛一片毡.....",-1))),Zp=l({__name:"DemoOne",setup:p=>(p,n)=>(a(),e("div",$,[c(i(I),{style:{maxHeight:"500px"}},{action:r((()=>[c(i(d),null,{default:r((()=>[m("go Top")])),_:1})])),default:r((()=>[q,z,J,O,R,E,F,G,K,L,M,N,Q,S,U,V,W,X,Y,Z,pp,np,lp,up,ap,ep,tp,sp,op,rp,cp,ip,mp,dp,_p,fp,vp,Tp,kp,gp,Bp,bp,xp,hp,wp,Ip,jp,yp,Dp,Cp,Ap,Hp,Pp,$p,qp,zp,Jp,Op,Rp,Ep,Fp,Gp,Kp,Lp,Mp,Np,Qp,Sp,Up,Vp,Wp,Xp,Yp])),_:1})]))});H(Zp);var pn=_(Zp,[["__scopeId","data-v-27e1cf1d"]]);const nn=l({__name:"Demo",setup(n){const l=T((()=>[pn].map(((p,n)=>x(p,"backTop",n)))));return(n,u)=>(a(),o(p,{"demo-arr":i(l)},null,8,["demo-arr"]))}}),ln=l({__name:"Index",setup(p){u(null);const l=["基本用法"],e=T((()=>h("backTop",l)));return(p,l)=>(a(),o(n,{"nav-arr":i(e),title:"BackTop 回到顶部","component-name":"backTop"},{intro:r((()=>[c(C)])),demo:r((()=>[c(nn)])),api:r((()=>[c(A)])),_:1},8,["nav-arr"]))}});export{ln as default};