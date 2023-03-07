// 什么是代理模式
// 代理模式是一种结构型设计模式，让你能够提供一个替代对象或占位符以控制对另一个对象的访问。
// 代理模式的关键是，当客户端试图访问目标对象时，代理会创建一个目标对象的实例。
// 代理对象可以在将请求转发给目标对象之前或之后，执行一些额外的操作。
// 代理模式的主要目的是控制对目标对象的访问。

const handler = {
    get: function(target, key) {
        return key in target ? [target[key]] : 7;
    }
}

const p = new Proxy({}, handler);
p.a = 1
p.b = undefined
console.log(handler); // { get: [Function: get] }
console.log(p.a, p.b); // [ 1 ] [ undefined ]
console.log('c' in p, p.c); // false 7