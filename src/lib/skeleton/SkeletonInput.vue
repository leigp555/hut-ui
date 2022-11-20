<template>
  <div v-if="!loading">
    <slot />
  </div>
  <div
    v-if="loading"
    class="ui-skeletonInput-wrap"
    :class="{ 'ui-skeletonInput-active': active }"
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
    width: 200
  }
)
</script>

<style lang="scss">
@import './index.scss';
.ui-skeletonInput-wrap {
  width: 200px;
  display: inline-block;
  vertical-align: top;
  background-color: $bac_color;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
  &.ui-skeletonInput-active {
    background: $active_bac_color;
    background-size: 400% 100%;
    animation: skeleton_active 1.4s ease infinite;
  }
}
</style>
