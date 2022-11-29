<demo>
大小可选
</demo>
<template>
  <div class="wrap">
    <Button size="big">toggle</Button>
    <Button size="normal">toggle</Button>
    <Button size="small">toggle</Button>
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
  align-items: center;
}
</style>
