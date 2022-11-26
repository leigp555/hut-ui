<template>
  <div class="ui-Breadcrumb-wrap">
    <div class="breadcrumb-item" v-for="(item, index) in slots" :key="index">
      <span class="ui-Breadcrumb-separator">{{ index !== 0 ? separator : '' }}</span>
      <Component :is="item"></Component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots, VNode } from 'vue'

const slots = useSlots().default!() as VNode[]
withDefaults(defineProps<{ separator?: string }>(), { separator: '/' })
</script>

<style lang="scss">
.ui-Breadcrumb-wrap {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;

  .breadcrumb-item {
    display: flex;
    align-items: center;
    gap: 5px;
    &:not(:first-child) {
      cursor: pointer;
      color: #8c8c8c;
    }
    &:first-child {
      a {
        cursor: text;
      }
    }
    &:not(:first-child):hover {
      color: #1890ff;
    }
    .ui-Breadcrumb-separator {
      color: #8c8c8c;
      cursor: text;
    }
  }
}
</style>
