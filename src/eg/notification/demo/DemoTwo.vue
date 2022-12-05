<demo>
带有图标的通知提醒框
</demo>
<template>
  <div class="wrap">
    <Button @click="() => openNotificationWithIcon('success')">Success</Button>
    <Button @click="() => openNotificationWithIcon('info')">Info</Button>
    <Button @click="() => openNotificationWithIcon('warning')">Warning</Button>
    <Button @click="() => openNotificationWithIcon('error')">Error</Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from '@/lib'

const openNotificationWithIcon = (type: 'success' | 'info' | 'warning' | 'error') => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  })
}
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  gap: 20px;
}
</style>
