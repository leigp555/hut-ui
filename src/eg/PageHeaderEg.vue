<template>
  <div class="wrap">
    <PageHeader title="Title" subtitle="This is a subtitle" @back="back"></PageHeader>
    <PageHeader
      title="Title"
      subtitle="This is a subtitle"
      @back="back"
      :breadcrumb="routes"
    >
      <template #actions>
        <Button type="text">Operation</Button>
        <Button type="link">Operation</Button>
        <Button>Primary</Button>
      </template>
    </PageHeader>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/lib/pageHeader/PageHeader.vue'
import Button from '@/lib/button/Button.vue'

const back = () => {
  console.log('back')
}
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu'
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu'
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu'
  }
]
</script>

<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  gap: 150px;
}
</style>
