// arr of intgers 
// num that represent the average of the these nums
//For example: var a = [0, 1, 2];
//
function avg(a){
    //loop using reduce to sum all the nums then divide it by given arr length
    return a.reduce((acc,c) => acc + c,0)/arr.length
  }