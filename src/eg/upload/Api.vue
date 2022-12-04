<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '上传时的文件回调',
    回调参数: 'Function(data: { blobs: File[]; urlPromises: string[] })'
  }
]

const attrContentArr = []
</script>
