<template>
  <div class="ui-skeletonAvatar-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
$backGround_color: rgba(190, 190, 190, 0.2);
.ui-skeletonAvatar-wrap {
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  background: $backGround_color;
  width: 32px;
  height: 32px;
  line-height: 32px;
}
</style>
