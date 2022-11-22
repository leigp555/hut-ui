<template>
  <div class="ui-subMenu-wrap">
    <span v-if="$slots.icon" class="ui-subMenu-icon">
      <slot name="icon" />
    </span>
    <span
      v-if="$slots.title"
      class="ui-subMenu-title"
      :class="{ 'subMenu-no-icon': !$slots.icon }"
    >
      <slot name="title" />
    </span>
    <div class="ui-subMenu-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ keyValue: string }>(), {})
</script>

<style lang="scss">
.ui-subMenu-wrap {
  display: flex;
  align-items: center;
  line-height: 46px;
  text-align: left;
  background: #fff;
  position: relative;
  > .ui-subMenu-icon {
    min-width: 14px;
    font-size: 14px;
  }
  > .ui-subMenu-title {
    margin-left: 10px;
    white-space: nowrap;
    cursor: pointer;
    &.subMenu-no-icon {
      margin-left: 0;
    }
  }
  > .ui-subMenu-content {
    position: absolute;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    border-radius: 2px;
    min-width: 160px;
    width: 100%;
    max-height: calc(100vh - 100px);
    padding: 0;
    border-right: 0;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    transition: all 1s;
    transform: translateY(calc(100% + 7px)) scale(1, 0.8);
    transform-origin: top;
    &:hover {
      transform: translateY(calc(100% + 7px)) scale(1, 1);
    }
  }
}
</style>
