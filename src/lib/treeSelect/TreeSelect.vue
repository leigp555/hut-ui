<template>
  <div class="ui-treeSelect-wrap">
    <label class="ui-label-wrap" tabindex="-1" ref="wrapRef">
      <input
        class="ui-input"
        type="text"
        :placeholder="placeholder"
        :value="value"
        ref="inputRef"
        @focus="onFocus"
        @blur="onBlur"
      />
    </label>
    <div class="ui-treeSelect-pop">
      <TreeSelectPop />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'

export interface TreeSelectOptions {
  title: string
  value: string
  children: TreeSelectOptions[]
}

withDefaults(
  defineProps<{
    value?: string
    treeDate?: TreeSelectOptions[]
    placeholder?: string
  }>(),
  {
    placeholder: '请选择'
  }
)

const wrapRef = ref<HTMLDivElement | null>(null)

const onFocus = () => {
  wrapRef.value?.classList.add('wrap-focus')
}
const onBlur = () => {
  wrapRef.value?.classList.remove('wrap-focus')
}
</script>

<style lang="scss">
$font_color: #000000d9;
$border_color: #d9d9d9;
$main_color: #1890ff;
.ui-treeSelect-wrap {
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
