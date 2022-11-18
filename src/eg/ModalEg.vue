<template>
  <div class="ui-template-wrap">
    <div style="height: 800px"></div>
    <Button type="primary" @click="showModal">Open Modal</Button>
    <Modal v-model:visible="visible">
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
    <div style="height: 800px"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/lib/modal/Modal.vue'
import Button from '@/lib/button/Button.vue'

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

<style lang="scss">
.ui-template-wrap {
}
</style>
