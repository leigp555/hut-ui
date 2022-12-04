<demo>
自定义日历头部和尾部
</demo>
<template>
  <div class="ui-template-wrap">
    <Calendar v-model:value="data" @change="onchange" size="small" no-border>
      <template #header>
        <div class="header-wrap">
          <div class="icon-left">
            <SvgIcon name="quick_back" height="1em" width="1em" @click="quick_back" />
            <SvgIcon name="icon_back" height="1em" width="1em" @click="backward" />
          </div>
          <div>{{ data }}</div>
          <div class="icon-right">
            <SvgIcon name="icon_forward" height="1em" width="1em" @click="forward" />
            <SvgIcon
              name="quick_forward"
              height="1em"
              width="1em"
              @click="quick_forward"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="footer-wrap">
          <Button type="link" @click="toDay">今天</Button>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'

import { SvgIcon, Button, Calendar } from '@/lib'

const data = ref<string>(dayjs().format('YYYY-MM-DD'))

const onchange = (newDate: Dayjs) => {
  console.log(newDate)
}
const quick_back = () => {
  data.value = dayjs(data.value).subtract(1, 'year').format('YYYY-MM-DD')
}
const backward = () => {
  data.value = dayjs(data.value).subtract(1, 'month').format('YYYY-MM-DD')
}
const forward = () => {
  data.value = dayjs(data.value).add(1, 'month').format('YYYY-MM-DD')
}
const quick_forward = () => {
  data.value = dayjs(data.value).add(1, 'year').format('YYYY-MM-DD')
}
const toDay = () => {
  data.value = dayjs().format('YYYY-MM-DD')
}
</script>

<style lang="scss" scoped>
.ui-template-wrap {
  display: inline-flex;
  margin: 50px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  .header-wrap {
    padding: 16px 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    > .icon-left {
      display: flex;
      gap: 16px;
    }
    > .icon-right {
      display: flex;
      gap: 16px;
    }
  }
  .footer-wrap {
    display: flex;
    padding: 2px 0;
    justify-content: center;
    border-top: 1px solid #f0f0f0;
  }
}
</style>
