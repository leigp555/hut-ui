<template>
  <div class="ui-template-wrap">
    <InputNumber v-model:value="value" :style="{ width: '100px' }" />
    当前值：{{ value }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputNumber from '@/lib/inputNumber/InputNumber.vue'

const value = ref<number>(0)
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
