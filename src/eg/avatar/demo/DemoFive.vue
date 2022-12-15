<demo>
设置头像链接
</demo>

<template>
  <div class="wrap">
    <Avatar
      :size="42"
      shape="square"
      src="https://joeschmoe.io/api/v1/random"
      :style="{ background: randomColor() }"
    >
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar
      :size="42"
      shape="round"
      src="https://joeschmoe.io/api/v1/random"
      :style="{ background: randomColor() }"
    >
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar
      :size="42"
      shape="square"
      src="https://joeschmoe.io/api/v1/random"
      :style="{ background: randomColor() }"
    >
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
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
