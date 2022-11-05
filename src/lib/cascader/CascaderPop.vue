<script setup lang="ts">
import { withDefaults, defineProps, ref, inject, Ref } from 'vue'
import { CascaderOptions } from '@/lib/cascader/Cascader.vue'

withDefaults(defineProps<{ options: CascaderOptions[]; visibility: boolean }>(), {
  options: () => [
    {
      value: 'Label',
      label: 'label',
      children: null
    }
  ],
  visibility: false
})
const popVisibility = inject<Ref<boolean>>('popVisibility')
const shouldShow = ref<boolean>(false)
const toggle = (item: CascaderOptions) => {
  shouldShow.value = true
  if (!item.children && popVisibility) {
    popVisibility.value = false
  }
}
</script>

<template>
  <keep-alive>
    <div class="ui-cascader-pop" ref="popRef" v-if="visibility">
      <div v-for="item in options" :key="item.label" class="cascader-list-item">
        <div class="cascader-label" @click="toggle(item)">
          <span>{{ item.label }}</span>
        </div>
        <div class="cascader-loop" v-if="item.children">
          <CascaderPop :options="item.children" :visibility="shouldShow" />
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;

.ui-cascader-pop {
  .cascader-list-item {
    font-size: 14px;
    line-height: 2em;
    .cascader-label {
      padding: 0 10px;
      cursor: pointer;
    }
    .cascader-loop {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
      min-height: 120px;
    }
  }
}
</style>
