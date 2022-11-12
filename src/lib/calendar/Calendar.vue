<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'
import Select, { OptionType } from '../select/Select.vue'

withDefaults(defineProps<{}>(), {})

// 年选择
const year = ref<string>('2022')
const yearOptions = ref<OptionType[]>([])
for (let i = 0; i < 12; i++) {
  yearOptions.value.push({ value: (2022 - 6 + i).toString() })
}
const changeYear = (newYear: string) => {
  year.value = newYear
}
// 月选择
const month = ref<string>('11')
const monthOptions = ref<OptionType[]>([])
for (let i = 0; i < 12; i++) {
  monthOptions.value.push({ value: (i + 1).toString() })
}
const changeMonth = (newMonth: string) => {
  month.value = newMonth
}

// 周
const week = ['一', '二', '三', '四', '五', '六', '日']
</script>

<template>
  <div class="ui-calendar-wrap">
    <div class="ui-calendar-actions">
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
      <table>
        <tr v-for="row in 6" :key="row">
          <td v-for="column in 7" :key="column">
            <div class="ui-calendar-item">
              {{ 10 }}
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
$selected_color: #f5f5f5;
.ui-calendar-wrap {
  display: flex;
  flex-direction: column;
  border: 1px solid darken($selected_color, 20);
  min-width: 300px;
  .ui-calendar-actions {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 8px 12px;
    gap: 10px;
    border-bottom: 1px solid darken($selected_color, 20);
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
          &:hover {
            background-color: #1890ff;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
