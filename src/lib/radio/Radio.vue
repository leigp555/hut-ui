<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref } from 'vue'

const emits = defineEmits(['update:checked', 'select'])
const props = withDefaults(
  defineProps<{ checked?: boolean; disabled?: boolean; value?: any; name?: string }>(),
  {
    checked: false,
    disabled: false
  }
)

const { disabled } = toRefs(props)

const inputRef = ref<HTMLInputElement | null>(null)
const onInput = () => {
  emits('update:checked', true)
  emits('select', inputRef.value?.value)
}
const onBlur = () => {
  inputRef.value?.classList.add('ui-radio-blur')
}
</script>

<template>
  <label class="ui-radio-label">
    <input
      :disabled="disabled"
      class="ui-radio"
      type="radio"
      @click="onInput"
      @blur="onBlur"
      :checked="checked"
      :class="{ checked: checked, disabled: disabled }"
      ref="inputRef"
      :value="value"
      :name="name"
    />
    <span class="ui-radio-title">
      <slot />
    </span>
  </label>
</template>

<style lang="scss">
$border_color: #d9d9d9;
$main_color: #1890ff;
$size: 14px;

.ui-radio-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  > .ui-radio-title {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
      Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      Segoe UI Symbol, 'Noto Color Emoji';
  }
  > .ui-radio {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    transition: all 250ms;
    width: $size;
    height: $size;
    vertical-align: middle;
    outline: none;
    border: 1px solid $border_color;
    border-radius: 50%;
    background-color: #ffffff;
    &:checked {
      border: 3px solid #ffffff;
      background-color: $main_color;
      outline: 1px solid $main_color;
    }
    &.disabled {
      cursor: not-allowed;
    }
    &.ui-radio-blur {
      box-shadow: none;
    }
  }
}
</style>
