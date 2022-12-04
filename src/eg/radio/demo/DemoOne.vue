<demo>
基本用法
</demo>

<template>
  <Radio v-model:checked="checked">Radio</Radio>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Radio } from '@/lib'

const checked = ref<boolean>(false)
</script>
