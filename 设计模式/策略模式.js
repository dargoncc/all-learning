// 什么是策略模式？ 
// 策略模式是一种行为设计模式， 它能让你定义一系列算法， 并将每个算法封装起来， 以便它们可以相互替换。

const doSomething = (age) => {
    if (age === 10) {
        // do something
    }
    if (age === 20) {
        // do something
    }
    if (age === 30) {
        // do something
    }
}

// 以上代码中， doSomething 函数中的 if 语句就是策略模式的体现， 通过不同的条件执行不同的逻辑， 这样就可以避免 if 语句的嵌套， 使代码更加简洁。

// 以下是策略模式的优化
const doSomething1 = (age) => {
    const strategies = {
        10: () => {
            // do something
        },
        20: () => {
            // do something
        },
        30: () => {
            // do something
        }
    }
    return strategies[age]?.();
}
