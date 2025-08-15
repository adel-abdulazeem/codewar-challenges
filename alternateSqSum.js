// arr of intg 
// sum of squares of el with even position plus sum of the rest el || 0 in case of empty
// [11, 12, 13, 14, 15]  -->  11 + 12^2 + 13 + 14^2 + 15 = 379
// 

function alternateSqSum(arr){
    //condtional to detemine if the arr is empty or not
    //loop applying condtional the return the squares of el at even postion
    //reduce to sum the resulted arr
    return arr.length > 0 ? arr.map((el,i) => i % 2 == 0 ? el : Math.pow(el, 2)).reduce((acc,c) => acc + c) : 0
  }
  
  console.log(alternateSqSum([11, 12, 13, 14, 15]))