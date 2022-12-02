<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>级联选择框。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Cascader</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <ul>
        <li>需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。</li>
        <li>从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。</li>
        <li>比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
