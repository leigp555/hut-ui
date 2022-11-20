<template>
  <div class="ui-skeletonImg-wrap" :class="{ 'ui-skeletonImg-active': active }">
    <SvgIcon name="icon-img" width="48px" height="48px" fill="#bfbfbf" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

withDefaults(defineProps<{ active?: boolean }>(), { active: false })
</script>

<style lang="scss">
@import './index.scss';
.ui-skeletonImg-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  background-color: $bac_color;
  width: 96px;
  height: 96px;
  line-height: 96px;
  border-radius: 2px;
  &.ui-skeletonImg-active {
    background: $active_bac_color;
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
