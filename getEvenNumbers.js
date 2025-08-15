//JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
//P: arr of num
//R: arr of even num
//E: 
getEvenNumbers([2,5,6,4])
//P:
function getEvenNumbers(numbersArray){
    //filter method based on condition item % 2 == 0
    return numbersArray.filter(item => item % 2 == 0)
  }