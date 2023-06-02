# Ajax、axios、Fetch 的区别

## Ajax

Ajax 即“AsynchronousJavascriptAndXML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。它是一种在 无需重新加载整个网页的情况下，能够更新部分网页的技术。通过在 后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。 这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行 更新。传统的网页（不使用 Ajax）如果需要更新内容，必须重载整 个网页页面。

**缺点**：

- 本身是针对 MVC 编程，不符合前端 MVVM 的浪潮
- 基于原生 XHR 开发，XHR 本身的架构不清晰
- 不符合关注分离（Separation of Concerns）的原则
- 配置和调用方式非常混乱，而且基于事件的异步模型不友好。

## Fetch

Fetch 号称是 AJAX 的替代品，是在 ES6 出现的，使用了 ES6 中的 promise 对象。
Fetch 是基于 promise 设计的。Fetch 的代码结构比起 ajax 简单多。
Fetch 不是 ajax 的进一步封装，而是原生 js，没有 使用 XMLHttpRequest 对象

**优点**：

- 语法简洁，更加语义化 基于标准 Promise 实现，支持 async/await 更加底层，提供的 API 丰富（request, response）
- 脱离了 XHR，是 ES 规范里新的实现方式

**缺点**：
- fetch 只对网络请求报错，对 400，500 都当做成功的请求，服务器 返回 400，500 错误码时并不会 reject，只有网络错误这些导致请 求不能完成时，fetch 才会被 reject。
- fetch 默 认 不 会 带 cookie ， 需 要 添 加 配 置 项 ： fetch(url, {credentials: 'include'}) fetch 不 支 持 abort ， 不 支 持 超 时 控 制 ， 使 用 setTimeout 及 Promise.reject 的实现的超时控制并不能阻止请求过程继续在后台 运行，造成了流量的浪费
- fetch 没有办法原生监测请求的进度，而 XHR 可以

## axios

Axios 是一种基于 Promise 封装的 HTTP 客户端，其特点如下： 浏览器端发起 XMLHttpRequests 请求 node 端发起 http 请求 支持 Promise API
监听请求和返回 对请求和返回进行转化 取消请求 自动转换 json 数据 客户端支持抵御 XSRF 攻击
