<template>
  <!--  修改-->
  <ComponentContent
    :nav-arr="navArr"
    title="AutoComplete 自动完成"
    component-name="autoComplete"
  >
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
const titleArr = ['基本用法', '自定义每条数据渲染方式', '更复杂的渲染']
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('autoComplete', titleArr)
})
</script>
