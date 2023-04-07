Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`)
    }
    thisArg = thisArg || this
    const length = this.length
    const result = []
    for (let i = 0; i < length; i++) {
        result.push(callback.call(thisArg, this[i], i, this))
    }
    return result
}

// test
const arr = [1, 2, 3]
const result = arr.myMap((item, index, arr) => {
    return item * 2
})
console.log(result)