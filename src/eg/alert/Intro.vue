<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>警告提示，展现需要关注的信息。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Alert</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <ul>
        <li>当某个页面需要向用户显示警告的信息时。</li>
        <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
