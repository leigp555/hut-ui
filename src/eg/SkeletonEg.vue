<template>
  <div class="ui-template-wrap">
    <Skeleton />
    <Skeleton :paragraph="{ rows: 4 }" />
    <Skeleton avatar :paragraph="{ rows: 4 }" />
    <SkeletonAvatar />
    <SkeletonButton />
    <SkeletonInput />
    <SkeletonImg />
  </div>
</template>

<script setup lang="ts">
import Skeleton from '@/lib/skeleton/Skeleton.vue'
import SkeletonAvatar from '@/lib/skeleton/SkeletonAvatar.vue'
import SkeletonButton from '@/lib/skeleton/SkeletonButton.vue'
import SkeletonImg from '@/lib/skeleton/SkeletonImg.vue'
import SkeletonInput from '@/lib/skeleton/SkeletonInput.vue'
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
