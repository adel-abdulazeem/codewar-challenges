// arrs 
// boolean if the passed arrs in sequence are similar. similare means the same el and the same no of occurrences
// arraysSimilar(arr1, arr2); // Should equal true

function arraysSimilar(arr1, arr2) {
    let arr  = arr2.sort((a,b) => a - b)
    return arr1.sort((a,b) => a - b).every((el,i) => el === arr[i])
  }
  
  console.log(arraysSimilar([2, 1, 2, 4, 3], [1, 2, 2, 3, 4]))