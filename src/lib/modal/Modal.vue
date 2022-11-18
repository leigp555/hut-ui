<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { withDefaults, defineProps, toRefs, onMounted, watch, ref, reactive } from 'vue'
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
    width: 300,
    top: 100
  }
)
const { visible, maskClosable, width, top } = toRefs(props)
const onClose = () => {
  if (maskClosable.value) {
    emits('update:visible', false)
  }
}
const wrapShow = ref<boolean>(false)

const initElPosition = reactive<{ x: number; y: number }>({ x: 0, y: 0 })

const initElHandle = (e: Event) => {
  initElPosition.x = e.clientX - document.body.clientWidth / 2 + width.value / 2
  initElPosition.y = e.clientY - top.value
  console.log(initElPosition.x, initElPosition.y)
}

onMounted(() => {
  watch(visible, () => {
    if (visible.value) {
      bodyAddClass(visible.value)
      wrapShow.value = true
      document.body.addEventListener('click', initElHandle)
    } else {
      document.body.removeEventListener('click', initElHandle)
      setTimeout(() => {
        bodyAddClass(visible.value)
        wrapShow.value = false
      }, 300)
    }
  })
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
              width: `${width}px`,
              transformOrigin: `${initElPosition.x}px ${initElPosition.y}px`
            }"
            v-show="visible"
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
      height: 200px;
      margin: 8px auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 2px;
      > .ui-modal-title {
        border-bottom: 1px solid red;
      }
      > .ui-modal-content {
        flex-grow: 10;
      }
      > .ui-modal-footer {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 8px;
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
  transition: all 300ms linear;
}

.modal-enter-from,
.modal-leave-to {
  transform: scale(0);
}
</style>
