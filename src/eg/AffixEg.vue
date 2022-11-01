<template>
  <div class="wrap">
    <Affix :offsetTop="100">
      <button>距离顶部50px固定,水平中间</button>
    </Affix>
  </div>
</template>

<script setup lang="ts">
import Affix from '@/lib/affix/Affix.vue'
</script>

<style lang="scss">
body {
  border: 2px solid red;
  height: 200vh;
}
</style>
