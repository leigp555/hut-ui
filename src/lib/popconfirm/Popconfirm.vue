<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'
import Button from '../button/Button.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

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

const emits = defineEmits(['confirm', 'cancel'])
withDefaults(
  defineProps<{ placement: Placement; okText: string; cancelText: string }>(),
  {
    placement: 'topCenter',
    okText: 'confirm',
    cancelText: 'cancel'
  }
)

const shouldShow = ref<boolean>(false)
const popHasClick = ref<boolean>(false)
const onClick = () => {
  shouldShow.value = true
}
const onBlur = () => {
  if (!popHasClick.value) {
    shouldShow.value = false
  }
}
const onPopMouseDown = () => {
  popHasClick.value = true
}
const onPopBlur = () => {
  popHasClick.value = false
  shouldShow.value = false
}
const okClick = () => {
  shouldShow.value = false
  popHasClick.value = false
  emits('confirm')
}
const cancelClick = () => {
  shouldShow.value = false
  popHasClick.value = false
  emits('cancel')
}
</script>

<template>
  <div class="ui-popconfirm-wrap">
    <transition name="fade">
      <div
        class="ui-popconfirm-tip"
        :class="{ [placement]: true }"
        v-show="shouldShow"
        v-bind="$attrs"
        tabindex="-1"
        @mousedown="onPopMouseDown"
        @blur="onPopBlur"
      >
        <div class="ui-popconfirm-content">
          <div class="ui-popconfirm-icon">
            <slot name="icon" v-if="$slots.icon" />
            <SvgIcon name="warning" width="1em" height="1em" fill="#faad14" v-else />
          </div>
          <div class="ui-popconfirm-title">
            <slot name="title" />
          </div>
        </div>
        <div class="ui-popconfirm-actions">
          <Button @click="okClick">{{ okText }}</Button>
          <Button type="default" @click="cancelClick">{{ cancelText }}</Button>
        </div>
      </div>
    </transition>
    <div tabindex="-1" @click="onClick" @blur="onBlur" style="cursor: pointer">
      <div style="pointer-events: none">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
