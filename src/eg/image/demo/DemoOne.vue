<demo>
基本用法
</demo>

<template>
  <Image style="width: 200px" :src="imgUrl" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Image } from '@/lib'

const imgUrl = computed<string>(() => {
  return new URL('../img/star.jpg', import.meta.url).href
})
</script>
