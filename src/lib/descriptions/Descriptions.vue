<template>
  <table class="ui-descriptions-wrap">
    <slot />
  </table>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
$font_color: #000000d9;
.ui-descriptions-wrap {
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
  font-size: 14px;
  color: $font_color;
  outline: 1px solid #c6c6c6;
}
</style>
