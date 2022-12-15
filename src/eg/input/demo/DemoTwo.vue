<demo>
支持input前后添加icon
</demo>

<template>
  <Input v-model:value="value" placeholder="Basic usage">
    <template #prefix>
      <Icon_user name="user" width="1em" height="1em" />
    </template>
    <template #suffix>
      <Icon_cha name="cha" width="1em" height="1em" @click="clear" />
    </template>
  </Input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon_user, Icon_cha } from '@hut-ui/icons-vue'
import { Input } from '@/lib'

const value = ref<string>('')

const clear = () => {
  value.value = ''
}
</script>
