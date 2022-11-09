<script setup lang="ts">
import { withDefaults, defineProps, toRefs, defineEmits, watch, ref } from 'vue'

const emits = defineEmits(['select', 'update:value'])

export type Options = {
  label: string
  value: string
}
const props = withDefaults(defineProps<{ value: string; options: Options[] }>(), {
  value: '',
  options: () => []
})
const { value, options } = toRefs(props)

const popRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const inputEvent = (e: Event) => {
  const el = e.target as HTMLInputElement
  emits('update:value', el.value)
}
watch(value, () => {
  const el = inputRef.value as HTMLInputElement
  const lastStr = value.value.substring(el.selectionStart - 1, el.selectionStart)
  if (lastStr === '@') {
    popRef.value?.classList.add('mentions-pop-show')
  } else {
    popRef.value?.classList.remove('mentions-pop-show')
  }
})

const userSelect = (e: Event) => {
  const el = e.target as HTMLElement
  const spec = el.getAttribute('data-value')
  if (el.tagName.toLowerCase() === 'p' && spec === 'list') {
    emits('update:value', value.value + el.innerText)
    emits('select', el.innerText)
    popRef.value?.classList.remove('mentions-pop-show')
  }
}

const inputBlur = () => {
  popRef.value?.classList.remove('mentions-pop-show')
}
</script>

<template>
  <div class="ui-mentions-wrap">
    <input
      class="ui-mentions-input"
      type="text"
      ref="inputRef"
      :value="value"
      @input="inputEvent"
      @blur="inputBlur"
    />
    <div class="ui-mentions-pop" @mousedown="userSelect" ref="popRef">
      <p
        v-for="item in options"
        :key="item"
        class="mentions-list-item"
        data-value="list"
        :title="item.value"
      >
        {{ item.label }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #e6f7ff;
.ui-mentions-wrap {
  display: inline-flex;
  position: relative;
  .ui-mentions-input {
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
    &:hover {
      border: 1px solid $main_color;
    }
  }
  .ui-mentions-pop {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 4px)) translateX(50%);
    box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: all 250ms;
    &.mentions-pop-show {
      opacity: 1;
      visibility: visible;
    }
    > .mentions-list-item {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 14px;
      color: $font_color;
      padding: 0 16px;
      line-height: 2.5em;
      cursor: pointer;
      &:last-child {
        margin-bottom: 4px;
      }
      &:hover {
        background-color: $selected_color;
      }
    }
  }
}
</style>
