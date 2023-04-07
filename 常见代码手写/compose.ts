// 实现一个 compose 函数
const add1 = (num: number) : number => num + 1
const mul5 = (num: number) : number => num * 5
const sub8 = (num: number) : number => num - 8

const compose = (...fns: Function[]) : Function => {
  return (num: number) : number => {
    return fns.reduceRight((acc, fn) => fn(acc), num)
  }
}

console.log(compose(add1, mul5, sub8)(1)); // -34
