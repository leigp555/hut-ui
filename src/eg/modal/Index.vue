<template>
  <!--  修改-->
  <ComponentContent :nav-arr="navArr" title="Modal 对话框" component-name="modal">
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
const titleArr = ['基本用法', '信息提示', '自定义提示内容']
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('modal', titleArr)
})
</script>
