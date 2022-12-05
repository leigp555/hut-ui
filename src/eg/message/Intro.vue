<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>全局展示操作反馈信息。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Message</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <ul>
        <li>可提供成功、警告和错误等反馈信息。</li>
        <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
