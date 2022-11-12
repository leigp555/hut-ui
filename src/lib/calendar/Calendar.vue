<script setup lang="ts">
import { withDefaults, defineProps, ref, toRefs, computed } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import Select, { OptionType } from '../select/Select.vue'
import SvgIcon from '../common/SvgIcon.vue'

const emits = defineEmits(['update:value', 'change'])
const props = withDefaults(defineProps<{ value: Dayjs }>(), {
  value: dayjs().format('YYYY-MM-DD')
})
const { value } = toRefs(props)
const dateArr = computed<string[]>(() => {
  return value.value.split('-')
})
const now = computed(() => {
  return dayjs().format('YYYY-MM-DD')
})
// 年选择
const year = ref<string>(dateArr.value[0])
const yearOptions = ref<OptionType[]>([])
for (let i = 0; i < 12; i++) {
  yearOptions.value.push({ value: (2022 - 6 + i).toString() })
}
const changeYear = (newYear: string) => {
  year.value = newYear
  const newDate = [newYear, ...dateArr.value.slice(1)].join('-')
  emits('update:value', newDate)
}
// 月选择
const month = ref<string>(dateArr.value[1])
const monthOptions = ref<OptionType[]>([])
for (let i = 0; i < 12; i++) {
  monthOptions.value.push({ value: (i + 1).toString() })
}
const changeMonth = (newMonth: string) => {
  month.value = newMonth
  const newDate = [dateArr.value[0], newMonth, dateArr.value[2]].join('-')
  emits('update:value', newDate)
}

// 周
const week = ['一', '二', '三', '四', '五', '六', '日']

// ===============================
// 获取一个月总天数  //31
const getTotalMonthDay = (time: Dayjs) => {
  return dayjs(time).daysInMonth()
}
// 获取星期  // 从1(星期一)到7(星期日)
const getWeekday = (time: Dayjs) => {
  let weekday: number
  if (dayjs(time).day() !== 0) {
    weekday = dayjs(time).day()
  } else {
    weekday = 7
  }
  return weekday
}
// 获取当月首日  //2022-11-12
const getFirstMonthDay = (time: Dayjs) => {
  const timeArr = time.split('-')
  return [...timeArr.slice(0, 2), '01'].join('-')
}
// 获取上个月总天数
const getPreviousMonthTotalDay = (time: Dayjs) => {
  const timeArr = time.split('-')
  const lastMonth = parseInt(timeArr[1], 10) - 1
  const newDate = [timeArr[0], lastMonth, timeArr[2]].join('-')
  return getTotalMonthDay(newDate)
}

// 展示数据
const dateShow = (row: number, column: number) => {
  let day: number | string
  // eslint-disable-next-line no-shadow
  let month = parseInt(dateArr.value[1], 10)
  // eslint-disable-next-line no-shadow
  const year: number = parseInt(dateArr.value[0], 10)
  // 获取当月首日星期
  const firstWeekDay = getWeekday(getFirstMonthDay(value.value))
  // 获取当月总天数
  const monthTotalDay = getTotalMonthDay(value.value)
  // 确定第一天的位置
  if (firstWeekDay === 1) {
    // 第一天是星期一的情况
    day = (row - 1) * 7 + column
  } else if (firstWeekDay > 1 && firstWeekDay <= 7) {
    // 第一天是星期二~天的情况
    const previousMonthTotalDay = getPreviousMonthTotalDay(value.value)
    if (column - firstWeekDay < 0 && row === 1) {
      day = previousMonthTotalDay - firstWeekDay + 1 + column
      if (month - 1 > 0) {
        month -= 1
      } else {
        month = 12
      }
    } else if (column - firstWeekDay >= 0 && row === 1) {
      day = column - firstWeekDay + 1
    } else {
      day = (row - 1) * 7 + column - firstWeekDay + 1
    }
  }
  if (day > monthTotalDay && row > 1) {
    // 这个是关键用计算后的day减去本月的总天数就能算出多余多少天
    day -= monthTotalDay
    if (month + 1 <= 12) {
      month += 1
    } else {
      month = 1
    }
  }
  if (day < 10) {
    day = `0${day}`
  }
  return [year, month, day]
}

const onClick = (e: Event) => {
  const el = e.target as HTMLElement
  const spec = el.getAttribute('data-list')
  if (el.tagName.toLowerCase() === 'div' && spec === 'day') {
    const newDay = el.getAttribute('title')
    const newDayArr = newDay.split('-')
    const dP1 = /^\d{4}(-)\d{1,2}\1\d{1,2}$/
    if (dP1.test(newDay)) {
      emits('update:value', newDay)
      emits('change', newDay)
      year.value = newDayArr[0]
      month.value = newDayArr[1]
    }
  }
}
</script>

<template>
  <div class="ui-calendar-wrap">
    <div class="ui-calendar-actions">
      <span class="calendar-actions-icon">
        <SvgIcon name="calendar" width="1.5em" height="1.5em" fill="#1890ff" />
      </span>
      <div class="calendar-actions-input">
        <Select
          v-model:value="year"
          :options="yearOptions"
          :style="{ width: '80px' }"
          @change="changeYear"
        />
        <Select
          v-model:value="month"
          :options="monthOptions"
          :style="{ width: '60px' }"
          @change="changeMonth"
        />
      </div>
    </div>
    <div class="ui-calendar-week">
      <table>
        <tr>
          <th v-for="item in week" :key="item">
            <span>{{ item }}</span>
          </th>
        </tr>
      </table>
    </div>
    <div class="ui-calendar-day">
      <table @click="onClick">
        <tr v-for="row in 6" :key="row">
          <td v-for="column in 7" :key="column">
            <div
              class="ui-calendar-item"
              :title="dateShow(row, column).join('-')"
              data-list="day"
              :class="{
                isToady: now === dateShow(row, column).join('-'),
                isSelect: dateShow(row, column).join('-') === value.toString()
              }"
            >
              {{ dateShow(row, column)[2] }}
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
$font_color: #000000d9;
$main_color: #1890ff;
$selected_color: #ffffff;
.ui-calendar-wrap {
  display: flex;
  flex-direction: column;
  border: 1px solid darken($selected_color, 20);
  background-color: #ffffff;
  min-width: 300px;
  max-width: 400px;
  .ui-calendar-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid darken($selected_color, 20);
    > .calendar-actions-icon {
      margin-left: 20px;
    }
    > .calendar-actions-input {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .ui-calendar-week {
    padding: 18px 10px 10px 10px;
    table {
      border-collapse: collapse;
      width: 100%;
      th {
        border: none;
        span {
          display: inline-block;
          font-size: 14px;
          color: $font_color;
          line-height: 18px;
          font-weight: 400;
        }
      }
    }
  }
  .ui-calendar-day {
    padding: 0 10px 7px 10px;
    table {
      border-collapse: collapse;
      width: 100%;
      td {
        border: none;
        padding: 3px 0;
        cursor: pointer;
        .ui-calendar-item {
          min-height: 40px;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: $font_color;
          line-height: 18px;
          font-weight: 400;
          border-radius: 2px;
          transition: all 250ms;
          &:hover {
            background-color: #f1f1f1;
          }
          &.isToady {
            border: 1px solid $main_color;
          }
          &.isSelect {
            background-color: $main_color;
            color: $selected_color;
          }
        }
      }
    }
  }
}
tr {
  margin: 0 3px;
}
</style>
