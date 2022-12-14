<script setup lang="ts">
import { withDefaults, defineProps, computed, ref, toRefs } from 'vue'

import { Icon_back } from '@hut-ui/icons-vue'
import Button from '../button/Button.vue'
import CheckboxGroup from '../checkbox/CheckboxGroup.vue'
import Checkbox from '../checkbox/Checkbox.vue'
import { TransferOptions } from './type'

const emits = defineEmits(['change', 'update:source', 'update:selected'])
const props = withDefaults(
  defineProps<{
    source?: TransferOptions[]
    selected?: TransferOptions[]
    titles?: string[]
  }>(),
  {
    source: () => [],
    selected: () => [],
    titles: () => []
  }
)
const { source, selected, titles } = toRefs(props)
const checkedSource = ref<boolean>(false)
const checkedSelect = ref<boolean>(false)
// source数据
const value2 = ref<TransferOptions[]>([])
const title2 = computed(() => {
  return `${value2.value.length} / ${props.source.length} 项 ${props.titles[0]}`
})
// target数据
const value3 = ref<TransferOptions[]>([])
const title3 = computed(() => {
  return `${value3.value.length} / ${props.selected.length} 项 ${props.titles[1]}`
})

const onCheckedSource = (checked: boolean) => {
  if (checked) {
    source.value.forEach((item) => {
      item.checked = true
    })
    value2.value = source.value
  } else {
    value2.value = []
    source.value.forEach((item) => {
      item.checked = false
    })
  }
}
const onCheckedSelect = (checked: boolean) => {
  if (checked) {
    selected.value.forEach((item) => {
      item.checked = true
    })
    value3.value = selected.value
  } else {
    selected.value.forEach((item) => {
      item.checked = false
    })
    value3.value = []
  }
}
const toSelect = () => {
  value2.value.forEach((item) => {
    item.checked = false
  })
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
  value3.value.forEach((item) => {
    item.checked = false
  })
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
        <Checkbox v-model:checked="checkedSource" @change="onCheckedSource">{{
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
            <Icon_back
              name="back"
              width="1em"
              height="1em"
              :style="{ transform: 'rotate(180deg)' }"
            />
          </template>
        </Button>
        <Button type="default" @click="toSource">
          <template #icon>
            <Icon_back name="back" width="1em" height="1em" />
          </template>
        </Button>
      </div>
    </section>
    <section class="ui-transfer-source">
      <div class="transfer-source-title">
        <Checkbox v-model:checked="checkedSelect" @change="onCheckedSelect">{{
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
