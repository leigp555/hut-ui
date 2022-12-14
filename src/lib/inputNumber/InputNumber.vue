<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref } from 'vue'
import { Icon_back } from '@hut-ui/icons-vue'

const emits = defineEmits(['update:value'])
const props = withDefaults(defineProps<{ value: number }>(), {
  value: 0
})

const { value } = toRefs(props)
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

const add = () => {
  wrapRef.value?.classList.add('wrap-focus')
  emits('update:value', value.value + 1)
}
const sub = () => {
  wrapRef.value?.classList.add('wrap-focus')
  emits('update:value', value.value - 1)
}
</script>

<template>
  <div class="ui-label-wrap" tabindex="-1" ref="wrapRef">
    <input
      class="ui-input"
      type="number"
      :value="value"
      ref="inputRef"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />
    <div class="input-icon">
      <span class="ui-up ui-span" @click="add">
        <Icon_back
          name="back"
          width="0.8em"
          height="0.8em"
          :style="{ transform: 'rotate(90deg)' }"
        />
      </span>
      <span class="ui-down ui-span" @click="sub">
        <Icon_back
          name="back"
          width="0.8em"
          height="0.8em"
          :style="{ transform: 'rotate(-90deg)' }"
        />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
$font_color: #000000d9;
$border_color: #d9d9d9;
$main_color: #1890ff;

.ui-label-wrap {
  background-color: #ffffff;
  display: flex;
  align-items: center;
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
    flex-direction: column;
    align-items: start;
    justify-content: start;
    font-size: 12px;
    > .ui-span {
      border-left: 1px solid $border_color;
      cursor: pointer;
      flex-grow: 10;
      padding: 0 2px;
      > svg {
        fill: rgba(0, 0, 0, 0.85);
      }
      > svg:hover {
        fill: $main_color;
      }
    }
    > .ui-up {
      border-bottom: 1px solid $border_color;
    }
    > .ui-down {
    }
  }
  > .ui-input {
    &::-webkit-inner-spin-button {
      display: none;
    }
    width: 100%;
    padding: 4px 11px;
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
</style>
