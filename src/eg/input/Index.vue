<template>
  <!--  修改-->
  <ComponentContent :nav-arr="navArr" title="Input 输入框" component-name="input">
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
  '支持input前后添加icon',
  '密码输入框',
  '输入框外添加元素',
  '输入框外前后添加元素',
  '适应文本高度的文本域',
  '设置文本最大高度和最小高度',
  '文本框设置可拖拉',
  '带字数提示'
]
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('input', titleArr)
})
</script>
