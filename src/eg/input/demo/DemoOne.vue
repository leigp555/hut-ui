<demo>
基本用法
</demo>

<template>
  <Input v-model:value="value" placeholder="Basic usage" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/lib'

const value = ref<string>('')
</script>
