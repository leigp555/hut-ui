<demo>
带字数提示
</demo>

<template>
  <Textarea
    v-model:value="value"
    placeholder="Autosize height based on content lines"
    :maxlength="20"
    showCount
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@/lib'

const value = ref<string>('')
</script>
