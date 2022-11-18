<template>
  <div class="ui-template-wrap">
    <Button type="primary" @click="openNotification">Open the notification box</Button>
    <Button @click="() => openNotificationWithIcon('success')">Success</Button>
    <Button @click="() => openNotificationWithIcon('info')">Info</Button>
    <Button @click="() => openNotificationWithIcon('warning')">Warning</Button>
    <Button @click="() => openNotificationWithIcon('error')">Error</Button>
    <Button type="primary" @click="openNotification2">Custom</Button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { notification } from '@/lib/notification/notification'
import Button from '@/lib/button/Button.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const openNotification = () => {
  // 可以异步
  const x = notification.open({
    duration: 'infinite',
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!')
    }
  })
  setTimeout(x, 3000)
}

const openNotificationWithIcon = (type: string) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  })
}

const openNotification2 = () => {
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

<style lang="scss">
.ui-template-wrap {
  display: flex;
  gap: 20px;
}
</style>
