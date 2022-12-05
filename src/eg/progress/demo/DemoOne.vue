<demo>
基本用法
</demo>

<template>
  <div class="wrap">
    <Progress :percent="30" />
    <Progress :percent="50" status="active" />
    <Progress :percent="70" status="exception" />
    <Progress :percent="100" />
    <Progress :percent="50" :show-info="false" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from '@/lib'
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
