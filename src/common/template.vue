<template>
  <div class="ui-template-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
// import Button from '@/lib/button/Button.vue'

withDefaults(defineProps<{}>(), {})

// import { getSourceCode } from '@/eg/helper'
// import Preview from '@/components/Preview.vue'
// const html = computed(() => {
//   return getSourceCode(Example.__sourceCode)
// })
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
