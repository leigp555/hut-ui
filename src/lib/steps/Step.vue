<template>
  <div class="ui-step-wrap">
    <div class="ui-step-order step-icon" v-if="current > order">
      <SvgIcon name="yes" width="1em" height="1em" />
    </div>
    <div
      v-if="current <= order"
      class="ui-step-order"
      :class="{
        'step-pending': current === order,
        'step-complete': current > order,
        'step-not-complete': current < order
      }"
    >
      <span v-if="$slots.icon"><slot name="icon"></slot></span>
      <span v-else>{{ order }}</span>
    </div>
    <span class="ui-step-title" :class="{ 'step-complete': current >= order }">
      {{ title }}
    </span>
  </div>
  <span
    v-if="order !== totalStep"
    class="ui-step-line"
    :class="{ 'step-complete': current > order }"
  ></span>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, inject } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

withDefaults(defineProps<{ title?: string; order: number }>(), {
  title: 'title'
})
const current = inject<number>('ui_step_current')
const totalStep = inject<number>('ui_step_totalStep')
</script>

<style lang="scss">
.ui-step-wrap {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  &:not(:last-child) {
    padding-right: 10px;
  }
  &:not(:first-child) {
    padding-left: 10px;
  }
  > .ui-step-order {
    width: 1.8em;
    height: 1.8em;
    font-size: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ffffff;
    color: #bfbfbf;
    border: 1px solid #bfbfbf;
    transition: all 250ms;
    svg {
      fill: #bfbfbf;
    }
    & > span {
      text-align: center;
      vertical-align: middle;
    }
    &.step-pending {
      background-color: #1890ff;
      color: #ffffff;
      svg {
        fill: #ffffff;
      }
      border: 1px solid #1890ff;
    }

    &.step-complete {
      border: 1px solid #1890ff;
      color: #1890ff;
      svg {
        fill: #1890ff;
      }
      background-color: #ffffff;
    }

    &.step-icon {
      background-color: #07c160;
      border: 1px solid #07c160;
      svg {
        fill: #ffffff;
      }
    }
  }

  > .ui-step-title {
    color: #bfbfbf;
    font-size: 14px;
    white-space: nowrap;
    &.step-complete {
      color: #262626;
    }
  }
}

.ui-step-line {
  border-top: 1px solid #bfbfbf;
  flex-grow: 10;
  transition: all 250ms;
  min-width: 20px;
  &.step-complete {
    border-top: 1px solid #1890ff;
  }
}
</style>
