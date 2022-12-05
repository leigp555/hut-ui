<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>展示统计数值。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Statistic</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <ul>
        <li>当需要突出某个或某组数字时。</li>
        <li>当需要展示带描述的统计类数据时使用。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
