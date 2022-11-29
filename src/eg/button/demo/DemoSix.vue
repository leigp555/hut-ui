<demo>
支持自定义icon
</demo>
<template>
  <div class="wrap">
    <Button>
      <template #icon>
        <SvgIcon name="weixin" width="1em" height="1em" />
      </template>
      weixin</Button
    >
  </div>
</template>

<script setup lang="ts">
import { Button, SvgIcon } from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
