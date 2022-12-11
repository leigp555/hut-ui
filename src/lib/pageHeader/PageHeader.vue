<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue'
import SvgIcon from '../common/SvgIcon.vue'

const emits = defineEmits(['back'])

type BreadcrumbTp = {
  path: string
  breadcrumbName: string
}

withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    breadcrumb?: BreadcrumbTp[] | []
  }>(),
  {
    title: 'Title',
    subtitle: 'Subtitle',
    // eslint-disable-next-line vue/require-valid-default-prop
    breadcrumb: () => []
  }
)
const emitBack = () => {
  emits('back')
}
</script>

<template>
  <div class="ui-PageHeader-wrap">
    <div class="ui-PageHeader-Breadcrumb">
      <div class="breadcrumb">
        <a
          v-for="(item, index) in breadcrumb"
          :key="item.path"
          :href="item.path"
          class="link"
        >
          <span v-if="index !== 0" class="separator">/</span>
          <span class="linkName">{{ item.breadcrumbName }}</span>
        </a>
      </div>
    </div>
    <div class="ui-PageHeader-content">
      <div class="ui-PageHeader-title">
        <span class="title-icon" @click="emitBack">
          <SvgIcon name="left" width="1.2em" height="1.2em" />
        </span>
        <span class="title-item title-titleItem">{{ title }}</span>
        <span class="title-item title-subtitleItem">{{ subtitle }}</span>
      </div>
      <div class="ui-PageHeader-actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="ui-PageHeader-descriptions">
      <slot name="descriptions" />
    </div>
  </div>
</template>

<style lang="scss">
.ui-PageHeader-wrap {
  padding: 10px;
  > .ui-PageHeader-Breadcrumb {
    margin-bottom: 20px;
    > .breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      > .link {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        gap: 8px;
        > .linkName {
          white-space: nowrap;
        }
        &:not(:first-child) {
          cursor: pointer;
          color: #8c8c8c;
        }
        &:first-child {
          cursor: text;
        }
        &:not(:first-child):hover {
          color: #1890ff;
        }
        > .separator {
          cursor: text;
          color: #8c8c8c;
        }
      }
    }
  }
  > .ui-PageHeader-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    > .ui-PageHeader-title {
      display: flex;
      align-items: center;
      > .title-icon {
        margin-right: 12px;
        display: flex;
        align-items: center;
        cursor: pointer;
        svg:hover {
          fill: #1890ff;
        }
      }
      > .title-item {
        margin-right: 10px;
        cursor: text;
        display: flex;
        align-items: center;
        &.title-titleItem {
          font-weight: 700;
          color: #262626;
        }
        &.title-subtitleItem {
          color: #8c8c8c;
          font-size: 14px;
        }
      }
    }
    > .ui-PageHeader-actions {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  > .ui-PageHeader-descriptions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    font-size: 14px;
  }
}
</style>
