<demo>
基本用法
</demo>

<template>
  <InputNumber
    v-model:value="value"
    :style="{ width: '100px', marginBottom: '20px' }"
  />
  <span style="user-select: none"> 当前值：{{ value }} </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@/lib'

const value = ref<number>(0)
</script>
