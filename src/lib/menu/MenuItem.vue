<script setup lang="ts">
import { withDefaults, defineProps, toRefs } from 'vue'

const props = withDefaults(defineProps<{ keyValue: string; disabled?: boolean }>(), {
  disabled: false
})
const { disabled } = toRefs(props)
const onClick = (e: Event) => {
  if (disabled.value) {
    e.stopPropagation()
    e.preventDefault()
    return
  }
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
    //fill: #1890ff;
    //fill: inherit;
    color: inherit;
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
