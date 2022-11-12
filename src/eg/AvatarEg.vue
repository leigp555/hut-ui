<template>
  <div class="ui-template-wrap">
    <Avatar>
      <template #icon>
        <SvgIcon name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="64">
      <template #icon>
        <SvgIcon name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="64" shape="square">
      <template #icon>
        <SvgIcon name="user" width="2em" height="2em" />
      </template>
    </Avatar>
    <Avatar :size="64" shape="square" src="https://joeschmoe.io/api/v1/random">
      <template #icon>
        <SvgIcon name="user" width="2em" height="2em" />
      </template>
    </Avatar>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/lib/avatar/Avatar.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  gap: 50px;
}
</style>
