<demo>
输入框外添加元素
</demo>

<template>
  <Input v-model:value="value" placeholder="Basic usage">
    <template #suffix_outer>
      <Button :style="{ marginLeft: '4px' }">search</Button>
    </template>
  </Input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, Button } from '@/lib'

const value = ref<string>('')
</script>
