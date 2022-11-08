<template>
  <div class="ui-template-wrap">
    <DatePicker v-model:value="value1" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Dayjs } from 'dayjs'
import DatePicker from '@/lib/datePicker/DatePicker.vue'

const value1 = ref<Dayjs>()

watch(value1, () => {
  console.log(value1.value)
})
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
