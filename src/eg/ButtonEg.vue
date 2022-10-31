<template>
  <div class="test">
    <Button @click="toggle">toggle</Button>

    <hr />
    <div>圆角</div>
    <Button :radius="false">toggle</Button>
    <Button radius>toggle</Button>

    <hr />
    <div>类型</div>

    <Button type="primary">toggle</Button>
    <Button type="text">toggle</Button>
    <Button type="link">toggle</Button>
    <Button type="dashed">toggle</Button>
    <Button type="default">toggle</Button>

    <hr />

    <div>加载中</div>
    <Button loading>toggle</Button>

    <hr />

    <div>大小</div>
    <Button size="big">toggle</Button>
    <Button size="normal">toggle</Button>
    <Button size="small">toggle</Button>

    <hr />

    <div>禁止点击</div>
    <Button disabled>toggle</Button>

    <hr />

    <div>支持icon</div>
    <Button>
      <template #icon>
        <SvgIcon name="weixin" width="1em" height="1em" />
      </template>
      weixin</Button
    >
  </div>
</template>

<script setup lang="ts">
import Button from '@/lib/button/Button.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const toggle = () => {
  console.log('点击了')
}
</script>

<style lang="scss" scoped>
.test {
  padding: 20px;
}
button {
  margin: 20px;
}
</style>
