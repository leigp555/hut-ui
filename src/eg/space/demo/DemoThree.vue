<demo>
垂直间距
</demo>
<template>
  <Space direction="column" :size="20">
    <Card title="Card" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
</template>

<script setup lang="ts">
import { Space, Card } from '@/lib'
</script>
