
# isRef 和 isReactive
`isRef` 判断数据是否是用 `ref` 创建的或者用 `toRefs` `toRef` 转化的数据
`isReactive` 判断数据是否是用 `isReactive` 创建的

# shallowReactive 和 shallowRef
只改变对象的第一层数据会触发视图的更新，但console打印的值是最终的值