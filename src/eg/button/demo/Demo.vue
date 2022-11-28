<template>
  <div class="demo-wrap">
    <section id="ex-template-demo1" class="section-item">
      <DemoOne />
    </section>
    <section id="ex-template-demo2" class="section-item">
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
  > .section-item {
    padding: 42px 24px 50px;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
  }
}
</style>
