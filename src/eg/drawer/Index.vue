<template>
  <!--  修改-->
  <ComponentContent :nav-arr="navArr" title="Drawer 抽屉" component-name="drawer">
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
const titleArr = ['左边弹出', '右边弹出', '上边弹出', '下边弹出', '点击蒙层不关闭']
const navArr = computed<{ id: string; title: string; nested: boolean }[]>(() => {
  return generateNav('drawer', titleArr)
})
</script>
