<demo>
适应文本高度的文本域
</demo>

<template>
  <Textarea
    v-model:value="value"
    placeholder="Autosize height based on content lines"
    autoSize
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@/lib'

const value = ref<string>('')
</script>
