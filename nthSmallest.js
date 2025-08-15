//P: 2 param the 1st is arr and 2nd is num
//R: num that represent the Nth smallest depending the val of 2nd param
//E: 
//P: 



function nthSmallest(arr, pos){
    //declare a var and assign to it the arr sorted ascendingly
    //then return new arr[NthSmallest]
    let newArr = arr.sort((a,b) => a - b)
    return newArr[pos - 1]
  }
  
  console.log(nthSmallest([15,20,7,10,4,3], 3))