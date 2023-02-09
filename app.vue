<script setup lang="ts">
const store = useStore()
</script>

<template>
  <div>
    <input v-model="store.lorem" />
  </div>
</template>
