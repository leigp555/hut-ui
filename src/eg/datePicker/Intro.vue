<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>输入或选择日期的控件。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>DatePicker</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <p>当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
