<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>提及组件。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Mentions</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <p>用于在输入中提及某人或某事，常用于发布、聊天或评论功能。</p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
