<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>双栏穿梭选择框。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Transfer</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <ul>
        <li>需要在多个可选项中进行多选时。</li>
        <li>
          比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。
        </li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
