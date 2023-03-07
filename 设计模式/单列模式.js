// 什么事单例模式？ 
// 单例模式是一种常用的软件设计模式，它的主要目的是确保某一个类只有一个实例存在。当你希望在整个系统中，某个类只能出现一个实例时，单例模式就能派上用场。
// 定义一个类，并生成一个实例，全局仅使用这个实例，称为单列模式

// 1. 定义一个类
class HttpRequest {
    instance
    constructor() {
        // 生成一个实例
        this.instance = null;
    }
    // 静态方法
    static getInstance() {
        if (!this.instance) {
            this.instance = new HttpRequest();
        }
        return this.instance;
    }
    // 其他方法
    get() {
        console.log('get');
    }
    post() {
        console.log('post');
    }
}

// 2. 生成一个实例
const http = new HttpRequest();

// 3. 全局仅使用这个实例
export default http