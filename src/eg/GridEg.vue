<template>
  <div class="wrap">
    <Row>
      <Col :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
    </Row>
    <Row>
      <Col
        :span="40"
        offset="auto"
        :style="{ backgroundColor: 'red', height: 50 + 'px' }"
      />
    </Row>
    <Row :gap="5" alignItems="end">
      <Col :span="10" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
      <Col :span="25" :style="{ backgroundColor: 'yellow', height: 80 + 'px' }" />
      <Col :span="50" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
      <Col :span="15" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
    </Row>
    <Row justify="end">
      <Col :span="50" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
      <Col
        :span="50"
        :offset="10"
        :style="{ backgroundColor: 'green', height: 50 + 'px' }"
      />
      <Col :span="50" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
      <Col :span="50" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
    </Row>
    <Row alignItems="center" justify="center">
      <Col :span="30" :style="{ backgroundColor: 'blue', height: 120 + 'px' }" />
      <Col :span="30" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
    </Row>
    <Row :gap="20" justify="space-between" alignItems="center">
      <Col :span="25" :style="{ backgroundColor: 'black', height: 100 + 'px' }" />
      <Col :span="25" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
      <Col :span="25" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
      <Col :span="25" :style="{ backgroundColor: 'red', height: 50 + 'px' }" />
    </Row>
  </div>
</template>

<script lang="ts" setup>
import Col from '@/lib/grid/Col.vue'
import Row from '@/lib/grid/row.vue'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
</style>
