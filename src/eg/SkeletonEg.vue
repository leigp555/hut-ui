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
      <Skeleton avatar active :paragraph="{ rows: 4 }" />
    </div>
    <div>
      <h4>占位</h4>
      <Skeleton :loading="loading">
        <div>
          <h4>Ant Design Vue, a design language</h4>
          <p>
            We supply a series of design principles, practical patterns and high quality
            design resources (Sketch and Axure), to help people create their product
            prototypes beautifully and efficiently.
          </p>
        </div>
      </Skeleton>
      <div>
        <Button :disabled="loading" @click="showSkeleton">Show Skeleton</Button>
      </div>
    </div>
    <SkeletonAvatar active />
    <SkeletonButton active />
    <SkeletonInput active />
    <SkeletonImg active />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Skeleton from '@/lib/skeleton/Skeleton.vue'
import SkeletonAvatar from '@/lib/skeleton/SkeletonAvatar.vue'
import SkeletonButton from '@/lib/skeleton/SkeletonButton.vue'
import SkeletonImg from '@/lib/skeleton/SkeletonImg.vue'
import SkeletonInput from '@/lib/skeleton/SkeletonInput.vue'
import Button from '@/lib/button/Button.vue'

const loading = ref<boolean>(false)

const showSkeleton = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
