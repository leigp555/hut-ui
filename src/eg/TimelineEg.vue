<template>
  <div class="ui-template-wrap">
    <Timeline mode="left">
      <TimelineItem color="green">Create a services site 2015-09-01</TimelineItem>
      <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
      <TimelineItem>Technical testing 2015-09-01</TimelineItem>
      <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
      <TimelineItem>
        <template #dot>
          <SvgIcon name="weixin" width="1em" height="1em" />
        </template>
        Technical testing 2015-09-01
      </TimelineItem>
    </Timeline>
    <Timeline mode="alternate">
      <TimelineItem color="green">Create a services site 2015-09-01</TimelineItem>
      <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
      <TimelineItem>Technical testing 2015-09-01</TimelineItem>
      <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
      <TimelineItem>
        <template #dot>
          <SvgIcon name="weixin" width="1em" height="1em" />
        </template>
        Technical testing 2015-09-01
      </TimelineItem>
    </Timeline>
    <Timeline mode="right">
      <TimelineItem color="green">Create a services site 2015-09-01</TimelineItem>
      <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
      <TimelineItem>Technical testing 2015-09-01</TimelineItem>
      <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
      <TimelineItem>
        <template #dot>
          <SvgIcon name="weixin" width="1em" height="1em" />
        </template>
        Technical testing 2015-09-01
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import Timeline from '@/lib/timeline/Timeline.vue'
import TimelineItem from '@/lib/timeline/TimelineItem.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
