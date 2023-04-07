Array.prototype.myForEach = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`)
    }
    thisArg = thisArg || this
    const length = this.length
    for (let i = 0; i < length; i++) {
        callback.call(thisArg, this[i], i, this)
    }
}

// test
const arr = [1, 2, 3]
arr.myForEach((item, index, arr) => {
    console.log(item, index, arr)
})