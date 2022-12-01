<demo>
支持链接
</demo>
<template>
  <Breadcrumb separator=">>">
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem href="//google.com">Application Center</BreadcrumbItem>
    <BreadcrumbItem href="//taobao.com">Application List</BreadcrumbItem>
    <BreadcrumbItem href="//jingdong.com">An Application</BreadcrumbItem>
  </Breadcrumb>
</template>

<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from '@/lib'
</script>
