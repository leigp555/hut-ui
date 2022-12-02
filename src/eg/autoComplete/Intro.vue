<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>输入框自动完成功能。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>AutoComplete: 主要组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>需要一个输入框而不是选择器。</li>
        <li>需要输入建议/辅助提示。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
