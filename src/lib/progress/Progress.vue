<script setup lang="ts">
import { withDefaults, defineProps, onMounted, toRefs, ref } from 'vue'

const props = withDefaults(
  defineProps<{ percent: number; status?: 'active' | 'exception' }>(),
  {
    percent: 0
  }
)
const { percent } = toRefs(props)
const left = ref<number>(0)
const blockRef = ref<HTMLElement | null>(null)
onMounted(() => {
  if (percent.value >= left.value) {
    const id = setInterval(() => {
      if (percent.value >= left.value) {
        blockRef.value!.style.transform = `translate(${left.value}%)`
        left.value += 2
      } else {
        blockRef.value!.style.transform = `translate(${percent.value}%)`
        window.clearInterval(id)
      }
    })
  }
})
</script>

<template>
  <div class="ui-progress-wrap">
    <div class="ui-progress-line">
      <div class="progress-line-container">
        <div
          class="progress-line-block"
          ref="blockRef"
          :class="{ 'line-block-active': status === 'active' }"
        ></div>
      </div>
      <span class="progress-line-tip">{{ percent + '%' }}</span>
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
      > .progress-line-block {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        background-color: #1890ff;
        overflow: hidden;
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
      width: 2em;
      margin-left: 8px;
      color: #000000d9;
      font-size: 1em;
      line-height: 1;
      white-space: nowrap;
      text-align: left;
      vertical-align: middle;
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
