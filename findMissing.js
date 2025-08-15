//P: 2 arr of intgers the 2nd inclues the el in the 1st except one el
//R: the el tht is in the 1st arr but missed from 2nd
//E: find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
//P:
function findMissing(arr1, arr2) {
    //sort
    //loop through the arr1 
    //filter it based on the el that includes not found in the arr2 
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] != arr2[i]) return arr1[i];
    }
  }
  
  console.log(findMissing([1, 2, 2, 3], [1, 2, 3]))