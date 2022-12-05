<demo>
基本用法
</demo>

<template>
  <Button type="primary" @click="openNotification">Open the notification box</Button>
</template>

<script setup lang="ts">
import { Button } from '@/lib'
import { notification } from '@/lib/notification/notification'

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
  // 调用notification.open返回的函数将提示隐藏
  setTimeout(x, 3000)
}
</script>
