var addTwoPromises = async function(promise1, promise2) {
    // declare var using destructuring assignment
    //using Promise.all that takes arr or promises and it returns a single promise that resolves when all of the promises in the array have resolved or when the iterable contains no promises
    // then return the sum of the two values
    const [val1, val2] = await Promise.all([promise1, promise2])
    return val1 + val2 
 };