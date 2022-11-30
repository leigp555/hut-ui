<template>
  <ComponentContent :nav-arr="navArr" title="Button 按钮">
    <template #intro>
      <Intro />
    </template>
    <template #demo>
      <Demo />
    </template>
    <template #api>
      <Api />
    </template>
  </ComponentContent>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ComponentContent from '@/components/ComponentContent.vue'

import Intro from './Intro.vue'
import Api from './Api.vue'
import Demo from './demo/Demo.vue'
import { generateNav } from '@/eg/helper'

const wrap = ref<HTMLElement | null>(null)

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
