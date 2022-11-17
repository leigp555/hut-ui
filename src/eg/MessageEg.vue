<template>
  <div class="ui-template-wrap">
    <Button @click="onInfo1">info</Button>
    <Button @click="onInfo2">success</Button>
    <Button @click="onInfo3">warning</Button>
    <Button @click="onInfo4">error</Button>
    <Button @click="onInfo5">info</Button>
    <Button @click="onInfo6">success</Button>
    <Button @click="onInfo7">warning</Button>
    <Button @click="onInfo8">error</Button>
    <Button @click="onInfo9">loading</Button>
  </div>
</template>

<script setup lang="ts">
import { alert } from '@/lib/message/Message'
import Button from '@/lib/button/Button.vue'

const onInfo1 = () => {
  alert.info('xxxxxxxxxxxxxx')
}
const onInfo2 = () => {
  alert.success('xxxxxxxxxxxxxx')
}
const onInfo3 = () => {
  alert.warning('xxxxxxxxxxxxxx')
}
const onInfo4 = () => {
  alert.error('xxxxxxxxxxxxxx')
}
const onInfo5 = () => {
  alert.info({
    content: 'xxxxxxxxxxxxxx',
    style: { color: 'red' },
    duration: 4000
  })
}
const onInfo6 = () => {
  alert.success({
    content: 'xxxxxxxxxxxxxx',
    style: { color: 'red' },
    duration: 4000
  })
}
const onInfo7 = () => {
  alert.warning({
    content: 'xxxxxxxxxxxxxx',
    style: { color: 'red' },
    duration: 4000
  })
}
const onInfo8 = () => {
  alert.error({
    content: 'xxxxxxxxxxxxxx',
    style: { color: 'red' },
    duration: 4000
  })
}
const onInfo9 = () => {
  const xx = alert.loading({
    content: 'xxxxxxxxxxxxxx',
    style: { color: 'red' },
    duration: 4000
  })
  setTimeout(xx, 3000)
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  gap: 20px;
}
</style>
