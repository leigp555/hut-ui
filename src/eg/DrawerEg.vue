<template>
  <div class="ui-template-wrap">
    <div>
      <Button type="primary" @click="showDrawer">Open</Button>
    </div>

    <Drawer
      v-model:visible="visible"
      title="Basic Drawer"
      placement="right"
      @afterClose="afterClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum, dignissimos
      dolores eaque eum eveniet facere, facilis ipsa nesciunt officia provident quam
      quo, repellat sapiente sint ullam velit veritatis. Ex!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/lib/drawer/Drawer.vue'
import Button from '@/lib/button/Button.vue'

const visible = ref<boolean>(false)
const showDrawer = () => {
  visible.value = true
}
const afterClose = () => {
  console.log('close')
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
