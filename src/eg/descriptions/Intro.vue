<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>成组展示多个只读字段。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Descriptions</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <p>常见于详情页的信息展示。</p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
