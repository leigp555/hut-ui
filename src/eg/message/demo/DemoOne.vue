<demo>
基本用法
</demo>

<template>
  <div class="wrap">
    <Button @click="onInfo1">info</Button>
    <Button @click="onInfo2">success</Button>
    <Button @click="onInfo3">warning</Button>
    <Button @click="onInfo4">error</Button>
  </div>
</template>

<script setup lang="ts">
import { Button, alert } from '@/lib'

const onInfo1 = () => {
  alert.info('This is a info message')
}
const onInfo2 = () => {
  alert.success('This is a success message')
}
const onInfo3 = () => {
  alert.warning('This is a warning message')
}
const onInfo4 = () => {
  alert.error('This is a error message')
}
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  gap: 20px;
}
</style>
