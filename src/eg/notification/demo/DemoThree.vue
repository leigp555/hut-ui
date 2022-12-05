<demo>
自定义提示内容
</demo>
<template>
  <Button type="primary" @click="openNotification">Custom</Button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { SvgIcon, notification, Button } from '@/lib'

const openNotification = () => {
  notification.custom({
    message: h('p', { style: { color: 'red' } }, 'Notification Title'),
    description: h(
      'p',
      { style: { color: 'orange' } },
      " 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'"
    ),
    icon: h(SvgIcon, { name: 'weixin', width: '1em', height: '1em' }),
    onOk: () => {
      console.log('ok')
    },
    onClose: () => {
      console.log('close')
    },
    okText: 'custom',
    width: 500,
    duration: 4000
  })
}
</script>
