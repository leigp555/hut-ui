<template>
  <div class="ui-template-wrap scroll-container" ref="wrap">
    <!--    导航部分-->
    <section class="nav">
      <Anchor
        customClass="customClass"
        style="top: 60px; right: 16px"
        :scroll-container="() => wrap"
      >
        <AnchorLink
          v-for="item in navArr"
          :key="item.id"
          :href="item.id"
          :title="item.title"
          :nested="item.nested"
        />
      </Anchor>
    </section>

    <!--    介绍部分-->
    <section class="title">
      <Title :level="2" id="ex-button-title">Button 按钮</Title>
      <div class="title-description">
        <Intro />
      </div>
    </section>

    <!--    示例部分-->
    <section class="example">
      <Title :level="4" class="demo" id="ex-button-demo">案例</Title>
      <div class="example-wrap">
        <Demo />
      </div>
    </section>

    <!--    api介绍部分-->
    <section class="api">
      <Title :level="4" id="ex-button-api">接口</Title>
      <div class="apiIntro scroll-container">
        <Api />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Anchor, AnchorLink, Title } from '@/lib/index'

import Intro from './Intro.vue'
import Api from './Api.vue'
import Demo from './demo/Demo.vue'

const wrap = ref<HTMLElement | null>(null)

const generateNav = (componentName: string, titleArr: string[]) => {
  const arr: { id: string; title: string; nested: boolean }[] = [
    { id: `#ex-${componentName}-title`, title: '简介', nested: false },
    { id: `#ex-${componentName}-demo`, title: '案例', nested: false }
  ]
  const demoNavArr = titleArr.map((item, index) => {
    return { id: `#${componentName}-demo-${index}`, title: `${item}`, nested: true }
  })
  return [
    ...arr,
    ...demoNavArr,
    { id: `#ex-${componentName}-api`, title: '接口', nested: false }
  ]
}
const titleArr = [
  '按钮类型',
  '圆形按钮',
  '加载中状态',
  '大小可选',
  '禁用按钮',
  '支持icon',
  '危险按钮'
]
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('button', titleArr)
})
</script>

<style lang="scss">
.ui-template-wrap {
  overflow-y: auto;
  overflow-x: auto;
  max-height: 100%;
  scroll-behavior: smooth;
  padding: 0 170px 80px 32px;
  @media (max-width: 1000px) {
    padding: 0 120px 100px 10px;
  }
  @media (max-width: 600px) {
    padding: 0 10px 100px 10px;
  }
  p {
    line-height: 2em;
  }
  > .nav {
    @media (max-width: 600px) {
      display: none;
    }
    > .customClass {
      font-size: 12px;
    }
  }
  > .title {
    margin-top: 50px;
    > .title-description {
    }
  }
  > .example {
    padding: 10px;
    margin-top: 40px;
    > .example-wrap {
      margin-top: 50px;
    }
  }
  > .api {
    padding: 10px;
    margin-top: 40px;
    > .apiIntro {
      margin-top: 50px;
      overflow-x: auto;
    }
  }
}
</style>
