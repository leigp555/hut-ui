<script setup lang="ts">
import { withDefaults, defineProps, toRefs } from 'vue'

const emits = defineEmits(['update:checked'])
const props = withDefaults(defineProps<{ checked?: boolean; disabled?: boolean }>(), {
  checked: false,
  disabled: false
})
const { checked, disabled } = toRefs(props)
const onInput = () => {
  emits('update:checked', !checked.value)
}
</script>

<template>
  <label class="ui-checkbox-wrap">
    <input
      class="ui-checkbox-input"
      type="checkbox"
      :checked="checked"
      @input="onInput"
      role="checkbox"
      :disabled="disabled"
    />
    <span class="ui-checkbox-title">
      <slot />
    </span>
  </label>
</template>

<style lang="scss">
.ui-checkbox-wrap {
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 4px 0;
  > .ui-checkbox-input {
    width: 1em;
    height: 1em;
    font-size: 14px;
  }
  > .ui-checkbox-title {
    font-size: 14px;
    padding: 0 8px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    vertical-align: center;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
      Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      Segoe UI Symbol, 'Noto Color Emoji';
  }
}
</style>
