import { defineStore } from 'pinia'

export const useStore = defineStore('mockk', ({
  state: () => ({
    lorem: 'ipsum'
  }),
  persist: true
}))
