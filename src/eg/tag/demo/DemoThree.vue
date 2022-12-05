<demo>
自定义icon
</demo>

<template>
  <div class="wrap">
    <Tag color="pink">
      <template #icon>
        <SvgIcon name="email" width="1em" height="1em" fill="pink" />
      </template>
      email
    </Tag>
    <Tag color="red">
      <template #icon>
        <SvgIcon name="setting" width="1em" height="1em" fill="red" />
      </template>
      setting
    </Tag>
    <Tag color="#108ee9">
      <template #icon>
        <SvgIcon name="weixin" width="1em" height="1em" fill="#108ee9" />
      </template>
      wechat
    </Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag, SvgIcon } from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
