<demo>
禁用
</demo>

<template>
  <Checkbox v-model:checked="checked" disabled>Checkbox</Checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/lib'

const checked = ref(true)
</script>
