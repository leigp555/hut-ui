<template>
  <div
    class="ui-grid-row"
    :style="{ justifyContent: justify, gap, alignItems: alignItems }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

withDefaults(
  defineProps<{
    gap?: string
    justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around'
    alignItems?: 'center' | 'start' | 'end'
  }>(),
  {
    gap: '8px',
    justify: 'start',
    alignItems: 'center'
  }
)
</script>

<style lang="scss">
.ui-grid-row {
  display: flex;
  width: 100%;
  flex-grow: 100;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
