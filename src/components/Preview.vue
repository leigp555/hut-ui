<template>
  <div class="ui-preview-wrap">
    <pre class="language-html" v-html="html" v-if="html" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ html: string | null }>(), {
  html: null
})
</script>

<style lang="scss">
.ui-preview-wrap {
}
</style>
