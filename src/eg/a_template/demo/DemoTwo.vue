<demo>
圆形按钮
</demo>
<template>
  <div class="wrap">
    <Button radius loading></Button>
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
