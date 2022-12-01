<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>用于跳转到页面指定位置。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Anchor</li>
        <li>AnchorLink</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
