<template>
  <div class="ui-menuItem-wrap">
    <span v-if="$slots.icon" class="ui-menuItem-icon">
      <slot name="icon" />
    </span>
    <span class="ui-menuItem-content" :class="{ 'menuItem-no-icon': !$slots.icon }">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ keyValue: string; disabled?: boolean }>(), {
  disabled: false
})
</script>

<style lang="scss">
.ui-menuItem-wrap {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: inherit;
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
