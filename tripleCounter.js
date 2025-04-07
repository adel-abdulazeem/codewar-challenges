/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let curr = init
    return {
        increment: () => curr +=1,
        decrement: () => --curr ,
        reset: () => {
            curr = init
            return curr
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

console.log(increment.increment())
console.log(increment.reset())
console.log(increment.decrement())