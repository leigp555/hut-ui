<demo>
占位
</demo>

<template>
  <Skeleton :loading="loading">
    <div>
      <h4>Lorem ipsum dolor sit amet, consectetur</h4>
      <p style="line-height: 2em">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis
        commodi delectus, deleniti deserunt eius eveniet expedita iusto minima, natus
        nihil nostrum optio quasi quia quidem repudiandae sint voluptate voluptatibus!
      </p>
      <p style="line-height: 2em">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad blanditiis,
        consectetur debitis dolore et excepturi id laudantium libero maiores nostrum
        officia omnis, praesentium quisquam ratione rem repellat soluta voluptatibus.
      </p>
    </div>
  </Skeleton>
  <div style="margin-top: 20px">
    <Button :disabled="loading" @click="showSkeleton">Show Skeleton</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton, Button } from '@/lib'

const loading = ref<boolean>(false)

const showSkeleton = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>
