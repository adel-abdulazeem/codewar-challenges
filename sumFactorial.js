let memo = {}
const factorial = (n) => {
  if(n < 2){
    return n
  } else if (memo[n]){
    return memo[n]
  } else{
    let result = n * factorial(n-1)
    memo[n] = result
    return result
  }
}
function sumFactorial(arr){
return arr.reduce((acc,c) => acc + factorial(c), 0)
}