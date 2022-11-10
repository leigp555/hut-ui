<script setup lang="ts">
import { withDefaults, defineProps, ref, onMounted, toRefs } from 'vue'

const emits = defineEmits(['update:value'])
const props = withDefaults(defineProps<{ value?: number }>(), {
  value: 0
})
const { value } = toRefs(props)

const initDistance = ref<number>(0)
const sliderWrapRef = ref<HTMLDivElement | null>(null)
const sliderLineRef = ref<HTMLDivElement | null>(null)
const sliderBlockRef = ref<HTMLDivElement | null>(null)
const isMove = ref<boolean>(false)
const initX = ref<number>(0)
const wrapWidth = ref<number>(0)
const lastDistance = ref<number>(0)
const distance = ref<number>(0)

onMounted(() => {
  // 容器宽度
  wrapWidth.value = sliderWrapRef.value.getBoundingClientRect().width - 16
  // 初始移动
  initDistance.value = (value.value / 100) * wrapWidth.value
  sliderBlockRef.value.style.transform = `translate3d(${initDistance.value}px,-50%,0)`
  sliderLineRef.value.style.transform = `translate3d(${initDistance.value}px,0,0)`
})

const onMousemove = (e: Event) => {
  // 这是组件核心重点，必须阻止默认事件不然mouseup事件会监听失败
  // 这是组件核心重点，必须阻止默认事件不然mouseup事件会监听失败
  // 这是组件核心重点，必须阻止默认事件不然mouseup事件会监听失败
  e.stopPropagation()
  e.preventDefault()
  if (isMove.value) {
    distance.value = lastDistance.value + e.clientX - initX.value
    const result = initDistance.value + distance.value
    if (result <= wrapWidth.value && result >= 0) {
      sliderBlockRef.value.style.transform = `translate3d(${distance.value}px,-50%,0)`
      sliderLineRef.value.style.transform = `translate3d(${distance.value}px,0,0)`
      emits('update:value', Math.ceil((result / wrapWidth.value) * 100))
    } else if (result > wrapWidth.value) {
      sliderBlockRef.value.style.transform = `translate3d(${wrapWidth.value}px,-50%,0)`
      sliderLineRef.value.style.transform = `translate3d(${wrapWidth.value}px,0,0)`
      emits('update:value', 100)
      distance.value = wrapWidth.value
    } else if (result < 0) {
      sliderBlockRef.value.style.transform = `translate3d(0px,-50%,0)`
      sliderLineRef.value.style.transform = `translate3d(0px,0,0)`
      emits('update:value', 0)
      distance.value = 0
    }
  }
}
const onMouseup = () => {
  console.log('结束')
  lastDistance.value = distance.value
  isMove.value = false
  document.documentElement.removeEventListener('mousemove', onMousemove)
  document.documentElement.removeEventListener('mouseup', onMouseup)
}

const onMouseDown = (e: Event) => {
  isMove.value = true
  initX.value = e.clientX
  console.log('开始')
  document.documentElement.addEventListener('mousemove', onMousemove)
  document.documentElement.addEventListener('mouseup', onMouseup)
}
</script>

<template>
  <div class="ui-slider-wrap" ref="sliderWrapRef">
    <div class="ui-slider-view">
      <div class="ui-slider-line" ref="sliderLineRef" />
    </div>
    <div
      class="ui-slider-block"
      ref="sliderBlockRef"
      @mousedown="onMouseDown"
      @mouseup="onMouseup"
    />
  </div>
</template>

<style lang="scss">
$success_color: blue;
$fail_color: green;
.ui-slider-wrap {
  min-height: 8px;
  background-color: $fail_color;
  position: relative;
  border-radius: 8px;
  > .ui-slider-view {
    overflow: hidden;
    position: relative;
    min-height: 8px;
    border-radius: 8px;
    > .ui-slider-line {
      height: 100%;
      width: 100%;
      background-color: $success_color;
      position: absolute;
      top: 0;
      left: -100%;
    }
  }

  > .ui-slider-block {
    width: 16px;
    height: 16px;
    background-color: white;
    border: 1px solid #1890ff;
    position: absolute;
    top: 50%;
    left: 0;
    border-radius: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
