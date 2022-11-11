<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { TreeSelectOptions } from './TreeSelect.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

withDefaults(defineProps<{ options: TreeSelectOptions[] }>(), {})
</script>

<template>
  <div class="ui-treePop-wrap">
    <section class="ui-treePop-section" v-for="item in options" :key="item.value">
      <div class="treePop-section">
        <span
          class="ui-treePop-icon"
          :style="{ transform: 'rotate(-90deg)' }"
          v-if="item.children"
        >
          <SvgIcon
            name="sanjiao"
            width="0.6em"
            height="0.6em"
            fill="rgba(0,0,0,0.85)"
          />
        </span>
        <span class="ui-treePop-title">{{ item.title }}</span>
      </div>
      <div class="ui-treePop-repeat" v-if="item.children">
        <TreePop :options="item.children" />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;
.ui-treePop-wrap {
  > .ui-treePop-section {
    > .treePop-section {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      > .ui-treePop-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
      > .ui-treePop-title {
        padding: 0 4px;
        font-size: 14px;
        color: $font_color;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
    > .ui-treePop-repeat {
      margin-left: 24px;
      margin-bottom: 4px;
    }
  }
}
</style>
