<template>
  <div class="wrap">
    <Breadcrumb separator="/">
      <BreadcrumbItem>xxx</BreadcrumbItem>
      <BreadcrumbItem>yyy</BreadcrumbItem>
      <BreadcrumbItem>zzz</BreadcrumbItem>
      <BreadcrumbItem>aaa</BreadcrumbItem>
      <BreadcrumbItem>eee</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/lib/breadcrumb/Breadcrumb.vue'
import BreadcrumbItem from '@/lib/breadcrumb/BreadcrumbItem.vue'
</script>

<style lang="scss">
.wrap {
}
</style>
