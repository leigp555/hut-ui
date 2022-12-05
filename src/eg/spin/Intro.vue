<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>用于页面和区块的加载中状态。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Spin</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <p>
        页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
      </p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
