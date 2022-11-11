<script setup lang="ts">
import { withDefaults, defineProps, toRefs } from 'vue'

type Option = {
  label: string
  value: string
}

const props = withDefaults(
  defineProps<{
    value?: string[] | { label: string; value: string }[]
    options?: Option[] | string[]
    disabled?: boolean
    direction?: 'row' | 'column'
  }>(),
  {
    value: () => [],
    options: () => [],
    disabled: false,
    direction: 'row'
  }
)

const emits = defineEmits(['update:value'])
const { options, value } = toRefs(props)

const onInput = (item: string | Option) => {
  if (typeof item === 'string') {
    if (value.value.indexOf(item) < 0) {
      emits('update:value', [...value.value, item])
    } else {
      const index = value.value.indexOf(item)
      const newArr = [...value.value]
      newArr.splice(index, 1)
      emits('update:value', newArr)
    }
  } else if (value.value.length > 0) {
    for (let i = 0; i < value.value.length; i++) {
      if (value.value[i].value === item.value) {
        const newArr = [...value.value]
        newArr.splice(i, 1)
        emits('update:value', newArr)
      } else {
        emits('update:value', [...value.value, item])
      }
    }
  } else {
    emits('update:value', [...value.value, item])
  }
}

const checked = (item: string | Option): boolean => {
  if (typeof item === 'string') {
    return value.value.indexOf(item) >= 0
  }
  if (value.value.indexOf(item) < 0) {
    return value.value.indexOf(item.value) >= 0
  }
  return false
}
</script>

<template>
  <div
    class="ui-checkboxGroup-wrap"
    :class="{ 'ui-checkboxGroup-column': direction === 'column' }"
  >
    <label class="ui-checkboxGroup-label" v-for="item in options" :key="item">
      <input
        class="ui-checkbox-input"
        type="checkbox"
        :checked="checked(item)"
        @input="onInput(item)"
        role="checkbox"
        :disabled="disabled"
      />
      <span class="ui-checkbox-title">
        {{ typeof item === 'string' ? item : item.label }}
      </span>
    </label>
  </div>
</template>

<style lang="scss">
.ui-checkboxGroup-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &.ui-checkboxGroup-column {
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  > .ui-checkboxGroup-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 4px 0;
    > .ui-checkbox-input {
      width: 1em;
      height: 1em;
      font-size: 14px;
    }
    > .ui-checkbox-title {
      font-size: 14px;
      padding: 0 8px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      vertical-align: center;
    }
  }
}
</style>
