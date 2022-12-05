<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>展示行列数据。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Table: 主要组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>当有大量结构化的数据需要展现时；</li>
        <li>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
