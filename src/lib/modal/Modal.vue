<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  toRefs,
  onMounted,
  watch,
  ref,
  reactive,
  computed
} from 'vue'
import { bodyAddClass } from '../common/bodyAddClass'

const emits = defineEmits(['update:visible'])

const props = withDefaults(
  defineProps<{
    visible?: boolean
    classname?: string
    maskClosable?: boolean
    width?: number
    top?: number
  }>(),
  {
    visible: false,
    classname: 'ui-custom',
    maskClosable: true,
    width: 500,
    top: 100
  }
)
const { visible, maskClosable, width, top } = toRefs(props)
// 遮罩层是否展示
const onClose = () => {
  if (maskClosable.value) {
    emits('update:visible', false)
  }
}
// 整个组件是否展示
const wrapShow = ref<boolean>(false)
// content内容是否展示
const contentShow = ref<boolean>(false)
// 页面宽度
const pageWidth = ref<number>(0)
// 缩放的x,y轴偏移量
const initElPosition = reactive<{ x: number; y: number }>({ x: 0, y: 0 })

// 监听body元素点击事件处理函数
const initElHandle = (e: Event) => {
  if (width.value + 32 > pageWidth.value) {
    initElPosition.x =
      e.clientX - document.body.clientWidth / 2 + (pageWidth.value - 32) / 2
    initElPosition.y = e.clientY - top.value
  } else {
    initElPosition.x = e.clientX - document.body.clientWidth / 2 + width.value / 2
    initElPosition.y = e.clientY - top.value
  }
  // 内容元素必须要在获得scale缩放的x,y轴偏移量之后才展示,不然首次展示编译位置不对，动画会很丑
  contentShow.value = true
  // 获取完偏移量后立即取消对body的事件监听
  document.body.removeEventListener('click', initElHandle)
}

onMounted(() => {
  watch(visible, () => {
    if (visible.value) {
      bodyAddClass(visible.value)
      wrapShow.value = true
      pageWidth.value = document.body.clientWidth
      document.body.addEventListener('click', initElHandle)
    } else {
      // wrap元素要等内容动画展示完才能关闭不然只有进的动画没有出的动画
      setTimeout(() => {
        bodyAddClass(visible.value)
        wrapShow.value = false
      }, 300)
      contentShow.value = false
    }
  })
})

const contentWidth = computed(() => {
  if (width.value + 32 > pageWidth.value) {
    return `${pageWidth.value - 32}px`
  }
  return `${width.value}px`
})
const transformOrigin = computed(() => {
  return `${initElPosition.x}px ${initElPosition.y}px`
})
</script>

<template>
  <Teleport to="body">
    <div class="ui-modal-wrap" v-show="wrapShow">
      <!--        遮罩层-->
      <Transition name="ui-modal-mask">
        <div
          class="ui-modal-mask"
          @click="onClose"
          :class="{ 'mask-open': visible }"
          v-show="visible"
        ></div>
      </Transition>
      <!--        内容区-->
      <div class="ui-modal-body-wrap" :style="{ top: `${top}px` }">
        <Transition name="modal">
          <div
            class="ui-modal-body"
            v-bind="$attrs"
            :class="{ [classname]: true }"
            :style="{
              width: contentWidth,
              transformOrigin: transformOrigin
            }"
            v-show="contentShow"
          >
            <div class="ui-modal-title" v-if="$slots.title">
              <slot name="title" />
            </div>
            <div class="ui-modal-content" v-if="$slots.content">
              <slot name="content" />
            </div>
            <div class="ui-modal-footer" v-if="$slots.footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Teleport>
</template>
<style lang="scss">
.ui-modal-wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
  color: #000000d9;
  > .ui-modal-mask {
    background-color: #00000073;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  > .ui-modal-body-wrap {
    position: absolute;
    z-index: 100;
    left: 50%;
    transform: translate(-50%);
    > .ui-modal-body {
      background-color: #ffffff;
      font-size: 14px;
      line-height: 1.5em;
      margin: 8px auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 2px;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
      > .ui-modal-title {
        padding: 16px 24px;
        border-bottom: 1px solid #f0f0f0;
      }
      > .ui-modal-content {
        flex-grow: 10;
        padding: 12px 24px;
        word-wrap: break-word;
      }
      > .ui-modal-footer {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 8px;
        padding: 10px 16px;
        border-top: 1px solid #f0f0f0;
      }
    }
  }
}

//遮罩层动画
.mask-enter-active,
.mask-leave-active {
  transition: opacity 300ms;
}
.mask-enter-from,
.mask-leave-to {
  opacity: 0;
}

//内容部分动画
.modal-enter-active,
.modal-leave-active {
  transition: all 200ms linear;
}

.modal-enter-from,
.modal-leave-to {
  transform: scale(0.2);
}
</style>
