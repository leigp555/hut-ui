<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import customLocale from 'dayjs/locale/zh-cn'
import Avatar from '../avatar/Avatar.vue'
import { CommentData } from './type'

dayjs.locale(customLocale)
dayjs.extend(relativeTime)

withDefaults(defineProps<{ data: CommentData[] }>(), {})
</script>

<template>
  <div class="ui-comment-wrap">
    <div class="ui-comment-item" v-for="item in data" :key="item.id">
      <div class="item-comment-wrap">
        <div class="avatar">
          <Avatar
            :src="item.from_avatar"
            :style="{ backgroundColor: '#fff' }"
            :size="38"
          />
        </div>
        <div class="content">
          <div class="item-comment-title">
            <span>{{ item.from_auth }}</span>
            <span>{{ dayjs(item.createdAt).fromNow() }}</span>
          </div>
          <div class="description">
            <span
              v-if="item.type !== 'main'"
              :style="{ color: '#40a9ff', marginRight: '5px' }"
              >{{ `@${item.to_auth}:` }}</span
            >
            {{ `${item.content}` }}
          </div>
          <div class="action">
            <slot name="actions" :item="item" />
          </div>
        </div>
      </div>
      <div v-if="item.reply" class="ui-comment-reply">
        <Comment :data="item.reply" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ui-comment-wrap {
  display: flex;
  flex-direction: column;
  gap: 15px;
  > .ui-comment-item {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    > .item-comment-wrap {
      display: flex;
      gap: 20px;
      > .avatar {
        align-self: start;
        display: inline-flex;
        align-items: center;
      }
      > .content {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
          Arial, Noto Sans, sans-serif, apple color emoji, segoe ui emoji,
          Segoe UI Symbol, noto color emoji;
        > .item-comment-title {
          white-space: nowrap;
          color: #00000073;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        > .description {
          word-wrap: break-word;
          color: #000000d9;
        }
      }
    }
    > .ui-comment-reply {
      margin-left: 52px;
      margin-bottom: 10px;
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
}
</style>
