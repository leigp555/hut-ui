<template>
  <div>doubleCount</div>
  <div>{{ xx }}</div>
  <hr />
  <div>{{ name }}</div>
  <div>{{ doubleCount }}</div>
  <hr />
  <router-view />
  <hr />
  <div>{{ env }}</div>
  <div>{{ content }}</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store'

const env = import.meta.env.VITE_BASE_URL
const content = ref<string>('')

const store = useCounterStore()
// 获取state 方法一
const xx = computed(() => store.doubleCount)
// 获取state 结构state 方法二
const { name, doubleCount } = storeToRefs(store)

// //修改state数据 方法一
// store.counter++
// //修改多个数据 方法二
// store.$patch({
//   name:"xxx",
//   doubleCount+=1
// })
// //修改多个数据 方法三
// store.$patch(state=>{
//   state.name='xxx'
//   state.doubleCount+=1
//   state.arr.push(2)
// })
// //修改多个数据 方法四
// //将操作封装到一个函数里面然后调用即可
// store.changeState()
// //您可以通过调用store 上的方法将状态重置为其初始值：$reset()
// store.$reset()
</script>
