<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>树型选择控件。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>TreeSelect</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <p>
        类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用
        TreeSelect，例如公司层级、学科系统、分类目录等等。
      </p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
