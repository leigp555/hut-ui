<template>
  <div class="ui-result-wrap">
    <div class="ui-result-icon">
      <SvgIcon name="success" width="1em" height="1em" />
    </div>
    <div class="ui-result-title">
      <slot name="title" />
    </div>
    <div class="ui-result-subTitle">
      <slot name="subTitle" />
    </div>
    <div class="ui-result-actions">
      <slot name="extra" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
.ui-result-wrap {
  color: #000000d9;
  padding: 48px 32px;
  > .ui-result-icon {
    font-size: 72px;
    margin-bottom: 24px;
    text-align: center;
    > svg {
      fill: #52c41a;
    }
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
}
</style>
