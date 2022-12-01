<demo>
右键触发
</demo>

<template>
  <Dropdown trigger="contextmenu">
    <div
      :style="{
        textAlign: 'center',
        background: '#f7f7f7',
        height: '200px',
        width: '100%',
        lineHeight: '200px',
        color: '#777'
      }"
    >
      Right Click on here
    </div>
    <template #pop>
      <div class="item">
        <a href="javascript:;">1st drawer item</a>
      </div>
      <div class="item">
        <a href="javascript:;">2st drawer item</a>
      </div>
      <div class="item">
        <a href="javascript:;">3st drawer item</a>
      </div>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown } from '@/lib'
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}
.item {
  padding: 4px 14px;
  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
