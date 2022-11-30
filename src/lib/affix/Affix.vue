<template>
  <!--  外层元素不能删除，需要占位,这点很重要-->
  <div class="ui-affix-wrap" ref="containerRef">
    <div
      ref="innerRef"
      class="ui-affix-inner"
      :style="{ top: `${offsetTop}px` }"
      :class="{ fixed: shouldFix }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
// 此组件的外层元素必须是一个滑动的元素因为要监听他的滑动式事件
import {
  withDefaults,
  defineProps,
  ref,
  onMounted,
  onUnmounted,
  toRefs,
  watch
} from 'vue'

const emits = defineEmits(['change'])
const props = withDefaults(
  defineProps<{
    offsetTop?: number
    scrollContainer: () => HTMLElement
  }>(),
  {
    offsetTop: 50,
    scrollContainer: () => window
  }
)
const { scrollContainer } = toRefs(props)
const containerRef = ref<HTMLDivElement | null>(null)
const innerRef = ref<HTMLDivElement | null>(null)
const initHeight = ref<number>(0)
const shouldFix = ref<boolean>(false)

// 简单的节流函数

function throttle(func: () => void, wait: number) {
  let startTime = new Date().getTime() as number
  return () => {
    const curTime = new Date().getTime() as number
    if (curTime - startTime >= wait) {
      func()
      startTime = curTime
    }
  }
}

const containerScroll = () => {
  const containerTop = containerRef.value!.getBoundingClientRect().top
  if (containerTop < props.offsetTop) {
    shouldFix.value = true
  } else if (containerTop > props.offsetTop) {
    shouldFix.value = false
  }
}
const handle = throttle(containerScroll, 100)
onMounted(() => {
  scrollContainer.value().addEventListener('scroll', handle)
  // 保留原位置的高度
  initHeight.value = innerRef.value!.getBoundingClientRect().height
  containerRef.value!.style.height = `${initHeight.value}px`
})
onUnmounted(() => {
  scrollContainer.value().removeEventListener('scroll', handle)
})

watch(shouldFix, () => {
  emits('change', shouldFix.value)
})
</script>

<style lang="scss">
.ui-affix-wrap {
  display: flex;
  background-color: inherit;
  > .ui-affix-inner {
    flex-grow: 10;
  }
  > .ui-affix-inner.fixed {
    position: fixed;
    z-index: 2000;
  }
}
</style>
