<demo>
hover添加shadow
</demo>

<template>
  <Card title="Default size card" style="width: 500px" shadow>
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
