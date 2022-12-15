<demo>
自定义圆圈
</demo>

<template>
  <Timeline mode="alternate">
    <TimelineItem color="green">Create a services site 2015-09-01</TimelineItem>
    <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
    <TimelineItem>Technical testing 2015-09-01</TimelineItem>
    <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
    <TimelineItem>
      <template #dot>
        <Icon_wechat name="weixin" width="1em" height="1em" fill="#75d048" />
      </template>
      Technical testing 2015-09-01
    </TimelineItem>
  </Timeline>
</template>

<script setup lang="ts">
import { Icon_wechat } from '@hut-ui/icons-vue'
import { Timeline, TimelineItem } from '@/lib'
</script>
