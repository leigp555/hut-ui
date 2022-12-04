<demo>
监听change事件
</demo>

<template>
  <div>
    <Slider
      v-model:value="value"
      :style="{ width: '300px' }"
      @change="onChange"
      @afterChange="onAfterChange"
    />
    <div style="margin-top: 50px">
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@/lib'

const value = ref<number>(20)

const onChange = (newValue: number) => {
  // console.log(newValue)
}
const onAfterChange = (newValue: number) => {
  console.log(newValue)
}
</script>
