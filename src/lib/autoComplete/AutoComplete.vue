<script setup lang="ts">
import { withDefaults, defineProps, toRefs, defineEmits, watch, ref } from 'vue'

const emits = defineEmits(['search', 'update:value', 'select'])
const props = withDefaults(
  defineProps<{ value: string; options: { value: string }[]; placeholder: string }>(),
  {
    value: '',
    options: () => [],
    placeholder: ''
  }
)
const { value, options, placeholder } = toRefs(props)
const hasSelected = ref<boolean>(false)
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
    if (el.innerText !== value.value) {
      emits('update:value', el.innerText)
      hasSelected.value = true
    }
  }
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
    />
    <div class="ui-autoComplete-pop" @click="userSelect">
      <p
        v-for="item in options"
        :key="item"
        class="autoComplete-list-item"
        data-value="list"
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
    border: 1px solid $font_color;
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
    > .autoComplete-list-item {
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 14px;
      color: $font_color;
      padding: 0 11px;
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
