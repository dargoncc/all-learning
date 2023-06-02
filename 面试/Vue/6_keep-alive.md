# keep-alive

## 是什么

- 作用：实现组件缓存，保持组件状态，避免反复渲染导致的性能问题
- 原理：Vue.js 内部将 DOM 节点，抽象成了一个个的 VNode 节点，keep-alive 组件缓存也是基于 VNode 节点的。他将满足条件的组件在 cache 对象中缓存起来，重新渲染的时候再讲 VNode 节点从 cache 对象中取出并渲染
- 可以设置以下属性：
  - `include`: 字符串或者正则，只有名称匹配的组件会被缓存。
  - `exclude`: 字符串或者正则，任何名称匹配的组件都不会被缓存。
  - `max`: 数字，最多可以缓存多少组件实例

> 注意：
>
> - include 和 exclude 同时存在时， exclude 优先级更高
> - 若将 include 设置为空 ’‘ ，每个页面都将会被缓存
> - 每个组件内要加 name 选项，如果 name 选项不可用，则匹配它的局部注册名称（父组件 components 选项的键值），匿名组件不能被匹配

设置了 keep-alive 缓存的组件，会多出两个生命周期钩子：`activated`、`deactivated`。
首次进入组件时：
beforeCreate --> created --> beforeMount --> mounted --> activated --> beforeUpdate --> updated --> deactivated
再次进入组件时：
activated --> beforeUpdate --> updated --> deactivated
