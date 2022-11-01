<template>
  <div class="wrap">
    <Dropdown trigger="hover">
      <span>click me</span>
      <template #pop>
        <div>
          <a href="javascript:;">item1</a>
        </div>
        <div>
          <a href="javascript:;">item2</a>
        </div>
        <div>
          <a href="javascript:;">item3</a>
        </div>
      </template>
    </Dropdown>

    <Dropdown trigger="click">
      <span>click me</span>
      <template #pop>
        <div>
          <a href="javascript:;">item1</a>
        </div>
        <div>
          <a href="javascript:;">item2</a>
        </div>
        <div>
          <a href="javascript:;">item3</a>
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
}
</style>
