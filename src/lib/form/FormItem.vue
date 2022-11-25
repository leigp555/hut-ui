<script setup lang="ts">
import { withDefaults, defineProps, useSlots, toRefs, ref } from 'vue'
import Col from '../grid/Col.vue'
import Row from '../grid/row.vue'
import { User } from '@/lib/form/Form.vue'

type Rule = {
  pattern: RegExp
  message: string
}
const slots = useSlots().default!()

const props = withDefaults(
  defineProps<{
    label?: string
    name?: string
    rules?: Rule[]
    layout?: 'horizontal' | 'vertical' | 'inline'
    labelCol?: { span?: number; offset?: number }
    wrapperCol?: { span?: number; offset?: number }
    data?: { username: string; password: string }
  }>(),
  {
    label: '',
    name: '',
    rules: () => []
  }
)
const { name, data, rules } = toRefs(props)
const errorExit = ref<boolean>(false)
const errorMessage = ref<string>('')

const validate = (options: { pattern: RegExp; message: string }, value: string) => {
  return new Promise((resolve, reject) => {
    if (options.pattern.test(value)) {
      resolve(true)
    } else {
      reject(options.message)
    }
  })
}

const changeValue = (value: string) => {
  const validateArr = rules.value.map((item: Rule) => {
    return validate(item, value)
  })
  Promise.all(validateArr)
    .then(() => {
      errorExit.value = false
    })
    .catch((err: string) => {
      errorExit.value = true
      errorMessage.value = err
    })
}
</script>

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
            <Component :is="slots[0]" @update:value="changeValue" />
          </div>
          <div class="formItem-content-error-wrap">
            <transition name="error-action">
              <div class="formItem-content-error" v-show="errorExit">
                {{ errorMessage }}
              </div>
            </transition>
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
              <Component :is="slots[0]" @update:value="changeValue" />
            </div>
            <div class="formItem-content-error-wrap" v-if="name">
              <transition name="error-action">
                <div class="formItem-content-error" v-show="errorExit">
                  {{ errorMessage }}
                </div>
              </transition>
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  </div>
</template>

<style lang="scss">
$error_color: #ff4d4f;
.ui-formItem-wrap {
  .ui-formItem-label {
  }
  .ui-formItem-content {
    flex-grow: 10;
    margin-left: 10px;
    position: relative;
    > .formItem-content-error-wrap {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: translateY(100%);
      z-index: -1;
      > .formItem-content-error {
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
}
.error-action-enter-from,
.error-action-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.error-action-enter-active,
.error-action-leave-active {
  transition: all 250ms;
}
</style>
