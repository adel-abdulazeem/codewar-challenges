function divisors(integer) {
    // intg, > 1, even, or odd, always valid
    // arr of nums, input divisors except 1 & input itself || intg is prime
    // divisors(12) => [2, 3, 4, 6]
    // create a var res with a value of []
    // create var count that holds the value of intg
    // loop 
    // if statement to check if num % i == 0, then push it to the arr otherwise
    // conditional to check if the arr.length > 1 then return it otherwise return `${param} is prime`
    let param = integer
    let result = []
    for (let i = 2; i < integer; i++) {
        if (param % i === 0) {
            result.push(i)
        }
    }
    return result.length ? result : `${integer} is prime`
}

console.log(divisors(12))
console.log(divisors(13))
console.log(divisors(25))