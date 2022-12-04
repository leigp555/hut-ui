<demo>
基本用法
</demo>

<template>
  <Upload @change="onChange">
    <Button>
      <template #icon>
        <SvgIcon name="upload" fill="#fff" />
      </template>
      upload
    </Button>
  </Upload>
</template>

<script setup lang="ts">
import { Upload, SvgIcon, Button } from '@/lib'

const onChange = (data: { blobs: File[]; urlPromises: string[] }) => {
  console.log(data.blobs)
  console.log(data.urlPromises)
}
</script>
