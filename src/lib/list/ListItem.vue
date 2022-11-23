<template>
  <div class="ui-listItem-wrap">
    <div class="ui-listItem-avatar">
      <slot name="avatar" :data="data" />
    </div>
    <div class="ui-listItem-content">
      <h4 class="ui-listItem-title">
        <slot name="title" :data="data" />
      </h4>
      <div class="ui-listItem-description">
        <slot name="description" :data="data" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ data?: {} }>(), {})
</script>

<style lang="scss">
.ui-listItem-wrap {
  display: flex;
  align-items: start;
  > .ui-listItem-avatar {
    margin-right: 16px;
  }
  > .ui-listItem-content {
    display: flex;
    flex-direction: column;
    > .ui-listItem-title {
      margin-bottom: 4px;
      font-size: 14px;
      line-height: 1.5em;
      font-weight: 500;
    }
    > .ui-listItem-description {
      color: #00000073;
      font-size: 14px;
      line-height: 1.5em;
    }
  }
}
</style>
