# 了解 Tree-shaking
## 1. 什么是 Tree-shaking
ans : Tree-shaking 是一种消除无用代码的方式！

## 2. 为什么需要 Tree-shaking
asn : 今天的 Web 网页应用可以体积很大，尤其是 JavaScript 代码，但浏览器处理 JavaScript 是非常耗资源的，如果我们能将其中的无用代码去掉，仅提供有效代码给浏览器处理，无疑会大大减小浏览器的负担，而 Tree-shaking 帮我们做到了这一点。

# 深入理解 Tree-shaking
Tree-shaking 本质是消除无用的 JavaScript 代码。 那什么是无用代码？怎么消除无用代码？

## 1. DCE (dead code elimination) 
- 代码不会被执行
- 代码执行结果不会被用到
- 代码只会影响死变量，只写不读

## 2. Tree-shaking 消除
- 消除变量 - 没有使用到的变量
- 消除函数 - 引入但未使用的函数
- 消除类 - 引用但未使用的类
- 副作用 ： 
    -  模块中的方法未被引用
    -  模块中定义的变量影响了全局变量


# Tree-shaking 实现流程
1. 模块解析
2. 标记模块是否可 Tree-shaking
3. treeShakingNode() 方法
4. 通过生成的 chunks 生成代码（字符串）写入文件

## TODO
代码分析