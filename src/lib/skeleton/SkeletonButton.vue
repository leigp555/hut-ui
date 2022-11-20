<template>
  <div v-if="!loading">
    <slot />
  </div>
  <div
    v-if="loading"
    class="ui-skeletonButton-wrap"
    :class="{ 'ui-skeletonButton-active': active }"
  />
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ active?: boolean; loading?: boolean }>(), {
  active: false,
  loading: true
})
</script>

<style lang="scss">
@import './index.scss';
.ui-skeletonButton-wrap {
  display: inline-block;
  vertical-align: top;
  background-color: $bac_color;
  border-radius: 2px;
  width: 64px;
  min-width: 64px;
  height: 32px;
  line-height: 32px;
  &.ui-skeletonButton-active {
    background: $active_bac_color;
    background-size: 400% 100%;
    animation: skeleton_active 1.4s ease infinite;
  }
}
</style>
