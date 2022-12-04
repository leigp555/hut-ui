<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>可以折叠/展开的内容区域。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Collapse: 主要组件</li>
        <li>Panel: 子组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>对复杂区域进行分组和隐藏，保持页面的整洁。</li>
        <li>手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
