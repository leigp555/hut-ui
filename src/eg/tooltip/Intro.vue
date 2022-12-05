<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>简单的文字提示气泡框。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Tooltip: 主要组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</li>
        <li>可用来代替系统默认的 title 提示，提供一个 按钮/文字/操作 的文案解释。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
