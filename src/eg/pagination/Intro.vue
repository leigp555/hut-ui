<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>采用分页的形式分隔长列表，每次只加载一个页面。</p>
    </Paragraph>
    <Title>组件概述</Title>
    <Paragraph>
      <ul>
        <li>Pagination：主要组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>当加载/渲染所有数据将花费很多时间时；</li>
        <li>可切换页码浏览数据。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
