// 什么是观察者模式？
// 观察者模式是一种行为设计模式，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。
// 这个主题对象在状态上发生变化时，会通知所有观察者对象，使它们能够自动更新自己。

class Subject {
    private observers: Observer[] = [];
    private state: number;
    
    getState() {
        return this.state;
    }
    
    setState(state: number) {
        this.state = state;
        this.notifyAllObservers();
    }
    
    attach(observer: Observer) {
        this.observers.push(observer);
    }
    
    notifyAllObservers() {
        this.observers.forEach((observer) => {
            observer.update();
        });
    }
}

class Observer {
    private subject: Subject;
    state: number;
    
    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.attach(this);
    }
    
    update() {
        this.state = this.subject.getState();
    }
}

// 测试
const subject = new Subject();
const observer1 = new Observer(subject);
const observer2 = new Observer(subject);
subject.setState(1);
console.log(observer1.state);
console.log(observer2.state);