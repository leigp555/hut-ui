<template>
  <div class="test">
    <Example />
    <pre>{{ sourceCode }}</pre>
  </div>
</template>

<script setup lang="ts">
import Example from '@/eg/UploadEg.vue'

// eslint-disable-next-line no-underscore-dangle
const sourceCode = Example.__sourceCode
</script>

<style>
.test {
  padding: 0 10px;
}
</style>
