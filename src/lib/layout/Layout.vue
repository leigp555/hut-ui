<template>
  <section class="ui-layout-layout" :class="{ 'ui-layout-row': row }" :style="{ gap }">
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ row?: boolean; gap?: string }>(), { row: false, gap: '0px' })
</script>

<style lang="scss">
.ui-layout-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  &.ui-layout-row {
    display: flex;
    flex-direction: row;
  }
}
</style>
