<demo>
自定义icon
</demo>

<template>
  <Alert message="Error Text" type="error" showIcon banner />
  <Alert message="Error Text" type="error" showIcon banner :description="description" />
  <Alert message="Error Text" type="error" showIcon banner>
    <template #icon>
      <Icon_wechat name="weixin" width="1em" height="1em" fill="#52c41a" />
    </template>
  </Alert>
  <Alert message="Error Text" type="success" showIcon banner :description="description">
    <template #icon>
      <Icon_wechat name="weixin" width="1em" height="1em" fill="#52c41a" />
    </template>
  </Alert>
</template>

<script setup lang="ts">
import { Icon_wechat } from '@hut-ui/icons-vue'
import { Alert } from '@/lib'

const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.'
</script>
