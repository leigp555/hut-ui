<demo>
自定义颜色
</demo>
<template>
  <div class="wrap">
    <div v-for="color in colors" :key="color">
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

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime'
]
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
