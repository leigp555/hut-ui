<template>
  <tr class="ui-desItemRow-wrap">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
.ui-desItemRow-wrap {
  display: table-row;
  padding: 42px 24px 50px;
  &:not(:last-child) {
    border-bottom: 1px solid #c6c6c6;
  }
}
</style>
