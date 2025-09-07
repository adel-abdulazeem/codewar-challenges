// Create  numbers function here
function numbers(...args) {
    return args.every(el => typeof el == 'number')
}