<template>
  <div class="loading">
    <Skeleton :avatar="false" :paragraph="{ rows: 5 }" />
  </div>
</template>

<script lang="ts" setup>
import { Skeleton } from '@/lib'
</script>

<style scoped lang="scss">
.loading {
  font-size: 50px;
  color: red;
  margin-top: 50px;
  padding: 0 50px 80px 32px;
}
</style>
