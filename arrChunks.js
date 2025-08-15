//abcdefghijklmnopqrstuvwxyz0123456789
// write func that iterates over an arr returning new arr of subarr based on the size passed in
//2 params arr and size, always valid
// return new array 

var chunk = function(arr, size) {
    // create to var res & chunck of empty array
    // iterate over arr, push each element into chunk
    // if chunk length is equal to size, push chunk into res and reset chunk to empty array 
  // after loop, if chunk length is greater than 0, push chunk into res
    // return res
    
    let res = []
    let chunk = []
    for (let i = 0; i < arr.length; i++) {
      chunk.push(arr[i])
      if (chunk.length === size) {
        res.push(chunk)
        chunk = []
      }
    }
    if (chunk.length > 0) {
      res.push(chunk)
    }
    return res
  };
  
  console.log(chunk([1, 2, 3, 4, 5], 1)) // [[1, 2], [3, 4], [5]]
  console.log(chunk([1,9,6,3,2], 3)) // [[1, 2, 3], [4, 5]]