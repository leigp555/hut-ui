<template>
  <ul class="ui-menu-wrap" :class="{ [`ui-menu-${mode}`]: true }">
    <li
      v-for="item in slots"
      :key="item"
      class="ui-menu-item"
      :class="{ [`ui-menu-item-${mode}`]: true }"
    >
      <Component :is="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots } from 'vue'

withDefaults(
  defineProps<{ selectedKeys?: string[]; mode?: 'horizontal' | 'column' }>(),
  {
    selectedKeys: () => [],
    mode: 'column'
  }
)

const slots = useSlots().default()
</script>

<style lang="scss">
.ui-menu-wrap {
  display: flex;
  list-style: none;
  align-items: center;
  line-height: 46px;
  border-bottom: 1px solid #f0f0f0;
  color: #000000d9;
  font-size: 14px;
  text-align: left;
  background: #fff;
  > .ui-menu-item {
    color: #1890ff;
    padding: 0 20px;
    margin-top: -1px;
    margin-bottom: 0;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      right: 20px;
      bottom: 0;
      left: 20px;
      height: 2px;
      background-color: #1890ff;
      transition: all 0.3s;
    }
  }
}
</style>
