<script setup lang="ts">
import { withDefaults, defineProps, useSlots, VNode, toRefs, provide, Ref } from 'vue'

const emits = defineEmits(['update:selectedKeys'])
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
const changeSelectedArr = (newArr: string[]) => {
  emits('update:selectedKeys', newArr)
}
provide<Ref<string[]>>('ui_menu_selectedArr', selectedKeys)
// eslint-disable-next-line no-unused-vars
provide<(newArr: string[]) => void>('change_ui_menu_selectedArr', changeSelectedArr)
</script>

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

<style lang="scss">
$selected_color: #1890ff;
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
      right: 19px;
      bottom: 0;
      left: 21px;
      height: 2px;
      background-color: #fff;
      transition: all 0.3s;
    }
    &.ui-menu-item-selected {
      color: $selected_color;
      .ui-menuItem-icon {
        fill: $selected_color;
      }
      .ui-subMenu-icon {
        fill: $selected_color;
      }
      &:after {
        background-color: $selected_color;
      }
    }
  }
}
</style>
