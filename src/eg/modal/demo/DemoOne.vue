<demo>
基本用法
</demo>

<template>
  <Button type="primary" @click="showModal">Open Modal</Button>
  <Modal v-model:visible="visible" :width="520" :top="100" :mask-closable="false">
    <template #title>
      <span>Basic Modal</span>
    </template>
    <template #content>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </template>
    <template #footer>
      <Button type="default" @click="handleCancel">取消</Button>
      <Button type="primary" @click="handleOk">确认</Button>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@/lib'

const visible = ref<boolean>(false)

const showModal = () => {
  visible.value = true
}
const handleOk = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}
</script>
