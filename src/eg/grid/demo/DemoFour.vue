<demo>
调整子元素间距
</demo>
<template>
  <p>Gap 50px</p>
  <Row gap="50px">
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

  <p>Gap 100</p>
  <Row gap="100px">
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

  <p>Gap 20%</p>
  <Row gap="20%">
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
