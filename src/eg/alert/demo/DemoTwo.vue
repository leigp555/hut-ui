<demo>
可关闭的
</demo>

<template>
  <Alert message="Success Text" type="success" showIcon closable @close="onClose" />
  <Alert message="Info Text" type="info" showIcon closable />
  <Alert message="Warning Text" type="warning" showIcon closable />
  <Alert message="Error Text" type="error" showIcon closable />
</template>

<script setup lang="ts">
import { Alert } from '@/lib'

const onClose = (message: string) => {
  console.log(message)
}
</script>
