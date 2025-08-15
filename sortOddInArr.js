// arr of nums odd and even
// new arr where the odd num are ordered ascendingly in place
//

function sortArray(array) {
    //declare a var and assign it an arr of odd num filtered out from the input arr
    //loop through the input arr
    //conditional to determine if the el is odd or not if it it is odd then 
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }
  
  console.log(sortArray([5, 8, 6, 3, 4]))
