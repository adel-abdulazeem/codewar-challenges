// arr of nums 
// return new arr where el are sorted decreasingly according to their frequency if 2 el have the same frequency, sort them by increasing value
// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
//

function solve(arr){
    // loop through the arr using map
    // return [el, [el == el].length ] filter
    // sort the sub arrs decsendingly according to each one length and acsendingly on the value in case of if they have the same length
    //
    return arr.map(el => [el, arr.filter(val => el === val).length]).sort((a,b) => b[1] - a[1] || a[0] - b[0]).map(el => el[0])
  
  }
  console.log(solve([2,3,5,3,7,9,5,3,7]))