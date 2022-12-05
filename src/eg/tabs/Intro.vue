<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>选项卡切换组件。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Tabs</li>
        <li>Tab</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
