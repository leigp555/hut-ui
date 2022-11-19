<template>
  <div class="ui-template-wrap">
    <Progress :percent="30" />
    <Progress :percent="50" status="active" />
    <Progress :percent="70" status="exception" />
    <Progress :percent="100" />
    <Progress :percent="50" :show-info="false" />
    <!--    small-->
    <div style="height: 50px"></div>
    <Progress :percent="30" size="small" />
    <Progress :percent="50" size="small" status="active" />
    <Progress :percent="70" size="small" status="exception" />
    <Progress :percent="100" size="small" />
    <!--  可以调整percent-->
    <Progress :percent="defaultPercent" />
    <div>
      <Button @click="decline"> - </Button>
      <Button @click="increase" style="margin-left: 20px"> + </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Progress from '@/lib/progress/Progress.vue'
import Button from '@/lib/button/Button.vue'

const defaultPercent = ref<number>(0)
const increase = () => {
  const percent = defaultPercent.value + 10
  defaultPercent.value = percent > 100 ? 100 : percent
}

const decline = () => {
  const percent = defaultPercent.value - 10
  defaultPercent.value = percent < 0 ? 0 : percent
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
}
</style>
