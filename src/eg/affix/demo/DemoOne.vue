<demo>
基本用法
</demo>

<template>
  <Affix :offsetTop="0" :scroll-container="scrollContainer">
    <Button>距离顶部0px固定</Button>
  </Affix>
</template>

<script setup lang="ts">
import { Affix, Button } from '@/lib'

const scrollContainer = () => document.getElementById('display-container-wrap')
</script>
