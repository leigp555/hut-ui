<template>
  <div class="ui-app">
    <section class="components-Head">
      <Header />
    </section>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import NProgress from 'nprogress'
import { NavigationGuardNext, RouteLocationNormalized, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'

const router = useRouter()
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    // 每次切换页面时，调用进度条
    NProgress.start()
    next()
  }
)
router.afterEach((to, from, failure) => {
  NProgress.done()
})
</script>

<style lang="scss" scoped>
.ui-app {
  height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 250ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
