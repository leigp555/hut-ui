<template>
  <div class="wrap">
    <Breadcrumb separator="/">
      <BreadcrumbItem>xxx</BreadcrumbItem>
      <BreadcrumbItem>yyy</BreadcrumbItem>
      <BreadcrumbItem>zzz</BreadcrumbItem>
      <BreadcrumbItem>aaa</BreadcrumbItem>
      <BreadcrumbItem>eee</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator=">>">
      <BreadcrumbItem>xxx</BreadcrumbItem>
      <BreadcrumbItem href="//google.com">yyy</BreadcrumbItem>
      <BreadcrumbItem href="//taobao.com">zzz</BreadcrumbItem>
      <BreadcrumbItem href="//jingdong.com">aaa</BreadcrumbItem>
      <BreadcrumbItem href="//xiaomi.com">eee</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="~">
      <BreadcrumbItem>
        <template #icon>
          <SvgIcon name="weixin" width="1em" height="1em" />
        </template>
        xxx
      </BreadcrumbItem>
      <BreadcrumbItem>
        <template #icon>
          <SvgIcon name="weixin" width="1em" height="1em" fill="pink" />
        </template>
        yyy
      </BreadcrumbItem>
      <BreadcrumbItem>
        <template #icon>
          <SvgIcon name="weixin" width="1em" height="1em" fill="blue" />
        </template>
        zzz
      </BreadcrumbItem>
      <BreadcrumbItem>
        <template #icon>
          <SvgIcon name="weixin" width="1em" height="1em" fill="green" />
        </template>
        eee
      </BreadcrumbItem>
      <BreadcrumbItem>
        <template #icon>
          <SvgIcon name="weixin" width="1em" height="1em" fill="red" />
        </template>
        aaa
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/lib/breadcrumb/Breadcrumb.vue'
import BreadcrumbItem from '@/lib/breadcrumb/BreadcrumbItem.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
</script>

<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
