<demo>
禁用
</demo>

<template>
  <Switch v-model:checked="checked" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@/lib'

const checked = ref<boolean>(false)
</script>
