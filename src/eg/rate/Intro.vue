<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>评分组件。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Rate</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <ul>
        <li>对评价进行展示。</li>
        <li>对事物进行快速的评级操作。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
