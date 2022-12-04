<demo>
基本用法
</demo>

<template>
  <Switch v-model:checked="checked" @change="onChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@/lib'

const checked = ref<boolean>(false)

const onChange = (isChecked: boolean) => {
  console.log(isChecked)
}
</script>
