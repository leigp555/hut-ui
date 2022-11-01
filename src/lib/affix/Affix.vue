<template>
  <div
    class="ui-affix-wrap"
    ref="containerRef"
    :class="{ fixed: shouldFixed }"
    :style="{
      justifyContent: rowPosition,
      top: `${offsetTop}px`,
      left: `${leftPosition}px`
    }"
  >
    <div class="ui-affix-inner" ref="contentRef" @scroll="xx">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, toRefs, ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    container?: HTMLElement
    offsetTop?: number
    rowPosition?: 'start' | 'center' | 'end'
  }>(),
  {
    container: document.body,
    offsetTop: 100,
    rowPosition: 'start'
  }
)
const { container, offsetTop, rowPosition } = toRefs(props)

const containerRef = ref<HTMLDivElement | null>(null)
const contentRef = ref<HTMLDivElement | null>(null)
const leftPosition = ref<number>(0)
const shouldFixed = ref(false)

const scrollHandle = () => {
  console.log('执行了')
  const { top } = containerRef.value!.getBoundingClientRect()
  if (top < offsetTop!) shouldFixed.value = true
  if (top > offsetTop!) shouldFixed.value = false
}

onMounted(() => {
  const { left } = contentRef.value!.getBoundingClientRect()
  leftPosition.value = left
  if (container.value) {
    containerRef.value.addEventListener('scroll', scrollHandle)
  }
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandle)
})

const xx = () => {
  console.log('滚动了')
}
</script>

<style lang="scss">
.ui-affix-wrap {
  display: flex;
  border: 2px solid black;
  padding: 10px;
  &.fixed {
    position: fixed;
  }
  > .ui-affix-inner {
    border: 5px solid green;
    display: inline-block;
  }
}
</style>
