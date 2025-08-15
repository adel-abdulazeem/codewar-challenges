//P: str that includes words of nums from 0-9
//R: arr of displaying the nums extracted from the given str
//E:scoreboard("The score is four nil"), [4,0], "Should return: [4,0]")
//P:
function scoreboard(string) {
    //declare a var that holds arr of str of each num from 0 to 9
    let numArr = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    // declare a var that holds the val of splited given str filtered out to return the str of nums
    let nums = string.split(' ').filter(el => numArr.includes(el))
    //loop 
    //conditional
    let ans = []
    for(let i = 0; i < nums.length; i++) {
      nums[i] == 'nil'? ans.push(0) : nums[i] == 'one'? ans.push(1) : 
      nums[i] == 'two'? ans.push(2) : nums[i] == 'three'? ans.push(3) : 
      nums[i] == 'four'? ans.push(4) : nums[i] == 'five'? ans.push(5) : 
      nums[i] == 'six'? ans.push(6) : nums[i] == 'seven'? ans.push(7) : 
      nums[i] == 'eight'? ans.push(8) : nums[i] == 'nine'? ans.push(9) : ''
  
    }
    return ans
  }
  
  console.log(scoreboard("The score is four nil"))