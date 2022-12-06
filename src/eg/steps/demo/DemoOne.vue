<demo>
基本用法
</demo>
<template>
  <div class="wrap">
    <Steps :current="current" :totalStep="steps.length">
      <Step
        v-for="item in steps"
        :key="item.content"
        :title="item.content"
        :order="item.order"
      />
    </Steps>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps, Step } from '@/lib'

const current = ref<number>(1)
const steps = [
  {
    content: 'First-content',
    order: 1
  },
  {
    content: 'Second-content',
    order: 2
  },
  {
    content: 'Last-content',
    order: 3
  }
]
</script>

<style lang="scss" scoped>
.wrap {
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
}
</style>
