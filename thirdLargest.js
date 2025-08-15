
function thirdMax(nums){
    // create a var that holds arr from set obj
    // sort descendingly
    // conditional to test if arr.length >= 3 then return 3rd el which is the 3rd largest otherwise return the 1st largest
    let uniques = Array.from(new Set(nums))
    uniques.sort((a,b) => b - a)
    return uniques.length >= 3? uniques[2] : uniques[0]
}

console.log(thirdMax([2, 0, 1, 3, 2, 4]))