<template>
  <!--  修改-->
  <ComponentContent :nav-arr="navArr" title="Alert 警告提示" component-name="alert">
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

// 修改
const titleArr = [
  '基本用法',
  '可关闭的',
  '可添加描述',
  '可关闭',
  '自定义描述内容',
  '自定义icon',
  '没有icon'
]
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('alert', titleArr)
})
</script>
