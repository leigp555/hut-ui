<template>
  <div class="ui-template-wrap">
    <Upload @change="onChange($event)" :style="{ height: '220px' }">
      <p :style="{ marginBottom: '10px' }">
        <SvgIcon name="img_push" width="2.5em" height="2.5em" />
      </p>
      <p :style="{ marginBottom: '4px', fontSize: '16px' }">
        Click or drag file to this area to upload
      </p>
      <p :style="{ marginBottom: '4px', fontSize: '14px' }">
        Support for a single or bulk upload. Strictly prohibit from uploading company
        data or other band files
      </p>
    </Upload>
  </div>
</template>

<script setup lang="ts">
import Upload from '@/lib/upload/Upload.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const onChange = (data: { blobs: File[]; urlPromises: string[] }) => {
  console.log(data.blobs)
  console.log(data.urlPromises)
}
</script>

<style lang="scss">
.ui-template-wrap {
  margin: 100px;
}
</style>
