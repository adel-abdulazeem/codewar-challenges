//P: 2 params the 1st is arr of nums & 2nd is num
//R: arr of indices of some el of the given arr
//E: arr = [3,2,4] --> [1,2]
//P:

function firstSum(array,target){
    //declare a var and assign an empty arr to it
    //loop through the given array
    // conditional 
    //then push the the indices of the the el of the given array that their sum is equal to the target arg
    //return the resulted arr
    let arr = []
    for(let i = 0; i < array.length; i++){
  
      if((array[i] + array[i+1]) == target){
         arr.push(i,i+1)
      }
    }
    return arr
  }
  
  console.log(firstSum([7,2,4,11,16], 9))