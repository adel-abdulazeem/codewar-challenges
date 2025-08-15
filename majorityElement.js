// func takes arr of nums => num that is present more than n/2
// arr of nums, always valid, 
// num which is most repetitive

var majorityElement = function(nums) {
    // loop 
    // declare an obj to keep track every num and how many times it found
    let numMap = {}
    // declare a var of maxNum to store the max val of how el is found
    // loop
    // conditional 
    let maxNum = 0
    let result = 0
    for(let num of nums){
       numMap[num] = numMap[num] + 1 || 1
    }
    for(let val in numMap){
       if(numMap[val] > maxNum){
           maxNum = numMap[val] 
           result = Number(val)
       }
    }
    return result
    // return nums.find(el => (numMap[el] = numMap[el] + 1 || 1) > nums.length/2)
  };
  
  console.log(majorityElement([3,2,3]))