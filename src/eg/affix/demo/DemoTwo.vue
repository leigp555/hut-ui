<demo>
状态改变的回调
</demo>

<template>
  <Affix :offsetTop="100" :scroll-container="scrollContainer" @change="onChange">
    <Button>距离顶部100px固定</Button>
  </Affix>
</template>

<script setup lang="ts">
import { Affix, Button } from '@/lib'

const scrollContainer = () => document.getElementById('display-container-wrap')
const onChange = (fixed: boolean) => {
  console.log(fixed)
}
</script>
