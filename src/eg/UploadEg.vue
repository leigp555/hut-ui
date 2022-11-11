<template>
  <div class="ui-template-wrap">
    <Upload @change="onChange($event)" />
  </div>
</template>

<script setup lang="ts">
import Upload from '@/lib/upload/Upload.vue'

const onChange = ({ blobs, urlPromises }) => {
  console.log(blobs)
  console.log(urlPromises)
}
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
