<demo>
设置形状
</demo>

<template>
  <div class="wrap">
    <Avatar :size="32">
      <template #icon>
        <SvgIcon name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="38" shape="square">
      <template #icon>
        <SvgIcon name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="42">
      <template #icon>
        <SvgIcon name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="48" shape="square">
      <template #icon>
        <SvgIcon name="user" width="2em" height="2em" />
      </template>
    </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar, SvgIcon } from '@/lib'
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  gap: 20px;
}
</style>
