<demo>
自定义图片
</demo>

<template>
  <Empty>
    <template #icon>
      <Icon_empty2 name="empty2" width="3em" height="3em" />
    </template>
    <template #description>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti
        dolores dolorum ducimus, eos, impedit
      </p>
    </template>
    <template #actions>
      <Button type="primary">back</Button>
    </template>
  </Empty>
</template>

<script setup lang="ts">
import { Icon_empty2 } from '@hut-ui/icons-vue'
import { Empty, SvgIcon, Button } from '@/lib'
</script>
