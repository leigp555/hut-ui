<template>
  <div class="ui-template-wrap">
    <Tag color="pink">pink</Tag>
    <Tag color="red">red</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="purple">purple</Tag>

    <Tag color="#f50">#f50</Tag>
    <Tag color="#2db7f5">#2db7f5</Tag>
    <Tag color="#87d068">#87d068</Tag>
    <Tag color="#108ee9">#108ee9</Tag>
    <Tag color="#108ee9">
      <template #icon>
        <SvgIcon name="weixin" width="1em" height="1em" fill="#108ee9" />
      </template>
      Wechat
    </Tag>
    <Tag color="#108ee9" @close="log" closable>close</Tag>
  </div>
</template>

<script setup lang="ts">
import Tag from '@/lib/tag/Tag.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const log = (el: HTMLSpanElement) => {
  console.log(el)
}
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
