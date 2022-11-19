<script setup lang="ts">
import { withDefaults, defineProps, onMounted, ref, watchEffect, toRefs } from 'vue'
import SvgIcon from '../common/SvgIcon.vue'

const props = withDefaults(
  defineProps<{
    percent: number
    status?: 'active' | 'exception'
    showInfo?: boolean
    size?: 'small' | 'normal'
    // eslint-disable-next-line no-unused-vars
    format?: (percent: number) => string
    type?: 'line' | 'circle' | 'step'
    steps?: number
  }>(),
  {
    percent: 0,
    showInfo: true,
    size: 'normal',
    type: 'line'
  }
)
const { percent, type } = toRefs<number>(props)
const left = ref<number>(0)
const dashoffset = ref<number>(0)
const blockRef = ref<HTMLElement | null>(null)

const justLinePosition = () => {
  if (percent.value > left.value + 2) {
    const id = setTimeout(() => {
      blockRef.value!.style.transform = `translate(${left.value}%)`
      left.value += 2
      justLinePosition()
      window.clearTimeout(id)
    })
  } else {
    left.value = percent.value
    blockRef.value!.style.transform = `translate(${percent.value}%)`
    return
  }
}

const justCirclePosition = () => {
  if (percent.value / 100 === dashoffset.value / 314) {
    return
  }
  if (percent.value / 100 > dashoffset.value / 314) {
    const id = setInterval(() => {
      if (percent.value / 100 > (dashoffset.value + 10) / 314) {
        dashoffset.value += 10
      } else {
        window.clearTimeout(id)
        dashoffset.value = (percent.value * 314) / 100
      }
    })
  } else if (percent.value / 100 < dashoffset.value / 314) {
    const id = setInterval(() => {
      if (percent.value / 100 < (dashoffset.value - 10) / 314) {
        dashoffset.value -= 10
      } else {
        window.clearTimeout(id)
        dashoffset.value = (percent.value * 314) / 100
      }
    })
  }
}

onMounted(() => {
  watchEffect(() => {
    if (type.value === 'line') {
      blockRef.value && justLinePosition()
    } else if (type.value === 'circle') {
      justCirclePosition()
    }
  })
})
</script>

<template>
  <div class="ui-progress-wrap">
    <div class="ui-progress-line" v-if="type === 'line'">
      <div
        class="progress-line-container"
        :class="{ 'line-container-small': size === 'small' }"
      >
        <div
          class="progress-line-block"
          ref="blockRef"
          :class="{
            'line-block-active': status === 'active',
            'line-block-exception': status === 'exception',
            'line-block-success': percent === 100
          }"
        ></div>
      </div>
      <span class="progress-line-tip" :class="{ 'line-tip-small': size === 'small' }">
        <span v-if="status === 'exception'">
          <SvgIcon name="error" width="14px" height="14px" fill="#ff4d4f" />
        </span>
        <span v-else-if="percent >= 100">
          <SvgIcon name="success" width="14px" height="14px" fill="#52c41a" />
        </span>
        <span v-else-if="showInfo">{{ format ? format(percent) : percent + '%' }}</span>
      </span>
    </div>
    <div class="ui-progress-circle" v-else-if="type === 'circle'">
      <svg style="width: 120px; height: 120px">
        <circle
          class="progress-circle-inner progress-circle-item"
          cx="60"
          cy="60"
          r="50"
          fill="none"
        ></circle>
        <circle
          class="progress-circle-outer progress-circle-item"
          :class="{ 'progress-circle-finish': percent >= 100 }"
          cx="60"
          cy="60"
          r="50"
          fill="none"
          :stroke-dashoffset="314 - dashoffset"
        ></circle>
      </svg>
      <div class="progress-circle-tip">
        <span v-if="status === 'exception'">
          <SvgIcon name="error" width="32px" height="32px" fill="#ff4d4f" />
        </span>
        <span v-else-if="percent >= 100">
          <SvgIcon name="gouxuan" width="32px" height="32px" fill="#52c41a" />
        </span>
        <span v-else-if="showInfo">{{ format ? format(percent) : percent + '%' }}</span>
      </div>
    </div>
    <div
      class="ui-progress-step"
      v-else-if="type === 'step'"
      :class="{ 'progress-step-small': size === 'small' }"
    >
      <ol class="progress-step-wrap">
        <li
          class="progress-step-item"
          v-for="item in steps"
          :key="item"
          :class="{
            'step-item-finish':
              percent >= Math.floor((Math.floor(100 / steps) * item) / 10) * 10,
            'step-finished': percent >= 100,
            'step-item-small': size === 'small'
          }"
        />
      </ol>
      <span v-if="status === 'exception'" class="progress-step-tip">
        <SvgIcon name="error" width="14px" height="14px" fill="#ff4d4f" />
      </span>
      <span v-else-if="percent >= 100" class="progress-step-tip">
        <SvgIcon name="success" width="14px" height="14px" fill="#52c41a" />
      </span>
      <span class="progress-step-tip" v-else-if="showInfo">{{
        format ? format(percent) : percent + '%'
      }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.ui-progress-wrap {
  font-size: 14px;
  > .ui-progress-line {
    display: flex;
    align-items: center;
    justify-content: start;
    > .progress-line-container {
      position: relative;
      height: 8px;
      flex-grow: 10;
      overflow: hidden;
      vertical-align: middle;
      background-color: #f5f5f5;
      border-radius: 100px;
      &.line-container-small {
        height: 6px;
      }
      > .progress-line-block {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        background-color: #1890ff;
        overflow: hidden;
        transition: all 250ms;
        &.line-block-success {
          background-color: #52c41a;
        }
        &.line-block-exception {
          background-color: #ff4d4f;
        }
        &.line-block-active {
          &::after {
            position: absolute;
            content: '';
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #fff;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            opacity: 1;
            animation: spin 1s infinite;
          }
        }
      }
    }
    > .progress-line-tip {
      display: inline-block;
      align-items: center;
      width: 2em;
      margin-left: 8px;
      color: #000000d9;
      font-size: 14px;
      line-height: 1;
      white-space: nowrap;
      text-align: left;
      vertical-align: middle;
      word-break: normal;
      svg {
        width: 14px;
        height: 14px;
      }
      &.line-tip-small {
        font-size: 12px;
        svg {
          width: 12px;
          height: 12px;
        }
      }
      > span {
        display: flex;
        align-items: center;
      }
    }
  }
  > .ui-progress-circle {
    width: 120px;
    height: 120px;
    font-size: 18px;
    position: relative;
    line-height: 1;
    background-color: transparent;
    > .progress-circle-tip {
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    .progress-circle-item {
      stroke-dasharray: 314;
      fill: transparent;
      stroke-width: 6px;
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-linecap: round;
      fill-opacity: 0;
      transition: all 250ms;
    }
    .progress-circle-inner {
      stroke: #f5f5f5; /* 设置边框颜色 */
      stroke-dashoffset: 0;
    }
    .progress-circle-outer {
      stroke: #1890ff; /* 设置边框颜色 */
      &.progress-circle-finish {
        stroke: #52c41a;
      }
    }
  }
  > .ui-progress-step {
    display: flex;
    align-items: center;
    font-size: 14px;
    svg {
      width: 14px;
      height: 14px;
    }
    &.progress-step-small {
      svg {
        width: 12px;
        height: 12px;
      }
    }
    > .progress-step-wrap {
      display: flex;
      list-style: none;
      > .progress-step-item {
        width: 14px;
        height: 8px;
        margin-right: 2px;
        background: #f3f3f3;
        transition: all 250ms;
        &.step-item-finish {
          background-color: #1890ff;
        }
        &.step-finished {
          background-color: #52c41a;
        }
        &.step-item-small {
          width: 2px;
        }
      }
    }
    > .progress-step-tip {
      font-size: 14px;
      width: 2em;
      margin-left: 8px;
      line-height: 1;
      white-space: nowrap;
      text-align: left;
      word-break: normal;
    }
  }
}

@keyframes spin {
  from {
    transform: translate(-100%);
    opacity: 1;
  }
  to {
    transform: translate(0);
    opacity: 0;
  }
}
</style>
