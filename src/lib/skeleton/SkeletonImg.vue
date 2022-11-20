<template>
  <div class="ui-skeletonImg-wrap">
    <SvgIcon name="icon-img" width="48px" height="48px" fill="#bfbfbf" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
$backGround_color: rgba(190, 190, 190, 0.2);
.ui-skeletonImg-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  background: $backGround_color;
  width: 96px;
  height: 96px;
  line-height: 96px;
  border-radius: 2px;
  > svg {
    width: 56px;
    height: 56px;
    line-height: 56px;
    max-width: 192px;
    max-height: 192px;
  }
}
</style>
