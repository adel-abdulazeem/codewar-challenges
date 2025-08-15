// arr of nums 
// return arr of the dominant nums which is el that is > val on its right
// solve([1,21,4,7,5]) = [21,7,5]
//
function solve(arr) {
    //loop using filter then slice starting from the 2nd el
    // then loop through through the sliced arr using every method
    // to return each  el within the given arr that is > all the el within the sliced one
    return arr.filter((el,i) => arr.slice(i+1).every(z => el > z))
    }
  
    console.log(solve([92,52,93,31,89,87,77,105]))