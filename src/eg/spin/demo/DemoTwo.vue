<demo>
不同大小
</demo>

<template>
  <div class="wrap">
    <Spin />
    <Spin :size="32" />
    <Spin :size="42" />
    <Spin :size="56" />
  </div>
</template>

<script setup lang="ts">
import { Spin } from '@/lib'
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  gap: 100px;
}
</style>
