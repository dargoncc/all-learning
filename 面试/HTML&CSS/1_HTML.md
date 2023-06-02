# HTML 有哪些新特性

- 语义化标签
- 视频和音频
- 画布（canvas）
- 本地存储 - localStorage 和 sessionStorage
- 表单控件 如：日期选择器、颜色选择器、搜索框
- Web Workers
- Web Socket

# 从浏览器地址栏到输入 URL 到现实页面发生了什么

1. 在浏览器地址栏输入 URL
2. 首浏览器检索是否访问过，如果请求资源在缓存中且足够新鲜，

- 如果资源未缓存发起新请求
- 如果已缓存，检验是否新鲜，足够新鲜直接提供给客户端，否则与服务器验证
- 检验新鲜通常有两个 HTTP 头进行控制 Expires 和 Cache-Control
  - HTTP1.0 提供 Expires，值为一个绝对时间表示缓存新鲜日期
  - HTTP1.1 增加了 Cache-Control: max-age=,值为以秒为单位的最大新鲜时间

3. 浏览器解析 URL,获取协议、主机、端口
4. 浏览器组装一个 HTTP（get）请求报文
5. 浏览器获取主机 ip 地址

- 浏览器缓存
- 本机缓存
- host 文件
- 路由器缓存
- ISP DNS 缓存
  — DNS 递归查询

6. 打开一个 socket 与目标地址，端口建立 TCP 链接，进行三次握手

- 客户端发送一个 TCP 的 SYN=1，Seq=X 的包到服务器端口
- 服务器发回 SYN=1， ACK=X+1， Seq=Y 的响应包
- 客户端发送 ACK=Y+1， Seq=Z

7. TCP 建立链接之后发送 HTTP 请求
8. 服务器接受请求，并将请求转发给服务程序。
9. 服务器检查 HTTP 请求头是否包含缓存验证信息如果验证缓存新鲜，返回 304 等对应状态码
10. 处理程序读取完整请求并准备 HTTP 响应，可能需要查询数据库等操作
11. 服务器将响应报文通过 TCP 连接发送回浏览器
12. 浏览器接收 HTTP 响应，然后根据情况选择关闭 TCP 连接或者保留重用，关闭 TCP 连接的四次握手

- 主动方发送 Fin=1， Ack=Z， Seq= X 报文
- 被动方发送 ACK=X+1， Seq=Z 报文
- 被动方发送 Fin=1， ACK=X， Seq=Y 报文
- 主动方发送 ACK=Y， Seq=X 报文

13. 浏览器检查响应状态吗：是否为 1XX，3XX， 4XX， 5XX，这些情况处理与 2XX 不同
14. 如果资源可缓存，进行缓存
15. 对响应进行解码（例如 gzip 压缩）
16. 根据资源类型决定如何处理（假设资源为 HTML 文档）
17. 解析 HTML 文档，构件 DOM 树，下载资源，构造 CSS DOM 树，执行 js 脚本，这些操作没有严格的先后顺序，以下分别解释
18. 构建 DOM 树

- Tokenizing：根据 HTML 规范将字符流解析为标记
- Lexing：词法分析将标记转换为对象并定义属性和规则
- DOM construction：根据 HTML 标记关系将对象组成 DOM 树

19. 解析过程中遇到图片、样式表、js 文件，启动下载
20. 构建 CSSDOM 树：

- Tokenizing：字符流转换为标记流
- Node：根据标记创建节点
- CSSOM：节点创建 CSSOM 树

21. 根据 DOM 树和 CSSDOM 树构建渲染树

- 从 DOM 树的根节点遍历所有可见节点，不可见节点包括：

  - script,meta 这样本身不可见的标签。
  - 被 css 隐藏的节点，如 display: none

- 对每一个可见节点，找到恰当的 CSSOM 规则并应用
- 发布可视节点的内容和计算样式

22. js 解析如下：

- 浏览器创建 Document 对象并解析 HTML，将解析到的元素和文本节点添加到文档中，此时 document.readystate 为 loading
- HTML 解析器遇到没有 async 和 defer 的 script 时，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用 document.write()把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作 script 和他们之前的文档内容
- 当解析器遇到设置了 async 属性的 script 时，开始下载脚本并继续解析文档。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用 document.write()，它们可以访问自己 script 和之前的文档元素
- 当文档完成解析，document.readState 变成 interactive
- 所有 defer 脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用 document.write()
- 浏览器在 Document 对象上触发 DOMContentLoaded 事件
- 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些内容完成载入并且所有异步脚本完成载入和执行，document.readState 变为 complete，window 触发 load 事件

## 详细简版：

1. 从浏览器接收 url 到开启网络请求线程（这一部分可以展开浏览器的机制以及进程与线程之间的关系）

2. 开启网络线程到发出一个完整的 HTTP 请求（这一部分涉及到 dns 查询，TCP/IP 请求，五层因特网协议栈等知识）

3. 从服务器接收到请求到对应后台接收到请求（这一部分可能涉及到负载均衡，安全拦截以及后台内部的处理等等）

4. 后台和前台的 HTTP 交互（这一部分包括 HTTP 头部、响应码、报文结构、cookie 等知识，可以提下静态资源的 cookie 优化，以及编码解码，如 gzip 压缩等）

5. 单独拎出来的缓存问题，HTTP 的缓存（这部分包括 http 缓存头部，ETag，catch-control 等）

6. 浏览器接收到 HTTP 数据包后的解析流程（解析 html-词法分析然后解析成 dom 树、解析 css 生成 css 规则树、合并成 render 树，然后 layout、painting 渲染、复合图层的合成、GPU 绘制、外链资源的处理、loaded 和 DOMContentLoaded 等）

7. CSS 的可视化格式模型（元素的渲染规则，如包含块，控制框，BFC，IFC 等概念）

8. JS 引擎解析过程（JS 的解释阶段，预处理阶段，执行阶段生成执行上下文，VO，作用域链、回收机制等等）

# 渲染页面的重绘回流你能给我讲一下吗？

**重排/回流（Reflow）**： 当 DOM 元素发生了增删改的操作时，浏览器需要重新计算元素的几何属性，重新生成布局，重新排列元素

**重绘(Repaint)**： 当一个 DOM 元素的样式发生改变，但没有改变布局,重新把 DOM 元素的样式渲染到页面的过程。

> 重排和重绘它们会破坏用户体验，并且让 UI 展示非常迟缓，而在两者无法避免的情况下，重排的性能影响更大，所以一般选择代价更小的重绘。
> 『重绘』不一定会出现『重排』，『重排』必然会出现『重绘』。

# 响应式开发

- css 媒体查询
- 弹性布局
- 网格布局

## 媒体查询

```css
/* mediatype指定了媒体类型，如screen表示屏幕媒体、print表示打印媒体等。*/
/* and、not和only是逻辑运算符，用于组合多个条件。*/
/* media feature表示设备的特性，如width表示屏幕宽度、orientation表示屏幕方向等*/
@media mediatype and|not|only (media feature) {
  /* CSS样式规则 */
}
```

下面是一些常用的媒体特性:

- width：屏幕宽度。
- height：屏幕高度。
- device-width：设备屏幕宽度。
- device-height：设备屏幕高度。
- orientation：屏幕方向（横向或纵向）。
- aspect-ratio：屏幕宽高比。
- color：设备的颜色位深。
- resolution：屏幕分辨率
