<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>通过鼠标或键盘，输入范围内的数值。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>InputNumber</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <p>当需要获取标准数值时。</p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
