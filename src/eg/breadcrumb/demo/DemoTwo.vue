<demo>
自定义分隔符
</demo>

<template>
  <Breadcrumb separator="~">
    <BreadcrumbItem>C:</BreadcrumbItem>
    <BreadcrumbItem>Windows</BreadcrumbItem>
    <BreadcrumbItem>System32</BreadcrumbItem>
    <BreadcrumbItem>drivers</BreadcrumbItem>
    <BreadcrumbItem>etc</BreadcrumbItem>
  </Breadcrumb>
</template>
<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from '@/lib'
</script>
