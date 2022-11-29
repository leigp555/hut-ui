<demo>
禁用按钮
</demo>
<template>
  <div class="wrap">
    <Button disabled>toggle</Button>
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
