<demo>
基本示例
</demo>

<template>
  <Row style="height: 54px">
    <Col :span="50" class="col">col-50</Col>
    <Col :span="50" class="col">col-50</Col>
  </Row>
  <Row style="height: 54px">
    <Col :span="25" class="col">col-25</Col>
    <Col :span="25" class="col">col-25</Col>
    <Col :span="25" class="col">col-25</Col>
    <Col :span="25" class="col">col-25</Col>
  </Row>
  <Row style="height: 54px">
    <Col :span="50" class="col">col-50</Col>
    <Col :span="10" class="col">col-10</Col>
    <Col :span="20" class="col">col-20</Col>
    <Col :span="20" class="col">col-20</Col>
  </Row>
</template>

<script setup lang="ts">
import { Row, Col } from '@/lib'
</script>

<style lang="scss" scoped>
.col {
  background-color: #0092ff;
  &:nth-child(odd) {
    background-color: #40adff;
  }
}
</style>
