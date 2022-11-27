<template>
  <div class="test">
    <Example />
    <pre class="language-html" v-html="html" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Example from '@/eg/UploadEg.vue'

const Prism = (window as any).Prism
const html = computed(() => {
  return Prism.highlight(Example.__sourceCode, Prism.languages.html, 'html')
})
</script>

<style>
.test {
  padding: 0 10px;
}
</style>
