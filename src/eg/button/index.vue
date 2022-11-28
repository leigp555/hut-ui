<template>
  <div class="ui-template-wrap scroll-container" ref="wrap">
    <Anchor
      customClass="customClass"
      style="top: 60px; right: 10px"
      :scroll-container="() => wrap"
    >
      <AnchorLink href="#ex-template-title" title="title" />
      <AnchorLink href="#ex-template-demo1" title="demo1" />
      <AnchorLink href="#ex-template-demo2" title="demo2" />
      <AnchorLink href="#ex-template-demo3" title="demo3" />
      <AnchorLink href="#ex-template-demo4" title="demo4" />
      <AnchorLink href="#ex-template-api" title="api" />
    </Anchor>
    <section class="title">
      <Title :level="2" id="ex-template-title">Affix 固钉</Title>
      <div class="title-description" style="height: 200px"></div>
    </section>
    <section class="example">
      <Title :level="4" class="demo" id="ex-template-demo">案例</Title>
      <div class="demo-wrap">
        <section id="ex-template-demo1" style="height: 200px">1</section>
        <section id="ex-template-demo2" style="height: 200px">2</section>
        <section id="ex-template-demo3" style="height: 200px">3</section>
        <section id="ex-template-demo4" style="height: 200px">4</section>
      </div>
    </section>
    <section class="api"></section>
    <Title :level="4" id="ex-template-api">接口</Title>
    <div class="apiIntro" style="height: 800px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Anchor, AnchorLink, Title } from '@/lib/index'

const wrap = ref<HTMLElement | null>(null)
</script>

<style lang="scss">
.ui-template-wrap {
  overflow-y: auto;
  max-height: 100%;
  scroll-behavior: smooth;
  padding: 40px 160px 80px 32px;
  @media (max-width: 500px) {
    padding: 40px 20px 80px 20px;
  }
  p {
    line-height: 2em;
  }
  .xx {
    margin-bottom: 40px;
    padding: 0 50px;
  }
}
</style>
