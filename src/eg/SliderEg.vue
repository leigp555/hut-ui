<template>
  <div class="ui-template-wrap">
    <Slider
      v-model:value="value1"
      :disabled="disabled"
      :style="{ width: '300px', height: '8px', borderRadius: '8px' }"
    />
  </div>
  {{ value1 }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Slider from '@/lib/slider/Slider.vue'

const value1 = ref<number>(50)
const disabled = ref<boolean>(false)
</script>

<style lang="scss">
.ui-template-wrap {
  margin: 200px;
}
</style>
