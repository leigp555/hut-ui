<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>设置组件之间的间距。</p>
    </Paragraph>
    <Title>组件概述</Title>
    <Paragraph>
      <ul>
        <li>Space：主要组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <p>避免组件紧贴在一起，拉开统一的空间。</p>
      <ul>
        <li>适合行内元素的水平间距。</li>
        <li>可以设置各种水平对齐方式。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
