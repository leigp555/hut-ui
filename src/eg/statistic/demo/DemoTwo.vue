<demo>
实时数据
</demo>

<template>
  <Statistic
    title="Day Left"
    :value="dayLeft"
    :value-style="{ color: 'rgb(207, 19, 34)' }"
  >
  </Statistic>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Statistic } from '@/lib'

function fn(num: number) {
  if (num < 10) {
    return `0${num}`
  }
  return num
}
function go() {
  const myd = dayjs('2023-01-22').diff(dayjs(), 'day')
  const myh = dayjs('2023-01-22').diff(dayjs(), 'hour') - myd * 24
  const mym = (dayjs('2023-01-22').diff(dayjs(), 'minute') - myd * 24 * 60) % 60
  const mys = (dayjs('2023-01-22').diff(dayjs(), 'second') - myd * 24 * 60 * 60) % 60
  return `距离过年还剩：${myd} 天 ${fn(myh)} 时 ${fn(mym)} 分 ${fn(mys)} 秒 `
}

const dayLeft = ref<string>('')
setInterval(() => {
  dayLeft.value = go()
}, 1000)
</script>
