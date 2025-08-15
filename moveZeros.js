var moveZeroes = function(nums) {
    if(nums.length === 0) return nums
    let k = 0 
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== 0){
            [nums[k], nums[i]] = [nums[i], nums[k]]
            k++
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))