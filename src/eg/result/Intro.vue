<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>用于反馈一系列操作任务的处理结果。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Result</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <p>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
