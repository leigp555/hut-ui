<template>
  <div v-if="!loading">
    <slot />
  </div>
  <div
    v-if="loading"
    class="ui-skeletonImg-wrap"
    :class="{ 'ui-skeletonImg-active': active }"
    :style="{ width: `${width}px`, height: `${height}px`, lineHeight: `${height}px` }"
  >
    <SvgIcon
      name="icon-img"
      :width="`${width / 2}px`"
      :height="`${height / 2}px`"
      fill="#bfbfbf"
    />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import SvgIcon from '../common/SvgIcon.vue'

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
    height: 96,
    width: 96
  }
)
</script>

<style lang="scss">
@import './index.scss';
.ui-skeletonImg-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  background-color: var(--bac_color);
  width: 96px;
  height: 96px;
  line-height: 96px;
  border-radius: 2px;
  &.ui-skeletonImg-active {
    background: var(--active_bac_color);
    background-size: 400% 100%;
    animation: skeleton_active 1.4s ease infinite;
  }
  > svg {
    width: 56px;
    height: 56px;
    line-height: 56px;
    max-width: 192px;
    max-height: 192px;
  }
}
</style>
