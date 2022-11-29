<template>
  <div class="ui-template-wrap scroll-container" ref="wrap">
    <!--    导航部分-->
    <Anchor
      customClass="customClass"
      style="top: 60px; right: 10px"
      :scroll-container="() => wrap"
    >
      <AnchorLink href="#ex-button-title" title="简介" />
      <AnchorLink href="#ex-button-demo" title="案例" />
      <AnchorLink href="#button-demo1" title="按钮类型" style="margin-left: 8px" />
      <AnchorLink href="#button-demo2" title="圆形按钮" style="margin-left: 8px" />
      <AnchorLink href="#button-demo3" title="加载中状态" style="margin-left: 8px" />
      <AnchorLink href="#button-demo4" title="大小可选" style="margin-left: 8px" />
      <AnchorLink href="#button-demo5" title="禁用按钮" style="margin-left: 8px" />
      <AnchorLink href="#button-demo6" title="支持icon" style="margin-left: 8px" />
      <AnchorLink href="#button-demo7" title="危险按钮" style="margin-left: 8px" />
      <AnchorLink href="#ex-button-api" title="接口" />
    </Anchor>

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
      <div class="apiIntro">
        <Api />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Intro from './Intro.vue'
import Api from './Api.vue'

import { Anchor, AnchorLink, Title } from '@/lib/index'
import Demo from './demo/Demo.vue'

const wrap = ref<HTMLElement | null>(null)
</script>

<style lang="scss">
.ui-template-wrap {
  overflow-y: auto;
  overflow-x: auto;
  max-height: 100%;
  scroll-behavior: smooth;
  padding: 0 120px 80px 32px;
  @media (max-width: 1000px) {
    padding: 0 10px 80px 10px;
  }
  p {
    line-height: 2em;
  }
  > .customClass {
    font-size: 12px;
  }
  > .title {
    margin-top: 40px;
    > .title-description {
    }
  }
  > .example {
    padding: 10px;
    margin-top: 40px;
    > .example-wrap {
    }
  }
  > .api {
    padding: 10px;
    margin-top: 40px;
    > .apiIntro {
    }
  }
}
</style>
