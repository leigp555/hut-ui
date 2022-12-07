<template>
  <div class="ui-app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import NProgress from 'nprogress'
import { NavigationGuardNext, RouteLocationNormalized, useRouter } from 'vue-router'
import { useLoadingStore } from '@/store'

const router = useRouter()
const loadStore = useLoadingStore()

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
    // if (to.meta?.loadingSkeleton) {
    //   loadStore.enterLoading()
    // }
    next()
  }
)
router.afterEach((to, from, failure) => {
  // 在即将进入新的页面组件前，关闭掉进度条
  // if (to.meta?.loadingSkeleton) {
  //   loadStore.finishLoad()
  // }
  NProgress.done()
})
</script>

<style lang="scss" scoped>
.ui-app {
  height: 100vh;
}
</style>
