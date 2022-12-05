<demo>
可关闭
</demo>

<template>
  <Alert
    message="Success Text"
    type="success"
    :description="description"
    showIcon
    closable
  />
  <Alert message="Info Text" type="info" :description="description" showIcon closable />
  <Alert
    message="Warning Text"
    type="warning"
    :description="description"
    showIcon
    closable
  />
  <Alert
    message="Error Text"
    type="error"
    :description="description"
    showIcon
    closable
  />
</template>

<script setup lang="ts">
import { Alert } from '@/lib'

const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.'
</script>
