// write function that returns the count of arguments passed to it
// accepts a spread param, always be valid
// return number

var argumentsLength = (...arguments) => {
    return arguments
};

console.log(argumentsLength(1, 2, 3)) // 3
console.log(argumentsLength({}, null, "3")) // 3