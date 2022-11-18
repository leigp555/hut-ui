<script setup lang="ts">
import { withDefaults, defineProps, ref, toRefs } from 'vue'
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

const props = withDefaults(
  defineProps<{ placement: Placement; trigger?: 'hover' | 'click' }>(),
  {
    placement: 'topCenter',
    trigger: 'hover'
  }
)

const { trigger } = toRefs(props)
const shouldShow = ref<boolean>(true)
const onClick = () => {
  if (trigger.value === 'click') shouldShow.value = true
}
</script>

<template>
  <div class="ui-popover-wrap" tabindex="-1" @click="onClick">
    <transition name="fade">
      <div class="ui-popover-tip" :class="{ [placement]: true }" v-show="shouldShow">
        <div class="ui-popover-content">
          <div class="ui-popover-icon">
            <slot name="icon" v-if="$slots.icon" />
            <SvgIcon name="warning" width="1em" height="1em" fill="#faad14" v-else />
          </div>
          <p class="ui-popover-title">
            <slot name="title" />
          </p>
        </div>
        <div class="ui-popover-actions">
          <Button>yes</Button>
          <Button type="default">no</Button>
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
