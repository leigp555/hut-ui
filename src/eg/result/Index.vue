<template>
  <!--  修改-->
  <ComponentContent :nav-arr="navArr" title="Result 结果" component-name="result">
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
const titleArr = ['success', 'info', 'warning', 'error', '404', '复杂的错误反馈。']
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('result', titleArr)
})
</script>
