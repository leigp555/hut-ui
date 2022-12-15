<demo>
基本用法
</demo>

<template>
  <div class="wrap">
    <Avatar>
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="48">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="48" shape="square">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="56" shape="square" :style="{ background: '#1890ff' }">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" fill="#fff" />
      </template>
    </Avatar>
    <Avatar :size="64" shape="square" src="https://joeschmoe.io/api/v1/random">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
      </template>
    </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Icon_user } from '@hut-ui/icons-vue'
import { Avatar } from '@/lib'
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  gap: 20px;
}
</style>
