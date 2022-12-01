<demo>
基本用法
</demo>

<template>
  <Pagination
    v-model:current="current"
    :total="1000"
    v-model:pageSize="pageSize"
    @pageSizeChange="pageSize = $event"
    :disabled="false"
    :pageSizeOptions="pageSizeOptions"
    @change="current = $event"
  >
    <template #buildOptionText="props">
      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
    </template>
  </Pagination>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from '@/lib'

const current = ref<number>(5)
const pageSize = ref<number>(10)
const pageSizeOptions = ref<string[]>(['10', '20', '30', '40', '50'])
</script>
