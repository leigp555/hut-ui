<demo>
基本用法
</demo>

<template>
  <Card title="Default size card" style="width: 300px">
    <template #extra>
      <a href="#">more</a>
    </template>
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from '@/lib'
</script>
