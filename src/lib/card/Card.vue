<template>
  <div class="ui-card-wrap" :class="{ bordered: border, shadow }">
    <div class="ui-card-title">
      <div class="card-title">{{ title }}</div>
      <div class="card-action">
        <slot name="extra" />
      </div>
    </div>
    <div class="ui-card-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ border?: boolean; title?: string; shadow?: boolean }>(), {
  border: true,
  shadow: false
})
</script>

<style lang="scss">
$font_color: #000000d9;
$border_color: #d9d9d9;
.ui-card-wrap {
  transition: all 250ms;
  &.bordered {
    border: 1px solid $border_color;
  }
  &.shadow:hover {
    border-color: transparent;
    box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
  }
  > .ui-card-title {
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $border_color;
    a {
      text-decoration: none;
      color: inherit;
    }
    > .card-title,
    .card-action {
      display: flex;
      align-items: center;
    }
  }
  > .ui-card-content {
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 10px;
  }
}
</style>
