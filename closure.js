// function memoize(expensiveFunction){
//     let cache = {}

//     return function memoizedFunction(num){
//         if(cache[num]){
//         return cache[num]
//     }

//     cache[num] = expensiveFunction(num);
//     return cache[num]
//     }
// }

// function factorial(number){
//     if(number > 0){
//         return factorial(number -1) * number
//     } else {
//         return 1
//     }
// }
// let user = {name: 'Alic', age: 28}

// for(const char in user){
//     console.log(user[char])
// }

function secureBooking() {
    // var env
    let passengerCount = 0;
    //  👉 A function has access to the variable environment (VE) of the execution context in which it was created 
    return function () {
        passengerCount++
        console.log(passengerCount)
    }
}
const booker = secureBooking()

booker()
booker()
booker()