<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  useSlots,
  toRefs,
  ref,
  provide,
  Ref,
  inject
} from 'vue'
import Col from '../grid/Col.vue'
import Row from '../grid/row.vue'
import { ErrorType, User } from '@/lib/form/Form.vue'

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
    layout?: 'horizontal' | 'vertical'
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

const errorArr = inject<Ref<ErrorType[]>>('ui_form_errorArr')
const changeErrorArr = inject<(newErrorArr: ErrorType[]) => void>(
  'ui_form_changeErrorArr'
)

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
      const index = errorArr?.value.findIndex(
        (item) => item.name === name.value
      ) as number
      if (index >= 0 && errorArr?.value && changeErrorArr) {
        changeErrorArr([
          ...errorArr.value.slice(0, index),
          ...errorArr.value.slice(index + 1)
        ])
      }
    })
    .catch((err: string) => {
      errorExit.value = true
      errorMessage.value = err
      const index = errorArr?.value.findIndex(
        (item) => item.name === name.value
      ) as number
      if (index < 0 && errorArr?.value && changeErrorArr) {
        changeErrorArr([...errorArr.value, { name: name.value, reason: [err] }])
      }
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
        class="formItem-content-wrap"
        :class="{ 'formItem-content-vertical-wrap': layout === 'vertical' }"
      >
        <Col
          :span="labelCol.span"
          :offset="labelCol.offset"
          class="formItem-content-label-wrap"
          :class="{ 'formItem-content-label-vertical-wrap': layout === 'vertical' }"
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
      <Col
        :span="wrapperCol.span"
        v-else
        class="formItem-content-wrap"
        :class="{ 'formItem-content-vertical-wrap': layout === 'vertical' }"
      >
        <Col
          :offset="wrapperCol.offset"
          :span="100"
          class="formItem-content-No-label-wrap"
          :class="{ 'formItem-content-No-label-vertical-wrap': layout === 'vertical' }"
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
  .formItem-content-wrap {
    &.formItem-content-vertical-wrap {
      flex-direction: column;
    }
    > .formItem-content-label-wrap {
      justify-content: end;
      align-items: center;
      min-height: 32px;
      &.formItem-content-label-vertical-wrap {
        justify-content: start;
        margin-left: 10px !important;
        margin-bottom: 8px;
        min-height: 1.5em;
      }
    }
    > .formItem-content-No-label-wrap {
      align-items: center;
      min-height: 32px;
    }
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
