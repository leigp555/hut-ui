<script setup lang="ts">
import { withDefaults, defineProps, computed, ref } from 'vue'
import SvgIcon from '../common/SvgIcon.vue'
import Button from '../button/Button.vue'
import CheckboxGroup from '../checkbox/CheckboxGroup.vue'
import Checkbox from '../checkbox/Checkbox.vue'

export interface MockData {
  label: string
  value: string
  description: string
}

const emits = defineEmits(['change', 'update:source', 'update:selected'])
const props = withDefaults(
  defineProps<{
    source?: MockData[]
    selected?: MockData[]
    titles?: string[]
  }>(),
  {
    source: () => [],
    selected: () => []
  }
)

const checkedSource = ref<boolean>(false)
const checkedSelect = ref<boolean>(false)
// source数据
const value2 = ref<string[]>([])
const title2 = computed(() => {
  return `${value2.value.length} / ${props.source.length} 项 ${props.titles[0]}`
})
// target数据
const value3 = ref<string[]>([])
const title3 = computed(() => {
  return `${value3.value.length} / ${props.selected.length} 项 ${props.titles[1]}`
})

const onCheckedSource = () => {
  checkedSource.value = !checkedSource.value
  if (checkedSource.value) {
    value2.value = props.source
  } else {
    value2.value = []
  }
}
const onCheckedSelect = () => {
  checkedSelect.value = !checkedSelect.value
  if (checkedSelect.value) {
    value3.value = props.selected
  } else {
    value3.value = []
  }
}
const toSelect = () => {
  const newSelectArr = [...value2.value, ...props.selected]
  emits('update:selected', newSelectArr)
  const newSourceArr = [...props.source]
  for (let i = 0; i < newSourceArr.length; i++) {
    for (let j = 0; j < value2.value.length; j++) {
      if (newSourceArr[i].value === value2.value[j].value) {
        newSourceArr.splice(i, 1)
        // eslint-disable-next-line no-unused-expressions
        i > 1 ? (i -= 1) : (i = -1)
        break
      }
    }
  }
  emits('update:source', newSourceArr)
  emits('change', newSourceArr, newSelectArr)
  value2.value = []
  if (checkedSource.value) checkedSource.value = false
}
const toSource = () => {
  const newSourceArr = [...value3.value, ...props.source]
  emits('update:source', newSourceArr)
  const newSelectArr = [...props.selected]
  for (let i = 0; i < newSelectArr.length; i++) {
    for (let j = 0; j < value3.value.length; j++) {
      if (newSelectArr[i].value === value3.value[j].value) {
        newSelectArr.splice(i, 1)
        // eslint-disable-next-line no-unused-expressions
        i > 1 ? (i -= 1) : (i = -1)
        break
      }
    }
  }
  emits('update:selected', newSelectArr)
  emits('change', newSourceArr, newSelectArr)
  value3.value = []
  if (checkedSelect.value) checkedSelect.value = false
}
</script>

<template>
  <div class="ui-transfer-wrap">
    <section class="ui-transfer-source">
      <div class="transfer-source-title">
        <Checkbox :checked="checkedSource" @update:checked="onCheckedSource">{{
          title2
        }}</Checkbox>
      </div>
      <div class="transfer-source-content">
        <CheckboxGroup v-model:value="value2" :options="source" direction="column" />
      </div>
    </section>
    <section class="transfer-action-wrap">
      <div class="transfer-actions">
        <Button @click="toSelect">
          <template #icon>
            <SvgIcon
              name="back"
              width="1em"
              height="1em"
              :style="{ transform: 'rotate(180deg)' }"
            />
          </template>
        </Button>
        <Button type="default" @click="toSource">
          <template #icon>
            <SvgIcon name="back" width="1em" height="1em" />
          </template>
        </Button>
      </div>
    </section>
    <section class="ui-transfer-source">
      <div class="transfer-source-title">
        <Checkbox :checked="checkedSelect" @update:checked="onCheckedSelect">{{
          title3
        }}</Checkbox>
      </div>
      <div class="transfer-source-content">
        <CheckboxGroup v-model:value="value3" :options="selected" direction="column" />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;

.ui-transfer-wrap {
  display: inline-flex;
  gap: 10px;
  > .ui-transfer-source {
    width: 200px;
    border-radius: 2px;
    border: 1px solid darken($selected_color, 20);
    .transfer-source-title {
      border-bottom: 1px solid darken($selected_color, 20);
      padding: 4px 10px;
    }
    .transfer-source-content {
      height: 15em;
      padding: 4px 10px;
      overflow-y: scroll;
    }
  }
  > .transfer-action-wrap {
    display: flex;
    align-items: center;
    > .transfer-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
