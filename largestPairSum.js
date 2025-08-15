// arr of nums
// num which represent the sum of the largest two el 
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
//

function largestPairSum (numbers) {
    // sort the given arr descendingly 
    // sum the first 2 el of the sorted arr
    let sorted = numbers.sort((a,b) => b - a)
    return sorted[0] + sorted[1]
  }
  
  console.log(largestPairSum([99, 2, 2, 23, 19]))