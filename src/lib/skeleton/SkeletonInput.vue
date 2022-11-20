<template>
  <div class="ui-skeletonInput-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
$backGround_color: rgba(190, 190, 190, 0.2);
.ui-skeletonInput-wrap {
  width: 200px;
  display: inline-block;
  vertical-align: top;
  background: $backGround_color;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
}
</style>
