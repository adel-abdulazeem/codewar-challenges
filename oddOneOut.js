//P: arr of intger nums
//R: arr of nums that appear even number of times
//E: oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
//P: 
function oddOnesOut(nums) {
    //loop through nums arr
    //find how many times the el apears 
    //then filter and return only nums that appears for even numbers of times
    return nums.filter(val => !(nums.filter(v => v === val).length % 2));
  }
  
  console.log(oddOnesOut([1, 2, 3, 1, 3, 3]))