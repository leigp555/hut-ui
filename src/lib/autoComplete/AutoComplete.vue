<script setup lang="ts">
import { withDefaults, defineProps, toRefs, defineEmits, watch, ref } from 'vue'

const emits = defineEmits(['search', 'update:value', 'select'])

export interface OptionType {
  value: string
}
const props = withDefaults(
  defineProps<{ value: string; options: OptionType[]; placeholder: string }>(),
  {
    value: '',
    options: () => [],
    placeholder: ''
  }
)
const { value, options, placeholder } = toRefs(props)
const hasSelected = ref<boolean>(false)
const popRef = ref<HTMLElement | null>(null)
const inputEvent = (e: Event) => {
  const el = e.target as HTMLInputElement
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
  if (el.tagName.toLowerCase() === 'p' && spec === 'list') {
    emits('select', el.innerText)
    popRef.value?.classList.remove('autoComplete-pop-show')
    if (el.innerText !== value.value) {
      emits('update:value', el.innerText)
      hasSelected.value = true
    }
  }
}
const inputFocus = () => {
  popRef.value?.classList.add('autoComplete-pop-show')
}
const inputBlur = () => {
  popRef.value?.classList.remove('autoComplete-pop-show')
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
    <div class="ui-autoComplete-pop" @mousedown="userSelect" ref="popRef">
      <p
        v-for="item in options"
        :key="item"
        class="autoComplete-list-item"
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
.ui-autoComplete-wrap {
  display: flex;
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
    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      border: 1px solid $main_color;
    }
  }
  .ui-autoComplete-pop {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 4px));
    box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: all 250ms;
    &.autoComplete-pop-show {
      opacity: 1;
      visibility: visible;
    }
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
    }
  }
}
</style>
