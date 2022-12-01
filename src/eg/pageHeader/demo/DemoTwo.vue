<demo>
带面包屑页头
</demo>
<template>
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
</template>

<script setup lang="ts">
import { PageHeader, Button } from '@/lib'

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
