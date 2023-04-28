# 在ts + vite 项目里提示“path” 找不到

使用别名需要用到 `node` 的`path`，`vite.config.ts` 提示找不到对应模块

## 原因分析
`path`模块是`node.js`内置的功能，但是`node.js`本身并不支持`typescript`，所以直接在`typescript`项目里使用是不行的

## 解决方法
安装  `@types/node`
```
npm install @types/node --save-dev
```