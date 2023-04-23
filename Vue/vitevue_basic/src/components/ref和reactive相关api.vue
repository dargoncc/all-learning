<template>
  <div>
    <h1>a: {{ a }}</h1>
    <h2>b: {{b}}</h2>
    <h2>c: {{c}}</h2>
    <h2>d: {{ d.a }}</h2>
    <hr>
    <h2>shallowReactive</h2>
    <h2>第一层{{ EShallowReactive.e }}</h2>
    <h2>第二层{{ EShallowReactive.e.f }}</h2>
    <button @click="change1">改变第一层</button>
    <button @click="change2">改变第二层</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRef, toRefs, isRef, isReactive, shallowRef, shallowReactive } from 'vue';
const a = ref('a');
const b = reactive({ a: a, b: 'b' });

const c = toRef(b, 'b');
console.log('c', c.value);
const d = toRefs(b);
console.log('d', d);

const AIsRef = isRef(a);
console.log('AIsRef', AIsRef);

// isRef
const BIsRef = isRef(b);
console.log('BIsRef', BIsRef);
const CIsRef = isRef(c);
console.log('CIsRef', CIsRef);
const DIsRef = isRef(d);
console.log('DIsRef', DIsRef);

// isReactive
const AIsReactive = isReactive(a);
console.log('AIsReactive', AIsReactive);

const BIsReactive = isReactive(b);
console.log('BIsReactive', BIsReactive);

// shallowReactive
const EShallowReactive = shallowReactive({
  e: {
    f: 'f'
  }
});

console.log('EShallowRef', EShallowReactive);

const change1 = () => {
  EShallowReactive.e = {
    f: '改变第一层'
  }
  console.log('EShallowRef', EShallowReactive);
};
const change2 = () => {
  EShallowReactive.e.f = '改变第二层';
  console.log('EShallowRef', EShallowReactive);
};
</script>

<style scoped>

</style>