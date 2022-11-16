<template>
  <div class="ui-template-wrap">
    <div class="action">
      <Button type="primary" @click="showDrawer1">Open</Button>
      <Button type="primary" @click="showDrawer2">Open</Button>
      <Button type="primary" @click="showDrawer3">Open</Button>
      <Button type="primary" @click="showDrawer4">Open</Button>
    </div>

    <Drawer
      v-model:visible="visible1"
      title="Basic Drawer"
      placement="left"
      @afterClose="afterClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
    <Drawer
      v-model:visible="visible2"
      title="Basic Drawer"
      placement="right"
      @afterClose="afterClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
    <Drawer
      v-model:visible="visible3"
      title="Basic Drawer"
      placement="top"
      @afterClose="afterClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
    <Drawer
      v-model:visible="visible4"
      title="Basic Drawer"
      placement="bottom"
      @afterClose="afterClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/lib/drawer/Drawer.vue'
import Button from '@/lib/button/Button.vue'

const visible1 = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const visible3 = ref<boolean>(false)
const visible4 = ref<boolean>(false)
const showDrawer1 = () => {
  visible1.value = true
}
const showDrawer2 = () => {
  visible2.value = true
}
const showDrawer3 = () => {
  visible3.value = true
}
const showDrawer4 = () => {
  visible4.value = true
}
const afterClose = () => {
  console.log('close')
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  gap: 50px;
  > .action {
    display: flex;
    gap: 50px;
  }
}
</style>
