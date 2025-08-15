// function tht takes arr of nums and num which is a target => arr of subarr of arr el that their sum == target
function twoSum(nums, target){
    //declare result var of []
    let result = []
    //declare a var of numMap of {}
    let numMap = {}
    //loop 
    for(let char of nums){
      const diff = target - char
      numMap[diff]? result.push([char, diff]) : numMap[char] = true
    }
    return result
  }
  
  console.log(twoSum([1,2,2,3,4], 4))