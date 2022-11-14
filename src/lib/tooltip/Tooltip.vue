<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'

const shouldShow = ref<boolean>(false)

type Position =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'leftTop'
  | 'leftCenter'
  | 'leftBottom'
  | 'rightTop'
  | 'rightCenter'
  | 'rightBottom'

withDefaults(defineProps<{ placement?: Position; color?: string }>(), {
  placement: 'topCenter',
  color: '#fff'
})
const onMouseover = () => {
  shouldShow.value = true
}
const onMouseleave = () => {
  shouldShow.value = false
}
</script>

<template>
  <div class="ui-tooltip-wrap" @mouseover="onMouseover" @mouseleave="onMouseleave">
    <Transition name="tooltip">
      <span
        class="ui-tooltip-tip"
        v-if="shouldShow"
        :class="{ [placement]: true }"
        :style="{ backgroundColor: color }"
      >
        <slot name="title" />
      </span>
    </Transition>

    <div><slot /></div>
  </div>
</template>

<style lang="scss">
@import './index.scss';

.too.ui-tooltip-tip-enter-from,
.too.ui-tooltip-tip-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.too.ui-tooltip-tip-enter-active,
.too.ui-tooltip-tip-leave-active {
  transition: all 250ms;
}
</style>
