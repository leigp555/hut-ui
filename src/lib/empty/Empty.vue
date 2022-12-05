<template>
  <div class="ui-empty-wrap">
    <div class="ui-empty-icon">
      <slot name="icon" />
    </div>
    <div class="ui-empty-description">
      <slot name="description" />
    </div>
    <div class="ui-empty-actions">
      <slot name="actions" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
$font_color: #000000d9;
.ui-empty-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px 20px 50px;
  border-radius: 2px;
  > .ui-empty-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > .ui-empty-description {
    word-break: break-all;
    text-align: center;
    font-size: 14px;
    color: $font_color;
  }
  > .ui-empty-actions {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
