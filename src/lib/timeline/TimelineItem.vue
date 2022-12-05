<template>
  <div class="ui-timelineItem-wrap">
    <div class="ui-timelineItem-dot" v-if="$slots.dot">
      <slot name="dot" />
    </div>
    <span
      v-else
      :style="{ border: `2px solid ${color}`, width: '10px', height: '10px' }"
      class="ui-timelineItem-dot"
    />
    <div class="ui-timelineItem-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ color?: string }>(), {
  color: '#1890ff'
})
</script>

<style lang="scss">
.ui-timelineItem-wrap {
  padding: 0 20px 40px 20px;
  position: relative;
  border-left: 2px solid #f0f0f0;
  &:last-child {
    border-color: transparent;
  }
  > .ui-timelineItem-content {
    display: inline-flex;
    word-wrap: break-word;
    flex-direction: column;
    gap: 10px;
    line-height: 1.5em;
    transform: translateY(-5px);
  }
  > .ui-timelineItem-dot {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
