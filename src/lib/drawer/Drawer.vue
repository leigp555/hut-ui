<script setup lang="ts">
import { withDefaults, defineProps, toRefs, onMounted, watchEffect } from 'vue'
import { addClass } from '@/lib/drawer/helper'

type Position = 'top' | 'bottom' | 'left' | 'right'

const emits = defineEmits(['update:visible', 'afterClose'])
const props = withDefaults(
  defineProps<{ visible?: boolean; title?: string; placement?: Position }>(),
  {
    visible: false,
    placement: 'left'
  }
)
const { visible } = toRefs(props)
const onClose = () => {
  emits('update:visible', false)
  emits('afterClose')
}
onMounted(() => {
  watchEffect(() => {
    if (visible.value) {
      addClass(visible.value)
    }
    addClass(visible.value)
  })
})
</script>

<template>
  <Teleport to="body">
    <div class="ui-drawer-wrap" v-if="visible">
      <div class="ui-drawer-mask" @click="onClose"></div>
      <div class="ui-drawer-body">
        <div class="ui-drawer-title">
          {{ title }}
        </div>
        <div class="ui-drawer-content">
          <slot />
        </div>
      </div>
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
    opacity: 0.5;
  }
  > .ui-drawer-body {
    border: 2px solid red;
    height: 100vh;
    background-color: #ffffff;
    font-size: 14px;
    line-height: 1.5em;
    width: 250px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
  }
}
</style>
