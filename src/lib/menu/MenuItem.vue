<script setup lang="ts">
import { withDefaults, defineProps, toRefs, inject, Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    keyValue: string
    disabled?: boolean
    paddingLeft?: number
    totalTitle?: string[]
  }>(),
  {
    disabled: false,
    totalTitle: () => []
  }
)
const { keyValue, disabled, totalTitle } = toRefs(props)

const selectedKeys = inject<Ref<string[]>>('ui_menu_selectedArr')
// eslint-disable-next-line no-unused-vars
const changeSelectedArr = inject<(newArr: string[]) => void>(
  'change_ui_menu_selectedArr'
)
const mode = inject<Ref<'column' | 'horizontal'>>('ui_menu_mode')

const onClick = (e: Event) => {
  if (disabled.value) {
    e.stopPropagation()
    e.preventDefault()
    return
  }
  if (changeSelectedArr) changeSelectedArr([...totalTitle.value, keyValue.value])
}
</script>

<template>
  <div
    class="ui-menuItem-wrap"
    :class="{
      'ui-menuItem-disabled': disabled,
      'ui-menuItem-wrap-column': mode === 'column'
    }"
    :style="{ paddingLeft: mode === 'column' ? `${paddingLeft}px` : 0 }"
    @click="onClick"
  >
    <span v-if="$slots.icon" class="ui-menuItem-icon">
      <slot name="icon" />
    </span>
    <span
      class="ui-menuItem-content"
      :class="{
        'menuItem-no-icon': !$slots.icon,
        'ui-menuItem-content-selected': selectedKeys.indexOf(keyValue) >= 0
      }"
    >
      <slot />
    </span>
  </div>
</template>

<style lang="scss">
$disabled_color: #00000040;
.ui-menuItem-wrap {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: inherit;
  user-select: none;
  cursor: pointer;
  &.ui-menuItem-wrap-column {
    padding-left: 48px;
  }
  &.ui-menuItem-disabled {
    color: $disabled_color;
    cursor: not-allowed;
    > .ui-menuItem-icon {
      fill: $disabled_color;
      cursor: not-allowed;
    }
    > .ui-menuItem-content {
      cursor: not-allowed;
    }
  }
  > .ui-menuItem-icon {
    min-width: 14px;
    font-size: 14px;
    color: inherit;
    cursor: pointer;
    transition: all 250ms;
    display: flex;
    align-items: center;
  }
  > .ui-menuItem-content {
    margin-left: 10px;
    white-space: nowrap;
    cursor: pointer;
    transition: color 250ms;
    &.ui-menuItem-content-selected {
      color: #1890ff;
    }
    &:hover {
      color: #1890ff;
    }
    &.menuItem-no-icon {
      margin-left: 0;
    }
  }
}
</style>
