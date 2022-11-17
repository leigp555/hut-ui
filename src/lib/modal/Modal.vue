<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { withDefaults, defineProps, toRefs, onMounted, watch, ref } from 'vue'
import { bodyAddClass } from '../common/bodyAddClass'

type PlacementType = 'top' | 'bottom' | 'left' | 'right'

const emits = defineEmits(['update:visible', 'afterClose'])

const props = withDefaults(
  defineProps<{
    visible?: boolean
    placement?: PlacementType
    classname?: string
    maskClosable?: boolean
  }>(),
  {
    visible: false,
    placement: 'left',
    classname: 'ui-custom',
    maskClosable: true
  }
)
const { visible, maskClosable } = toRefs(props)
const onClose = () => {
  if (maskClosable.value) {
    emits('update:visible', false)
    emits('afterClose')
  }
}

const wrapShow = ref<boolean>(false)
onMounted(() => {
  watch(visible, () => {
    if (visible.value) {
      bodyAddClass(visible.value)
      wrapShow.value = true
    } else {
      setTimeout(() => {
        bodyAddClass(visible.value)
        wrapShow.value = false
      }, 3000)
    }
  })
})
</script>

<template>
  <Teleport to="body">
    <div class="ui-drawer-wrap" v-show="wrapShow">
      <Transition name="mask">
        <div
          class="ui-drawer-mask"
          @click="onClose"
          :class="{ 'mask-open': visible }"
          v-show="visible"
        ></div>
      </Transition>
      <div class="body-wrap">
        <Transition name="modal">
          <div
            class="ui-drawer-body"
            v-bind="$attrs"
            :class="{ [classname]: true }"
            v-show="visible"
          >
            <div class="ui-drawer-title" v-if="$slots.title">
              <slot name="title" />
            </div>
            <div class="ui-drawer-content" v-if="$slots.content">
              <slot name="content" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Teleport>
</template>
<style lang="scss">
.ui-drawer-wrap {
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
  color: #000000d9;
  > .ui-drawer-mask {
    background-color: #00000073;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  > .body-wrap {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    border: 1px solid red;
    transform: translate(-50%, -60%);
    > .ui-drawer-body {
      background-color: #ffffff;
      font-size: 14px;
      line-height: 1.5em;
      width: 300px;
      height: 200px;
      transform-origin: 500px 500px;
      > .ui-drawer-title {
      }
      > .ui-drawer-content {
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

//left
.modal-enter-active,
.modal-leave-active {
  transition: all 3000ms linear;
}

.modal-enter-from,
.modal-leave-to {
  transform: scale(0);
}
</style>
