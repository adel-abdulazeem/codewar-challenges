// func(arr) => unique num
// nums, unsorted, present twice except one num, always valid intg, 1 to 2147483647, speed optimized
// [ 1, 8, 4, 4, 6, 1, 8 ] => 6

function findUnique(numbers) {
    // loop using find upon condition of numbers.indexOf(el) == numbers.lastIndexOf(el)
    return numbers.reduce((a, b) => a ^ b);
    }
    console.log(findUnique([ 2, 2, 5, 4, 4, 3, 3, 1, 1 ]), 5)
    console.log(findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]), 9)


