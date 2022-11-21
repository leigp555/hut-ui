<template>
  <div class="ui-anchor-wrap">
    <Component
      v-for="item in elInfo"
      :is="item.titleVNode"
      :key="item.titleVNode"
      :class="{ active: item.active }"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, useSlots, VNode } from 'vue'

const slots = useSlots().default()

const selectItem = ref<{
  titleVNode: VNode
  targetOffsetTop: number
  targetClientHeight: number
  active: boolean
}>({})

const elInfo = ref<
  {
    titleVNode: VNode
    targetOffsetTop: number
    targetClientHeight: number
    active: boolean
  }[]
>([])
// 获取所有节点的信息
elInfo.value = slots.map((item, index) => {
  return {
    titleVNode: item,
    targetOffsetTop: null,
    targetClientHeight: null,
    active: index === 0
  }
})

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

// 获取滑动的高度,并判断是否高亮
function handle() {
  const scrollDistance = document.documentElement.scrollTop || document.body.scrollTop
  elInfo.value.forEach((item) => {
    if (
      item.targetOffsetTop >= scrollDistance - item.targetClientHeight &&
      item.targetOffsetTop <= scrollDistance + 80
    ) {
      selectItem.value = item
    }
    item.active = false
  })
  selectItem.value.active = true
}

// 绑定监听滚动事件
const scrollHandle = throttle(handle, 100, 100)
onMounted(() => {
  elInfo.value.forEach((item) => {
    let targetOffsetTop: number
    let targetClientHeight: number
    const target = document.querySelector(item.titleVNode.props.href) as HTMLElement
    if (target) {
      targetOffsetTop = target.offsetTop
      targetClientHeight = target.clientHeight
    } else {
      targetOffsetTop = 0
      targetClientHeight = 0
    }
    item.targetClientHeight = targetClientHeight
    item.targetOffsetTop = targetOffsetTop
  })
  selectItem.value = elInfo.value[0]
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
