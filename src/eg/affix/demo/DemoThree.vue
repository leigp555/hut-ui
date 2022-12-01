<demo>
设置滚动容器
</demo>
<template>
  <div
    id="components-affix-demo-target"
    ref="containerRef"
    class="scrollable-container"
  >
    <div class="background">
      <Affix :scroll-container="() => containerRef" :offset-top="0">
        <Button type="primary">Fixed at the top of container</Button>
      </Affix>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Affix, Button } from '@/lib'

const containerRef = ref<HTMLElement>()
</script>
<style>
#components-affix-demo-target.scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}
</style>
