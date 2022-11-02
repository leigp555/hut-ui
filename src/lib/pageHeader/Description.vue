<template>
  <div class="ui-description-wrap">
    <span class="ui-description-label"> {{ label }}: </span>
    <div class="ui-description-item">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ label: string }>(), { label: 'Label' })
</script>

<style lang="scss">
.ui-description-wrap {
  display: flex;
  gap: 8px;
  margin-right: 5vw;
  > .ui-description-label {
    white-space: nowrap;
  }
  > .ui-description-item {
    white-space: nowrap;
  }
}
</style>
