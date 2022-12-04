<demo>
hover触发
</demo>

<template>
  <div class="wrap">
    <div class="top">
      <Popover placement="topLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
      <Popover placement="topCenter">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
      <Popover placement="topRight">
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
        <Popover placement="leftTop">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
        <Popover placement="leftCenter">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
        <Popover placement="leftBottom">
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
        <Popover placement="rightTop">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
        <Popover placement="rightCenter">
          <template #content>
            <p>Content</p>
            <p>Content</p>
          </template>
          <template #title>
            <span>Title</span>
          </template>
          <Button>TL</Button>
        </Popover>
        <Popover placement="rightBottom">
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
      <Popover placement="bottomLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
      <Popover placement="bottomCenter">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <Button>TL</Button>
      </Popover>
      <Popover placement="bottomRight">
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
  margin: 200px;
  width: 400px;
  .top,
  .bottom {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-bottom: 20px;
  }
  .left-right {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    > .left,
    .right {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }
}
</style>
