<demo>
hover触发
</demo>

<template>
  <Dropdown>
    <a class="dropdown-link" @click.prevent> Hover me </a>
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
      <div class="item">
        <a href="javascript:;">4st drawer item</a>
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
  &.dropdown-link {
    color: #1890ff;
  }
}
.item {
  padding: 4px 14px;
  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
