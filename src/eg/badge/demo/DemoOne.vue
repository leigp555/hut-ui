<demo>
基本用法
</demo>

<template>
  <div class="wrap">
    <Badge>
      <Avatar shape="square">
        <template #icon>
          <Icon_user name="user" width="2em" height="2em" />
        </template>
      </Avatar>
      <template #count
        ><span class="count">{{ count > 99 ? '99+' : count }}</span></template
      >
    </Badge>
    <Badge>
      <Avatar shape="square">
        <template #icon>
          <Icon_user name="user" width="2em" height="2em" />
        </template>
      </Avatar>
      <template #count
        ><span class="count">{{ 0 }}</span></template
      >
    </Badge>
    <Badge>
      <Avatar shape="square">
        <template #icon>
          <Icon_user name="user" width="2em" height="2em" />
        </template>
      </Avatar>
      <template #count
        ><span class="count">{{ 55 }}</span></template
      >
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon_user } from '@hut-ui/icons-vue'
import { Badge, Avatar } from '@/lib'

const count = ref<number>(100)
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 20px;
}
</style>
