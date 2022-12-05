<demo>
信息提示
</demo>

<template>
  <div class="actions">
    <Button @click="info">Info</Button>
    <Button @click="success">Success</Button>
    <Button @click="error">Error</Button>
    <Button @click="warning">Warning</Button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Button, modal } from '@/lib'

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
    okText: 'confirm',
    onCancel: () => {
      console.log('cancel')
    },
    cancelText: 'cancel',
    width: 400,
    top: 200,
    maskClosable: true
  })
}
const success = () => {
  modal.success({
    title: 'This is a success message',
    width: 400,
    content: h('div', {}, [
      h('p', 'some messages...some messages...'),
      h('p', 'some messages...some messages...')
    ])
  })
}

const error = () => {
  modal.error({
    title: 'This is an error message',
    width: 400,
    content: 'some messages...some messages...'
  })
}

const warning = () => {
  modal.warning({
    title: 'This is a warning message',
    width: 400,
    content: 'some messages...some messages...'
  })
}
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  gap: 20px;
}
</style>
