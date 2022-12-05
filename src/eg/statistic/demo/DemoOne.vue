<demo>
基本用法
</demo>

<template>
  <Statistic
    title="Active Users"
    :value="112893.0"
    :precision="2"
    suffix="%"
    :value-style="{ color: '#3f8600' }"
  >
    <template #prefix>
      <SvgIcon name="sub" width="0.9em" height="0.9em" fill="#3f8600" />
    </template>
  </Statistic>
</template>

<script setup lang="ts">
import { Statistic, SvgIcon } from '@/lib'
</script>
