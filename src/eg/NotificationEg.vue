<template>
  <div class="ui-template-wrap">
    <Button type="primary" @click="openNotification">Open the notification box</Button>
    <Button @click="() => openNotificationWithIcon('success')">Success</Button>
    <Button @click="() => openNotificationWithIcon('info')">Info</Button>
    <Button @click="() => openNotificationWithIcon('warning')">Warning</Button>
    <Button @click="() => openNotificationWithIcon('error')">Error</Button>
  </div>
</template>

<script setup lang="ts">
import { notification } from '@/lib/notification/notification'
import Button from '@/lib/button/Button.vue'

const openNotification = () => {
  notification.open({
    duration: 'infinite',
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!')
    }
  })
}

const openNotificationWithIcon = (type: string) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  })
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  gap: 20px;
}
</style>
