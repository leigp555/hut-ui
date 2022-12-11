<script setup lang="ts">
import { withDefaults, defineProps, ref, computed } from 'vue'
import dayjs from 'dayjs'
import SvgIcon from '../common/SvgIcon.vue'

const emits = defineEmits(['update:value', 'change'])
const props = withDefaults(defineProps<{ value?: string }>(), {
  value: dayjs().format('HH:mm:ss')
})

const wrapRef = ref<HTMLDivElement | null>(null)
const shouldPopShow = ref<boolean>(false)
const isSelect = ref<boolean>(false)
const timeArr = computed<string[]>(() => {
  return props.value.split(':')
})

const onFocus = () => {
  wrapRef.value?.classList.add('wrap-focus')
  shouldPopShow.value = true
}
const onBlur = () => {
  if (!isSelect.value) {
    wrapRef.value?.classList.remove('wrap-focus')
    shouldPopShow.value = false
  }
}
const now = () => {
  emits('update:value', dayjs().format('HH:mm:ss'))
  emits('change', dayjs().format('HH:mm:ss'))
  wrapRef.value?.classList.remove('wrap-focus')
  shouldPopShow.value = false
}
const popBlur = () => {
  isSelect.value = false
  wrapRef.value?.classList.remove('wrap-focus')
  shouldPopShow.value = false
}
const userSelect = (e: Event) => {
  isSelect.value = true
  const el = e.target as HTMLLIElement
  const spec = el.getAttribute('data-value')
  if (el.tagName.toLowerCase() === 'li' && spec && spec === 'hour') {
    const newTime = [el.innerText, ...timeArr.value.slice(1)]
    emits('update:value', newTime.join(':'))
    emits('change', newTime.join(':'))
  }
  if (el.tagName.toLowerCase() === 'li' && spec && spec === 'minute') {
    const newTime = [
      ...timeArr.value.slice(0, 1),
      el.innerText,
      ...timeArr.value.slice(2)
    ]
    emits('update:value', newTime.join(':'))
    emits('change', newTime.join(':'))
  }
  if (el.tagName.toLowerCase() === 'li' && spec && spec === 'second') {
    const newTime = [...timeArr.value.slice(0, 2), el.innerText]
    emits('update:value', newTime.join(':'))
    emits('change', newTime.join(':'))
  }
}
</script>

<template>
  <div class="ui-timePicker-wrap">
    <label class="ui-label-wrap" tabindex="-1" ref="wrapRef">
      <input
        class="ui-input"
        type="text"
        placeholder="请选择时间"
        :value="value"
        @focus="onFocus"
        @blur="onBlur"
        readonly
      />
      <span class="input-icon">
        <SvgIcon name="clock" width="1em" height="1em" />
      </span>
    </label>
    <div
      tabindex="-1"
      class="ui-timePicker-pop"
      :class="{ 'timePicker-pop-show': shouldPopShow }"
      @mousedown="userSelect"
      @blur="popBlur"
      ref="popRef"
    >
      <section class="ui-timePicker-time">
        <ol class="ui-scroll-container">
          <li
            v-for="item in 24"
            :key="item"
            class="autoComplete-list-item"
            :class="{ selected: item - 1 === parseInt(timeArr[0], 10) }"
            data-value="hour"
          >
            {{ item >= 11 ? item - 1 : `0${item - 1}` }}
          </li>
        </ol>
        <ol class="ui-scroll-container">
          <li
            v-for="item in 60"
            :key="item"
            class="autoComplete-list-item"
            :class="{ selected: item - 1 === parseInt(timeArr[1], 10) }"
            data-value="minute"
          >
            {{ item >= 11 ? item - 1 : `0${item - 1}` }}
          </li>
        </ol>
        <ol class="ui-scroll-container">
          <li
            v-for="item in 60"
            :key="item"
            class="autoComplete-list-item"
            :class="{ selected: item - 1 === parseInt(timeArr[2], 10) }"
            data-value="second"
          >
            {{ item >= 11 ? item - 1 : `0${item - 1}` }}
          </li>
        </ol>
      </section>
      <section class="ui-timePicker-now">
        <span @click="now">此刻</span>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@import '../common/scrollBar.scss';
$font_color: #000000d9;
$border_color: #d9d9d9;
$main_color: #1890ff;
$hover_color: #f5f5f5;
$select_color: #e6f7ff;
.ui-timePicker-wrap {
  display: inline-block;
  position: relative;
  > .ui-label-wrap {
    width: 140px;
    flex-grow: 10;
    padding: 4px 11px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 2px;
    border: 1px solid $border_color;
    transition: all 0.3s;
    &.wrap-focus {
      border: 1px solid $main_color;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
    &:hover {
      border: 1px solid $main_color;
    }
    > .input-icon {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    > .ui-input {
      padding: 0;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 14px;
      border: none;
      outline: none;
      box-shadow: none;
      color: $font_color;
      line-height: 1.5em;
      display: flex;
      align-items: center;
      &:hover {
        border: none;
        outline: none;
      }
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  > .ui-timePicker-pop {
    display: inline-flex;
    flex-direction: column;
    font-size: 14px;
    color: $font_color;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    position: absolute;
    z-index: 100;
    background: #ffffff;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 5px));
    opacity: 0;
    visibility: hidden;
    transition: opacity 250ms;
    &.timePicker-pop-show {
      opacity: 1;
      visibility: visible;
    }
    > .ui-timePicker-time {
      display: flex;
      > ol {
        flex-grow: 1;
        list-style: none;
        max-height: 15em;
        overflow-y: scroll;
        &:not(:last-child) {
          border-right: 1px solid $border_color;
        }
        &::-webkit-scrollbar {
          width: 4px;
        }

        > li {
          padding: 8px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            background-color: $hover_color;
          }
          &.selected {
            background-color: $select_color;
          }
        }
      }
    }
    > .ui-timePicker-now {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-top: 1px solid $border_color;
      color: $main_color;
      > span {
        cursor: pointer;
      }
    }
  }
}
</style>
