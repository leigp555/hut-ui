<template>
  <div v-if="!loading">
    <slot />
  </div>
  <div
    v-if="loading"
    class="ui-skeletonAvatar-wrap"
    :class="{ 'ui-skeletonAvatar-active': active }"
    :style="{ width: `${size}px`, height: `${size}px`, lineHeight: `${size}px` }"
  />
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ size?: number; active?: boolean; loading?: boolean }>(), {
  size: 32,
  active: false,
  loading: true
})
</script>

<style lang="scss">
@import './index.scss';
.ui-skeletonAvatar-wrap {
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  background-color: var(--bac_color);
  width: 32px;
  height: 32px;
  line-height: 32px;
  &.ui-skeletonAvatar-active {
    background: var(--active_bac_color);
    background-size: 400% 100%;
    animation: skeleton_active 1.4s ease infinite;
  }
}
</style>
