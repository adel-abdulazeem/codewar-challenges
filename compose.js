/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return (x) => functions.reduceRight((acc, fn) => fn(acc), x)
 };
 const comp = compose([x => x + 1, x => 2 * x])
 console.log(comp(4)) // 9