<template>
  <Result style="margin-top: 20px">
    <template #icon>
      <SvgIcon name="notFound" width="250px" height="250px" />
    </template>
    <template #title>
      <p class="substr">File not found</p>
      <p class="substr">
        The site configured at this address does not contain the requested file.
      </p>
    </template>
    <template #extra>
      <Button key="console" type="primary" @click="onClick">Go back</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Result, Button, SvgIcon } from '@/lib'

const router = useRouter()

const onClick = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.substr {
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
}
</style>
