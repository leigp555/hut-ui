<template>
  <div class="wrap">
    <Dropdown>
      <span>click me</span>
      <template #pop>
        <div class="item">
          <a href="javascript:;">item1</a>
        </div>
        <div class="item">
          <a href="javascript:;">item2</a>
        </div>
        <div class="item">
          <a href="javascript:;">item3</a>
        </div>
        <div class="item">
          <a href="javascript:;">item4</a>
        </div>
        <div class="item">
          <a href="javascript:;">item5</a>
        </div>
        <div class="item">
          <a href="javascript:;">item6</a>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import Dropdown from '@/lib/dropdown/Dropdown.vue'
</script>

<style lang="scss">
.wrap {
  display: inline-flex;
  flex-direction: column;
  gap: 150px;
  a {
    text-decoration: none;
    color: inherit;
  }
  .item {
    padding: 4px 14px;
    &:hover {
      background-color: #f7f7f7;
    }
  }
}
</style>
