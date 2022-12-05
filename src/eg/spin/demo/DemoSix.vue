<demo>
延迟加载
</demo>

<template>
  <div class="wrap">
    <Spin :loading="loading" :delay="500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores
      aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis
      perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit?
    </Spin>
    <div>
      <Button @click="onLoading">loading</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin, Button } from '@/lib'

const loading = ref<boolean>(false)
const onLoading = () => {
  loading.value = !loading.value
}
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
