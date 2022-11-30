<template>
  <ComponentContent :nav-arr="navArr" title="Button 按钮" component-name="button">
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
