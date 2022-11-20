<template>
  <div class="ui-result-wrap">
    <div class="ui-result-icon" v-if="status === 'success' && !$slots.icon">
      <SvgIcon name="success" width="1em" height="1em" fill="#52c41a" />
    </div>
    <div class="ui-result-icon" v-if="status === 'info' && !$slots.icon">
      <SvgIcon name="info" width="1em" height="1em" fill="#1890ff" />
    </div>
    <div class="ui-result-icon" v-if="status === 'warning' && !$slots.icon">
      <SvgIcon name="warning" width="1em" height="1em" fill="#faad14" />
    </div>
    <div class="ui-result-icon" v-if="status === 'error' && !$slots.icon">
      <SvgIcon name="error" width="1em" height="1em" fill="#ff4d4f" />
    </div>
    <div class="ui-result-icon" v-if="$slots.icon">
      <slot name="icon" />
    </div>
    <div class="ui-result-title" v-if="$slots.title">
      <slot name="title" />
    </div>
    <div class="ui-result-subTitle" v-if="$slots.subTitle">
      <slot name="subTitle" />
    </div>
    <div class="ui-result-actions" v-if="$slots.extra">
      <slot name="extra" />
    </div>
    <div class="ui-result-desc" v-if="$slots.desc">
      <slot name="desc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

withDefaults(defineProps<{ status?: 'error' | 'info' | 'warning' | 'success' }>(), {})
</script>

<style lang="scss">
.ui-result-wrap {
  color: #000000d9;
  padding: 48px 32px;
  > .ui-result-icon {
    font-size: 72px;
    margin-bottom: 24px;
    text-align: center;
  }
  > .ui-result-title {
    font-size: 24px;
    line-height: 1.8;
    text-align: center;
  }
  > .ui-result-subTitle {
    color: #00000073;
    font-size: 14px;
    line-height: 1.6;
    text-align: center;
  }
  > .ui-result-actions {
    margin: 24px 0 0;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  > .ui-result-desc {
    margin-top: 24px;
    padding: 24px 40px;
    background-color: #fafafa;
    font-size: 14px;
  }
}
</style>
