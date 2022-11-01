<template>
  <a class="ui-BreadcrumbItem-wrap" :href="href">
    <span>
      <slot name="icon" />
    </span>
    <span> <slot /></span>
  </a>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

// eslint-disable-next-line no-script-url
withDefaults(defineProps<{ href?: string }>(), { href: 'javascript:;' })
</script>

<style lang="scss">
.ui-BreadcrumbItem-wrap {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 2px;
}
</style>
