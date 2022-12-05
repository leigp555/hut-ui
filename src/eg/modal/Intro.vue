<template>
  <Typography>
    <Title :level="4">简介</Title>
    <Paragraph>
      <p>模态对话框。</p>
    </Paragraph>
    <Title :level="4">组件概述</Title>
    <Paragraph>
      <ul>
        <li>Modal</li>
        <li>modal</li>
      </ul>
    </Paragraph>
    <Title :level="4">使用场景</Title>
    <Paragraph>
      <ul>
        <li>
          需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
          在当前页面正中打开一个浮层，承载相应的操作。
        </li>
        <li>
          另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。
        </li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
