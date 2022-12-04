<template>
  <!--  修改-->
  <ComponentContent :nav-arr="navArr" title="Carousel 走马灯" component-name="carousel">
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
  '向后播放',
  '不自动切换',
  '不显示左右跳转按钮',
  '不显示指示器'
]
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('carousel', titleArr)
})
</script>
