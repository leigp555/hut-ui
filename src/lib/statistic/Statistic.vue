<script setup lang="ts">
import { withDefaults, defineProps, computed, toRefs } from 'vue'
import { Dayjs } from 'dayjs'

const props = withDefaults(
  defineProps<{
    title?: string
    value?: string | number | Dayjs
    precision?: number
    suffix?: string
    valueStyle?: CSSStyleRule
  }>(),
  { precision: 0, suffix: '' }
)
const { value, precision, suffix } = toRefs(props)
const showValue = computed(() => {
  if (typeof value?.value === 'number') {
    return `${value.value.toFixed(
      Math.abs(precision.value)
    )} ${suffix.value.toString()}`
  }
  return value.value + suffix.value.toString()
})
</script>

<template>
  <div class="ui-statistic-wrap">
    <div class="ui-statistic-title">{{ title }}</div>
    <div class="ui-statistic-content">
      <slot name="prefix" />
      <div :style="valueStyle">{{ showValue }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.ui-statistic-wrap {
  font-size: 14px;

  > .ui-statistic-title {
    margin-bottom: 4px;
    color: #00000073;
    line-height: 1.5em;
  }

  > .ui-statistic-content {
    color: #000000d9;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 1.5em;
  }
}
</style>
