const pipe = (...fns: Function[]) => {
  return (num: number) => {
    return fns.reduce((acc, fn) => fn(acc), num)
  }
}