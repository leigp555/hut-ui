<template>
  <div class="ui-template-wrap">
    <!--    <div style="height: 800px"></div>-->
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
    <div style="height: 100px"></div>
    <div class="actions">
      <Button @click="info">Info</Button>
      <Button @click="success">Success</Button>
      <Button @click="error">Error</Button>
      <Button @click="warning">Warning</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import Modal from '@/lib/modal/Modal.vue'
import { modal } from '@/lib/modal/modal'
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

const info = () => {
  modal.info({
    title: 'This is a notification message',
    content: h('div', {}, [
      h('p', 'some messages...some messages...'),
      h('p', 'some messages...some messages...')
    ]),
    onOk: () => {
      console.log('ok')
    },
    okText: '确认了',
    onCancel: () => {
      console.log('cancel')
    },
    cancelText: '知道了',
    width: 500,
    top: 200,
    maskClosable: true
  })
}
const success = () => {
  modal.success({
    title: 'This is a success message',
    content: h('div', {}, [
      h('p', 'some messages...some messages...'),
      h('p', 'some messages...some messages...')
    ])
  })
}

const error = () => {
  modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...'
  })
}

const warning = () => {
  modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...'
  })
}
</script>

<style lang="scss">
.ui-template-wrap {
  .actions {
    display: flex;
    gap: 20px;
  }
}
</style>
