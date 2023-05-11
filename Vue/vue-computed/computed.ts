import {effect} from './effect';

export const computed = (getter:Function) => {
  let _value = effect(getter, {})
  let catchValue
  let _dirty = true
  class ComputedRefImpl {
    get value() {
      if (_dirty) {
        catchValue = _value()
        _dirty = false
      }
      return catchValue
    }
  }
  return new ComputedRefImpl()
}