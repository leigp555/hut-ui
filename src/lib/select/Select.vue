<script setup lang="ts">
import { withDefaults, defineProps, toRefs, defineEmits, ref } from 'vue'
import SvgIcon from '../common/SvgIcon.vue'
import { SelectOption } from './type'

const emits = defineEmits(['update:value', 'change'])

const props = withDefaults(defineProps<{ value: string; options: SelectOption[] }>(), {
  value: '',
  options: () => []
})
const { value, options } = toRefs(props)

const popShow = ref<boolean>(false)

const userSelect = (e: Event) => {
  const el = e.target as HTMLElement
  const spec = el.getAttribute('data-value')
  if (el.tagName.toLowerCase() === 'p' && spec === 'list') {
    if (el.innerText !== value.value) {
      emits('update:value', el.innerText)
      emits('change', el.innerText)
      popShow.value = false
    }
  }
}

const inputFocus = () => {
  popShow.value = true
}
const inputBlur = () => {
  popShow.value = false
}
</script>

<template>
  <div class="ui-select-wrap">
    <div class="ui-select-input" tabindex="-1" @blur="inputBlur" @focus="inputFocus">
      <span class="ui-select-content">{{ value }}</span>
      <span class="ui-select-icon">
        <SvgIcon name="down" width="1em" height="1em" />
      </span>
    </div>
    <div class="ui-select-pop" @mousedown="userSelect">
      <Transition name="select">
        <div class="ui-select-pop-content ui-scroll-container" v-show="popShow">
          <p
            v-for="item in options"
            :key="item"
            class="select-list-item"
            :class="{ selected: item.value === value }"
            data-value="list"
            :title="item.value"
          >
            {{ item.value }}
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
@import '../common/scrollBar.scss';
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;
$border_color: #d9d9d9;
.ui-select-wrap {
  display: inline-flex;
  flex-direction: column;
  position: relative;
  cursor: default;
  .ui-select-input {
    min-width: 4em;
    height: 30px;
    padding: 0 8px 0 11px;
    display: flex;
    flex-grow: 10;
    align-items: center;
    border: 1px solid $border_color;
    border-radius: 2px;
    font-size: 14px;
    color: $font_color;
    transition: all 0.25s;
    &:hover {
      border: 1px solid $main_color;
    }
    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      border: 1px solid $main_color;
    }
    .ui-select-content {
      flex-grow: 10;
    }
    .ui-select-icon {
      fill: darken($selected_color, 20);
    }
  }
  .ui-select-pop {
    height: 0;
    width: 100%;
    position: relative;
    z-index: 100;
    > .ui-select-pop-content {
      position: absolute;
      top: 4px;
      left: 0;
      width: 100%;
      max-height: 180px;
      background-color: #ffffff;
      overflow-y: auto;
      transform-origin: top;
      border-radius: 2px;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
      > .select-list-item {
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
          background-color: #e6f7ff;
          font-weight: 600;
        }
        &:hover {
          background-color: $selected_color;
        }
      }
    }
  }
}
.select-enter-from,
.select-leave-to {
  transform: scale(1, 0.5);
  opacity: 0;
}
.select-enter-active,
.select-leave-active {
  transition: all 250ms;
}
</style>
