//abcdefghijklmnopqrstuvwxyz0123456789

var chunk = function(arr, size) {
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

console.log(chunk([1, 2, 3, 4, 5], 2)) // [[1, 2], [3, 4], [5]]
console.log(chunk([1,9,6,3,2], 3)) // [[1, 2, 3], [4, 5]]