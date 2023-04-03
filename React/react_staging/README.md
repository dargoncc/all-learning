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

### 嵌套路由
1. 注册子路由时要写上父路由的path
2. 路由的匹配是按照注册路由的顺序执行的

### 想路由传递参数
1. params 参数
	路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
	注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
	接收参数： const {name, age} = this.props.match.params
2. search 参数
	路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
	注册路由(声明接收)：<Route path="/demo/test" component={Test}/>
	接收参数： const {name, age} = this.props.location.search
	备注：获取到的search 是 `urlencoded` 编码字符串，需要借助 `querystring` 解析
3. state 参数
	路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
	注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
	接收参数： const {name, age} = this.props.location.state
	备注：刷新也可以保留住参数

### 编程式路由导航
	借助 this.props.history 对象上的API对操作路由进行跳转，前进，后退
		- this.props.history.push()
		- this.props.history.replace()
		- this.props.history.goBack()
		- this.props.history.goForward()
		- this.props.history.go()

### withRouter 
	`withRouter` 可以加工一般组件，让一般组件具备路由组件所特有的API
	`withRouter` 返回值是一个新组件

### BrowserRouter与HashRouter的区别
1. 底层原理不一样：
			BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
			HashRouter使用的是URL的哈希值。
2. path表现形式不一样
			BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
			HashRouter的路径包含#,例如：localhost:3000/#/demo/test
3. 刷新后对路由state参数的影响
			(1).BrowserRouter没有任何影响，因为state保存在history对象中。
			(2).HashRouter刷新后会导致路由state参数的丢失！！！
4. 备注：HashRouter可以用于解决一些路径错误相关的问题。