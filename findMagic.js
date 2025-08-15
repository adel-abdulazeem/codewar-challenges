// func takes sorted arr of intg => el == i
// arr of intg, sorted, +ve/-ve el/ not always valid
// num, which === i || -1
// 
function findMagic(arr){
    // loop
    // conditional to return the arr[i] === i
    // otherwise return -1
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === i){
        return arr[i]
      } 
    }
      return -1
    }