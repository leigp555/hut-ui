<demo>
自定义icon
</demo>

<template>
  <div class="wrap">
    <Tag color="pink">
      <template #icon>
        <Icon_email name="email" width="1em" height="1em" fill="pink" />
      </template>
      email
    </Tag>
    <Tag color="red">
      <template #icon>
        <Icon_setting name="setting" width="1em" height="1em" fill="red" />
      </template>
      setting
    </Tag>
    <Tag color="#108ee9">
      <template #icon>
        <Icon_wechat name="weixin" width="1em" height="1em" fill="#108ee9" />
      </template>
      wechat
    </Tag>
  </div>
</template>

<script setup lang="ts">
import { Icon_email, Icon_setting, Icon_wechat } from '@hut-ui/icons-vue'
import { Tag } from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
