// 什么是装饰器模式？
// 装饰器模式是一种结构型设计模式，允许你通过将对象放入包装器对象中来为其添加新的行为和职责。
// 什么时候使用装饰器模式？
// 当你需要在运行时扩展对象的功能时，可以使用装饰器模式。

// 实现
class Man {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(`${this.name} is a man`)
    }
}

class superMan {
    man
    constructor(man) {
        this.man = man
    }
    say() {
        debugger
        this.man.say()
        console.log('I am superMan')
    }
}

// 测试
const man = new Man('dragon')
const superMan1 = new superMan(man)

man.say()
// dragon is a man
superMan1.say()
// dragon is a man
// I am superMan