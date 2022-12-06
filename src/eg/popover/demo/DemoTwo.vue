<demo>
click触发
</demo>

<template>
  <div class="wrap">
    <div class="top">
      <Popover placement="topLeft" trigger="click">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
      <Popover placement="topCenter" trigger="click">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
      <Popover placement="topRight" trigger="click">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
    </div>
    <div class="left-right">
      <div class="left">
        <Popover placement="leftTop" trigger="click">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
        <Popover placement="leftCenter" trigger="click">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
        <Popover placement="leftBottom" trigger="click">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
      </div>
      <div class="right">
        <Popover placement="rightTop" trigger="click">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
        <Popover placement="rightCenter" trigger="click">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
        <Popover placement="rightBottom" trigger="click">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
      </div>
    </div>
    <div class="bottom">
      <Popover placement="bottomLeft" trigger="click">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
      <Popover placement="bottomCenter" trigger="click">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
      <Popover placement="bottomRight" trigger="click">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button } from '@/lib'
</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .top,
  .bottom {
    display: flex;
    gap: 40px;
    justify-content: center;
  }
  .left-right {
    display: flex;
    justify-content: center;
    gap: 240px;
    > .left,
    .right {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }
}
</style>
