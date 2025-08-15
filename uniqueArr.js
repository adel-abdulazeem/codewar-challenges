// func, arr of subArrs => num of unique arrs that can be formed by picking exactly one el from each subarr. 

// arr of subarrs , each subarr nums, intg, duplicate, not always valid
// num of the unique arr that can be formed from subarr, without having dup
// solve([[1,2],[4],[5,6]]),4)
//
function solve(arr){
    // loop through the parent arr 
    // then each el removing dupelicate el
    // mulitply length of subarr using reduce
    return arr.reduce((acc,c) => acc * new Set(arr).size, 1)
}

console.log(solve([[1,2],[4],[5,6]]), 4)
console.log(solve([[1,2],[3,4],[5,6]]), 8)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)