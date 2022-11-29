<demo>
圆形按钮
</demo>
<template>
  <div class="wrap">
    <Button radius loading></Button>
    <Button radius>A</Button>
    <Button radius type="dashed">A</Button>
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
