<template>
  <Typography>
    <Title>简介</Title>
    <Paragraph>
      <p>为页面和功能提供导航的菜单列表。</p>
    </Paragraph>
    <Title>组件概览</Title>
    <Paragraph>
      <ul>
        <li>Menu</li>
        <li>MenuItem</li>
        <li>MenuItemGroup</li>
        <li>SubMenu</li>
      </ul>
    </Paragraph>
    <Title>使用场景</Title>
    <Paragraph>
      <ul>
        <li>使用导航菜单可以快速在网站的页面间跳转。</li>
        <li>导航同级之间在逻辑上需为并列且互斥的关系。</li>
      </ul>
    </Paragraph>
  </Typography>
</template>

<script lang="ts" setup>
import { Typography, Paragraph, Title } from '@/lib/index'
</script>
