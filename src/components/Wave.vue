<template>
  <div class="waveWrapper waveAnimation">
    <div class="waveWrapperInner bgTop">
      <div
        class="wave waveTop"
        style="background-image: url('/src/assets/wave-top.png')"
      ></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div
        class="wave waveMiddle"
        style="background-image: url('/src/assets/wave-mid.png')"
      ></div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div
        class="wave waveBottom"
        style="background-image: url('/src/assets/wave-bot.png')"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/wave.scss';
</style>
