<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Input: 主要组件</li>
        <li>InputIcon:子组件。</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>需要用户输入表单域内容时。</li>
        <li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
