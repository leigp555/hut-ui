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
const onClick = () => {
  shouldShow.value = true
}
const okClick = () => {
  shouldShow.value = false
  emits('confirm')
}
const cancelClick = () => {
  shouldShow.value = false
  emits('cancel')
}
</script>

<template>
  <div class="ui-popconfirm-wrap" tabindex="-1">
    <transition name="fade">
      <div class="ui-popconfirm-tip" :class="{ [placement]: true }" v-show="shouldShow">
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
    <div @click="onClick">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
