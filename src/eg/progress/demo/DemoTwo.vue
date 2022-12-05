<demo>
小型进度条
</demo>

<template>
  <div class="wrap">
    <Progress :percent="30" size="small" />
    <Progress :percent="50" size="small" status="active" />
    <Progress :percent="70" size="small" status="exception" />
    <Progress :percent="100" size="small" />
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
