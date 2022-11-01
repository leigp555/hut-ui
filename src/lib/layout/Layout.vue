<template>
  <section class="ui-layout-layout" :class="{ 'ui-layout-row': row }"><slot /></section>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ row?: boolean }>(), { row: false })
</script>

<style lang="scss">
.ui-layout-layout {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  border: 3px solid black;
  &.ui-layout-row {
    flex-direction: row;
  }
}
</style>
