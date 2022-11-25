<template>
  <div class="ui-formItem-wrap">
    <Row alignItems="center" justify="center">
      <!--      有input输入框的-->
      <Col
        v-if="$slots.label"
        :span="wrapperCol.span"
        :offset="wrapperCol.offset"
        style="min-height: 32px"
      >
        <Col
          :span="labelCol.span"
          :offset="labelCol.offset"
          style="justify-content: end; min-height: 32px; align-items: center"
        >
          <div class="ui-formItem-label">
            <slot name="label" />
          </div>
        </Col>
        <div class="ui-formItem-content">
          <Component :is="slots[0]" />
        </div>
      </Col>
      <!--      没input输入框的-->
      <Col :span="wrapperCol.span" v-else>
        <Col
          :offset="wrapperCol.offset"
          :span="100"
          style="min-height: 32px; align-items: center"
        >
          <div class="ui-formItem-content">
            <Component :is="slots[0]" />
          </div>
        </Col>
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots } from 'vue'
import Col from '../grid/Col.vue'
import Row from '../grid/row.vue'

type Rule = {
  required: boolean
  message: string
}
const slots = useSlots().default!()

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
  .ui-formItem-label {
    //border: 1px solid red;
  }
  .ui-formItem-content {
    flex-grow: 10;
    margin-left: 10px;
  }
}
</style>
