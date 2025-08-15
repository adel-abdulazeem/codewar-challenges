
//P: 2 arrs
//R: 1 arr of the 2 arrs combined but alternating elements
//E: 
//P:






function mergeArrays(a, b) {
    //declare a var that holds the 2 arr concatenated 
    //decalare a var  of result of []
    //loop through arr resulted from concatenation
    //push to the result arr an el of the 1s param and 2nd param each time we loop
    //filter to remove the undefined el 
    let arr = a.concat(b)
    let result = []
    for(let i = 0; i < arr.length; i++ ){
      result.push(a[i],b[i])
    }
    return result.filter(el => el !== undefined)
  }
  
  
  
  
  console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']))