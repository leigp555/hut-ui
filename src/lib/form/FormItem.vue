<template>
  <div class="ui-formItem-wrap">
    <Row alignItems="center" justify="center" style="gap: 10px">
      <Col
        :span="labelCol.span"
        :offset="labelCol.offset"
        style="
          flex-shrink: 0;
          justify-content: end;
          min-height: 32px;
          align-items: center;
        "
      >
        <div class="ui-formItem-label">
          {{ label }}
        </div>
      </Col>
      <Col
        :span="wrapperCol.span"
        :offset="wrapperCol.offset"
        style="flex-shrink: 10; min-height: 32px"
      >
        <div class="ui-formItem-content">
          <slot />
        </div>
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import Col from '../grid/Col.vue'
import Row from '../grid/row.vue'

type Rule = {
  required: boolean
  message: string
}

withDefaults(
  defineProps<{
    label?: string
    name?: string
    rule?: Rule[]
    layout?: 'horizontal' | 'vertical' | 'inline'
    labelCol?: { span?: number; offset?: number }
    wrapperCol?: { span?: number; offset?: number }
  }>(),
  {
    label: '',
    name: '',
    rule: () => []
  }
)
</script>

<style lang="scss">
.ui-formItem-wrap {
  flex-grow: 10;
  .ui-formItem-label {
  }
  .ui-formItem-content {
    flex-grow: 10;
    //border: 1px solid red;
  }
}
</style>
