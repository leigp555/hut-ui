<demo>
支持自定义icon
</demo>
<template>
  <div class="wrap">
    <Button type="text" radius style="background-color: #67c23a">
      <template #icon>
        <SvgIcon name="weixin" width="1em" height="1em" fill="#fff" />
      </template>
    </Button>
    <Button type="text" radius style="background-color: #e6a23c">
      <template #icon>
        <SvgIcon name="search" width="1em" height="1em" fill="#fff" />
      </template>
    </Button>
    <Button type="primary" radius>
      <template #icon>
        <SvgIcon name="email" width="1em" height="1em" fill="#fff" />
      </template>
    </Button>

    <Button type="text" style="background-color: #67c23a">
      <template #icon>
        <SvgIcon name="weixin" width="1em" height="1em" fill="#fff" />
      </template>
      wechat
    </Button>
    <Button type="text" style="background-color: #e6a23c">
      <template #icon>
        <SvgIcon name="search" width="1em" height="1em" fill="#fff" />
      </template>
      search
    </Button>
    <Button type="primary">
      <template #icon>
        <SvgIcon name="email" width="1em" height="1em" fill="#fff" />
      </template>
      email
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button, SvgIcon } from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
