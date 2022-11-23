<template>
  <div class="ui-list-wrap">
    <ol class="ui-list-content">
      <li class="ui-list-item" v-for="item in dataSource" :key="item">
        <Component :is="slots[0]" :data="item" />
      </li>
      <li class="ui-list-skeleton">
        <Skeleton avatar active :paragraph="{ rows: 3 }" :loading="loading" />
      </li>
    </ol>
    <div class="ui-list-loadMore">
      <slot name="loadMore" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots } from 'vue'
import Skeleton from '../skeleton/Skeleton.vue'

withDefaults(defineProps<{ dataSource: []; loading: boolean }>(), {})

const slots = useSlots().default()
</script>

<style lang="scss">
.ui-list-wrap {
  > .ui-list-content {
    display: flex;
    flex-direction: column;
    list-style: none;
    color: #000000d9;
    font-size: 14px;
    line-height: 1.5em;
    > .ui-list-item {
      border-bottom: 1px solid #f0f0f0;
      flex-grow: 10;
      padding: 12px 0;
    }
    > .ui-list-skeleton {
      flex-grow: 10;
      padding: 12px 0;
    }
  }
  > .ui-list-loadMore {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 12px;
  }
}
</style>
