// 什么是发布订阅模式
// 发布订阅模式是一种一对多的关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知
// 发布订阅模式的实现
// 1. 创建一个对象
// 2. 该对象拥有一个数组(缓存列表)，用于存放订阅者(调度中心)
// 3. 该对象拥有一个方法(on)，用于添加订阅者
// 4. 该对象拥有一个方法(emit)，用于发布消息
// 5. 该对象拥有一个方法(off)，用于删除订阅者
// 6. 该对象拥有一个方法(once)，用于添加一次性订阅者

class EventEmitter {
  // 缓存列表
  cache = {};
  // 订阅
  on(event, fn) {
    const tasks = this.cache[event] || [];
    if (tasks) {
      this.cache[event].push(fn);
    } else {
      this.cache[event] = [fn];
    }
  }
  // 取消订阅
  off(event, fn) {
    const tasks = this.cache[event];
    if (tasks) {
      const index = tasks.findIndex((task) => task === fn);
      if (index > -1) {
        this.cache[event].splice(index, 1);
      }
    }
  }
  // 发布
  emit(event, ...args) {
    const tasks = this.cache[event].slice();
    if (tasks) {
      for (const fn of tasks) {
        fn(...args);
      }
    }
  }
  // 一次性订阅
  once(event, cb) {
    function fn(...args) {
      cb(args);
      this.off(event, fn);
    }
    this.on(event, fn);
  }
}

const eventBus = new EventEmitter();

// 组件一
eventBus.on("event", (data) => {
    console.log(data);
})

// 组件二
eventBus.emit("event", "hello world");