<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>多选框。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Checkbox: 主要组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>在一组可选项中进行多项选择时；</li>
        <li>
          单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch
          会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
        </li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
