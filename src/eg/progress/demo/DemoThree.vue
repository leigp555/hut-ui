<demo>
可以调整percent
</demo>

<template>
  <div class="wrap">
    <Progress :percent="defaultPercent" />
    <div>
      <Button @click="decline"> - </Button>
      <Button @click="increase" style="margin-left: 20px"> + </Button>
    </div>
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
