// write a range func Array.range(start, count) should return an arr containing count numbers from start to start + count ( exclusive )
// write another func array.sum() should return the sum of all nums in arr

// range func should receive 2 params of type of nums, may -ve, +ve, 0 
// sum func should defined using explicit prototype applied on arr
// range should return an arr of nums from that start to the start + count (exclusive)
// sum func should sum the nums of the arr that function can be applied to
Array.range = function (start, count) {
    let res = []
    for (let i = start; i < start + count; i++) {
        res.push(i)
    }
    return res
}

Array.prototype.sum = function () {
    return this.reduce((acc, c) => acc + c, 0)
}


console.log(Array.range(0, 3))
console.log([-3, -2, -1, 0, 1, 2, 3].sum())