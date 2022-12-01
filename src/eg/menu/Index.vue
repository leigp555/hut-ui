<template>
  <!--  修改-->
  <ComponentContent :nav-arr="navArr" title="Menu 导航菜单" component-name="menu">
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
const titleArr = ['横向菜单栏', '垂直菜单栏', '菜单栏不折叠', '树形菜单栏(嵌套)']
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('menu', titleArr)
})
</script>
