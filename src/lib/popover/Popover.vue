<script setup lang="ts">
import { withDefaults, defineProps, ref, toRefs } from 'vue'

type Placement =
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

const props = withDefaults(
  defineProps<{ placement: Placement; trigger?: 'hover' | 'click' }>(),
  {
    placement: 'topCenter',
    trigger: 'hover'
  }
)

const { trigger } = toRefs(props)
const shouldShow = ref<boolean>(false)
const onClick = () => {
  if (trigger.value === 'click') shouldShow.value = !shouldShow.value
}
const onBlur = () => {
  if (trigger.value === 'click') shouldShow.value = false
}
const onMouseOver = () => {
  if (trigger.value === 'hover') shouldShow.value = true
}
const onMouseleave = () => {
  if (trigger.value === 'hover') shouldShow.value = false
}
</script>

<template>
  <div
    class="ui-popover-wrap"
    tabindex="-1"
    @click="onClick"
    @mouseover="onMouseOver"
    @mouseleave="onMouseleave"
    @blur="onBlur"
  >
    <transition name="fade">
      <div class="ui-popover-tip" :class="{ [placement]: true }" v-show="shouldShow">
        <p class="ui-popover-title">
          <slot name="title" />
        </p>
        <div class="ui-popover-content">
          <slot name="content" />
        </div>
      </div>
    </transition>
    <div :style="{ 'pointer-events': 'none' }">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
.ui-popover-wrap {
}
</style>
