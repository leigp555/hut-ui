<template>
  <div class="ui-skeletonButton-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
$backGround_color: rgba(190, 190, 190, 0.2);
.ui-skeletonButton-wrap {
  display: inline-block;
  vertical-align: top;
  background: $backGround_color;
  border-radius: 2px;
  width: 64px;
  min-width: 64px;
  height: 32px;
  line-height: 32px;
}
</style>
