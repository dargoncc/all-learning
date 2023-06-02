# vue2 和 vue3 区别

1. 生命周期
2. 数据更新
## 生命周期

### vue2 生命周期 与 vue3 生命周期对比
vue2
- beforeCreate
- Created
- beforeMount
- Mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

vue3
- setup
- onBeforeMount
- onMounted
- onBeforeUpdate
- onUpdated
- onBeforeUnmount
- onUnmounted
- onErrorCaptured ： 子组件抛出错误未处理时调用
- onRenderTracked ： 当渲染跟踪或依赖项跟踪时被调用
- onRenderTriggered ： 当渲染时触发其他渲染时，或者当在当前渲染中延迟调度的作业时被调用。

## 数据更新

### vue2 数据更新
数据更新方式: 使用  Object.defineProperty 来监听数据，但该方法有缺陷，不能监听新增的属性和数组的变化



### vue3 数据更新
数据更新方式: 使用 proxy 来监听数据
- proxy 可以监听对象而非属性
- proxy 可以直接监听数组变化
- Proxy 有多达 13 种拦截⽅法,不限于 apply、ownKey、deleteProperty、has 等等。是Object.defineProperty 不具备的；
- Proxy 返回的是⼀个新对象,我们可以只操作新的对象达到⽬的,⽽Object.defineProperty 只能遍历对象属性直接修改；
- Proxy 作为新标准将受到浏览器⼚商重点持续的性能优化，也就是传说中的新标准的 性能红利
