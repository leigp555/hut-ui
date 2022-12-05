<demo>
自定义内容
</demo>
<template>
  <Popconfirm
    placement="topCenter"
    okText="Yes"
    cancelText="No"
    @confirm="confirm"
    @cancel="cancel"
  >
    <template #title>
      <p>{{ text }}</p>
      <p>{{ text }}</p>
    </template>
    <template #icon>
      <SvgIcon name="error" width="1em" height="1em" fill="red" />
    </template>
    <Button>TL</Button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm, Button, SvgIcon } from '@/lib'

const text = 'Are you sure to delete this task?'

const confirm = () => {
  console.log('confirm')
}
const cancel = () => {
  console.log('cancel')
}
</script>
