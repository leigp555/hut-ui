<template>
  <div class="ui-fromItem-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

type Rule = {
  required: boolean
  message: string
}

withDefaults(defineProps<{ label?: string; name?: string; rule?: Rule[] }>(), {
  label: '',
  name: '',
  rule: () => []
})
</script>

<style lang="scss">
.ui-fromItem-wrap {
}
</style>
