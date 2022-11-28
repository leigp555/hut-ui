<demo>
按钮类型
</demo>

<template>
  <div class="wrap">
    <Button type="primary">toggle</Button>
    <Button type="text">toggle</Button>
    <Button type="link">toggle</Button>
    <Button type="dashed">toggle</Button>
    <Button type="default">toggle</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 20px;
}
</style>
