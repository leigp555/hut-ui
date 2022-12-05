<demo>
其它类型的骨架图
</demo>

<template>
  <div class="wrap">
    <Skeleton active />
    <SkeletonAvatar active />
    <SkeletonButton active />
    <SkeletonInput active />
    <SkeletonImg active />
  </div>
</template>

<script setup lang="ts">
import {
  SkeletonAvatar,
  SkeletonButton,
  SkeletonImg,
  SkeletonInput,
  Skeleton
} from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
