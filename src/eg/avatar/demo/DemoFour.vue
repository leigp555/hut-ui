<demo>
设置背景颜色
</demo>

<template>
  <div class="wrap">
    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" fill="#fff" />
      </template>
    </Avatar>
    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" fill="#fff" />
      </template>
    </Avatar>
    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" fill="#fff" />
      </template>
    </Avatar>
    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" fill="#fff" />
      </template>
    </Avatar>
    <Avatar :size="42" shape="square" :style="{ background: randomColor() }">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" fill="#fff" />
      </template>
    </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Icon_user } from '@hut-ui/icons-vue'
import { Avatar } from '@/lib'
import { randomColor } from '@/eg/helper'
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  gap: 20px;
}
</style>
