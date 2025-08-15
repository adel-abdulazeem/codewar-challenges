var thirdMax = function(nums) {
    if(nums.length < 3) return Math.max(...nums)
let arr = nums.filter((el,i) => i == nums.indexOf(el)).sort((a,b) => b - a)
return arr.length > 2? arr[2] : Math.max(...arr)
};