<template>
  <div class="wrap">
    <div class="ui-template-wrap">
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
    <div class="ui-template-wrap color">
      <Tooltip v-for="color in colors" :key="color" :color="color">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>{{ color }}</Button>
      </Tooltip>
    </div>

    <div class="ui-template-wrap color">
      <Tooltip v-for="color in customColors" :key="color" :color="color">
        <template #title>
          <span>prompt text</span>
        </template>
        <Button>{{ color }}</Button>
      </Tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tooltip from '@/lib/tooltip/Tooltip.vue'
import Button from '@/lib/button/Button.vue'

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime'
]
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9']
</script>

<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px 200px;
}
.ui-template-wrap {
  width: 400px;
  &.color {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .top,
  .bottom {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-bottom: 50px;
  }
  .left-right {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    > .left,
    .right {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }
}
</style>
