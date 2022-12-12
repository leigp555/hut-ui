<demo>
基本示例
</demo>
<template>
  <div class="wrap">
    <Layout>
      <Header class="header"> Header </Header>
      <Content class="content"> Content </Content>
      <Footer class="footer"> Footer </Footer>
    </Layout>
    <Layout>
      <Header class="header">Header</Header>
      <Layout row>
        <Aside class="aside">Sider</Aside>
        <Content class="content">Content</Content>
      </Layout>
      <Footer class="footer">Footer</Footer>
    </Layout>

    <Layout gap="5px">
      <Header class="header">Header</Header>
      <Layout row gap="5px">
        <Content class="content">Content</Content>
        <Aside class="aside">Sider</Aside>
      </Layout>
      <Footer class="footer">Footer</Footer>
    </Layout>

    <Layout row>
      <Aside class="aside">Sider</Aside>
      <Layout>
        <Header class="header">Header</Header>
        <Content class="content">Content</Content>
        <Footer class="footer">Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import { Layout, Aside, Header, Content, Footer } from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 40px;
  .header {
    background-color: #7dbcea;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    background-color: #108ee9;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer {
    background-color: #7dbcea;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .aside {
    background-color: #3ba0e9;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
