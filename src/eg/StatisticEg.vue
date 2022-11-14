<template>
  <div class="ui-template-wrap">
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

    <Statistic
      title="Day Left"
      :value="dayLeft"
      :value-style="{ color: 'rgb(207, 19, 34)' }"
    >
    </Statistic>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Statistic from '@/lib/statistic/Statistic.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

function fn(num) {
  if (num < 10) {
    return `0${num}`
  }
  return num
}
function go() {
  const now = new Date()
  const future = new Date(2023, 1, 22)
  const myt = (future - now) / 1000
  const myd = Math.floor(myt / (24 * 60 * 60))
  const myh = Math.floor((myt % (24 * 60 * 60)) / (60 * 60))
  const mym = Math.floor(((myt % 86400) % 3600) / 60)
  const mys = Math.floor(myt % 60)
  return `距离过年还剩：${myd} 天 ${fn(myh)} 时 ${fn(mym)} 分 ${fn(mys)} 秒 `
}

const dayLeft = ref<string>('')
setInterval(() => {
  dayLeft.value = go()
}, 1000)
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
