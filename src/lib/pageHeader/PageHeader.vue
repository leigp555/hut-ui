<template>
  <div class="ui-template-wrap">
    <div class="ui-template-title">
      <span class="title-icon" @click="emitBack">
        <SvgIcon name="left" width="1em" height="1em" />
      </span>
      <span class="title-item title-titleItem">{{ title }}</span>
      <span class="title-item title-subtitleItem">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const emits = defineEmits(['back'])
withDefaults(
  defineProps<{
    title: string
    subtitle: string
  }>(),
  {
    title: 'Title',
    subtitle: 'Subtitle'
  }
)
const emitBack = () => {
  emits('back')
}
</script>

<style lang="scss">
.ui-template-wrap {
  .ui-template-title {
    display: flex;
    align-items: center;
    > .title-icon {
      margin-right: 12px;
      display: flex;
      align-items: center;
      cursor: pointer;
      svg:hover {
        fill: #1890ff;
      }
    }
    > .title-item {
      margin-right: 10px;
      user-select: none;
      display: flex;
      align-items: center;
      &.title-titleItem {
        font-weight: 700;
        color: #262626;
      }
      &.title-subtitleItem {
        color: #8c8c8c;
        font-size: 14px;
      }
    }
  }
}
</style>
