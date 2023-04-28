# vue3 改变了什么
## 更快

## 更小

## 组合式API 和 选项式
### 组合式API
1. 自由灵活，方便逻辑的整合和复用
2. 方便按需引入

### 选项式
1. 规则性强，好理解

## 组件的写法更友好的支持TSX、JSX 和 vue单文件
JSX中使用单括号 {} 解析， 循环等需要用map等数组方法
```
<h1>{a}</h1>
{
  arr.map((item) => (<span>item</span>))
}
</h2>  
```
vue单文件
```
<h1>{{a}}</h1>
<h2 v-for="item in arr">{{item}}</h2>
```
### jsx/ tsx
1. 具有特异性的复杂操作能够更高的自定义
2. 适用负责组件
3. 不用模板，js逻辑处理

### script + template
1. 方便简单，能轻松完成大多需求
2. 模板接近于传统的html，更加便于理解和编写

注意：使用`jsx`需要安装依赖 `@vitejs/plugin-vue-jsx` 并在`vite.config.ts` `plugins` 中引用并使用

## 组合式API
三种写法
```
// 直接写 --- 最常用
<script setup>
// 处理逻辑
</script>  

// defineComponent  --- 便于ts类型验证
<script >
defineComponent({
  setup() {
    // 处理逻辑
  }
})
// 向下兼容 --- 一般不适用
export default {
  setup() {
    // 处理逻辑
  }
}
</script>  
```
## 创建方式
`vue3.0 + webpack`  可以选择创建方式
``` bash
Vue Create <ProjectName /> 
```

`vue3.0 + vite`  可以选择创建方式
``` bash
npm create vite@latest <ProjectName /> -- --template vue
```


### ref 和 reactive 对比
1. `ref` 支持所有类型；  `reactive` 仅支持引用类型 `Array` `Object` `Map` `Set`
2. `ref` 取值赋值都需要加.value ；    `reactive` 不需要
3. `reactive` `proxy` 不能直接赋值，否则会破坏响应式结构 
  --- 解决方案：
    数组可以使用push 加解构 
    添加一个对象，把数组当做一个属性去解决

```
const list = reactive<string[]>(list)
const res = ['RNG', 'LDG']
list = res // 错误
list.push(...res) //采用

const list = reactive<{arr: string[]}>({
  arr: []
})
```

### toRef， toRefs
toRef 只能修改响应式数据  非响应式视图毫无变化
```
const object = {name: '123', age: 18, like: 'JKlove'}
const list = toRef(object, 'like')
```
应用场景，函数中传入reactive 对象，不能直接改变，需要使用 toRef 来进行解构
```
// 应用场景:
const data = reactive({name: '123', age: 18,})
const useDemo = (toRef(data, name)) => {
  name.value = 'zhangsan'
}
```

手写简单的 `toRefs`
```
const toRefs = <T extends object>(object : T) => {
  const map:any = {}
  for(let key in object) {
    map[key] = toRef(Object, k)
  }
  return map
}
```

