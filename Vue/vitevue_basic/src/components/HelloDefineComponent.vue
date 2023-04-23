<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(0)
    const arr = reactive([1, 2, 3])
    return {
      count,
      arr
    }
  }
})
</script>

<template>
  <h1>defineComponent</h1>
  <h1>{{ count }}</h1>
  <ul>
    <li v-for="item in arr">{{ item }}</li>
  </ul>
</template>

<style scoped>
</style>
