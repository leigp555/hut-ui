<template>
  <div class="ui-template-wrap">
    <div class="row">
      <Spin />
      <Spin :size="32" />
      <Spin :size="42" />
      <Spin tip="loading" />
      <Spin :size="42">
        <template #icon>
          <SvgIcon name="loading" width="20px" height="20px" fill="#1890ff" />
        </template>
      </Spin>
    </div>
    <div class="column">
      <Spin :loading="loading">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores
        aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis
        perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit?
      </Spin>
      <div>
        <Button @click="onLoading">loading</Button>
      </div>

      <Spin :loading="loading2" :delay="500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores
        aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis
        perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit?
      </Spin>
      <div>
        <Button @click="onLoading2">loading</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Spin from '@/lib/spin/Spin.vue'
import Button from '@/lib/button/Button.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const loading = ref<boolean>(false)
const onLoading = () => {
  loading.value = true
  const id = setTimeout(() => {
    loading.value = false
    window.clearTimeout(id)
  }, 4000)
}

const loading2 = ref<boolean>(false)
const onLoading2 = () => {
  loading2.value = !loading2.value
}
</script>

<style lang="scss">
.ui-template-wrap {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  .row {
    display: flex;
    gap: 80px;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
