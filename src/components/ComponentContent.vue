<template>
  <div class="template-wrap scroll-container" ref="wrap" id="display-container-wrap">
    <!--    导航部分-->
    <section class="nav" v-if="navArr[0]">
      <Anchor
        customClass="customClass"
        style="top: 80px; right: 16px"
        :scroll-container="() => wrap"
      >
        <AnchorLink
          v-for="item in navArr"
          :key="item.id"
          :href="item.id"
          :title="item.title"
          :nested="item.nested"
        />
      </Anchor>
    </section>

    <!--    介绍部分-->
    <section class="title">
      <Title :level="2" :id="`ex-${componentName}-title`">{{ title }}</Title>
      <div class="title-description">
        <slot name="intro" />
      </div>
    </section>

    <!--    示例部分-->
    <section class="example">
      <Title :level="4" class="demo" :id="`ex-${componentName}-demo`">案例</Title>
      <div class="example-wrap">
        <slot name="demo" />
      </div>
    </section>

    <!--    api介绍部分-->
    <section class="api" v-if="$slots.api">
      <Title :level="4" :id="`ex-${componentName}-api`">接口</Title>
      <div class="apiIntro scroll-container">
        <slot name="api" />
      </div>
    </section>
    <!--    外部链接-->
    <section class="footer-wrap">
      <div class="footer">
        <div class="footer-main">
          <h4 class="title">资源</h4>
          <ul>
            <li>
              <a href="https://github.com/leigp555/vue-ui">Github</a>
            </li>
            <li>
              <a href="https://cn.vuejs.org/guide/introduction.html">Vue</a>
            </li>
            <li>
              <a href="https://cn.vitejs.dev/guide/">Vite</a>
            </li>
            <li>
              <a
                href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html"
              >
                Vue-Router
              </a>
            </li>
            <li>
              <a href="https://pinia.web3doc.top/introduction.html">Pinia</a>
            </li>
          </ul>
        </div>
        <div class="footer-main">
          <h4 class="title">讨论</h4>
          <ul>
            <li>
              <a href="mailto:907090585@qq.com">联系我</a>
            </li>
            <li>
              <a href="https://github.com/leigp555/vue-ui/issues/new">报告Bug</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults } from 'vue'
import { Anchor, AnchorLink, Title } from '@/lib/index'

withDefaults(
  defineProps<{
    navArr?: { id: string; title: string; nested: boolean }[]
    title: string
    componentName: string
  }>(),
  { navArr: () => [] }
)
const wrap = ref<HTMLElement | null>(null)
</script>

<style lang="scss" scoped>
.template-wrap {
  overflow-y: auto;
  overflow-x: auto;
  max-height: 100%;
  scroll-behavior: smooth;
  padding: 0 150px 10px 32px;
  @media (max-width: 1000px) {
    padding: 0 120px 10px 10px;
  }
  @media (max-width: 600px) {
    padding: 0 10px 10px 10px;
  }
  p {
    line-height: 2em;
  }
  > .nav {
    @media (max-width: 600px) {
      display: none;
    }
    > .customClass {
      font-size: 12px;
    }
  }
  > .title {
    margin-top: 10px;
    > .title-description {
    }
  }
  > .example {
    padding: 10px;
    margin-top: 40px;
    > .example-wrap {
      margin-top: 50px;
    }
  }
  > .api {
    padding: 10px;
    margin-top: 40px;
    > .apiIntro {
      margin-top: 50px;
      overflow-x: auto;
    }
  }
  > .footer-wrap {
    padding: 0 10px;
    > .footer {
      margin-top: 40px;
      background-color: #f5f7fa;
      padding: 42px 60px;
      display: flex;
      gap: 130px;
      @media (max-width: 500px) {
        flex-direction: column;
        gap: 30px;
      }
      > .footer-main {
        display: flex;
        flex-direction: column;
        gap: 15px;
        border-radius: 3px;
        > .title {
          font-size: 18px;
          font-weight: 500;
        }
        > ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          a {
            text-decoration: none;
            color: inherit;
            white-space: nowrap;
            &:hover {
              color: #1890ff;
            }
          }
        }
      }
    }
  }
}
</style>
