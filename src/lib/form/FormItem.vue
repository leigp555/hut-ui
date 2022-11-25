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
          <div>
            <Component :is="slots[0]" />
          </div>
          <div class="formItem-content-error">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
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
            <div>
              <Component :is="slots[0]" />
            </div>
            <div class="formItem-content-error" v-if="name">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots, toRefs } from 'vue'
import Col from '../grid/Col.vue'
import Row from '../grid/row.vue'
import { User } from '@/lib/form/Form.vue'

type Rule = {
  required: boolean
  message: string
}
const slots = useSlots().default!()

const props = withDefaults(
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
const { name } = toRefs(props)
</script>

<style lang="scss">
$error_color: #ff4d4f;
.ui-formItem-wrap {
  .ui-formItem-label {
  }
  .ui-formItem-content {
    flex-grow: 10;
    margin-left: 10px;
    position: relative;
    > .formItem-content-error {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: translateY(100%);
      color: $error_color;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      height: 1.5em;
      line-height: 1.5em;
      text-align: left;
      user-select: none;
    }
  }
}
</style>
