// 什么是适配器模式？ 
// 适配器模式是一种结构型设计模式，可将一个类的接口转换为另一个接口，以满足客户端的需求。

// 格式1
const data1 = [{age1: 20, name1: 'dragon1' }]
// 格式1
const data2 = [{age2: 30, name2: 'dragon2' }]
// 格式1
const data3 = [{age3: 40, name3: 'dragon3' }]

// 优化成这样
[
    { age: 20, name: 'dragon1' }
]

// 以下是代码实现 
class Adaptee {
    data
    constructor(data) {
        this.data = data;
    }
    transform() {
        return this.data.map(item => {
            const { age1, name1 } = item;
            return { age: age1, name: name1 };
        })
    }
}
class Adaptee2 {
    // 同理
}

const adaptee = new Adaptee(data1);
// 适配成功
const result = adaptee.transform();