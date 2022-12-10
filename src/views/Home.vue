<template>
  <div class="home-wrap scroll-container">
    <Header />
    <div class="home-content scroll-container">
      <section class="content"></section>
      <!--    外部链接-->
      <section class="footer-wrap">
        <Footer style="margin-top: 0" />
      </section>
      <section class="version">
        <p>Hut UI 0.0.1 · Made by Leigp</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped>
.home-wrap {
  .home-content {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 64px);
    scroll-behavior: smooth;
    > .content {
      background: #fff;
      height: calc(100vh - 64px);
      border-bottom: 1px solid #dcdfe6;
    }
    > .footer-wrap {
      // margin-right: calc(100% - 100vw);
    }
    > .version {
      padding: 20px;
      text-align: center;
      color: #ffffff;
      background: #000000;
    }
  }
}
</style>
