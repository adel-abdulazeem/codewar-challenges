//P: arr of nums
//R: boolean if all nums are square or the arr is [] return undefined
//E: isSquare([1, 4, 9, 16]) --> true
//P:


var isSquare = function(arr){
    //conditional 
    //if it is true loop applying every method 
    //return true if the product of Math.sqrt(el) * Math.sqrt(el) == el for each el otherwise false
    return arr.length > 0 ? arr.every(el => el == Math.sqrt(el) * Math.sqrt(el)) : undefined
  }
  
  console.log(isSquare([1, 3, 9, 16]))