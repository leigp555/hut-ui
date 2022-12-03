<demo>
基本用法
</demo>

<template>
  <DatePicker v-model:value="value" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Dayjs } from 'dayjs'
import { DatePicker } from '@/lib'

const value = ref<Dayjs>()

watch(value, () => {
  console.log(value.value)
})
</script>
