<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>显示当前页面在系统层级结构中的位置，并能向上返回。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Breadcrumb: 主要组件</li>
        <li>BreadcrumbItem:子组件。</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>当系统拥有超过两级以上的层级结构时；</li>
        <li>当需要告知用户『你在哪里』时；</li>
        <li>当需要向上导航的功能时。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
