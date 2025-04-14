// write a func that takes fn as arg and it return a num

function memoize(fn) {
  let memo = {}
  return function(...args) {
    let key = args.join(',')
    if (memo[key]) {
      return memo[key]
    } else {
      let result = fn(...args)
      memo[key] = result
      return result
    }
  }
}


const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b 
const fib = (n) => {  // 0, 1, 1, 2, 3, 5, 8, 13, 21
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
} 
const memoizedAdd = memoize(fib)  // memoizedAdd(1, 2) // 3
console.log(memoizedAdd([[5],[]]
)) // 3