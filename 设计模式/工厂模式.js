// 什么是工厂模式： 就是把实例化的过程封装到一个函数中，这个函数就是工厂函数
class Axios {}

class A {
    create() {
        return new Axios()
    }
}

const axios = new A()
export default axios

// 创建很多实例
const http1 = axios.create()
const http2 = axios.create()
const http3 = axios.create()
const http4 = axios.create()
const http5 = axios.create()

