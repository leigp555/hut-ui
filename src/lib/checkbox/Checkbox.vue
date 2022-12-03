<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref } from 'vue'

const emits = defineEmits(['update:checked', 'change'])
const props = withDefaults(defineProps<{ checked?: boolean; disabled?: boolean }>(), {
  checked: false,
  disabled: false
})
const { checked, disabled } = toRefs(props)

const inputRef = ref<HTMLInputElement>()
const onInput = () => {
  emits('update:checked', !checked.value)
  emits('change', !checked.value)
  inputRef.value?.classList.add('ui-button-active')
  const id = setTimeout(() => {
    inputRef.value?.classList.remove('ui-button-active')
    window.clearTimeout(id)
  }, 300)
}
</script>

<template>
  <label class="ui-checkbox-wrap" :class="{ 'ui-checkbox-disabled': disabled }">
    <input
      class="ui-checkbox-input"
      type="checkbox"
      :checked="checked"
      @input="onInput"
      role="checkbox"
      :disabled="disabled"
      :class="{ 'ui-checkbox-input-disabled': disabled }"
      ref="inputRef"
    />
    <span class="ui-checkbox-title">
      <slot />
    </span>
  </label>
</template>

<style lang="scss">
.ui-checkbox-wrap {
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  padding: 4px 0;
  &.ui-checkbox-disabled {
    cursor: not-allowed;
  }
  > .ui-checkbox-input {
    width: 1em;
    height: 1em;
    font-size: 14px;
    position: relative;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      transition: all 100ms linear;
      pointer-events: none;
      border-radius: 2px;
      background-color: transparent;
    }
    &.ui-button-active {
      &:after {
        box-shadow: 0 0 0 4px rgba(9, 109, 217, 0.1);
      }
    }
    &.ui-checkbox-input-disabled {
      cursor: not-allowed;
    }
  }
  > .ui-checkbox-title {
    font-size: 14px;
    padding: 0 4px;
    margin-left: 4px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    vertical-align: center;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
      Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      Segoe UI Symbol, 'Noto Color Emoji';
  }
}
</style>
