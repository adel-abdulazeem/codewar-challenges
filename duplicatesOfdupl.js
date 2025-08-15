//P: arr of num or str of nums which may be duplicate
//R: arr of those duplicate nums if found in same order 
//E: [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
//P:
function duplicates(arr) {
    //loop 
    //filter to return the duplicate el
    //then filter again to remove duplicated value from the returned arr of duplicates that's in case if el found the given arr > 2 times
    return arr.filter((item,index) => index !== arr.indexOf(item)).filter((item,index,a) => index == a.indexOf(item))
  }
  
  console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))