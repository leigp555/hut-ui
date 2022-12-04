<demo>
禁用
</demo>

<template>
  <div>
    <Slider v-model:value="value" disabled :style="{ width: '300px' }" />
    <div style="margin-top: 50px">
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@/lib'

const value = ref<number>(20)
</script>
