<template>
  <div class="ui-template-wrap">
    <div class="action">
      <Button type="primary" @click="showDrawer1">Open</Button>
      <Button type="primary" @click="showDrawer2">Open</Button>
      <Button type="primary" @click="showDrawer3">Open</Button>
      <Button type="primary" @click="showDrawer4">Open</Button>
    </div>
    <!--    左边-->
    <Drawer
      v-model:visible="visible1"
      placement="left"
      @afterClose="afterClose"
      classname="custom"
    >
      <template #title>
        <span class="title" :style="{ width: '300px' }">Basic Drawer</span>
      </template>
      <template #content>
        <div class="content">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
      </template>
    </Drawer>
    <!--    右边-->
    <Drawer
      v-model:visible="visible2"
      placement="right"
      @afterClose="afterClose"
      classname="custom"
      :style="{ width: '300px' }"
    >
      <template #title>
        <span class="title">Basic Drawer</span>
      </template>
      <template #content>
        <div class="content">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
      </template>
    </Drawer>
    <!--    上边-->
    <Drawer
      v-model:visible="visible3"
      placement="top"
      @afterClose="afterClose"
      classname="custom"
    >
      <template #title>
        <span class="title">Basic Drawer</span>
      </template>
      <template #content>
        <div class="content">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
      </template>
    </Drawer>
    <!--    下边-->
    <Drawer
      v-model:visible="visible4"
      placement="bottom"
      @afterClose="afterClose"
      classname="custom"
    >
      <template #title>
        <span class="title">Basic Drawer</span>
      </template>
      <template #content>
        <div class="content">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
      </template>
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
.custom {
  .title {
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid #f0f0f0;
  }
  .content {
    padding: 24px;
    line-height: 1.5em;
    color: red;
  }
}
</style>
