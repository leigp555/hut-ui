<demo>
嵌入icon
</demo>
<template>
  <Breadcrumb separator="~">
    <BreadcrumbItem>
      <template #icon>
        <Icon_wechat name="weixin" width="1em" height="1em" />
      </template>
      black
    </BreadcrumbItem>
    <BreadcrumbItem>
      <template #icon>
        <Icon_wechat name="weixin" width="1em" height="1em" fill="pink" />
      </template>
      pink
    </BreadcrumbItem>
    <BreadcrumbItem>
      <template #icon>
        <Icon_wechat name="weixin" width="1em" height="1em" fill="blue" />
      </template>
      blue
    </BreadcrumbItem>
    <BreadcrumbItem>
      <template #icon>
        <Icon_wechat name="weixin" width="1em" height="1em" fill="green" />
      </template>
      green
    </BreadcrumbItem>
    <BreadcrumbItem>
      <template #icon>
        <Icon_wechat name="weixin" width="1em" height="1em" fill="red" />
      </template>
      red
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script setup lang="ts">
import { Icon_wechat } from '@hut-ui/icons-vue'
import { Breadcrumb, BreadcrumbItem } from '@/lib'
</script>
