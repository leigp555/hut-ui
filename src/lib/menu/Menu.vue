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
const { selectedKeys, mode } = toRefs(props)

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
provide<Ref<'column' | 'horizontal'>>('ui_menu_mode', mode)
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
        'ui-menu-item-selected': isSelected(item),
        'ui-menu-item-disabled': item.props.disabled
      }"
    >
      <Component :is="item" />
    </li>
  </ul>
</template>

<style lang="scss">
$selected_color: #1890ff;
$disabled_color: #00000040;
$font_color: #000000d9;
.ui-menu-wrap {
  display: flex;
  list-style: none;
  align-items: center;
  line-height: 46px;
  border-bottom: 1px solid #f0f0f0;
  color: $font_color;
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
    &:hover {
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
    &.ui-menu-item-disabled {
      &:hover {
        color: $disabled_color;
        cursor: not-allowed;
        .ui-menuItem-icon {
          fill: $disabled_color;
          cursor: not-allowed;
        }
        .ui-menuItem-content {
          cursor: not-allowed;
          &:hover {
            color: $disabled_color;
          }
        }
        .ui-subMenu-icon {
          fill: $disabled_color;
          cursor: not-allowed;
        }
        &:after {
          background-color: #fff;
        }
      }
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

.ui-menu-wrap {
  &.ui-menu-column {
    display: flex;
    flex-direction: column;
    align-items: start;
    border: none;
    border-right: 1px solid #f0f0f0;
    > .ui-menu-item {
      padding-bottom: 0.02px;
      width: 100%;
      padding: 0;
    }
  }
}
</style>
