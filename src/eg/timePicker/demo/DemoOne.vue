<demo>
基本用法
</demo>

<template>
  <TimePicker v-model:value="value" @change="onChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import { TimePicker } from '@/lib'

const value = ref<string>(dayjs().format('HH:mm:ss'))

const onChange = (time: string) => {
  console.log(time)
}
</script>
