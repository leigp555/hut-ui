<script setup lang="ts">
import { withDefaults, defineProps, toRefs, defineEmits, ref } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const emits = defineEmits(['update:value', 'change'])

export interface OptionType {
  value: string
}
const props = withDefaults(defineProps<{ value: string; options: OptionType[] }>(), {
  value: '',
  options: () => []
})
const { value, options } = toRefs(props)

const popRef = ref<HTMLElement | null>(null)

const userSelect = (e: Event) => {
  const el = e.target as HTMLElement
  const spec = el.getAttribute('data-value')
  if (el.tagName.toLowerCase() === 'p' && spec === 'list') {
    if (el.innerText !== value.value) {
      emits('update:value', el.innerText)
      emits('change', el.innerText)
      popRef.value?.classList.remove('select-pop-show')
    }
  }
}

const inputFocus = () => {
  popRef.value?.classList.add('select-pop-show')
}
const inputBlur = () => {
  popRef.value?.classList.remove('select-pop-show')
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
    <div class="ui-select-pop" @mousedown="userSelect" ref="popRef">
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
  </div>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;
.ui-select-wrap {
  display: inline-flex;
  position: relative;
  cursor: default;
  .ui-select-input {
    min-width: 4em;
    height: 30px;
    padding: 0 8px 0 11px;
    display: flex;
    flex-grow: 10;
    align-items: center;
    border: 1px solid darken($selected_color, 20);
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
    position: absolute;
    z-index: 10;
    width: 100%;
    max-height: 8em;
    background-color: #ffffff;
    overflow-y: scroll;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 4px));
    box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: all 250ms;
    &.select-pop-show {
      opacity: 1;
      visibility: visible;
    }
    &::-webkit-scrollbar {
      //整个滚动条的宽高设置
      width: 4px; //宽高只有一个能生效，如果是横向滚动条高度生效，纵向滚动条宽度生效
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      //滚动条滑块的设置
      border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      background-color: #c3c3c3;
    }
    &::-webkit-scrollbar-track {
      //滚动条轨道设置
      background-color: transparent;
    }
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
</style>
