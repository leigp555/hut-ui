<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref } from 'vue'

const emits = defineEmits(['update:value'])
const props = withDefaults(defineProps<{ value: string; placeholder?: string }>(), {
  value: '',
  placeholder: ''
})

const { value, placeholder } = toRefs(props)
const wrapRef = ref<HTMLDivElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const onFocus = () => {
  wrapRef.value?.classList.add('wrap-focus')
}
const onBlur = () => {
  wrapRef.value?.classList.remove('wrap-focus')
}
const onInput = () => {
  emits('update:value', inputRef.value?.value)
}
</script>

<template>
  <div class="ui-input-wrap">
    <div class="prefix-outer" v-if="$.slots.prefix_outer">
      <slot name="prefix_outer" />
    </div>
    <label class="ui-label-wrap" tabindex="-1" ref="wrapRef">
      <span class="input-icon" v-if="$.slots.prefix">
        <slot name="prefix" />
      </span>
      <input
        class="ui-input"
        type="text"
        :placeholder="placeholder"
        :value="value"
        ref="inputRef"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
      />
      <span class="input-icon" v-if="$.slots.suffix">
        <slot name="suffix" />
      </span>
    </label>
    <div class="suffix-outer" v-if="$.slots.suffix_outer">
      <slot name="suffix_outer" />
    </div>
  </div>
</template>

<style lang="scss">
$font_color: #000000d9;
$border_color: #d9d9d9;
$main_color: #1890ff;
.ui-input-wrap {
  display: flex;
  height: 100%;
  > .prefix-outer,
  .suffix-outer {
    display: flex;
  }
  > .ui-label-wrap {
    flex-grow: 10;
    padding: 4px 11px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 2px;
    border: 1px solid $border_color;
    transition: all 0.3s;
    &.wrap-focus {
      border: 1px solid $main_color;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
    &:hover {
      border: 1px solid $main_color;
    }
    > .input-icon {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    > .ui-input {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 14px;
      border: none;
      outline: none;
      box-shadow: none;
      color: $font_color;
      line-height: 1.5em;
      display: flex;
      align-items: center;
      &:hover {
        border: none;
        outline: none;
      }
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
}
</style>
