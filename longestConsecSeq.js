/**
 * @param {number[]} nums
 * @return {number}
 */
// Ifunct takes arr of unsorted nums => the lengths of the longest consecutive el
//arr of unsorted nums, always be valid, maybe -ve/+ve nums, mayc contain duplicates
// return a num which the length of arr of the longest consecutive elements
// 
var longestConsecutive = function(nums) {
    if(nums.length <= 1) return nums.length
    nums.sort((a,b) => a - b)
    let longestStreak = 1
    let currentStreak = 1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i - 1]) continue
        if(nums[i] === nums[i - 1] + 1){
            currentStreak++
        } else{
            longestStreak = Math.max(longestStreak, currentStreak)
            currentStreak = 1
        }
    }
    return Math.max(longestStreak, currentStreak)
};
console.log(longestConsecutive([0, 3,6,9,12,15]))// 4

console.log(longestConsecutive([100,4,200,1,3,2]))// 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))//9
console.log(longestConsecutive([0,0]))// 4
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]))
