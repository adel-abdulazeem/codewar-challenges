/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
    constructor(num){
        this.num = num
    }
}

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.num.reduce((acc,c) => acc + c, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
        return `[${this.num}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */