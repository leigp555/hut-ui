<script setup lang="ts">
import {
  defineProps,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  useSlots,
  VNode,
  withDefaults
} from 'vue'

type ContainerType = () => HTMLElement | null

const props = withDefaults(
  defineProps<{ customClass?: string; scrollContainer: ContainerType | null }>(),
  {
    customClass: 'custom-class',
    scrollContainer: null
  }
)
const { scrollContainer } = toRefs(props)
const slots = useSlots().default!()

// 选中的节点
const selectItem = ref<{
  titleVNode?: VNode | null
  targetOffsetTop?: number
  targetClientHeight?: number
  active?: boolean
}>({})

// 所有节点
const elInfo = ref<
  {
    titleVNode: VNode | null
    targetOffsetTop: number
    targetClientHeight: number
    active: boolean
    order: number
  }[]
>([])

const currentOrder = ref<number>(0)
// 获取所有节点的信息
elInfo.value = slots.map((item, index) => {
  return {
    titleVNode: item,
    targetOffsetTop: 0,
    targetClientHeight: 0,
    active: index === 0,
    order: index
  }
})

// 简单的节流函数
function throttle(func: () => void, wait: number, mustRun: number) {
  let timeout: number
  let startTime = (Date.parse(new Date().toString()) / 1000) as number

  return () => {
    const curTime = (Date.parse(new Date().toString()) / 1000) as number

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
  let scrollDistance: number = 0
  if (scrollContainer.value && scrollContainer.value()) {
    scrollDistance = scrollContainer.value().scrollTop
  } else {
    scrollDistance = document.documentElement.scrollTop || document.body.scrollTop
  }
  elInfo.value.forEach((item) => {
    if (
      item.targetOffsetTop >= scrollDistance - item.targetClientHeight &&
      item.targetOffsetTop <= scrollDistance + 80
    ) {
      selectItem.value = item
      currentOrder.value = item.order
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
    let target: HTMLElement
    if (item.titleVNode && item.titleVNode.props) {
      target = document.querySelector(item.titleVNode.props.href) as HTMLElement
      if (target) {
        targetOffsetTop = target.offsetTop
        targetClientHeight = target.clientHeight
      } else {
        targetOffsetTop = 0
        targetClientHeight = 0
      }
      item.targetClientHeight = targetClientHeight
      item.targetOffsetTop = targetOffsetTop
    }
  })
  selectItem.value = elInfo.value[0]
  scrollContainer.value && scrollContainer.value()
    ? scrollContainer.value().addEventListener('scroll', scrollHandle)
    : window.addEventListener('scroll', scrollHandle)
})
onUnmounted(() => {
  scrollContainer.value && scrollContainer.value()
    ? scrollContainer.value().removeEventListener('scroll', scrollHandle)
    : window.removeEventListener('scroll', scrollHandle)
})
</script>

<template>
  <div class="ui-anchor-wrap" :class="customClass">
    <div class="ui-anchor-indicator">
      <span
        class="anchor-indicator-radius"
        :style="{ top: `${4 + 23 * currentOrder}px` }"
      >
      </span>
    </div>
    <Component
      v-for="item in elInfo"
      :is="item.titleVNode"
      :key="item.titleVNode"
      :class="{ active: item.active }"
    />
  </div>
</template>

<style lang="scss">
.ui-anchor-wrap {
  display: inline-flex;
  flex-direction: column;
  position: fixed;
  top: 50px;
  right: 50px;
  gap: 7px;
  padding: 0 15px 0 32px;
  background-color: #ffffff;
  > .ui-anchor-indicator {
    position: absolute;
    top: 0;
    left: 15px;
    height: 100%;
    width: 2px;
    background-color: #f0f0f0;
    > .anchor-indicator-radius {
      position: absolute;
      left: 50%;
      top: 4px;
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: #fff;
      border: 2px solid #1890ff;
      border-radius: 8px;
      transform: translate(-50%);
      transition: all 250ms;
    }
  }
}
</style>
