<demo>
基本用法
</demo>

<template>
  <div class="wrap">
    <div class="top">
      <Popconfirm
        placement="topLeft"
        okText="Yes"
        cancelText="No"
        @confirm="confirm"
        @cancel="cancel"
      >
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm
        placement="topCenter"
        okText="Yes"
        cancelText="No"
        @confirm="confirm"
        @cancel="cancel"
      >
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm
        placement="topRight"
        okText="Yes"
        cancelText="No"
        @confirm="confirm"
        @cancel="cancel"
      >
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <Button>TL</Button>
      </Popconfirm>
    </div>
    <div class="left-right">
      <div class="left">
        <Popconfirm
          placement="leftTop"
          okText="Yes"
          cancelText="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <template #title>
            <p>{{ text }}</p>
            <p>{{ text }}</p>
          </template>
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="leftCenter"
          okText="Yes"
          cancelText="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <template #title>
            <p>{{ text }}</p>
            <p>{{ text }}</p>
          </template>
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="leftBottom"
          okText="Yes"
          cancelText="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <template #title>
            <p>{{ text }}</p>
            <p>{{ text }}</p>
          </template>
          <Button>TL</Button>
        </Popconfirm>
      </div>
      <div class="right">
        <Popconfirm
          placement="rightTop"
          okText="Yes"
          cancelText="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <template #title>
            <p>{{ text }}</p>
            <p>{{ text }}</p>
          </template>
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="rightCenter"
          okText="Yes"
          cancelText="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <template #title>
            <p>{{ text }}</p>
            <p>{{ text }}</p>
          </template>
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="rightBottom"
          okText="Yes"
          cancelText="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <template #title>
            <p>{{ text }}</p>
            <p>{{ text }}</p>
          </template>
          <Button>TL</Button>
        </Popconfirm>
      </div>
    </div>
    <div class="bottom">
      <Popconfirm
        placement="bottomLeft"
        okText="Yes"
        cancelText="No"
        @confirm="confirm"
        @cancel="cancel"
      >
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottomCenter"
        okText="Yes"
        cancelText="No"
        @confirm="confirm"
        @cancel="cancel"
      >
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottomRight"
        okText="Yes"
        cancelText="No"
        @confirm="confirm"
        @cancel="cancel"
      >
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <Button>TL</Button>
      </Popconfirm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from '@/lib'

const text = 'Are you sure to delete this task?'

const confirm = () => {
  console.log('confirm')
}
const cancel = () => {
  console.log('cancel')
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 380px;
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
