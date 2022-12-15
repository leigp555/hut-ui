<demo>
自定义icon
</demo>

<template>
  <Spin :size="42" tip="loading">
    <template #icon>
      <Icon_loading name="loading" width="20px" height="20px" fill="#1890ff" />
    </template>
  </Spin>
</template>

<script setup lang="ts">
import { Icon_loading } from '@hut-ui/icons-vue'
import { Spin } from '@/lib'
</script>
