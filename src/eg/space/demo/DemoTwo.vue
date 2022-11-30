<demo>
自定义间距
</demo>

<template>
  <div>
    <Slider v-model:value="size" />
    <br />
    <br />
    <Space :size="size">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Space, Button, Slider } from '@/lib'

const size = ref<number>(8)
</script>
