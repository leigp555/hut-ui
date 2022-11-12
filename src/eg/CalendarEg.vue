<template>
  <div class="ui-template-wrap">
    <Calendar v-model:value="data" @change="onchange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dayjs } from 'dayjs'
import Calendar from '@/lib/calendar/Calendar.vue'

const data = ref<Dayjs>('2022-11-12')

const onchange = (newDate: Dayjs) => {
  console.log(newDate)
}
</script>

<style lang="scss">
.ui-template-wrap {
  margin: 100px;
}
</style>
