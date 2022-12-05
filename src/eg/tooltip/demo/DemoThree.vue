<demo>
自定背景颜色
</demo>
<template>
  <div class="wrap">
    <div v-for="color in customColors" :key="color">
      <Tooltip :color="color">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>{{ color }}</Button>
      </Tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from '@/lib'

const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9']
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
