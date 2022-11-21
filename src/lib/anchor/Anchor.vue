<template>
  <div class="ui-anchor-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, Ref, ref } from 'vue'

const selectArr = ref<string[]>([])
const changeSelect = ({ type, id }) => {
  if (type === 'add') {
    selectArr.value.push(id)
    console.log(selectArr.value)
  } else if (type === 'sub') {
    // selectArr.value[0].classList.remove('active')
    selectArr.value.shift()
  }
}
provide<Ref<string[]>>('ui-anchor_selectArr', selectArr)
// eslint-disable-next-line no-unused-vars
provide<(option: { type: 'add' | 'sub'; id: string }) => void>(
  'change_ui_anchor_selectArr',
  changeSelect
)
</script>

<style lang="scss">
.ui-anchor-wrap {
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  top: 100px;
  left: 50px;
}
</style>
