<template>
  <div class="ui-skeleton-wrap">
    <h3 class="ui-skeleton-title" />
    <ol>
      <li v-for="item in paragraph.rows" :key="item" class="ui-skeleton-item"></li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ paragraph?: { rows: number } }>(), {
  paragraph: () => ({ rows: 3 })
})
</script>

<style lang="scss">
$bac_color: rgba(190, 190, 190, 0.2);
.ui-skeleton-wrap {
  width: 100%;
  ol {
    list-style: none;
    margin-top: 24px;
  }
  > .ui-skeleton-title {
    width: 38%;
    height: 16px;
    margin-top: 16px;
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
</style>
