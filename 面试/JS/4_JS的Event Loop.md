# JS的Event Loop你能给我介绍下吗？
因为JS是单线程的语言，为了防止一个函数执行时间过长阻塞后面的代码，所以就需要Event Loop这个事件环的运行机制。

当执行一段有同步代码和异步代码时。
1. 将同步任务亚于执行栈，然后把异步任务放入异步队列（Event Loop）中等待执行，其中微任务放入微任务队列，宏任务放入宏任务队列
2. 首先执行同步任务，执行完同步任务后，Event Loop会把微任务队列执行清空，
3. 微任务队列清空后，进入宏任务队里，取宏任务队列里的第一个任务进行执行。

## 微任务代表
Promise.then，MutationObserver

## 宏任务代表
setImmediate setTimeout setInterval