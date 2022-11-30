<template>
  <div class="ui-divider-wrap">
    <div
      class="left"
      :class="{ positionLeft: position === 'left' }"
      :style="{ width: position ? '8%' : leftDistance }"
    ></div>
    <div class="inner">
      <slot />
    </div>
    <div
      class="right"
      :class="{ positionRight: position === 'right' }"
      :style="{ width: position ? '8%' : rightDistance }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

const props = withDefaults(
  defineProps<{
    position?: 'left' | 'right' | 'center' | 'normal'
    leftDistance?: string
    rightDistance?: string
  }>(),
  { leftDistance: '100%', rightDistance: '100%' }
)
</script>

<style lang="scss">
.ui-divider-wrap {
  padding: 16px 0;
  display: flex;
  align-items: center;
  .left {
    border-top: 1px solid #f0f0f0;
    flex-grow: 10;
    &.positionLeft {
      flex-grow: 0;
      width: 10%;
    }
  }
  .right {
    border-top: 1px solid #f0f0f0;
    flex-grow: 10;
    &.positionRight {
      flex-grow: 0;
      width: 10%;
    }
  }
  > .inner {
    height: 20px;
    display: flex;
    align-items: center;
    padding: 0 14px;
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
  }
}
</style>
