//P: arr of nums
//R: num that represent the product of the largest pair
//E: maxProduct([7, 8, 9])                       // 72
//P: 

function maxProduct(a) {
    //sort the given arr ascendingly 
    //return the product of the last 2 el of the sorted arr
  return a.sort((a,b)=> a - b)[a.length -2] * a.sort((a,b)=> a - b)[a.length -1]
   
  }
  console.log(maxProduct([7, 8, 9]))