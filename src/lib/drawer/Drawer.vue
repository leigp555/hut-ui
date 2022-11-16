<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { withDefaults, defineProps, toRefs, onMounted, watch, ref } from 'vue'
import { addClass } from '@/lib/drawer/helper'

type PlacementType = 'top' | 'bottom' | 'left' | 'right'

const emits = defineEmits(['update:visible', 'afterClose'])

const props = withDefaults(
  defineProps<{ visible?: boolean; placement?: PlacementType; classname?: string }>(),
  {
    visible: false,
    placement: 'left',
    classname: 'ui-custom'
  }
)
const { visible } = toRefs(props)
const onClose = () => {
  emits('update:visible', false)
  emits('afterClose')
}

const wrapShow = ref<boolean>(false)
onMounted(() => {
  watch(visible, () => {
    if (visible.value) {
      addClass(visible.value)
      wrapShow.value = true
    } else {
      setTimeout(() => {
        addClass(visible.value)
        wrapShow.value = false
      }, 300)
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
      <Transition :name="`content-${placement}`">
        <div
          class="ui-drawer-body"
          v-bind="$attrs"
          :class="{ [`drawer-body-${placement}`]: true, [classname]: true }"
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
  </Teleport>
</template>
<style lang="scss">
body {
  &.draw_pop {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }
}
.ui-drawer-wrap {
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  position: absolute;
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
  > .ui-drawer-body {
    background-color: #ffffff;
    font-size: 14px;
    line-height: 1.5em;
    position: absolute;
    z-index: 100;
    &.drawer-body-left {
      top: 0;
      left: 0;
      min-width: 100px;
      box-shadow: 6px 0 16px -8px #00000014, 9px 0 28px #0000000d,
        12px 0 48px 16px #00000008;
      height: 100vh;
    }
    &.drawer-body-right {
      top: 0;
      right: 0;
      min-width: 100px;
      box-shadow: -6px 0 16px -8px #00000014, -9px 0 28px #0000000d,
        -12px 0 48px 16px #00000008;
      height: 100vh;
    }
    &.drawer-body-top {
      top: 0;
      left: 0;
      width: 100vw;
      box-shadow: 0 6px 16px -8px #00000014, 0 9px 28px #0000000d,
        0 12px 48px 16px #00000008;
      min-height: 50px;
    }
    &.drawer-body-bottom {
      bottom: 0;
      left: 0;
      width: 100vw;
      box-shadow: 0 -6px 16px -8px #00000014, 0 -9px 28px #0000000d,
        0 -12px 48px 16px #00000008;
      min-height: 50px;
    }
    > .ui-drawer-title {
    }
    > .ui-drawer-content {
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
//right
.content-right-enter-active,
.content-right-leave-active {
  transition: all 300ms;
}

.content-right-enter-from,
.content-right-leave-to {
  transform: translateX(100%);
}
//left
.content-left-enter-active,
.content-left-leave-active {
  transition: all 300ms;
}

.content-left-enter-from,
.content-left-leave-to {
  transform: translateX(-100%);
}
//top
.content-top-enter-active,
.content-top-leave-active {
  transition: all 300ms;
}

.content-top-enter-from,
.content-top-leave-to {
  transform: translateY(-100%);
}
//bottom
.content-bottom-enter-active,
.content-bottom-leave-active {
  transition: all 300ms;
}

.content-bottom-enter-from,
.content-bottom-leave-to {
  transform: translateY(100%);
}
</style>
