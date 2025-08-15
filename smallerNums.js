//P: arr of nums 
//R: arr on nums tha
//E: 
//P:
function smaller(nums) {
  //declare a var and asssign [] to it
  //loop through the given arr
  //conditional  
  let arr = []
  let count

  for(let i = 0; i < nums.length; i++){
    base = nums[i]
    count = 0
    for(let j = i +1; j < nums.length; j++){
      if(nums[j] < base) count++
    }
    arr.push(count)
    }
  return arr
  }


  console.log(smaller([1, 2, 3]))