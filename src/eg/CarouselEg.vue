<template>
  <div class="ui-template-wrap">
    <Carousel
      @change="onChange"
      :autoPlay="true"
      :duration="3000"
      v-model:init="init"
      :quickJump="true"
      direction="forward"
      :indicator="true"
    >
      <div class="item"><h3>1</h3></div>
      <div class="item"><h3>2</h3></div>
      <div class="item"><h3>3</h3></div>
      <div class="item"><h3>4</h3></div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Carousel from '@/lib/carousel/Carousel.vue'

const init = ref<number>(1)
const onChange = (current: number) => {
  console.log(current)
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
  .item {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
}
</style>
