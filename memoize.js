// write a func memoize that takes fun as arg and should return a num based on the passed func arg
// func as as param, always valid and it might 1 of 3 inputs sum, fib, or factorial function
// return a num
let memo = {}

function memoize(n) {
    if (n <= 1) {
        return n
    }
     else if(memo[n]) {
        return memo[n]
    } else {
         memo[n] = memoize(n - 1) + memoize(n - 2)
        return memo[n]
    }
}

console.log(memoize(5)) // 15
console.log(memoize(9)) // 55  