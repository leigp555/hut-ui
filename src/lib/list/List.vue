<template>
  <div class="ui-list-wrap">
    <Spin :loading="loading && mode === 'pagination'">
      <ol class="ui-list-content">
        <li class="ui-list-item" v-for="item in dataSource" :key="item">
          <Component :is="slots[0]" :data="item" />
        </li>
        <li class="ui-list-skeleton" v-show="loading && mode !== 'pagination'">
          <Skeleton avatar active :paragraph="{ rows: 3 }" :loading="loading" />
        </li>
      </ol>
      <div class="ui-list-loadMore" v-if="mode === 'loadMore'">
        <slot name="loadMore" />
      </div>
      <div class="ui-list-pagination" v-if="mode === 'pagination'">
        <slot name="pagination" />
      </div>
    </Spin>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots } from 'vue'
import Skeleton from '../skeleton/Skeleton.vue'
import Spin from '../spin/Spin.vue'

withDefaults(
  defineProps<{
    dataSource: []
    loading?: boolean
    mode?: 'loadMore' | 'normal' | 'pagination'
  }>(),
  {
    loading: false,
    mode: 'normal'
  }
)

const slots = useSlots().default()
</script>

<style lang="scss">
.ui-list-wrap {
  .ui-list-content {
    flex-grow: 10;
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
  > .ui-list-loadMore,
  .ui-list-pagination {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 12px;
  }
}
</style>
