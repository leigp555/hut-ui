<demo>
步骤切换
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
    <div class="steps-content">
      {{ steps[current - 1].content }}
    </div>
    <div class="steps-action">
      <Button v-if="current < steps.length" @click="next"> Next </Button>
      <Button v-if="current === steps.length" @click="done"> Done </Button>
      <Button v-if="current > 1" style="margin-left: 8px" @click="prev">
        Previous
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps, Step, Button, alert } from '@/lib'

const current = ref<number>(1)
const next = () => {
  current.value += 1
}
const prev = () => {
  current.value -= 1
}
const done = () => {
  alert.success('Processing complete!')
}
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

<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
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
