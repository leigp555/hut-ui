<template>
  <div class="ui-template-wrap">
    <div>
      <h4>普通</h4>
      <Skeleton />
    </div>
    <div>
      <h4>paragraph</h4>
      <Skeleton :paragraph="{ rows: 4 }" />
    </div>
    <div>
      <h4>active</h4>
      <Skeleton active />
    </div>
    <div>
      <h4>active avatar</h4>
      <Skeleton avatar :paragraph="{ rows: 4 }" />
    </div>

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
