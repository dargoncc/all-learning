<script setup lang="ts">
import { ref, reactive } from 'vue'
const count = ref(0)
const arr = reactive([1, 2, 3])
</script>

<template>
  <h1>setup</h1>
  <h1>{{ count }}</h1>
  <ul>
    <li v-for="item in arr">{{ item }}</li>
  </ul>
</template>

<style scoped>
</style>
