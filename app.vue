<script setup lang="ts">
import { useStore } from './stores/store';
const store = useStore()
</script>

<template>
  <div>
    <input v-model="store.lorem" />
  </div>
</template>
