<template>
  <div class="demo-wrap">
    <section id="ex-template-demo1">
      <DemoOne />
    </section>
    <section id="ex-template-demo2">
      <DemoTwo />
    </section>
  </div>
</template>

<script setup lang="ts">
import DemoOne from './DemoOne.vue'
import DemoTwo from './DemoTwo.vue'
</script>

<style lang="scss" scoped>
.demo-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
