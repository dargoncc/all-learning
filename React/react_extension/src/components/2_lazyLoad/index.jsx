import React, { Component,lazy, Suspense } from 'react'
import { NavLink,Route  } from 'react-router-dom'

import Loading from './Loading/index.jsx';
const Home = lazy(() => import('./Home/index.jsx'));
const About = lazy(() => import('./About/index.jsx'));

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>我是Demo组件</h1>
        {/* 导航 */}
        <NavLink  to="/about">About</NavLink>
        <NavLink  to="/home">Home</NavLink>
        <hr />
        <h1>组件内容</h1>
        <Suspense fallback={Loading}>
          {/* 注册路由 */}
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>

        </Suspense>
        
      </div>
    )
  }
}
