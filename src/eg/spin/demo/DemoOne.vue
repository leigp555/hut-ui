<demo>
基本用法
</demo>

<template>
  <div class="wrap">
    <Spin />
    <Spin :size="32" />
    <Spin :size="42" />
    <Spin tip="loading" />
    <Spin :size="42">
      <template #icon>
        <Icon_loading name="loading" width="20px" height="20px" fill="#1890ff" />
      </template>
    </Spin>
  </div>
</template>

<script setup lang="ts">
import { Icon_loading } from '@hut-ui/icons-vue'
import { Spin } from '@/lib'
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  gap: 100px;
}
</style>
