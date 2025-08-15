//arr of nums and may contains nested arr of nums
// num that represent the sum of all arr value or its nested arr values
//E:Test.assertEquals(arraySum([1, 2, [1, 2]]), 6);
//P
function arraySum(arr) {
    //join arr by ,
    //split the joined arr by ,
    //loop using reduce to return the sum
    return  arr.join(',').split(',').reduce((acc,c) => acc +(+c||0),0)
  }
  
  console.log(arraySum([1, 2, [1, 2, [1,1]]]))