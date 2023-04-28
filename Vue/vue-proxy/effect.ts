let activeEffect: any
export const effect = (fn:Function) => {
  // 通过闭包 收集全局 activeEffect
  const _effect = function() {
    activeEffect = _effect
    fn() // 执行副作用函数
  }
  _effect() // 首次默认调用
}

//注意：entries?: [object, any][] | null): WeakMap<object, any>，也就是说weakMap只接收对象类型的key
const targetMap = new WeakMap()
export const track = (target : any, key : any) => {
  // 定义好第一层的map
  let depsMap = targetMap.get(target) // 定义好第一层的map
  if (!depsMap) { // 第一次取不到值 初始化 new Map()
    depsMap = new Map()
    targetMap.set(target, depsMap) // 对应流程图的第一阶段，将new Map()设置到第一层的 depsMap 中
  }
  // 定义好第二层
  let dep = depsMap.get(key) // 获取第二层的 set的值
  if (!dep) { // 第一次取不到值 初始化 new Set()
    dep = new Set()
    depsMap.set(key, dep) // 通过第一层的key，设置第二层的值
  }
  dep.add(activeEffect)
}

export const trigger = (target: any, key: any) => {
  const depsMap = targetMap.get(target) // 通过 target 获取第一层的 depsMap
  if (!depsMap) return
  const dep = depsMap.get(key) // 通过 key 获取第二层的 dep
  if (dep) {
    // 取到依赖后进行一个更新（遍历数组）调用上面定义好的 effect（副作用） 函数
    dep.forEach((effect: any) => effect())
  } else return '没有取到值'
}