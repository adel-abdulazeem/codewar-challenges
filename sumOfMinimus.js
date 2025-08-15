//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

//sum the min val of el of nested arr
//P: arr containing arrays as its el
//R: num tht represent the total num of the min val
//E: 
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))
//P: 
function sumOfMinimums(arr) {
    //P: map through the arr el
    //apply Math.min to populated el using rest param of each array that's represented by item
    // reduce the elements of the resulted array by collecting thier el into one num using reduce method
    return arr.map(item => Math.min(...item)).reduce((acc,c) => acc + c)
  }