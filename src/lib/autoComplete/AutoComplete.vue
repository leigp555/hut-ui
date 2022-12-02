<script setup lang="ts">
import { withDefaults, defineProps, toRefs, defineEmits, watch, ref } from 'vue'

const emits = defineEmits(['search', 'update:value', 'select'])

export interface OptionType {
  value: string
}
const props = withDefaults(
  defineProps<{
    value: string
    options: OptionType[]
    placeholder: string
    custom?: boolean
  }>(),
  {
    value: '',
    options: () => [],
    placeholder: '',
    custom: false
  }
)
const { value, options, placeholder } = toRefs(props)
const hasSelected = ref<boolean>(false)
const shouldPopShow = ref<boolean>(false)
const inputEvent = (e: Event) => {
  const el = e.target as HTMLInputElement
  shouldPopShow.value = !!el.value
  emits('update:value', el.value)
}
watch(value, () => {
  if (!hasSelected.value) {
    emits('search', value.value)
  } else {
    hasSelected.value = false
  }
})

const userSelect = (e: Event) => {
  const el = e.target as HTMLElement
  const spec = el.getAttribute('data-value')
  if (el.tagName.toLowerCase() === 'div' && spec === 'list') {
    emits('select', el.innerText)
    shouldPopShow.value = false
    if (el.innerText !== value.value) {
      emits('update:value', el.innerText)
      hasSelected.value = true
    }
  }
}
const inputFocus = () => {
  if (value.value) {
    shouldPopShow.value = true
  }
}
const inputBlur = () => {
  shouldPopShow.value = false
}
</script>

<template>
  <div class="ui-autoComplete-wrap">
    <input
      class="ui-autoComplete-input"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="inputEvent"
      @focus="inputFocus"
      @blur="inputBlur"
    />
    <div class="ui-autoComplete-pop">
      <Transition name="autoComplete-pop" mode="out-in">
        <div
          class="autoComplete-pop-content ui-scroll-container"
          @mousedown="userSelect"
          ref="popRef"
          v-show="shouldPopShow"
        >
          <div
            v-for="item in options"
            :key="item"
            :class="{
              selected: item.value === value,
              'autoComplete-list-item': !custom
            }"
            data-value="list"
          >
            <div class="autoComplete-list-item-inner" v-if="$slots.option">
              <slot name="option" :value="item.value"></slot>
            </div>
            <div class="autoComplete-list-item-inner" v-else>
              {{ item.value }}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
@import '../common/scrollBar';
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;
.ui-autoComplete-wrap {
  display: inline-flex;
  position: relative;
  .ui-autoComplete-input {
    flex-grow: 10;
    padding: 0 11px;
    outline: none;
    box-shadow: none;
    border: 1px solid darken($selected_color, 20%);
    font-size: 14px;
    color: $font_color;
    line-height: 1.5em;
    height: 30px;
    border-radius: 2px;
    transition: all 250ms;
    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      border: 1px solid $main_color;
    }
    &:hover {
      border: 1px solid $main_color;
    }
  }
  .ui-autoComplete-pop {
    position: absolute;
    min-width: 100%;
    bottom: 0;
    left: 0;
    height: 0;
    z-index: 100;
    transform: translateY(calc(100% + 4px));
    > .autoComplete-pop-content {
      transform-origin: top;
      background: white;
      position: relative;
      z-index: 100;
      max-height: 200px;
      overflow-y: auto;
      border-radius: 3px;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
      > .autoComplete-list-item {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
        color: $font_color;
        padding: 0 11px;
        line-height: 2.5em;
        cursor: pointer;
        &:last-child {
          margin-bottom: 4px;
        }
        &.selected {
          background-color: $selected_color;
        }
        &:hover {
          background-color: $selected_color;
        }
        > .autoComplete-list-item-inner {
          pointer-events: none;
        }
      }
    }
  }
}
.autoComplete-pop-enter-from,
.autoComplete-pop-leave-to {
  transform: scale(1, 0.5);
  opacity: 0;
}
.autoComplete-pop-enter-active,
.autoComplete-pop-leave-active {
  transition: all 250ms;
}
</style>
