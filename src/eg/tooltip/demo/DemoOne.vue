<demo>
基本用法
</demo>

<template>
  <div class="wrap">
    <div class="top">
      <Tooltip placement="topLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="topCenter">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="topRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>TL</Button>
      </Tooltip>
    </div>
    <div class="left-right">
      <div class="left">
        <Tooltip placement="leftTop">
          <template #title>
            <span>prompt text</span>
          </template>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="leftCenter">
          <template #title>
            <span>prompt text</span>
          </template>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="leftBottom">
          <template #title>
            <span>prompt text</span>
          </template>
          <Button>TL</Button>
        </Tooltip>
      </div>
      <div class="right">
        <Tooltip placement="rightTop">
          <template #title>
            <span>prompt text</span>
          </template>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="rightCenter">
          <template #title>
            <span>prompt text</span>
          </template>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="rightBottom">
          <template #title>
            <span>prompt text</span>
          </template>
          <Button>TL</Button>
        </Tooltip>
      </div>
    </div>
    <div class="bottom">
      <Tooltip placement="bottomLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="bottomCenter">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="bottomRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>TL</Button>
      </Tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from '@/lib'
</script>

<style scoped lang="scss">
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
