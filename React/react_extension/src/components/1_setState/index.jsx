import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };
  add= () => {
    // 对象式的setState
    // const { count } = this.state;
    // this.setState({ count: count + 1 }, () => {
    //   console.log('我是add方法中setState回调函数的count',this.state.count); // 第二个参数是回调函数，可以在回调函数中拿到更新后的值
    // });
    // console.log('我是add方法中setState的count',this.state.count); // 0

    // 函数式的setState
    this.setState((state, props) => {
      console.log(state, props);
      return { count: state.count + 1 };
    })
  }
  render() {
    return (
      <div>
        <h1>当前求和为 {this.state.count}</h1>
        <button onClick={this.add}>点我加1</button>
      </div>
    );
  }
}
