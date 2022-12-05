<demo>
加载中提示
</demo>

<template>
  <Button @click="onInfo9">loading</Button>
</template>

<script setup lang="ts">
import { Button, alert } from '@/lib'

const onInfo9 = () => {
  const xx = alert.loading({
    content: 'This is a loading message',
    duration: 4000
  })
  // 调用alert.loading返回的函数将隐藏提示
  setTimeout(xx, 3000)
}
</script>
