<demo>
子元素垂直对齐
</demo>
<template>
  <p>Align Top</p>
  <Row align-items="start">
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

  <p>Align Center</p>
  <Row align-items="center">
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

  <p>Align Bottom</p>
  <Row align-items="end">
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
    height: 100px;
  }
}
</style>
