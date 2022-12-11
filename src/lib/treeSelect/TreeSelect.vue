<script setup lang="ts">
import { withDefaults, defineProps, ref, toRefs, provide } from 'vue'
import SvgIcon from '../common/SvgIcon.vue'
import TreePop from './TreePop.vue'
import { TreeSelectOptions } from './type'

const emits = defineEmits(['update:value', 'change'])
const props = withDefaults(
  defineProps<{
    value?: string
    treeData?: TreeSelectOptions[]
    placeholder?: string
  }>(),
  {
    placeholder: '请选择'
  }
)
const { value } = toRefs(props)

const wrapRef = ref<HTMLDivElement | null>(null)
const shouldPopShow = ref<boolean>(false)
const isSelect = ref<boolean>(false)

const onFocus = () => {
  wrapRef.value?.classList.add('wrap-focus')
  shouldPopShow.value = true
}
const onBlur = () => {
  if (!isSelect.value) {
    wrapRef.value?.classList.remove('wrap-focus')
    shouldPopShow.value = false
  }
}

const popBlur = () => {
  isSelect.value = false
  wrapRef.value?.classList.remove('wrap-focus')
  shouldPopShow.value = false
}
const userSelect = () => {
  isSelect.value = true
}
const onSelect = (selectStr: string) => {
  emits('update:value', selectStr)
  emits('change', selectStr)
}
provide('change_treeSelect_value', onSelect)
</script>

<template>
  <div class="ui-treeSelect-wrap">
    <label class="ui-label-wrap" tabindex="-1" ref="wrapRef">
      <input
        class="ui-input"
        type="text"
        :placeholder="placeholder"
        :value="value"
        @focus="onFocus"
        @blur="onBlur"
        readonly
      />
      <span class="input-icon">
        <SvgIcon name="down" width="1em" height="1em" />
      </span>
    </label>
    <div
      tabindex="-1"
      class="ui-treeSelect-pop ui-scroll-container"
      :class="{ 'treeSelect-pop-show': shouldPopShow }"
      @mousedown="userSelect"
      @blur="popBlur"
      ref="popRef"
    >
      <TreePop :options="treeData" />
    </div>
  </div>
</template>

<style lang="scss">
@import '../common/scrollBar.scss';
$font_color: #000000d9;
$border_color: #d9d9d9;
$main_color: #1890ff;
$hover_color: #f5f5f5;
$select_color: #e6f7ff;
.ui-treeSelect-wrap {
  position: relative;
  > .ui-label-wrap {
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
      padding: 0;
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
  > .ui-treeSelect-pop {
    width: 100%;
    max-height: 15em;
    overflow: auto;
    display: inline-flex;
    flex-direction: column;
    font-size: 14px;
    color: $font_color;
    padding: 8px 4px;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #ffffff;
    z-index: 100;
    transform: translateY(calc(100% + 5px));
    opacity: 0;
    visibility: hidden;
    transition: opacity 250ms;
    &.treeSelect-pop-show {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
