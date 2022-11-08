<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref, computed } from 'vue'

const emits = defineEmits(['update:value'])
const props = withDefaults(
  defineProps<{
    value: string
    placeholder: string
    autoSize?: boolean | { minRows: number; maxRows: number }
  }>(),
  {
    value: '',
    placeholder: '',
    autoSize: false
  }
)

const { value, placeholder, autoSize } = toRefs(props)
const textareaRef = ref<HTMLInputElement | null>(null)

const onInput = () => {
  const el = textareaRef.value as HTMLTextAreaElement
  if (autoSize.value && typeof autoSize.value === 'boolean') {
    const scrollHeight = textareaRef.value?.scrollHeight
    el.style.height = `${scrollHeight + 2}px`
  } else if (autoSize.value) {
    const { height } = el.getBoundingClientRect()
    const scrollHeight = textareaRef.value?.scrollHeight
    if (
      scrollHeight > height - 2 &&
      scrollHeight < autoSize.value.maxRows * 1.5 * 14 + 10
    ) {
      el.style.height = `${scrollHeight + 2}px`
    } else if (scrollHeight > autoSize.value.maxRows * 1.5 * 14 + 10) {
      el.style.height = `${autoSize.value.maxRows * 1.5 * 14 + 10}px`
    }
  }

  emits('update:value', textareaRef.value?.value)
}
const style = computed(() => {
  if (autoSize && typeof autoSize.value !== 'boolean') {
    return { minHeight: `${autoSize.value.minRows * 1.5 * 14 + 10}px` }
  }
  return {}
})
</script>

<template>
  <textarea
    class="ui-textarea"
    :placeholder="placeholder"
    :value="value"
    :style="style"
    ref="textareaRef"
    @input="onInput"
  />
</template>

<style lang="scss">
$font_color: #000000d9;
$border_color: #d9d9d9;
$main_color: #1890ff;
.ui-textarea {
  width: 100%;
  font-size: 14px;
  outline: none;
  box-shadow: none;
  color: $font_color;
  line-height: 1.5em;
  border: 1px solid $border_color;
  padding: 4px 11px;
  &:focus {
    border: 1px solid $main_color;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
}
</style>
