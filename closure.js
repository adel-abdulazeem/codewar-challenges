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

let funcs = [];

for (var i = 0; i < 3; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

// funcs[0](); // 
// funcs[1](); // 
// funcs[2](); // 


function makeCounter() {
    let count = 0;
    return {
        inc() { return ++count; },
        reset() { count = 0; }
    };
}

const v = makeCounter()
v.inc()
v.inc()
v.reset()
v.inc()
console.log(v.inc())