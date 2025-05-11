function memoize(expensiveFunction){
    let cache = {}
    
    return function memoizedFunction(num){
        if(cache[num]){
        return cache[num]
    }

    cache[num] = expensiveFunction(num);
    return cache[num]
    }
}

function factorial(number){
    if(number > 0){
        return factorial(number -1) * number
    } else {
        return 1
    }
}
let user = {name: 'Alic', age: 28}

for(const char in user){
    console.log(user[char])
}