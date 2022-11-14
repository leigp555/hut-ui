<template>
  <div class="ui-template-wrap">
    <Tabs v-model:activeKey="activeKey" centered>
      <Tab keyValue="1" tab="Tab 1">Content of Tab Pane 1</Tab>
      <Tab keyValue="2" tab="Tab 2xxx" force-render>Content of Tab Pane 2</Tab>
      <Tab keyValue="3" tab="Tab 3">Content of Tab Pane 3</Tab>
      <Tab keyValue="4" tab="Tab 4" disabled>Content of Tab Pane 4</Tab>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tabs from '@/lib/tabs/Tabs.vue'
import Tab from '@/lib/tabs/Tab.vue'

const activeKey = ref<string>('1')
</script>

<style lang="scss">
.ui-template-wrap {
  margin: 100px;
  padding: 20px;
  border: 1px solid red;
}
</style>
