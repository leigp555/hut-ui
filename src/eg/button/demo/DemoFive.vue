<demo>
禁用按钮
</demo>
<template>
  <div class="wrap">
    <Button type="primary" disabled>toggle</Button>
    <Button type="text" disabled>toggle</Button>
    <Button type="link" disabled>toggle</Button>
    <Button type="dashed" disabled>toggle</Button>
    <Button type="default" disabled>toggle</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
