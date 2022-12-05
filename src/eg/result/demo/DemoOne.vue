<demo>
success
</demo>

<template>
  <Result status="success">
    <template #title> Successfully Purchased Cloud Server ECS! </template>
    <template #subTitle>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur
      dolore eum ex ipsum optio, qui voluptatum. Aliquid consectetur deserunt distinctio
      doloremque est, harum itaque nam odio quibusdam recusandae sapiente.
    </template>
    <template #extra>
      <Button key="console" type="primary">Go Console</Button>
      <Button key="buy">Buy Again</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button } from '@/lib'
</script>
