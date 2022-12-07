import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('componentLoadStatus', {
  state: () => ({
    loadStatus: false as boolean
  }),
  getters: {
    getStatus: (state) => state.loadStatus
  },
  actions: {
    enterLoading() {
      this.loadStatus = true
    },
    finishLoad() {
      this.loadStatus = false
    }
  }
})
