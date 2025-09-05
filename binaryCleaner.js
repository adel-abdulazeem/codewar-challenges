// func finds the nums < 2, and indices the nums > 1 and returns them as a pair of sequence
// arr of nums, integers +ve, always valid
// return arr of 2 arr of nums, 1s child arr consists of nums less < 2 and 2nd arr consists of nums > 1
function binaryCleaner(arr) {
    // create a var that holds an filtereds arr of nums < 2 using filter method.
    // create another var holds a filtered arr of nums > 1
    // then concat the 2 arrs
    let lessThanTwo = arr.filter(el => el < 2)
    let greaterThanOne = arr.map((el, i) => el > 1 ? i : null).filter(el => typeof el == 'number')
    return [lessThanTwo, greaterThanOne]
}

console.log(binaryCleaner([0, 1, 2, 1, 5, 6, 2, 1, 1, 0]))