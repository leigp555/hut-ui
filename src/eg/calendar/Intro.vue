<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>按照日历形式展示数据的容器。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Calendar: 主要组件</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>
          当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。
        </li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
