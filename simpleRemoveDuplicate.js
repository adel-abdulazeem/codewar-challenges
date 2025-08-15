//P: arr of nums that includes duplicate nums
//R: arr of nums without duplicate val
//E: For input: [3, 4, 4, 3, 6, 3] Expected output: [4, 6, 3]
//P: 
function solve(arr) {
    //loop through the given arr filtering it upon a conditional 
    // the condition: the index of el === lastIndexOf the same el
    return arr.filter((el,i) => i === arr.lastIndexOf(el))
  }
  console.log(solve([3, 4, 4, 3, 6, 3]))