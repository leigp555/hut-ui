<template>
  <div class="ui-datePicker-wrap">
    <Input
      v-model:value="value"
      :placeholder="placeholder"
      readonly
      @focus="onFocus"
      @blur="onBlur"
    >
      <template #suffix>
        <Icon_calendar name="calendar" width="1em" height="1em" />
      </template>
    </Input>
    <div class="ui-datePicker-pop-wrap">
      <Transition name="datePicker">
        <div class="ui-datePicker-pop" v-show="popShow" tabindex="-1" @focus="popFocus">
          <Calendar :value="value" @change="onchange" size="small" no-border>
            <template #header>
              <div class="ui-datePicker-header-wrap">
                <div class="ui-datePicker-icon-left">
                  <Icon_quickback
                    name="quick_back"
                    height="1em"
                    width="1em"
                    @click="quick_back"
                  />
                  <Icon_back
                    name="icon_back"
                    height="1em"
                    width="1em"
                    @click="backward"
                  />
                </div>
                <div>{{ value }}</div>
                <div class="ui-datePicker-icon-right">
                  <Icon_forward
                    name="icon_forward"
                    height="1em"
                    width="1em"
                    @click="forward"
                  />
                  <Icon_quickforward
                    name="quick_forward"
                    height="1em"
                    width="1em"
                    @click="quick_forward"
                  />
                </div>
              </div>
            </template>
            <template #footer>
              <div class="ui-datePicker-footer-wrap">
                <Button type="link" @click="toDay">今天</Button>
              </div>
            </template>
          </Calendar>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import {
  Icon_quickforward,
  Icon_quickback,
  Icon_back,
  Icon_forward,
  Icon_calendar
} from '@hut-ui/icons-vue'
import { Input, Calendar, Button } from '../index'

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
const emits = defineEmits(['update:value', 'change'])
const { value } = toRefs(props)

const popShow = ref<boolean>(false)
const popEnter = ref<boolean>(false)

const onchange = (newDate: Dayjs) => {
  emits('update:value', newDate)
  emits('change', newDate)
  popEnter.value = true
  popShow.value = false
}
const onFocus = () => {
  popShow.value = true
}
const onBlur = () => {
  const id = setTimeout(() => {
    if (!popEnter.value) popShow.value = false
    window.clearTimeout(id)
    popEnter.value = false
  }, 200)
}
const popFocus = () => {
  popEnter.value = true
}
const quick_back = () => {
  const newDate = dayjs(value.value).subtract(1, 'year').format('YYYY-MM-DD')
  emits('update:value', newDate)
  emits('change', newDate)
  popEnter.value = true
  popShow.value = true
}
const backward = () => {
  const newDate = dayjs(value.value).subtract(1, 'month').format('YYYY-MM-DD')
  emits('update:value', newDate)
  emits('change', newDate)
  popEnter.value = true
  popShow.value = true
}
const forward = () => {
  const newDate = dayjs(value.value).add(1, 'month').format('YYYY-MM-DD')
  emits('update:value', newDate)
  emits('change', newDate)
  popEnter.value = true
  popShow.value = true
}
const quick_forward = () => {
  const newDate = dayjs(value.value).add(1, 'year').format('YYYY-MM-DD')
  emits('update:value', newDate)
  emits('change', newDate)
  popEnter.value = true
  popShow.value = true
}
const toDay = () => {
  const newDate = dayjs().format('YYYY-MM-DD')
  emits('update:value', newDate)
  emits('update:value', newDate)
  popEnter.value = false
  popShow.value = false
}
</script>

<style lang="scss">
.ui-datePicker-wrap {
  width: 150px;
  .ui-datePicker-pop-wrap {
    position: relative;
    width: 100%;
    height: 0;
    z-index: 100;
    .ui-datePicker-pop {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      display: inline-flex;
      margin-top: 4px;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
      transform-origin: top;
      transition: all 250ms;
      .ui-datePicker-header-wrap {
        padding: 16px 20px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f0f0f0;
        svg {
          cursor: pointer;
        }
        > .ui-datePicker-icon-left {
          display: flex;
          gap: 16px;
        }
        > .ui-datePicker-icon-right {
          display: flex;
          gap: 16px;
        }
      }
      .ui-datePicker-footer-wrap {
        display: flex;
        padding: 2px 0;
        justify-content: center;
        border-top: 1px solid #f0f0f0;
      }
    }
  }
}
.datePicker-enter-from,
.datePicker-leave-to {
  opacity: 0;
  transform: scale(1, 0.5);
}
.datePicker-leave-active,
.datePicker-enter-active {
}
</style>
