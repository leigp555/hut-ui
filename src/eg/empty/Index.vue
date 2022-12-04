<template>
  <!--  修改-->
  <ComponentContent :nav-arr="navArr" title="Empty 空状态" component-name="empty">
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
const titleArr = ['基本用法', '自定义图片', '自定义描述']
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('empty', titleArr)
})
</script>
