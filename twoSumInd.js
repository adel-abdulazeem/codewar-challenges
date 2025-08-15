

// func takes arr of intg and target, intg => arr of indices of el their sum == target
// arr of intg & target num, intg
// arr of indices 
// twoSum([3,3], 6)// [0, 1]
//
function twoSum(nums,target){
    // declare res var of []
    // declare var charMap  of {}
    // loop through arr to reassign both arr and target
    let res = []
    let charMap = {}
    for(let num of nums){
        const diff = target - num
        if(charMap[diff]){
            res.push(nums.indexOf(num), nums.lastIndexOf(diff))
        } else {
            charMap[num] = true
        }
    }
    return res
}
console.log(twoSum([3,3], 6))//[0, 1]
console.log(twoSum([2,7,11,15], 9))