<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>展示操作的当前进度。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Progress: 主要组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
      <ul>
        <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；</li>
        <li>当需要显示一个操作完成的百分比时。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
