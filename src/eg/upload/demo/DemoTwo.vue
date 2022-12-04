<demo>
拖拽上传
</demo>

<template>
  <Upload @change="onChange" class="upload">
    <div class="wrap">
      <div class="content">
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
      </div>
    </div>
  </Upload>
</template>

<script setup lang="ts">
import { Upload, SvgIcon, Button } from '@/lib'

const onChange = (data: { blobs: File[]; urlPromises: string[] }) => {
  console.log(data.blobs)
  console.log(data.urlPromises)
}
</script>

<style lang="scss" scoped>
.upload {
  display: block;
  .wrap {
    border: 1px dashed #d9d9d9;
    display: flex;
    min-height: 200px;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    > .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 16px 10px;
      text-align: center;
    }
  }
}
</style>
