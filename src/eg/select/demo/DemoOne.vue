<demo>
基本用法
</demo>

<template>
  <Select
    v-model:value="value"
    :options="options"
    :style="{ width: '150px' }"
    @change="onchange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select, SelectOption } from '@/lib'

const value = ref<string>('a')
const options = ref<SelectOption[]>([
  { value: 'a' },
  { value: 'b' },
  { value: 'c' },
  { value: 'd' },
  { value: 'e' },
  { value: 'f' },
  { value: 'g' },
  { value: 'h' },
  { value: 'i' },
  { value: 'j' },
  { value: 'k' },
  { value: 'l' },
  { value: 'm' },
  { value: 'n' },
  { value: 'o' }
])
const onchange = (content: string) => {
  console.log(content)
}
</script>
