<template>
  <!--  修改-->
  <ComponentContent
    :nav-arr="navArr"
    title="Breadcrumb 面包屑"
    component-name="breadcrumb"
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
const titleArr = ['常规用法', '自定义分隔符', '嵌入icon', '支持链接']
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('breadcrumb', titleArr)
})
</script>
