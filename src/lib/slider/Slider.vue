<script setup lang="ts">
import { withDefaults, defineProps, ref, onMounted, toRefs } from 'vue'

const emits = defineEmits(['update:value', 'change', 'afterChange'])
const props = withDefaults(defineProps<{ value?: number; disabled?: boolean }>(), {
  disabled: false,
  value: 0
})
const { value, disabled } = toRefs(props)

const sliderWrapRef = ref<HTMLDivElement | null>(null)
const sliderLineRef = ref<HTMLDivElement | null>(null)
const sliderBlockRef = ref<HTMLDivElement | null>(null)
const isMove = ref<boolean>(false)
const wrapWidth = ref<number>(0)

// 记录每一次按下前的滑块位置
const initDistance = ref<number>(0)
// 鼠标按下时记录横坐标
const initClickX = ref<number>(0)
// 记录上一次的移动距离
const lastDistance = ref<number>(0)
// 记录当前此的移动距离
const distance = ref<number>(0)

onMounted(() => {
  if (sliderWrapRef.value && sliderBlockRef.value && sliderLineRef.value) {
    // 容器宽度
    wrapWidth.value = sliderWrapRef.value.getBoundingClientRect().width - 16
    // 初始移动
    initDistance.value = (value.value / 100) * wrapWidth.value
    lastDistance.value = initDistance.value
    sliderBlockRef.value.style.transform = `translate3d(${initDistance.value}px,-50%,0)`
    sliderLineRef.value.style.transform = `translate3d(${initDistance.value}px,0,0)`
  }
})

const onMousemove = (e: MouseEvent) => {
  // 这是组件核心重点，必须阻止默认事件不然mouseup事件会监听失败
  // 这是组件核心重点，必须阻止默认事件不然mouseup事件会监听失败
  // 这是组件核心重点，必须阻止默认事件不然mouseup事件会监听失败
  e.stopPropagation()
  e.preventDefault()
  if (isMove.value && sliderBlockRef.value && sliderLineRef.value) {
    // 必须加上上一次的滑动距离不然会回弹
    distance.value = lastDistance.value + e.clientX - initClickX.value
    // 记录滑动到的位置
    const result = initDistance.value + distance.value - lastDistance.value
    if (result <= wrapWidth.value && result >= 0) {
      sliderBlockRef.value.style.transform = `translate3d(${distance.value}px,-50%,0)`
      sliderLineRef.value.style.transform = `translate3d(${distance.value}px,0,0)`
      emits('update:value', Math.ceil((result / wrapWidth.value) * 100))
      emits('change', Math.ceil((result / wrapWidth.value) * 100))
    } else if (result > wrapWidth.value) {
      sliderBlockRef.value.style.transform = `translate3d(${wrapWidth.value}px,-50%,0)`
      sliderLineRef.value.style.transform = `translate3d(${wrapWidth.value}px,0,0)`
      emits('update:value', 100)
      emits('change', 100)
      distance.value = wrapWidth.value
    } else if (result < 0) {
      sliderBlockRef.value.style.transform = `translate3d(0px,-50%,0)`
      sliderLineRef.value.style.transform = `translate3d(0px,0,0)`
      emits('update:value', 0)
      emits('change', 0)
      distance.value = 0
    }
  }
}
const onMouseup = () => {
  lastDistance.value = distance.value
  isMove.value = false
  document.documentElement.removeEventListener('mousemove', onMousemove)
  document.documentElement.removeEventListener('mouseup', onMouseup)
  sliderBlockRef.value!.classList.remove('ui-slider-drag')
  emits('afterChange', value.value)
}

const onMouseDown = (e: MouseEvent) => {
  if (disabled.value) {
    e.stopPropagation()
    e.preventDefault()
    return
  }
  isMove.value = true
  initClickX.value = e.clientX
  // 初始化点击时的位置
  initDistance.value = (value.value / 100) * wrapWidth.value
  // 事件绑定在html元素上效果更好
  document.documentElement.addEventListener('mousemove', onMousemove)
  document.documentElement.addEventListener('mouseup', onMouseup)
  sliderBlockRef.value!.classList.add('ui-slider-drag')
}
</script>

<template>
  <div
    class="ui-slider-wrap"
    :class="{ 'ui-slider-disabled': disabled }"
    ref="sliderWrapRef"
  >
    <div class="ui-slider-view">
      <div class="ui-slider-line" ref="sliderLineRef" />
    </div>
    <div
      class="ui-slider-block"
      ref="sliderBlockRef"
      @mousedown="onMouseDown"
      @mouseup="onMouseup"
      :class="{ 'ui-slider-block-disabled': disabled }"
    >
      <span class="ui-slider-tip">{{ value }}</span>
    </div>
  </div>
</template>

<style lang="scss">
$success_color: #91d5ff;
$fail_color: #f5f5f5;
$tip_color: #404040;
.ui-slider-wrap {
  min-height: 8px;
  background-color: darken($fail_color, 5);

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
    &.ui-slider-block-disabled {
      cursor: not-allowed;
    }
    > .ui-slider-tip {
      background-color: $tip_color;
      font-size: 14px;
      color: #ffffff;
      position: absolute;
      top: 0;
      left: 50%;
      padding: 6px 8px;
      line-height: 1.5em;
      transform: translate(-50%, calc(-100% - 12px));
      opacity: 0;
      visibility: hidden;
      transition: all 250ms;
      &:after {
        content: '';
        width: 8px;
        height: 8px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 50%) rotate(45deg);
        background-color: $tip_color;
      }
    }
    &.ui-slider-drag {
      box-shadow: 0 0 0 4px rgba(24, 144, 255, 0.2);
      & .ui-slider-tip {
        opacity: 1;
        visibility: visible;
      }
    }
    &:hover .ui-slider-tip {
      opacity: 1;
      visibility: visible;
    }
  }
  &.ui-slider-disabled {
    cursor: not-allowed;
    .ui-slider-line {
      background: #b8b8b8;
    }
    .ui-slider-block {
      border-color: #00000040;
    }
  }
}
</style>
