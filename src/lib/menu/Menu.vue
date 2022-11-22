<template>
  <ul class="ui-menu-wrap" :class="{ [`ui-menu-${mode}`]: true }">
    <li
      v-for="item in slots"
      :key="item"
      class="ui-menu-item"
      :class="{
        [`ui-menu-item-${mode}`]: true,
        'ui-menu-item-selected': isSelected(item)
      }"
    >
      <Component :is="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots, VNode, toRefs } from 'vue'

const props = withDefaults(
  defineProps<{ selectedKeys?: string[]; mode?: 'horizontal' | 'column' }>(),
  {
    selectedKeys: () => [],
    mode: 'column'
  }
)
const slots = useSlots().default()
const { selectedKeys } = toRefs(props)
const isSelected = (item: VNode): boolean => {
  const keyWorld = item.props.keyValue
  let isExist = false
  if (keyWorld) {
    isExist = selectedKeys.value.indexOf(keyWorld) >= 0
  }
  return isExist
}
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
  a {
    text-decoration: none;
    color: inherit;
  }
  > .ui-menu-item {
    padding: 0 20px;
    margin-top: -1px;
    margin-bottom: 0;
    position: relative;
    transition: all 0.3s;
    &:after {
      content: '';
      position: absolute;
      right: 20px;
      bottom: 0;
      left: 20px;
      height: 2px;
      background-color: #fff;
      transition: all 0.3s;
    }
    &.ui-menu-item-selected {
      color: #1890ff;
      &:after {
        background-color: #1890ff;
      }
    }
  }
}
</style>
