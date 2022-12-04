<demo>
基本用法
</demo>

<template>
  <Empty>
    <template #icon>
      <SvgIcon name="empty1" width="3em" height="3em" />
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
import { Empty, SvgIcon, Button } from '@/lib'
</script>
