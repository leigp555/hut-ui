<demo>
危险按钮
</demo>

<template>
  <div class="wrap">
    <Button type="primary" danger>toggle</Button>
    <Button type="text" danger>toggle</Button>
    <Button type="link" danger>toggle</Button>
    <Button type="dashed" danger>toggle</Button>
    <Button type="default" danger>toggle</Button>
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
