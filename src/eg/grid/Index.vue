<template>
  <ComponentContent :nav-arr="navArr" title="Grid 栅格" component-name="grid">
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
  '基本示例',
  '子元素垂直对齐',
  '子元素水平分布',
  '调整子元素间距',
  '设置偏移量'
]
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('grid', titleArr)
})
</script>
