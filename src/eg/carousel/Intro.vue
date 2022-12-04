<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>旋转木马，一组轮播的区域。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Carousel: 主要组件</li>
        <li>CarouselItem: 子组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>当有一组平级的内容。</li>
        <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li>
        <li>常用于一组图片或卡片轮播。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
