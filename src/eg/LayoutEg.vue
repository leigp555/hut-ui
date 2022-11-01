<template>
  <div class="wrap">
    <Layout>
      <Header>
        <Row>
          <Col class="header">Header</Col>
        </Row>
      </Header>
      <Content>
        <Row>
          <Col class="content">Content</Col>
        </Row>
      </Content>
      <Footer>
        <Row>
          <Col class="footer">Footer</Col>
        </Row>
      </Footer>
    </Layout>
    <Layout>
      <Header>
        <Row>
          <Col class="header">Header</Col>
        </Row>
      </Header>
      <Layout row>
        <Aside>
          <Row>
            <Col class="aside" span="20">Aside</Col>
          </Row>
        </Aside>
        <Content>
          <Row>
            <Col class="content" span="80">Content</Col>
          </Row>
        </Content>
      </Layout>
      <Footer>
        <Row>
          <Col class="footer">Footer</Col>
        </Row>
      </Footer>
    </Layout>

    <Layout>
      <Header>
        <Row>
          <Col class="header">Header</Col>
        </Row>
      </Header>
      <Layout row>
        <Content>
          <Row>
            <Col class="content">Content</Col>
          </Row>
        </Content>
        <Aside>
          <Row>
            <Col class="aside">Aside</Col>
          </Row>
        </Aside>
      </Layout>
      <Footer>
        <Row>
          <Col class="footer">Footer</Col>
        </Row>
      </Footer>
    </Layout>

    <Layout row>
      <Aside>Sider</Aside>
      <Layout>
        <Header>
          <Row>
            <Col class="header">Header</Col>
          </Row>
        </Header>
        <Content>
          <Row>
            <Col class="content">Content</Col>
          </Row>
        </Content>
        <Footer>
          <Row>
            <Col class="footer">Footer</Col>
          </Row>
        </Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import Layout from '@/lib/layout/Layout.vue'
import Aside from '@/lib/layout/Aside.vue'
import Header from '@/lib/layout/Header.vue'
import Content from '@/lib/layout/Content.vue'
import Footer from '@/lib/layout/Footer.vue'
import Row from '@/lib/grid/Row.vue'
import Col from '@/lib/grid/Col.vue'
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
    justify-content: center;
    align-items: center;
  }
  .content {
    background-color: #108ee9;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer {
    background-color: #7dbcea;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .aside {
    background-color: yellow;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
