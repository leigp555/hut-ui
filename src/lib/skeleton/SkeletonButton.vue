<template>
  <div v-if="!loading">
    <slot />
  </div>
  <div
    v-if="loading"
    class="ui-skeletonButton-wrap"
    :class="{ 'ui-skeletonButton-active': active }"
    :style="{ width: `${width}px`, height: `${height}px`, lineHeight: `${height}px` }"
  />
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(
  defineProps<{
    active?: boolean
    loading?: boolean
    width?: number
    height?: number
  }>(),
  {
    active: false,
    loading: true,
    height: 32,
    width: 64
  }
)
</script>

<style lang="scss">
@import './index.scss';
.ui-skeletonButton-wrap {
  display: inline-block;
  vertical-align: top;
  background-color: var(--bac_color);
  border-radius: 2px;
  width: 64px;
  height: 32px;
  line-height: 32px;
  &.ui-skeletonButton-active {
    background: var(--active_bac_color);
    background-size: 400% 100%;
    animation: skeleton_active 1.4s ease infinite;
  }
}
</style>
