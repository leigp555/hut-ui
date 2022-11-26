<template>
  <div class="ui-template-wrap">
    <Checkbox v-model:checked="checked">Checkbox</Checkbox>
    <Checkbox v-model:checked="checked" disabled>Checkbox</Checkbox>
    <CheckboxGroup v-model:value="value" :options="options" />
    <CheckboxGroup v-model:value="value" :options="options" disabled />
    <CheckboxGroup v-model:value="value" :options="options" direction="column" />
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
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
