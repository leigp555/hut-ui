<demo>
单选组
</demo>

<template>
  <RadioGroup v-model:value="value" name="test" @change="onChange">
    <Radio :value="1">Option A</Radio>
    <Radio :value="2">Option B</Radio>
    <Radio :value="3">Option C</Radio>
  </RadioGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, Radio } from '@/lib'

const value = ref<number>(1)

const onChange = (current: number) => {
  console.log(current)
}
</script>
