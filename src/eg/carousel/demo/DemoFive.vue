<demo>
向后播放
</demo>

<template>
  <Carousel
    @change="onChange"
    :autoPlay="true"
    :duration="3000"
    v-model:init="init"
    :quickJump="true"
    direction="back"
    :indicator="true"
  >
    <div class="item"><h3>1</h3></div>
    <div class="item"><h3>2</h3></div>
    <div class="item"><h3>3</h3></div>
    <div class="item"><h3>4</h3></div>
  </Carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Carousel } from '@/lib'

const init = ref<number>(1)
const onChange = (current: number) => {
  console.log(current)
}
</script>

<style lang="scss" scoped>
.item {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
</style>
