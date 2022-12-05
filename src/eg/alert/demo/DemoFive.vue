<demo>
自定义描述内容
</demo>

<template>
  <Alert message="Success Text" type="error" closable showIcon>
    <template #description>
      <p style="display: flex; align-items: center">
        Success Description
        <span style="color: red">Success</span>
        Description Success Description
      </p>
    </template>
  </Alert>
</template>

<script setup lang="ts">
import { Alert } from '@/lib'

const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.'
</script>
