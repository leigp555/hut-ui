<demo>
垂直分布
</demo>

<template>
  <CheckboxGroup
    v-model:value="value"
    :options="options"
    direction="column"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup, CheckBoxOption } from '@/lib'

const value = ref<CheckBoxOption[]>([])
const options = [
  { label: 'Apple', value: 'apple', checked: false },
  { label: 'Pear', value: 'pear', checked: false },
  { label: 'Orange', value: 'orange', checked: false }
]
const onChange = (newValue: CheckBoxOption[]) => {
  console.log(newValue)
}
</script>
