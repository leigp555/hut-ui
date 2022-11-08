<template>
  <label class="ui-datePicker-wrap">
    <input type="date" :value="value" @input="onInput" ref="inputRef" />
  </label>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'

const props = withDefaults(
  defineProps<{
    value: Dayjs
  }>(),
  {
    value: dayjs().format('YYYY-MM-DD')
  }
)
const emits = defineEmits(['update:value'])
const { value } = toRefs(props)
const inputRef = ref<HTMLInputElement | null>(null)
const onInput = () => {
  emits('update:value', inputRef.value?.value)
}
</script>

<style lang="scss">
.ui-datePicker-wrap {
  input {
    line-height: 2em;
    display: flex;
    gap: 5px;
    justify-content: start;
    align-items: center;
    color: rgba(0, 0, 0, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.85);
    padding: 0 11px;
    outline: none;
    border-radius: 2px;
    font-size: 14px;
    &:focus {
      border: 1px solid #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 114, 255, 0.2);
    }
    &:hover {
      border: 1px solid #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 114, 255, 0.2);
    }
  }
}
</style>
