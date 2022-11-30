<demo>
设置对齐模式
</demo>

<template>
  <div class="space-align-container">
    <div class="space-align-block">
      <Space alignItems="center">
        center
        <Button>Primary</Button>
        <span class="mock-block">Block</span>
      </Space>
    </div>
    <div class="space-align-block">
      <Space alignItems="start">
        start
        <Button type="primary">Primary</Button>
        <span class="mock-block">Block</span>
      </Space>
    </div>
    <div class="space-align-block">
      <Space alignItems="end">
        end
        <Button type="primary">Primary</Button>
        <span class="mock-block">Block</span>
      </Space>
    </div>
    <div class="space-align-block">
      <Space alignItems="baseline">
        baseline
        <Button type="primary">Primary</Button>
        <span class="mock-block">Block</span>
      </Space>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Space, Button } from '@/lib'
</script>

<style scoped>
.space-align-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.space-align-block {
  margin: 8px 4px;
  border: 1px solid #40a9ff;
  padding: 4px;
  flex: none;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
</style>
