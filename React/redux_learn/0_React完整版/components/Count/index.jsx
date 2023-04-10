import React from 'react'

export default function Count() {
  const [count, setCount] = React.useState(0)
  const selectNumber = React.useRef()
  function increment() {
    const number = selectNumber.current.value * 1
    setCount(count + number)
  }
  function decrement() {
    const number = selectNumber.current.value * 1
    setCount(count - number)
  }
  function incrementIfOdd() {
    const number = selectNumber.current.value * 1
    if (count % 2 === 1) {
      setCount(count + number)
    }
  }
  function incrementAsync() {
    const number = selectNumber.current.value * 1
    setTimeout(() => {
      setCount(count + number)
    }, 1000)
  }
  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <select ref={selectNumber}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>&nbsp;
      <button onClick={increment}>+</button>&nbsp;
      <button onClick={decrement}>-</button>&nbsp;
      <button onClick={incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
      <button onClick={incrementAsync}>异步加</button>&nbsp;
    </div>
  )
}
