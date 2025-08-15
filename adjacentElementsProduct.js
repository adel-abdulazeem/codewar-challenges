//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

//func that takes an array multplying every adjacent el then return the max val
//P: array of of intg nums
//R: num that rpresent the max val of the new arr
//E: 
//P: 





function adjacentElementsProduct(array) {
    // use Math.max method given it the rest param
    //this param represent the new arr that formed through maping through each el multiplyig it with the adjacent el
    //then return the max
    return Math.max(...array.map((item,indx) => array[indx] * array[indx + 1]).slice(0,-1))
   }
   
   console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))