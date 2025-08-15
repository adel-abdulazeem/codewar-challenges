//Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

//function that takes an arr and num and return number of last el == given num
//P: 2 param 1st is arr 2nd is num
//R: arr of last even num and num of el = to give num
//E: 
//P: 
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) //output [4, 6, 8]



function evenNumbers(array, number) {
    //declare a var and assign an empty arr to it
    //loop through the given arr using forEach method
    //conditionals tht evaluates to true when  item % 2 == 0 within the looped arr 
    //then push the item tht comply with condition to var of empty arr
    // return the var after applying slice method with negative param to return the last el = to the given num
    let onlyevens = []
     array.forEach(item => {
      if(item % 2 == 0){
        onlyevens.push(item)
      }
    })
    return onlyevens.slice(-number)
  }