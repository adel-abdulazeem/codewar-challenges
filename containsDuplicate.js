// func takes arr of nums => true if any num appears at least twice.
// arr of intg, el may occur >= 1 , always valid
// [1,2,1,3] output = true/ another [2,3,5] => false
// 
function containsDuplicate(nums){
    // loop, keep track each num and how many times it exist 
    // create a var of {} which is a char map
    // then loop through the charMap object and test if there a num that found at least once to return true otherwise return false
    // conditional
    let charMap = {}
    for(let char of nums){
      charMap[char] = charMap[char] + 1 || 1
    }
    for(let num in charMap){
      if(charMap[num] > 1){
        return true
      }
    }
    return false
    }
    
    console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), 'true')
    console.log(containsDuplicate([1,2,3,4]), 'false')
    console.log(containsDuplicate([2,14,18,22,22]), 'true')