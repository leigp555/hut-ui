<template>
  <div class="ui-template-wrap">
    <Checkbox v-model:checked="checked">Checkbox</Checkbox>
    <Checkbox v-model:checked="checked" disabled>Checkbox</Checkbox>
    <CheckboxGroup v-model:value="value" :options="options" />
    <CheckboxGroup v-model:value="value" :options="options" disabled />
    <CheckboxGroup v-model:value="value2" :options="options2" disabled />
    <CheckboxGroup v-model:value="value2" :options="options2" direction="column" />

    <CheckboxGroup v-model:value="value" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Checkbox from '@/lib/checkbox/Checkbox.vue'
import CheckboxGroup from '@/lib/checkbox/CheckboxGroup.vue'

const checked = ref(true)
watch(checked, () => {
  console.log('checked.value')
  console.log(checked.value)
})

// 复选组示例
const value = ref<{ label: string; value: string }[]>([])
const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Pear', value: 'pear' },
  { label: 'Orange', value: 'orange' }
]

watch(value, () => {
  console.log('value.value')
  console.log(value.value)
})

// 支持option可以为字符串数组
const options2 = ['apple', 'pear', 'orange']
const value2 = ref<string[]>([])
watch(value2, () => {
  console.log('value2.value')
  console.log(value2.value)
})
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
