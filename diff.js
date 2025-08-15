//P: 2 arr of chars  
//R: arr of letters that not found in both given arrs
//E: A = [a, a, t, e, f, i, j], B = [t, g, g, i, k, f], difference = [a, e, g, j, k]
//P:

function diff(a, b){
    //loop through each given arr returning the el that is not found in the other 
    //declare a var for each filtered arr 
    //return the concatenated arrs filtered out from duplicates then sorted 
    let arrA = a.filter(el => !b.includes(el))
    let arrB = b.filter(el => !a.includes(el))
    return arrA.concat(arrB).filter((el,i,arr) => i == arr.lastIndexOf(el))
  }
  console.log(diff(["a","b"], ["a","b",'c', 'c']))