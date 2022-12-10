<template>
  <div class="template-wrap scroll-container">
    <section class="content">
      <slot name="content" />
    </section>
    <!--    外部链接-->
    <section class="footer-wrap">
      <Footer />
    </section>
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss" scoped>
.template-wrap {
  overflow-y: auto;
  overflow-x: auto;
  height: 100%;
  scroll-behavior: smooth;
  padding: 10px 150px 10px 32px;
  @media (max-width: 1000px) {
    padding: 10px 120px 10px 10px;
  }
  @media (max-width: 600px) {
    padding: 10px 10px 10px 10px;
  }
  > .footer-wrap {
    padding: 0 10px;
  }
}
</style>
