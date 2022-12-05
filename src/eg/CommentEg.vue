<script setup lang="ts">
import Comment from '@/lib/comment/Comment.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
import Button from '@/lib/button/Button.vue'
import { CommentData } from '@/lib'

const data: CommentData[] = [
  {
    id: 1,
    type: 'main',
    from_avatar: 'https://joeschmoe.io/api/v1/random',
    from_auth: 'Lorem1',
    to_auth: 'Auth',
    content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
    like_num: 10,
    dislike_num: 0,
    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
  },
  {
    id: 2,
    type: 'main',
    from_avatar: 'https://joeschmoe.io/api/v1/random',
    from_auth: 'Lorem2',
    to_auth: 'Auth',
    content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
    like_num: 10,
    dislike_num: 0,
    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    reply: [
      {
        id: 3,
        type: 'replay',
        from_avatar: 'https://joeschmoe.io/api/v1/random',
        from_auth: 'Lorem2-1',
        to_auth: 'Lorem2',
        content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
        like_num: 10,
        dislike_num: 0,
        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
        updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
      }
    ]
  },
  {
    id: 4,
    type: 'main',
    from_avatar: 'https://joeschmoe.io/api/v1/random',
    from_auth: 'Lorem3',
    to_auth: 'Auth',
    content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
    like_num: 10,
    dislike_num: 0,
    createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
    reply: [
      {
        id: 5,
        type: 'replay',
        from_avatar: 'https://joeschmoe.io/api/v1/random',
        from_auth: 'Lorem3-1',
        to_auth: 'Lorem3',
        content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
        like_num: 10,
        dislike_num: 0,
        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
        updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
      },
      {
        id: 6,
        type: 'replay',
        from_avatar: 'https://joeschmoe.io/api/v1/random',
        from_auth: 'Lorem3-2',
        to_auth: 'Lorem3-1',
        content: `Accusantium ad ducimus eos et
      exercitationem facilis itaque molestias necessitatibus odio, quod ratione rem similique
      voluptatum? Distinctio ipsam nostrum nulla quibusdam sed.`,
        like_num: 10,
        dislike_num: 0,
        createdAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)',
        updatedAt: 'Thu Jul 28 2022 23:22:47 GMT+0800 (中国标准时间)'
      }
    ]
  }
]
</script>

<template>
  <div class="ui-template-wrap">
    <Comment :data="data">
      <template #actions="kudosProps">
        <div class="actions">
          <div class="kudos">
            <div class="agree">
              <span>
                <SvgIcon name="agree" width="1em" height="1em" />
              </span>
              <span>{{ kudosProps.item.like_num }}</span>
            </div>
            <div class="oppose">
              <span>
                <SvgIcon
                  name="agree"
                  width="1em"
                  height="1em"
                  :style="{ transform: 'rotate(180deg)' }"
                />
              </span>
              <span>{{ kudosProps.item.dislike_num }}</span>
            </div>
          </div>
          <Button type="link" :style="{ fontSize: '12px', display: 'inline-block' }"
            >回复</Button
          >
        </div>
      </template>
    </Comment>
  </div>
</template>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  align-items: center;
  .actions {
    display: flex;
    align-items: center;
    > .kudos {
      display: flex;
      align-items: center;
      gap: 15px;
      > .agree,
      .oppose {
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        span {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
