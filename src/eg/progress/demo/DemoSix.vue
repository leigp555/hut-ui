<demo>
步骤进度条
</demo>

<template>
  <div class="wrap">
    <Progress type="step" :percent="defaultPercent" :steps="3" />
    <Progress type="step" :percent="60" :steps="3" />
    <br />
    <Progress type="step" :percent="30" :steps="5" />
    <br />
    <Progress
      type="step"
      :percent="100"
      :steps="5"
      size="small"
      stroke-color="#52c41a"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress, Button } from '@/lib'

const defaultPercent = ref<number>(30)
const increase = () => {
  const percent = defaultPercent.value + 10
  defaultPercent.value = percent > 100 ? 100 : percent
}

const decline = () => {
  const percent = defaultPercent.value - 10
  defaultPercent.value = percent < 0 ? 0 : percent
}
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
