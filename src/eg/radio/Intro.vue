<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>单选框。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Radio</li>
        <li>RadioGroup</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>用于在多个备选项中选中单个状态。</li>
        <li>
          和 Select 的区别是，Radio
          所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
        </li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
