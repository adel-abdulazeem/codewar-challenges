function deepCount(array){
    // arr, [] || el || arr of arr 
    // num which represent the num of within the given arr
    //[1, 2, [3, 4, [5]]]  -->  7
  //declare var of []
  //loop
  //conditional to determine if the el is arr or not to concat
  //
  var count = array.length
  
  for (const element of array) {
    if (Array.isArray(element)) {
      count += deepCount(element)
    }
  }
  return count
  }
  
  console.log(deepCount([1, 2, [3, 4, [5]]]))