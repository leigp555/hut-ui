<script setup lang="ts">
import { withDefaults, defineProps, toRefs } from 'vue'
import Checkbox from './Checkbox.vue'
import { CheckBoxOption } from './type'

const props = withDefaults(
  defineProps<{
    value?: CheckBoxOption[]
    options?: CheckBoxOption[]
    direction?: 'row' | 'column'
  }>(),
  {
    value: () => [],
    options: () => [],
    direction: 'row'
  }
)

const emits = defineEmits(['update:value', 'change'])
const { options, value } = toRefs(props)

const onChange = (item: CheckBoxOption, isChecked: boolean) => {
  item.checked = isChecked
  const newArr = [...value.value]
  const index = value.value.findIndex((s) => {
    return s.value === item.value
  })
  if (index >= 0) {
    newArr.splice(index, 1)
  } else {
    newArr.push(item)
  }
  emits('update:value', newArr)
  emits('change', newArr)
}
</script>

<template>
  <div
    class="ui-checkboxGroup-wrap"
    :class="{ 'ui-checkboxGroup-column': direction === 'column' }"
  >
    <div class="" v-for="item in options" :key="item">
      <Checkbox
        :checked="item.checked ? item.checked : false"
        :disabled="item.disabled ? item.disabled : false"
        @change="onChange(item, $event)"
        >{{ item.label }}</Checkbox
      >
    </div>
  </div>
</template>

<style lang="scss">
.ui-checkboxGroup-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  &.ui-checkboxGroup-column {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 4px;
  }
}
</style>
