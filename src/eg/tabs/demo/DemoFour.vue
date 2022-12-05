<demo>
不同长度的title
</demo>

<template>
  <Tabs v-model:activeKey="activeKey" centered>
    <Tab keyValue="1" tab="Tab 1">Content of Tab Pane 1</Tab>
    <Tab keyValue="2" tab="Tab 2xxx" force-render>Content of Tab Pane 2</Tab>
    <Tab keyValue="3" tab="Tab 3">Content of Tab Pane 3</Tab>
    <Tab keyValue="4" tab="Tab 4" disabled>Content of Tab Pane 4</Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, Tab } from '@/lib'

const activeKey = ref<string>('1')
</script>
