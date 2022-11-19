<template>
  <div class="ui-template-wrap">
    <Progress :percent="30" />
    <Progress :percent="50" status="active" />
    <Progress :percent="70" status="exception" />
    <Progress :percent="100" />
    <Progress :percent="50" :show-info="false" />
    <!--    small-->
    <div style="height: 50px"></div>
    <Progress :percent="30" size="small" />
    <Progress :percent="50" size="small" status="active" />
    <Progress :percent="70" size="small" status="exception" />
    <Progress :percent="100" size="small" />
  </div>
</template>

<script setup lang="ts">
import Progress from '@/lib/progress/Progress.vue'
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
}
</style>
