<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>多层次的结构列表。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Tree: 主要组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>
          文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用
          树控件 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
        </li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
