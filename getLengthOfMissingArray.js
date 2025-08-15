//P: arr of subArr of nums
//R: num which represent the the length of the missing arr
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
//

function getLengthOfMissingArray(arrayOfArrays) {
    // loop through the given arr returnin each arr length
    //loop again to return the missing num which represent the length of the missing arr
    const lengths = (arrayOfArrays || [])
      .map(a => a ? a.length : 0)
      .sort((a, b) => a - b)
    
    if (lengths.includes(0)) {
      return 0
    }
  
  for(let i = lengths[0]; i < Math.max(...lengths); i++){
    if(!lengths.includes(i)){
      return i
    }
  }
  
    return 0
  }
  
  console.log(getLengthOfMissingArray( null))