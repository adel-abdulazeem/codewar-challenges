//abcdefghijklmnopqrstuvwxyz0123456789

//func that takes 2 params, arr of arrs & num returning new arr 
// arrOrArrs always valid, & num starting from 0 upt to the size of first param
// return new arr 
function addingShifted (arrayOfArrays, shift) {
    // declare a var res to hold the result
    // declare a start var whic act as a pointer and reassigned based on the shift after finishing the parent loop
    
    let res = []
    let start = 0
    for(arr of arrayOfArrays){
        for(let i = 0; i < arr.length; i++){
            res[start + i] = (res[start + i] || 0) + arr[i]
        }
        start += shift
    }
    return res
  }

//   console.log(addingShifted([[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0))
console.log(addingShifted([[1,2,3,4,5,6], [7,7,7,7,7,7]], 3))