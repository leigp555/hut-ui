<template>
  <div class="ui-divider-wrap">
    <div class="left" :class="{ positionLeft: position === 'left' }"></div>
    <div class="inner">
      <slot />
    </div>
    <div class="right" :class="{ positionRight: position === 'right' }"></div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

withDefaults(
  defineProps<{
    position?: 'left' | 'right' | 'center'
  }>(),
  { position: 'center' }
)
</script>

<style lang="scss">
.ui-divider-wrap {
  padding: 16px 0;
  display: flex;
  align-items: center;
  .left {
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    flex-grow: 10;
    &.positionLeft {
      flex-grow: 0;
      width: 10%;
    }
  }
  .right {
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
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
    font-weight: 700;
    font-size: 14px;
  }
}
</style>
