


var plusOne = function(digits) {
    let res =  Number(`${digits.join('').split(',')}`) + 1
    return `${res}`.split('').map(el => Number(el))
};

console.log(plusOne([1, 2, 3]))