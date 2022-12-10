<template>
  <div class="waveWrapper waveAnimation">
    <div class="waveWrapperInner bgTop">
      <div class="wave waveTop" :style="{ backgroundImage: `url(${imgTopUrl})` }"></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div
        class="wave waveMiddle"
        :style="{ backgroundImage: `url(${imgMidUrl})` }"
      ></div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div
        class="wave waveBottom"
        :style="{ backgroundImage: `url(${imgBotUrl})` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const imgTopUrl = computed<string>(() => {
  return new URL('../assets/wave-top.png', import.meta.url).href
})
const imgMidUrl = computed<string>(() => {
  return new URL('../assets/wave-mid.png', import.meta.url).href
})
const imgBotUrl = computed<string>(() => {
  return new URL('../assets/wave-bot.png', import.meta.url).href
})
</script>

<style lang="scss" scoped>
@import '../style/wave.scss';
</style>
