<template>
  <div class="ui-skeleton-wrap">
    <div v-if="avatar" class="ui-skeleton-header">
      <SkeletonAvatar :size="40" />
    </div>

    <div class="ui-skeleton-content">
      <h3 class="ui-skeleton-title" />
      <ol>
        <li v-for="item in paragraph.rows" :key="item" class="ui-skeleton-item"></li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import SkeletonAvatar from './SkeletonAvatar.vue'

withDefaults(defineProps<{ paragraph?: { rows: number }; avatar?: boolean }>(), {
  paragraph: () => ({ rows: 3 }),
  avatar: false
})
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
    }
    .ui-skeleton-item {
      width: 100%;
      height: 16px;
      list-style: none;
      background: $bac_color;
      border-radius: 4px;
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
