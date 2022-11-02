<template>
  <div class="wrap">
    <PageHeader title="Title" subtitle="This is a subtitle" @back="back"></PageHeader>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/lib/pageHeader/PageHeader.vue'
// import Descriptions from '@/lib/pageHeader/Descriptions.vue'
// import DescriptionsItem from '@/lib/pageHeader/DescriptionsItem.vue'

const back = () => {
  console.log('back')
}
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
