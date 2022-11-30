<demo>
子元素水平分布
</demo>
<template>
  <p>Justify start</p>
  <Row justify="start">
    <Col :span="15" class="col">
      <p class="height-100">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-50">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-120">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-80">col-4</p>
    </Col>
  </Row>

  <p>Justify center</p>
  <Row justify="center">
    <Col :span="15" class="col">
      <p class="height-100">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-50">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-120">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-80">col-4</p>
    </Col>
  </Row>

  <p>Justify end</p>
  <Row justify="end">
    <Col :span="15" class="col">
      <p class="height-100">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-50">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-120">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-80">col-4</p>
    </Col>
  </Row>

  <p>Justify space-between</p>
  <Row justify="space-between">
    <Col :span="15" class="col">
      <p class="height-100">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-50">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-120">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-80">col-4</p>
    </Col>
  </Row>

  <p>Justify space-around</p>
  <Row justify="space-around">
    <Col :span="15" class="col">
      <p class="height-100">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-50">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-120">col-4</p>
    </Col>
    <Col :span="15" class="col">
      <p class="height-80">col-4</p>
    </Col>
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
