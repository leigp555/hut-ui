<template>
  <div class="ui-pagination-wrap">
    <ol class="ui-pagination-ol">
      <li>
        <SvgIcon name="back" width="1em" height="1em" />
      </li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li :style="{ transform: 'rotate(180deg)' }">
        <SvgIcon name="back" width="1em" height="1em" />
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

// const emits = defineEmits(['update:current'])
withDefaults(defineProps<{ current?: number; total: number }>(), {
  current: 1,
  total: 0
})
</script>

<style lang="scss">
.ui-pagination-wrap {
  .ui-pagination-ol {
    list-style: none;
    display: flex;
    > li {
      background-color: #ffffff;
      font-weight: 500;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-width: 32px;
      height: 32px;
      line-height: 32px;
      padding: 1px;
      margin-right: 8px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      svg {
        fill: #000000;
      }
      &:hover {
        border: 1px solid #1890ff;
        color: #1890ff;
        svg {
          fill: #1890ff;
        }
      }
    }
  }
}
</style>
