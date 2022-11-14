<template>
  <div class="ui-timeline-wrap" :class="{ [`timeLine-wrap-${mode}`]: true }">
    <div class="ui-timeline-content" :class="{ [`timeLine-content-${mode}`]: true }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{ mode?: 'left' | 'right' | 'alternate' }>(), { mode: 'left' })
</script>

<style lang="scss">
.ui-timeline-wrap {
  display: flex;
  justify-content: start;
  overflow: hidden;
  padding: 10px 20px;
  &.timeLine-wrap-alternate {
    justify-content: center;
  }
  &.timeLine-wrap-right {
    justify-content: end;
  }

  .ui-timeline-content {
    &.timeLine-content-alternate {
      transform: translateX(50%);
      .ui-timelineItem-wrap:nth-child(even) {
        > .ui-timelineItem-content {
          transform: translateX(calc(-100% - 40px));
        }
      }
    }
    &.timeLine-content-right {
      transform: translateX(calc(100%));
      .ui-timelineItem-wrap > .ui-timelineItem-content {
        transform: translateX(calc(-100% - 40px));
      }
    }
  }
}
</style>
