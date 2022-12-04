<demo>
基本用法
</demo>

<template>
  <Rate v-model:value="value" @change="onChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@/lib'

const value = ref<number>(2)
const onChange = (rate: number) => {
  console.log(rate)
}
</script>
