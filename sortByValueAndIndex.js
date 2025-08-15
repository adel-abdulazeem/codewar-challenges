//P: arr of intger, never be null and always contain number
//R: sorted arr by the product of val and the index with index starting from 1
//E: 23, 2, 3, 4, 5 =>  2, 3, 4, 23, 5
//P: 
function sortByValueAndIndex(array){
    //loop through the given arr returning a new arr of sub arr of the 
    // el and product of each el and its index + 1
    //then sort it ascendingly 
    //then loop return the 1st el of each subArr
    return array
          .map((x, i) => [x, x * i + x])
          .sort((a, b) => a[1] - b[1]).map(el => el[0])
  
  }
  
  console.log(sortByValueAndIndex([23, 2, 3, 4, 5]))