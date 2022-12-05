<demo>
自定义样式
</demo>

<template>
  <div class="wrap">
    <Button @click="onInfo5">info</Button>
    <Button @click="onInfo6">success</Button>
    <Button @click="onInfo7">warning</Button>
    <Button @click="onInfo8">error</Button>
  </div>
</template>

<script setup lang="ts">
import { Button, alert } from '@/lib'

const onInfo5 = () => {
  alert.info({
    content: 'This is a info message',
    style: { color: 'red' },
    duration: 4000
  })
}
const onInfo6 = () => {
  alert.success({
    content: 'This is a success message',
    style: { color: 'red' },
    duration: 4000
  })
}
const onInfo7 = () => {
  alert.warning({
    content: 'This is a warning message',
    style: { color: 'red' },
    duration: 4000
  })
}
const onInfo8 = () => {
  alert.error({
    content: 'This is a error message',
    style: { color: 'red' },
    duration: 4000
  })
}
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  gap: 20px;
}
</style>
