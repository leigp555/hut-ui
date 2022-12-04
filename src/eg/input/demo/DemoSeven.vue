<demo>
文本框设置可拖拉
</demo>

<template>
  <Textarea
    v-model:value="value"
    placeholder="Autosize height based on content lines"
    resize
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@/lib'

const value = ref<string>('')
</script>
