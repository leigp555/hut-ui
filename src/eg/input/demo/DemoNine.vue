<demo>
密码输入框
</demo>

<template>
  <Input v-model:value="value" placeholder="Basic usage" type="password" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/lib'

const value = ref<string>('')
</script>
