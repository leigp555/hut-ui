<demo>
404
</demo>

<template>
  <Result>
    <template #icon>
      <SvgIcon name="notFound" width="250px" height="300px" />
    </template>
    <template #title> Successfully Purchased Cloud Server ECS! </template>
    <template #extra>
      <Button key="console" type="primary">Go Home</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button, SvgIcon } from '@/lib'
</script>
