function arrMultiply(arr) {
    return `${arr.reduce((acc, c) => Number(acc) * Number(c))}`
}