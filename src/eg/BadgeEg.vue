<template>
  <div class="ui-template-wrap">
    <Badge>
      <Avatar shape="square">
        <template #icon>
          <SvgIcon name="user" width="2em" height="2em" />
        </template>
      </Avatar>
      <template #count
        ><span class="count">{{ count > 99 ? '99+' : count }}</span></template
      >
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Badge from '@/lib/badge/Badge.vue'
import Avatar from '@/lib/avatar/Avatar.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const count = ref<number>(100)
</script>

<style lang="scss">
.ui-template-wrap {
  margin: 100px;
  display: flex;
  gap: 50px;
}
</style>
