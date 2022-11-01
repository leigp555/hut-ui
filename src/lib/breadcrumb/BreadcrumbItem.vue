<template>
  <div class="ui-BreadcrumbItem-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ href?: string }>(), { href: '' })
</script>

<style lang="scss">
.ui-BreadcrumbItem-wrap {
}
</style>
