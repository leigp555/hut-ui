<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>屏幕边缘滑出的浮层面板。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Drawer</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <ul>
        <li>
          当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
        </li>
        <li>
          当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。
        </li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
