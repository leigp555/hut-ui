<template>
  <div class="ui-skeleton-wrap">
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
  defineProps<{ paragraph?: { rows: number }; avatar?: boolean; active?: boolean }>(),
  {
    paragraph: () => ({ rows: 3 }),
    avatar: false,
    active: false
  }
)
</script>

<style lang="scss">
$bac_color: rgba(190, 190, 190, 0.2);
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
        background: linear-gradient(
          90deg,
          rgba(190, 190, 190, 0.2) 25%,
          rgba(129, 129, 129, 0.24) 37%,
          rgba(190, 190, 190, 0.2) 63%
        );
        background-size: 400% 100%;
      }
    }
    .ui-skeleton-item {
      width: 100%;
      height: 16px;
      list-style: none;
      background: $bac_color;
      border-radius: 4px;
      &.skeleton-item-active {
        background: linear-gradient(
          90deg,
          rgba(190, 190, 190, 0.2) 25%,
          rgba(129, 129, 129, 0.24) 37%,
          rgba(190, 190, 190, 0.2) 63%
        );
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
@keyframes skeleton_active {
  0% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0 50%;
  }
}
</style>
