//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

//P: array of nums
//R: num or 0
//E sumArray(null)--> 0
//P:

function sumArray(array) {
    //conditional 
    //if array is val is null or its length < 3 or it's empty then it evaluates to undefined then return 0
    //otherwise sort the array slice it subtracting the lowest and highest num 
    //then apply reduce method to retun sum of the remaining el
    return  array == undefined ? 0 : 
    array.sort((a,b) => a - b).slice(1,-1).reduce((acc,c) => acc + c, 0) 
    }
  
    console.log(sumArray(null))