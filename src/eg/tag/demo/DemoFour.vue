<demo>
可关闭的
</demo>

<template>
  <div class="wrap">
    <Tag @close="log" closable>pink</Tag>
    <Tag color="pink" @close="log" closable>pink</Tag>
    <Tag color="red" @close="log" closable>red</Tag>
    <Tag color="orange" @close="log" closable>orange</Tag>
    <Tag color="green" @close="log" closable>green</Tag>
    <Tag color="cyan" @close="log" closable>cyan</Tag>
    <Tag color="blue" @close="log" closable>blue</Tag>
    <Tag color="purple" @close="log" closable>purple</Tag>
    <Tag color="#f50" @close="log" closable>#f50</Tag>
    <Tag color="#2db7f5" @close="log" closable>#2db7f5</Tag>
    <Tag color="#87d068" @close="log" closable>#87d068</Tag>
    <Tag color="#108ee9" @close="log" closable>#108ee9</Tag>
    <Tag color="#108ee9" @close="log" closable>
      <template #icon>
        <SvgIcon name="weixin" width="1em" height="1em" fill="#108ee9" />
      </template>
      Wechat
    </Tag>
    <Tag color="#108ee9" @close="log" closable>close</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag, SvgIcon } from '@/lib'

const log = (el: HTMLSpanElement) => {
  console.log(el)
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
