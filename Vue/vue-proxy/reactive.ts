import { track, trigger } from './effect'

// 递归实现
const isObject = (val: any) => val !== null && typeof val === 'object'
export const reactive = <T extends object>(target:T) => {
  return new Proxy(target, {
    get(target, key, receiver) {
      // return target[key] // 会导致上下文错乱
      const res = Reflect.get(target, key, receiver)
      track(target, key)
      if (isObject(res)) { // 递归劫持
        return reactive(res)
      }
      return res
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver)
      trigger(target, key)
      return res
    }
  })
}