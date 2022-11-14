<template>
  <div class="ui-tab-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ keyValue: string; tab: string }>(), {})
</script>

<style lang="scss">
.ui-tab-wrap {
}
</style>
