
//find the minimum sum obtained from summing ech 2 int product
//P: arr of intg +ve only arr.length is even 
//R: num representing the sum of the each 2 minimum multiplied el
//E: 
//P:
function minSum(arr) {
    //sort 
    //reduce by summing the acc and the product of multiplying the current val by the largest val each time using arr.pop()
    // your code here
    return   arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
  
  }
  
  
  
  
  console.log(minSum([12,6,10,26,3,24]))
  console.log([12,6,10,26,3,24].pop())