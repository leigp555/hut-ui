<template>
  <div v-if="!loading">
    <slot />
  </div>
  <div class="ui-skeleton-wrap" v-else-if="loading">
    <div v-if="avatar" class="ui-skeleton-header">
      <SkeletonAvatar :size="40" :active="active" />
    </div>

    <div class="ui-skeleton-content">
      <h3 class="ui-skeleton-title" :class="{ 'skeleton-title-active': active }" />
      <ol>
        <li
          v-for="item in paragraph.rows"
          :key="item"
          class="ui-skeleton-item"
          :class="{ 'skeleton-item-active': active }"
        ></li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import SkeletonAvatar from './SkeletonAvatar.vue'

withDefaults(
  defineProps<{
    paragraph?: { rows: number }
    avatar?: boolean
    active?: boolean
    loading?: boolean
  }>(),
  {
    paragraph: () => ({ rows: 3 }),
    avatar: false,
    active: false,
    loading: true
  }
)
</script>

<style lang="scss">
@import './index.scss';
.ui-skeleton-wrap {
  width: 100%;
  display: flex;
  ol {
    list-style: none;
    margin-top: 24px;
  }
  > .ui-skeleton-header {
    padding-right: 16px;
    vertical-align: top;
  }
  > .ui-skeleton-content {
    flex-grow: 10;
    > .ui-skeleton-title {
      width: 38%;
      height: 16px;
      margin-top: 12px;
      background: $bac_color;
      border-radius: 4px;
      &.skeleton-title-active {
        background: $active_bac_color;
        background-size: 400% 100%;
        animation: skeleton_active 1.4s ease infinite;
      }
    }
    .ui-skeleton-item {
      width: 100%;
      height: 16px;
      list-style: none;
      background: $bac_color;
      border-radius: 4px;
      &.skeleton-item-active {
        background: $active_bac_color;
        background-size: 400% 100%;
        animation: skeleton_active 1.4s ease infinite;
      }
      &:not(:first-child) {
        margin-top: 16px;
      }
      &:last-child {
        width: 61%;
      }
    }
  }
}
</style>
