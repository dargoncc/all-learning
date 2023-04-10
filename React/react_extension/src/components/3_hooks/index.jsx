import React, { Component } from 'react'
import ReactDOM  from 'react-dom'

// class Demo extends Component {
//   state = {
//     count: 0
//   }
//   myRef = React.createRef()
//   add = () => {
//     this.setState(state => ({count: state.count + 1}))
//   }
//   unMount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   show = () => {
//     alert(this.myRef.current.value)
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState(state => ({count: state.count + 1}))
//     }, 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//   render() {
//     return (
//       <div>
// 				<input type="text" ref={this.myRef}/>
// 				<h2>当前求和为{this.state.count}</h2>
// 				<button onClick={this.add}>点我+1</button>
// 				<button onClick={this.unMount}>卸载组件</button>
// 				<button onClick={this.show}>点击提示数据</button>
// 			</div>
//     )
//   }
// }
function Demo() {
  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  function add() {
    // setCount(count + 1)
    setCount(count => count + 1)
  }
  function show() {
    alert(myRef.current.value)
  }
  function unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div>
      <input type="text" ref={myRef}/>
      <h2>当前求和为{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unMount}>卸载组件</button>
      <button onClick={show}>点击提示数据</button>
    </div>
  )
}

export default Demo
