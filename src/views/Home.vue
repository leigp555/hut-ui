<template>
  <div class="home-wrap">
    <Header />
    <div class="home-content scroll-container">
      <section class="content">
        <div class="bird">
          <Bird />
        </div>
        <div class="intro">
          <h1 class="title">Hut UI</h1>
          <p class="description">基于 Vue 3，面向设计师和开发者的组件库</p>
        </div>
        <div class="wave">
          <Wave />
        </div>
      </section>
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
import Bird from '@/components/Bird.vue'
import Wave from '@/components/Wave.vue'
</script>

<style lang="scss" scoped>
.home-wrap {
  .home-content {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 64px);
    scroll-behavior: smooth;
    overflow-y: overlay;
    > .content {
      height: calc(100vh - 64px);
      border-bottom: 1px solid #dcdfe6;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 200px;
        clip-path: ellipse(300px 200px at 0% 0%);
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(241, 242, 251, 1) 100%
        );
        z-index: -1;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 300px;
        height: 400px;
        clip-path: ellipse(300px 330px at 100% 84%);
        background: linear-gradient(
          180deg,
          rgba(241, 242, 251, 1) 0%,
          rgba(255, 255, 255, 1) 100%
        );
        z-index: -1;
      }
      > .intro {
        position: relative;
        top: 320px;
        > .title {
          font-size: 34px;
          margin: 0;
          line-height: 48px;
          text-align: center;
        }
        > .description {
          font-size: 18px;
          color: #606266;
          text-align: center;
        }
      }
      > .bird {
        position: relative;
        top: 80px;
      }
      > .wave {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
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
