<template>
  <div class="wrap">
    <p v-for="item in 3" :key="item">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at
      consequuntur dignissimos distinctio ducimus esse expedita fuga harum, iure
      obcaecati officia omnis pariatur quasi saepe, sapiente tenetur ullam vel, vitae.
    </p>
    <Affix :offsetTop="200">
      <Button>距离顶部200px固定</Button>
    </Affix>

    <p v-for="item in 3" :key="item">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at
      consequuntur dignissimos distinctio ducimus esse expedita fuga harum, iure
      obcaecati officia omnis pariatur quasi saepe, sapiente tenetur ullam vel, vitae.
    </p>
    <Affix :offsetTop="50">
      <Button>距离顶部50px固定</Button>
    </Affix>
    <p v-for="item in 10" :key="item">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at
      consequuntur dignissimos distinctio ducimus esse expedita fuga harum, iure
      obcaecati officia omnis pariatur quasi saepe, sapiente tenetur ullam vel, vitae.
    </p>
  </div>
</template>

<script setup lang="ts">
import Affix from '@/lib/affix/Affix.vue'
import Button from '@/lib/button/Button.vue'
</script>

<style lang="scss">
.wrap {
  border: 1px solid blue;
  height: 500px;
  overflow-y: scroll;
}
</style>
