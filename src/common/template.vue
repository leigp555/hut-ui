<template>
  <div class="ui-template-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
// import Button from '@/lib/button/Button.vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
