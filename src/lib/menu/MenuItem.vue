<script setup lang="ts">
import { withDefaults, defineProps, toRefs, inject } from 'vue'

const props = withDefaults(
  defineProps<{ keyValue: string; disabled?: boolean; isNested?: boolean }>(),
  {
    disabled: false,
    isNested: false
  }
)
const { keyValue, disabled, isNested } = toRefs(props)

// eslint-disable-next-line no-unused-vars
const changeSelectedArr = inject<(newArr: string[]) => void>(
  'change_ui_menu_selectedArr'
)

const onClick = (e: Event) => {
  if (disabled.value) {
    e.stopPropagation()
    e.preventDefault()
    return
  }
  if (!isNested.value) changeSelectedArr([keyValue.value])
}
</script>

<template>
  <div
    class="ui-menuItem-wrap"
    :class="{ 'ui-menuItem-disabled': disabled }"
    @click="onClick"
  >
    <span v-if="$slots.icon" class="ui-menuItem-icon">
      <slot name="icon" />
    </span>
    <span class="ui-menuItem-content" :class="{ 'menuItem-no-icon': !$slots.icon }">
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
  }
  > .ui-menuItem-content {
    margin-left: 10px;
    white-space: nowrap;
    cursor: pointer;
    &.menuItem-no-icon {
      margin-left: 0;
    }
  }
}
</style>
