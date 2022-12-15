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
        <Icon_wechat name="weixin" width="1em" height="1em" fill="#fff" />
      </template>
    </Button>
    <Button type="text" radius style="background-color: #e6a23c">
      <template #icon>
        <Icon_search name="search" width="1em" height="1em" fill="#fff" />
      </template>
    </Button>
    <Button type="primary" radius>
      <template #icon>
        <Icon_email name="email" width="1em" height="1em" fill="#fff" />
      </template>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Icon_email, Icon_search, Icon_wechat } from '@hut-ui/icons-vue'
import { Button } from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
