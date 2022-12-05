<demo>
info
</demo>

<template>
  <Result status="info">
    <template #title> Successfully Purchased Cloud Server ECS! </template>
    <template #extra>
      <Button key="console" type="primary">Go Console</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button } from '@/lib'
</script>
