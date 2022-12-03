<demo>
基本用法
</demo>

<template>
  <DatePicker v-model:value="value" @change="onChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dayjs } from 'dayjs'
import { DatePicker } from '@/lib'

const value = ref<Dayjs>()

const onChange = () => {
  console.log(value.value)
}
</script>
