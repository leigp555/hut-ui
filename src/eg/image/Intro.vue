<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>可预览的图片。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Image</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <ul>
        <li>需要展示图片时使用。</li>
        <li>加载大图时显示 loading 或加载失败时容错处理。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
