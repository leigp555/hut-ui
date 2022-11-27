<template>
  <div class="test">
    <Example />
    <pre class="language-html" v-html="html" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Example from '@/eg/UploadEg.vue'
import { getSourceCode } from '@/eg/helper'

const html = computed(() => {
  return getSourceCode(Example.__sourceCode)
})
</script>

<style>
.test {
  padding: 0 10px;
}
</style>
