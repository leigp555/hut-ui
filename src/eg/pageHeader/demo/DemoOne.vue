<demo>
基本用法
</demo>

<template>
  <PageHeader title="Title" subtitle="This is a subtitle" @back="back"></PageHeader>
</template>

<script setup lang="ts">
import { PageHeader } from '@/lib'

const back = () => {
  console.log('back')
}
</script>
