<template>
  <div class="ui-anchor-wrap" ref="wrapRef">
    <div class="ui-anchor-nav">
      <slot name="nav" />
    </div>
    <div class="ui-anchor-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const wrapRef = ref<HTMLElement | null>(null)
// 简单的节流函数
function throttle(func, wait, mustRun) {
  let timeout
  let startTime = new Date()

  return () => {
    const curTime = new Date()

    clearTimeout(timeout)
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func()
      startTime = curTime
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(func, wait)
    }
  }
}

function handle() {
  console.log('执行了')
}

const scrollHandle = () => {
  throttle(handle, 300, 300)()
  console.log(wrapRef.value.scrollTop)
}

onMounted(() => {
  window.addEventListener('scroll', scrollHandle)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandle)
})
</script>

<style lang="scss">
.ui-anchor-wrap {
  > .ui-anchor-nav {
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    top: 50px;
    left: 50px;
    background-color: yellow;
    width: 100px;
    padding: 20px;
  }
}
</style>
