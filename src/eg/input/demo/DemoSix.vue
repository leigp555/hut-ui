<demo>
设置文本最大高度和最小高度
</demo>

<template>
  <Textarea
    v-model:value="value"
    placeholder="Autosize height based on content lines"
    :autoSize="{ minRows: 3, maxRows: 5 }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@/lib'

const value = ref<string>('')
</script>
