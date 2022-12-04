<demo>
示例一
</demo>

<template>
  <Slider v-model:value="value" :style="{ width: '300px' }" />
  <div style="margin-top: 50px">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@/lib'

const value = ref<number>(50)
const disabled = ref<boolean>(false)
</script>
