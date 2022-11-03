<template>
  <div class="wrap">
    <Steps :current="current" :totalStep="steps.length">
      <Step
        v-for="item in steps"
        :key="item.title"
        :title="item.title"
        :order="item.order"
      />
    </Steps>
    <div class="steps-content">
      {{ steps[current - 1].content }}
    </div>
    <div class="steps-action">
      <Button v-if="current < steps.length" @click="next"> Next </Button>
      <Button v-if="current === steps.length"> Done </Button>
      <Button v-if="current > 1" style="margin-left: 8px" @click="prev">
        Previous
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Steps from '@/lib/steps/Steps.vue'
import Step from '@/lib/steps/Step.vue'
import Button from '@/lib/button/Button.vue'

const current = ref<number>(1)
const next = () => {
  console.log('执行了')
  current.value += 1
}
const prev = () => {
  current.value -= 1
}
const steps = [
  {
    title: '第一步',
    content: 'First-content',
    order: 1
  },
  {
    title: '第二步',
    content: 'Second-content',
    order: 2
  },
  {
    title: '第三步',
    content: 'Last-content',
    order: 3
  }
]
</script>

<style lang="scss">
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
