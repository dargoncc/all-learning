# nextTick

在下次 DOM 更新循环结束后执行延迟回调。在修改数据后立即使用这个方法，获取更新后的 DOM

## 使用

**vue2**： 在 this 中调用，回调函数中使用

```
methods: {
  fn() {
    this.$nextTick(() => {
      // do something
    })
  }
}
```

**vue3**： 可以函数调用也可异步调用

```
// 函数调用
<script setup>
import {nextTick} form 'vue'
nextTick(() => {
  // do something
})
</script>
```

```
// 异步调用
<script setup>
import {nextTick} form 'vue'
const fn = async () => {
  await nextTick()
  console.log('NOW DOM is updated')
}
</script>
```

## 原理
// todo