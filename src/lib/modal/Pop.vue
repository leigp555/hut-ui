<script lang="ts" setup>
import {
  computed,
  defineProps,
  onMounted,
  reactive,
  ref,
  toRefs,
  VNode,
  watch,
  withDefaults
} from 'vue'
import Button from '@/lib/button/Button.vue'
import { bodyAddClass } from '@/lib/common/bodyAddClass'
import Alert from '../alert/Alert.vue'

const emits = defineEmits(['ok', 'cancel'])
const props = withDefaults(
  defineProps<{
    title: VNode
    content: VNode
    icon?: VNode
    cancelText?: string
    okText?: string
    type: 'success' | 'error' | 'warning' | 'info'
    unMount: () => void
    ok: boolean
    cancel: boolean
    width?: number
    top?: number
    maskClosable?: boolean
  }>(),
  { width: 300, top: 100, maskClosable: false }
)
const { unMount, width, top, maskClosable, ok, cancel } = toRefs(props)

const visible = ref<boolean>(false)

const handleOk = () => {
  if (ok.value) emits('ok')
  visible.value = false
  const id = setTimeout(() => {
    unMount.value()
    window.clearTimeout(id)
  }, 400)
}
const handleCancel = () => {
  if (cancel.value) emits('cancel')
  visible.value = false
  const id = setTimeout(() => {
    unMount.value()
    window.clearTimeout(id)
  }, 400)
}

// 是否点击遮罩关闭
const onClose = () => {
  if (maskClosable.value) {
    visible.value = false
    const id = setTimeout(() => {
      unMount.value()
      window.clearTimeout(id)
    }, 400)
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
// 用户设置的width如果比页面还宽那么页面的宽度就等于页面宽度减去32像素css设定padding 0 16px
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
      const id = setTimeout(() => {
        bodyAddClass(visible.value)
        wrapShow.value = false
        window.clearTimeout(id)
      }, 300)
      contentShow.value = false
    }
  })
  visible.value = true
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
  <div class="ui-modal-pop-wrap ui-modal-wrap">
    <Transition name="modal-mask">
      <div class="ui-modal-mask" @click="onClose" v-show="contentShow"></div>
    </Transition>
    <!--        内容区-->
    <div class="ui-modal-body-wrap" :style="{ top: `${top}px` }">
      <Transition name="modal">
        <div
          class="ui-modal-body"
          :style="{
            width: contentWidth,
            transformOrigin: transformOrigin,
            gap: 0
          }"
          v-show="contentShow"
        >
          <div class="ui-modal-content" style="margin-top: 10px; padding: 0">
            <Alert
              :message="typeof title === 'string' ? title : ''"
              :type="type"
              showIcon
              banner
              :style="{ backgroundColor: '#fff', marginBottom: 0 }"
            >
              <template #title v-if="typeof title !== 'string'">
                <Component :is="title" />
              </template>
              <template #description>
                <Component :is="content" v-if="typeof content !== 'string'" />
                <div v-else>{{ content }}</div>
              </template>
              <template #icon v-if="icon">
                <Component :is="icon" />
              </template>
            </Alert>
          </div>
          <div
            class="ui-modal-footer"
            style="padding: 10px 16px; border-top: none; margin-bottom: 4px"
          >
            <Button type="default" @click="handleCancel">{{
              cancelText ? cancelText : '取消'
            }}</Button>
            <Button type="primary" @click="handleOk" v-if="ok">{{
              okText ? okText : '确定'
            }}</Button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
