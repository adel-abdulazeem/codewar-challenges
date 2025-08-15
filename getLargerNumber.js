//P: 2 arr of intgers 
//R: returning the large number of one arr comparing to its counterpart inside the other
//E: 
//P: 
function getLargerNumbers(a, b) {
    //delclare a var  of []
    //loop having a nested loop 
    //pushing upon a certain condition
    let largeNums = []
    for(let i = 0; i < a.length; i++){
      let arr = [a,b]
      arr[0][i] > arr[1][i] ? largeNums.push(arr[0][i]) : arr[1][i] > arr[0][i] ? largeNums.push(arr[1][i]) : largeNums.push(arr[1][i])
    }
    return largeNums
  }
  
  console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]))
  // Returns [23, 64, 53, 17, 88