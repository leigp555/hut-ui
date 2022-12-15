
<p align="center">
  <a href="https://leigp555.github.io/hut-ui/#/">
    <img width="100" src="./src/assets/logo.png">
  </a>
</p>

<h1 align="center">
  <a href="https://leigp555.github.io/hut-ui/#/" target="_blank">Hut UI</a>
</h1>

<div align="center">

一个 Vue 3 组件库

</div>


###### 介绍
Hut UI 是一套链接开发者、设计师、交互和产品经理的桌面端组件库

###### 特性

- 视觉统一:
  个人维护并持续更新，保证了视觉层面的高颜值和统一性。
- 易于上手:
  开箱即用，详尽文档/示例，在线 Demo 不必安装本地即可在线编辑和学习。
- 组件丰富:
  覆盖了大部分开发场景，满足绝大部分网站需求，易于配置，提升开发效率。
- 按需加载:
  默认支持基于 ES modules 的 tree shaking，按需加载提升页面性能。
- TypeScript:
  全套使用 TypeScript，胜任大型项目开发。


###### 支持环境

- 现代浏览器和 IE10+（需要 polyfills ）
- Vue ^3
- Typescript ^4


###### 安装

- npm安装
```shell
npm install hut-ui
```
- yarn安装
```shell
yarn install hut-ui
```
-  pnpm安装
```shell
pnpm install hut-ui
```


###### 按需导入
```html
<template>
  <div class="wrap">
    <Button type="primary">toggle</Button>
    <Button type="text">toggle</Button>
    <Button type="link">toggle</Button>
    <Button type="dashed">toggle</Button>
    <Button type="default">toggle</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'hut-ui'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

```
###### 图标
```shell
pnpm install @hut-ui/icons-vue
```


###### 许可
使用 <a href="https://opensource.org/licenses/MIT">MIT license</a>  许可证书。
