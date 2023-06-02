# 路由有几种模式，分别讲一下
- history
- hash

## hash 模式
hash 模式是一种把前端路由的路径用井号 # 拼接在真实 URL 后面的模式。
当井号 # 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 hashchange 事件。

通过 hashChange 事件监听 URL的变化，改变 URL 的方式只有以下几种：
1. 通过浏览器前进和后退
2. 通过 <a> 标签改变 URL
3. 通过 window.location 改变 URL

## history 模式
history API 是 H5 提供的新特性，允许开发者直接更改前端路由，即更新浏览器 URL 地址而不重新发起请求。
history 提供了pushState 和 replaceState 两个方法，这两个方法改变的URL 的path 部分不会引起页面的刷新
history 提供类似 hashchange 事件的 popstate事件，但 popstate事件有些不同
1. 通过浏览器前进和后退改变URL是会触发popstate事件
2. pushState/replaceState 或 a标签改变的 URL 不会触发popstate事件
3. 好在我们可以拦截pushState/replaceState的调用 和 a标签的点击事件来检测URL变化
4. 通过js调用history的back，go，forward方法来触发该事件

# 路由有几个守卫，分别用来干什么？
- 全局路由守卫
  - 全局前置守卫： `router.beforeEach`
  - 全局后置钩子：`router.afterEach` 
-  组件路由守卫
-  路由独享守卫


## 全局路由守卫
### 全局前置守卫 ： `router.beforeEach`
每个守卫方法接收三个参数：
- to: 即将要进入的目标 用一种标准化的方式
- from: 当前导航正要离开的路由 用一种标准化的方式
- next：必须调用
  - next():进入管道中的下一个钩子，如果全部的钩子执行完了，则导航的状态就是comfirmed（确认的）
  - next(false):终端当前的导航。如浏览器URL改变，那么URL会充值到from路由对应的地址。
  - next('/')||next({path:'/'}):跳转到一个不同的地址。当前导航终端，执行新的导航。

一般用与用户登录后处理当前用户是否有权限进入页面，和一些白名单的处理


### 全局后置钩子：`router.afterEach` 
你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身

## 组件路由守卫
> 跟methods: {}等同级别书写，组件路由守卫是写在每个单独的vue文件里面的路由守卫
- beforeRouteEnter: 不能 访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。

- beforeRouteUpdate: 同一页面，刷新不同数据时调用，
- beforeRouteLeave: 这个 离开守卫 通常用来预防用户在还未保存修改前突然离开。该导航可以通过返回 false 来取消。

```
const UserDetails = {
  template: `...`,
  beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  },
}
```


## 路由独享守卫

> beforeEnter 守卫 只在进入路由时触发，不会在 params、query 或 hash 改变时触发。

```
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  },
]
```

# Vue-router 传参
- 声明式导航 router-link
- 编程式导航 router-push

## router-link

```
<router-link :to="'/users?userId:1'"></router-link>
<router-link :to="{ name: 'users', params: { userId: 1 } }"></router-link>
<router-link :to="{ path: '/users', query: { userId: 1 } }"></router-link>
```
##

