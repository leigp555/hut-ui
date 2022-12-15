<demo>
自定义颜色
</demo>

<template>
  <div class="wrap">
    <Tag :color="randomColor()">pink</Tag>
    <Tag :color="randomColor()">red</Tag>
    <Tag :color="randomColor()">orange</Tag>
    <Tag :color="randomColor()">green</Tag>
    <Tag :color="randomColor()">cyan</Tag>
    <Tag :color="randomColor()">blue</Tag>
    <Tag :color="randomColor()">purple</Tag>
    <Tag :color="randomColor()">#f50</Tag>
    <Tag :color="randomColor()">#2db7f5</Tag>
    <Tag :color="randomColor()">#87d068</Tag>
    <Tag :color="randomColor()">#108ee9</Tag>
    <Tag :color="randomColor()"> Wechat </Tag>
    <Tag :color="randomColor()">close</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from '@/lib'
import { randomColor } from '@/eg/helper'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
