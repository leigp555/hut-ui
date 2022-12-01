<demo>
多种形态的 PageHeader
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
    <template #descriptions>
      <Description label="Created">Lili Qu</Description>
      <Description label="Association">421421</Description>
      <Description label="Creation Time">2017-01-10</Description>
      <Description label="Effective Time">2017-01-10</Description>
      <Description label="Remarks">
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China</Description
      >
    </template>
  </PageHeader>
</template>

<script setup lang="ts">
import { PageHeader, Description, Button } from '@/lib'

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
