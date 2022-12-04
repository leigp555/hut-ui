<demo>
基本用法
</demo>
<template>
  <div class="ui-template-wrap">
    <Calendar v-model:value="data" @change="onchange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { Calendar } from '@/lib'

const data = ref<string>(dayjs().format('YYYY-MM-DD'))

const onchange = (newDate: Dayjs) => {
  console.log(newDate)
}
</script>
