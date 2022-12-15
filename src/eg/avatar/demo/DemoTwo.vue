<demo>
设置大小
</demo>

<template>
  <div class="wrap">
    <Avatar :size="32">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="38">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="42">
      <template #icon>
        <Icon_user name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="48">
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
