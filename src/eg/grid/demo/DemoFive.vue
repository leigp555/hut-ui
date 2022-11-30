<demo>
设置偏移量
</demo>
<template>
  <Row>
    <Col :span="25" class="col">col-8</Col>
    <Col :span="25" :offset="20" class="col">col-8</Col>
  </Row>
  <Row>
    <Col :span="25" :offset="10" class="col">col-6 col-offset-6</Col>
    <Col :span="25" :offset="20" class="col">col-6 col-offset-6</Col>
  </Row>
  <Row>
    <Col :span="50" :offset="30" class="col">col-12 col-offset-6</Col>
  </Row>
</template>

<script setup lang="ts">
import { Row, Col } from '@/lib'
</script>

<style lang="scss" scoped>
.col {
  background-color: #0092ff;
  height: 54px;
  &:nth-child(odd) {
    background-color: #40adff;
  }
}
</style>
