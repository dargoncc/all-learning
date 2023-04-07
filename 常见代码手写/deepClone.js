// 实现 deepClone -v1.0 简单对象深拷贝

// function deepClone(obj){
//     if(obj === null || typeof obj !== 'object') return obj;
//     const newObj = {};
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             newObj[key] = deepClone(obj[key]);
//         }
//     }
//     return newObj;
// }

// 带有 arr会出现  { '0': 1, '1': 2, '2': 3 },

// 实现 deepClone -v2.0 对象中嵌套数组

// function deepClone(obj){
//     if(obj === null || typeof obj !== 'object') return obj;
//     const newObj = Array.isArray(obj) ? [] : {};
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             newObj[key] = deepClone(obj[key]);
//         }
//     }
//     return newObj;
// }
// arr 正常 [ 1, 2, 3 ],

// 实现 deepClone -v3.0 对象中嵌套函数
// function deepClone(obj){
//     // 判断是否是函数
//     if(obj instanceof Function){
//         // 将函数转换为字符串
//         let str = obj.toString();
//         // 截取函数体内容的字符串
//         let subStr = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));
//         // 返回一个新的函数
//         return new Function(subStr);
//     }
//     if(obj === null || typeof obj !== 'object') return obj;
//     const newObj = Array.isArray(obj) ? [] : {};
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             newObj[key] = deepClone(obj[key]);
//         }
//     }
//     return newObj;
// }

// 实现 deepClone -v4.0 对象中嵌套日期、正则、Map、Set、Symbol、undefined、null
function deepClone(obj){
    // 判断是否是函数
    if(obj instanceof Function){
        // 将函数转换为字符串
        let str = obj.toString();
        // 截取函数体内容的字符串
        let subStr = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));
        // 返回一个新的函数
        return new Function(subStr);
    }
    // 判断是否是日期
    if(obj instanceof Date){
        return new Date(obj.getTime());
    }
    // 判断是否是Set(浅拷贝)
    if(obj instanceof Set){
        return new Set([...obj]);
    }
    // 判断是否是Map(浅拷贝)
    if(obj instanceof Map){
        return new Map([...obj]);
    }
    if(obj === null || typeof obj !== 'object') return obj;
    const newObj = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}

// console.log(newObj.fn === obj.fn); // false

// 测试

const obj = {
    name: 'zhangsan',
    address: {
        city: 'beijing'
    },
    arr: [1, 2, 3],
    fn: function(){},
    date: new Date(),
    reg: /abc/g,
    map: new Map(),
    set: new Set(),
    bool: true,
    num: 1,
    undef: undefined,
    nul: null,
    sym: Symbol('1')
}
const newObj = deepClone(obj);
obj.address.city = 'shanghai';
console.log(newObj);
console.log(obj);
