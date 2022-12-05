<template>
  <!--  修改-->
  <ComponentContent :nav-arr="navArr" title="Progress 进度条" component-name="progress">
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
  '小型进度条',
  '可以调整percent',
  '格式化info',
  '圆形进度条',
  '步骤进度条'
]
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('progress', titleArr)
})
</script>
