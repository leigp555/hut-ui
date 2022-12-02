<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>引导用户按照流程完成任务的导航条。</p>
    </Paragraph>
    <Title>组件概述</Title>
    <Paragraph>
      <ul>
        <li>steps：组件包裹</li>
        <li>step：展示每一步</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
