<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

type Position = 'top' | 'bottom' | 'left' | 'right'

const emits = defineEmits(['update:visible', 'afterClose'])
withDefaults(
  defineProps<{ visible?: boolean; title?: string; placement?: Position }>(),
  {
    visible: false,
    placement: 'left'
  }
)
const onClose = () => {
  emits('update:visible', false)
  emits('afterClose')
}
</script>

<template>
  <Teleport to="html">
    <div class="ui-drawer-wrap" v-show="visible">
      <div class="ui-drawer-mask" @click="onClose"></div>
      <div class="ui-drawer-pop">
        <p>{{ title }}</p>
        <slot />
      </div>
    </div>
  </Teleport>
</template>
<style lang="scss">
html {
  position: relative;
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
  > .ui-drawer-pop {
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
