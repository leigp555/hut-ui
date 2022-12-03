<demo>
基本用法
</demo>

<template>
  <Checkbox v-model:checked="checked" @change="onChange">Checkbox</Checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/lib'

const checked = ref(true)
const onChange = (isChecked: boolean) => {
  console.log(isChecked)
}
</script>
