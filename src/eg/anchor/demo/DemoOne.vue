<demo>
常规用法
</demo>
<template>
  <Affix :scroll-container="scrollContainer" :offset-top="50">
    <Anchor
      customClass="customClass"
      :scroll-container="scrollContainer"
      :affix="false"
    >
      <AnchorLink
        v-for="item in navArr"
        :key="item.id"
        :href="item.id"
        :title="item.title"
        :nested="item.nested"
      />
    </Anchor>
  </Affix>
</template>

<script setup lang="ts">
import { Anchor, AnchorLink, Affix } from '@/lib'

const navArr = [
  { id: `#ex-anchor-title`, title: '简介', nested: false },
  { id: `#ex-anchor-demo`, title: '案例', nested: false },
  { id: `#anchor-demo-0`, title: `常规用法`, nested: true },
  { id: `#anchor-demo-1`, title: `不浮动`, nested: true },
  { id: `#ex-anchor-api`, title: '接口', nested: false }
]
const scrollContainer = () => document.getElementById('display-container-wrap')
</script>
