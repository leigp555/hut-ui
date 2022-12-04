<template>
  <div
    class="ui-switch-wrap"
    @click="onClick"
    :class="{ 'switch-wrap-checked': checked, 'switch-wrap-disable': disabled }"
  >
    <span class="ui-switch-dot" :class="{ 'switch-dot-on': checked }" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

const emits = defineEmits(['update:checked', 'change'])

const props = withDefaults(defineProps<{ checked?: boolean; disabled?: boolean }>(), {
  checked: false,
  disabled: false
})

const onClick = () => {
  if (!props.disabled) {
    emits('update:checked', !props.checked)
    emits('change', !props.checked)
  }
}
</script>

<style lang="scss">
$dot_width: 18px;
.ui-switch-wrap {
  display: inline-block;
  width: 44px;
  height: 22px;
  border-radius: 11px;
  position: relative;
  background-color: #bfbfbf;
  transition: all 250ms;
  &.switch-wrap-checked {
    background-color: #1890ff;
  }
  &.switch-wrap-disable {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:active {
    box-shadow: 0 0 0 4px rgba(24, 114, 255, 0.2);
    > .ui-switch-dot {
      width: $dot_width + 4px;
    }
  }
  > .ui-switch-dot {
    display: block;
    background-color: #ffffff;
    width: $dot_width;
    height: $dot_width;
    border-radius: 9px;
    position: absolute;
    cursor: pointer;
    left: 3px;
    top: 2px;
    transition: all 250ms;
    &.switch-dot-on {
      transform: translateX(calc(38px - 100%));
      animation: dot 250ms;
    }
  }
}
</style>
