<template>
  <div class="ui-listItem-wrap">
    <div class="ui-listItem-avatar" v-if="$slots.avatar">
      <slot name="avatar" :data="data" />
    </div>
    <div class="ui-listItem-content-wrap">
      <h4 class="ui-listItem-title" v-if="$slots.title">
        <slot name="title" :data="data" />
      </h4>
      <div class="ui-listItem-content">
        <div class="ui-listItem-description" v-if="$slots.description">
          <slot name="description" :data="data" />
        </div>
        <div class="ui-listItem-actions" v-if="$slots.actions">
          <slot name="actions" :data="data" />
        </div>
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
  > .ui-listItem-content-wrap {
    display: flex;
    flex-direction: column;
    flex-grow: 10;
    > .ui-listItem-title {
      margin-bottom: 4px;
      font-size: 14px;
      line-height: 1.5em;
      font-weight: 500;
    }
    > .ui-listItem-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      //border: 1px solid red;
      > .ui-listItem-description {
        color: #00000073;
        font-size: 14px;
        line-height: 1.5em;
      }
      > .ui-listItem-actions {
        display: flex;
      }
    }
  }
}
</style>
