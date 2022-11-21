<template>
  <div class="ui-anchor-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, provide, Ref, ref } from 'vue'

const scrollDistance = ref<number>(0)
const selectedEl = ref<{ el: HTMLElement | null; id: string }>({ el: null, id: '' })
const changeSelected = (newEl) => {
  selectedEl.value = newEl
}

provide<Ref<number>>('ui-anchor-scrollDistance', scrollDistance)
provide<Ref<{ el: HTMLElement | null; id: string }>>('ui-anchor-selectedEl', selectedEl)
provide<Ref<{ el: HTMLElement | null; id: string }>>(
  'ui-anchor-change-selectedEl',
  changeSelected
)

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

// 获取滑动的高度
function handle() {
  scrollDistance.value = document.documentElement.scrollTop || document.body.scrollTop
  // console.log(document.documentElement.scrollTop)
  // console.log(document.body.scrollTop)
}

const scrollHandle = throttle(handle, 10, 10)

onMounted(() => {
  window.addEventListener('scroll', scrollHandle)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandle)
})
</script>

<style lang="scss">
.ui-anchor-wrap {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 50px;
  left: 250px;
  background-color: yellow;
  width: 100px;
  padding: 20px;
}
</style>
