<template>
  <div class="ui-datePicker-wrap">
    <Input v-model:value="value" :placeholder="placeholder" readonly>
      <template #suffix>
        <SvgIcon name="calendar" width="1em" height="1em" />
      </template>
    </Input>
    <div class="ui-datePicker-pop">
      <Calendar :value="value" @change="onchange" size="small" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { Input, SvgIcon, Calendar } from '@/lib'

const props = withDefaults(
  defineProps<{
    value: string
    placeholder?: string
  }>(),
  {
    value: dayjs().format('YYYY-MM-DD'),
    placeholder: '请选择日期'
  }
)
const emits = defineEmits(['update:value'])
const { value } = toRefs(props)

const onchange = (newDate: Dayjs) => {
  emits('update:value', newDate)
}
</script>

<style lang="scss">
.ui-datePicker-wrap {
  width: 150px;
}
</style>
