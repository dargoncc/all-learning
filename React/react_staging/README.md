## 脚手架文件
    1.reportWebVitals -- 性能检查
    2.setupTests -- 框架测试
    3.manifest -- 加壳配置
    
## 一、todoList案例相关知识点
	1.拆分组件、实现静态组件，注意：className、style的写法
	2.动态初始化列表，如何确定将数据放在哪个组件的state中？
				——某个组件使用：放在其自身的state中
				——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
	3.关于父子之间通信：
			1.【父组件】给【子组件】传递数据：通过props传递
			2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
	4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
	5.状态在哪里，操作状态的方法就在哪里

##  二、react-router-dom 
### 路由的基本使用
1. 使用 <Link to="/xxx">Demo</Link> <Route path='/xxxx' component={Demo}/>
2. <App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

### 路由组件和一般组件
1. 写法不同
	一般组件 <Demo />
	路由组件 <Route path='/demo' component={Demo}>
2. 存放位置不同
	一般组件  components
	路由组件  pages/routers
3. 接收到的props
	一般组件 写组件时传递什么就能接收到什么
	路由组件 接收到三个固定的属性
		history:
			go: ƒ go(n)
			goBack: ƒ goBack()
			goForward: ƒ goForward()
			push: ƒ push(path, state)
			replace: ƒ replace(path, state)
		location:
			pathname: "/about"
			search: ""
			state: undefined
		match:
			params: {}
			path: "/about"
			url: "/about"

### NavLink 和 NavLink 的封装
```React
<NavLink activeClassName="dragon-active" to="/about">About</NavLink>

<!--封装 NavLink-->
render() {
	return <NavLink activeClassName="dragon-active" {...this.props} />
}

```
1. NavLink 可以实现路由链接的高亮，并可以通过 `activeClassName` 指定样式名
2. NavLink 封装可以 通过 `props.children` 获取标签体内容 About


### Switch 的使用
```
<MyNavLink to="/about">About</MyNavLink>
<MyNavLink to="/home">Home</MyNavLink>

<!--匹配后就不进行往下匹配-->
<Switch>
	<Route path="/about" component={About}/>
	<Route path="/home" component={Home}/>
	<Route path="/home" component={Test}/>
</Switch>

```
1. 通常情况下，path和component是一一对应的关系。
2. `Switch` 可以提高路由匹配效率

### 解决多级路径刷新页面样式丢失的问题
1. public/index.html 中 引入样式时不写 ./ 写 / （常用）
2. public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
3. 使用HashRouter

### 路由的严格匹配与模糊匹配
1. 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
2. 开启严格匹配：<Route exact={true} path="/about" component={About}/>
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

### Redirect的使用
1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
2. 具体编码：
```
<Switch>
	<Route path="/about" component={About}/>
	<Route path="/home" component={Home}/>
	<Redirect to="/about"/>
</Switch>
```