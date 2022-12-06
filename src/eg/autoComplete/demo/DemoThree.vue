<demo>
更复杂的渲染
</demo>

<template>
  <div class="wrap">
    <AutoComplete
      v-model:value="value"
      :options="dataSource"
      style="width: 200px"
      placeholder="input here"
      custom
    >
      <template #option="item">
        <div style="color: orange; margin-bottom: 10px">
          <span style="font-size: 12px; padding: 4px 11px">{{ item.value.label }}</span>
          <div
            v-for="s in item.value.options"
            :key="s"
            class="item"
            @mousedown="value = s.value"
          >
            <span>{{ s.value }}</span>
            <div class="count">
              <span>
                <SvgIcon name="user" width="12px" height="12px" fill="orange" />
              </span>
              <span>{{ s.count }}</span>
            </div>
          </div>
        </div>
      </template>
    </AutoComplete>
    <Button @click="onSubmit">
      <template #icon>
        <SvgIcon name="search"></SvgIcon>
      </template>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete, SvgIcon, Button } from '@/lib'

interface MockVal {
  value: string
}
const value = ref('')
const options = ref<MockVal[]>([])
const onSelect = (text: string) => {
  console.log('onSelect', text)
}
const onSubmit = () => {
  console.log(value.value)
}
const dataSource = [
  {
    value: {
      label: 'Libraries',
      options: [
        {
          value: 'CustomDesignVue',
          count: 10000
        },
        {
          value: 'CustomDesignVue UI',
          count: 10600
        }
      ]
    }
  },
  {
    value: {
      label: 'Solutions',
      options: [
        {
          value: 'CustomDesignVue FQA',
          count: 546456
        },
        {
          value: 'CustomDesignVue UI FQA',
          count: 534534
        }
      ]
    }
  },
  {
    value: {
      label: 'Articles',
      options: [
        {
          value: 'CustomDesignVue Fly',
          count: 878787
        }
      ]
    }
  }
]
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: stretch;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    padding: 4px 11px;
    line-height: 1.5em;
    &:hover {
      background: #1890ff;
      cursor: pointer;
    }
    > .count {
      display: flex;
      align-items: center;
      gap: 5px;
      text-align: center;
      span {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
