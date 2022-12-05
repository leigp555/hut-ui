<demo>
点击蒙层不关闭
</demo>

<template>
  <Button type="primary" @click="showDrawer">Open</Button>
  <Drawer
    v-model:visible="visible"
    placement="bottom"
    @afterClose="afterClose"
    classname="custom"
    :maskClosable="false"
  >
    <template #title>
      <div class="title">
        <span>Basic Drawer</span>
        <SvgIcon name="cha" width="1em" height="1em" @click="onClose" />
      </div>
    </template>
    <template #content>
      <div class="content">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, SvgIcon, Button } from '@/lib'

const visible = ref<boolean>(false)
const onClose = () => {
  visible.value = false
}
const afterClose = () => {
  console.log('close')
}
const showDrawer = () => {
  visible.value = true
}
</script>
