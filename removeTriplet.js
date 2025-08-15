 //func takes sorted arr of intgers with dup => sorted arr without dup in place
 // nums arr of intg sorted ascend, 
 // return length of the resulted arr where each el is not found > 2 
 // 
 var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length
 let k = 2
 for(let i = 2; i < nums.length; i++){
     if(nums[i] !== nums[k - 2]){
         nums[k] = nums[i]
         k++
     }
 }
 return k

};