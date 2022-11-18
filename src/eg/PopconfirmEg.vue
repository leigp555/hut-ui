<template>
  <div class="wrap">
    <!--    <div class="ui-template-wrap">-->
    <!--      <div class="top">-->
    <!--        <Popconfirm placement="topLeft">-->
    <!--          <template #content>-->
    <!--            <p>Content</p>-->
    <!--            <p>Content</p>-->
    <!--          </template>-->
    <!--          <template #title>-->
    <!--            <span>Title</span>-->
    <!--          </template>-->
    <!--          <Button>TL</Button>-->
    <!--        </Popconfirm>-->
    <!--        <Popconfirm placement="topCenter">-->
    <!--          <template #content>-->
    <!--            <p>Content</p>-->
    <!--            <p>Content</p>-->
    <!--          </template>-->
    <!--          <template #title>-->
    <!--            <span>Title</span>-->
    <!--          </template>-->
    <!--          <Button>TL</Button>-->
    <!--        </Popconfirm>-->
    <!--        <Popconfirm placement="topRight">-->
    <!--          <template #content>-->
    <!--            <p>Content</p>-->
    <!--            <p>Content</p>-->
    <!--          </template>-->
    <!--          <template #title>-->
    <!--            <span>Title</span>-->
    <!--          </template>-->
    <!--          <Button>TL</Button>-->
    <!--        </Popconfirm>-->
    <!--      </div>-->
    <!--      <div class="left-right">-->
    <!--        <div class="left">-->
    <!--          <Popconfirm placement="leftTop">-->
    <!--            <template #content>-->
    <!--              <p>Content</p>-->
    <!--              <p>Content</p>-->
    <!--            </template>-->
    <!--            <template #title>-->
    <!--              <span>Title</span>-->
    <!--            </template>-->
    <!--            <Button>TL</Button>-->
    <!--          </Popconfirm>-->
    <!--          <Popconfirm placement="leftCenter">-->
    <!--            <template #content>-->
    <!--              <p>Content</p>-->
    <!--              <p>Content</p>-->
    <!--            </template>-->
    <!--            <template #title>-->
    <!--              <span>Title</span>-->
    <!--            </template>-->
    <!--            <Button>TL</Button>-->
    <!--          </Popconfirm>-->
    <!--          <Popconfirm placement="leftBottom">-->
    <!--            <template #content>-->
    <!--              <p>Content</p>-->
    <!--              <p>Content</p>-->
    <!--            </template>-->
    <!--            <template #title>-->
    <!--              <span>Title</span>-->
    <!--            </template>-->
    <!--            <Button>TL</Button>-->
    <!--          </Popconfirm>-->
    <!--        </div>-->
    <!--        <div class="right">-->
    <!--          <Popconfirm placement="rightTop">-->
    <!--            <template #content>-->
    <!--              <p>Content</p>-->
    <!--              <p>Content</p>-->
    <!--            </template>-->
    <!--            <template #title>-->
    <!--              <span>Title</span>-->
    <!--            </template>-->
    <!--            <Button>TL</Button>-->
    <!--          </Popconfirm>-->
    <!--          <Popconfirm placement="rightCenter">-->
    <!--            <template #content>-->
    <!--              <p>Content</p>-->
    <!--              <p>Content</p>-->
    <!--            </template>-->
    <!--            <template #title>-->
    <!--              <span>Title</span>-->
    <!--            </template>-->
    <!--            <Button>TL</Button>-->
    <!--          </Popconfirm>-->
    <!--          <Popconfirm placement="rightBottom">-->
    <!--            <template #content>-->
    <!--              <p>Content</p>-->
    <!--              <p>Content</p>-->
    <!--            </template>-->
    <!--            <template #title>-->
    <!--              <span>Title</span>-->
    <!--            </template>-->
    <!--            <Button>TL</Button>-->
    <!--          </Popconfirm>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="bottom">-->
    <!--        <Popconfirm placement="bottomLeft">-->
    <!--          <template #content>-->
    <!--            <p>Content</p>-->
    <!--            <p>Content</p>-->
    <!--          </template>-->
    <!--          <template #title>-->
    <!--            <span>Title</span>-->
    <!--          </template>-->
    <!--          <Button>TL</Button>-->
    <!--        </Popconfirm>-->
    <!--        <Popconfirm placement="bottomCenter">-->
    <!--          <template #content>-->
    <!--            <p>Content</p>-->
    <!--            <p>Content</p>-->
    <!--          </template>-->
    <!--          <template #title>-->
    <!--            <span>Title</span>-->
    <!--          </template>-->
    <!--          <Button>TL</Button>-->
    <!--        </Popconfirm>-->
    <!--        <Popconfirm placement="bottomRight">-->
    <!--          <template #content>-->
    <!--            <p>Content</p>-->
    <!--            <p>Content</p>-->
    <!--          </template>-->
    <!--          <template #title>-->
    <!--            <span>Title</span>-->
    <!--          </template>-->
    <!--          <Button>TL</Button>-->
    <!--        </Popconfirm>-->
    <!--      </div>-->
    <!--    </div>-->

    <Popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
      <template #title>
        <p>{{ text }}</p>
        <p>{{ text }}</p>
      </template>
      <Button>TL</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import Popconfirm from '@/lib/popconfirm/Popconfirm.vue'
import Button from '@/lib/button/Button.vue'

const text = 'Are you sure to delete this task?'
</script>

<style lang="scss">
.wrap {
  margin-top: 300px;
}
//.wrap {
//  display: flex;
//  flex-direction: column;
//  gap: 50px;
//}
//.ui-template-wrap {
//  margin: 200px;
//  width: 400px;
//  .top,
//  .bottom {
//    display: flex;
//    gap: 40px;
//    justify-content: center;
//    margin-bottom: 50px;
//  }
//  .left-right {
//    display: flex;
//    justify-content: space-between;
//    margin-bottom: 50px;
//    > .left,
//    .right {
//      display: flex;
//      flex-direction: column;
//      gap: 40px;
//    }
//  }
//}
</style>
