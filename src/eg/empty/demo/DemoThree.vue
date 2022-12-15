<demo>
自定义描述
</demo>

<template>
  <Empty>
    <template #icon>
      <Icon_empty3 name="empty3" width="3em" height="3em" />
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
import { Icon_empty3 } from '@hut-ui/icons-vue'
import { Empty, SvgIcon, Button } from '@/lib'
</script>
