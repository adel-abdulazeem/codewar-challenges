//P: 3 param, n the size of the arr the other 2 params
//R: arr of alternating values of the 2nd and 3rd params
//E:
//P:
function alternate(n, firstValue, secondValue){
    //declare a var arr and assign [] to it
    //loop 
    //conditional upon its evaluation we're reassigning the arr and pushing to it el to it
    //return the result of the loop 
    let arr = []
    for(let i = 0; i < n; i++){
      i % 2 == 0? arr.push(firstValue) : arr.push(secondValue)
    }
    return arr
  }
  
  console.log(alternate(5, true, false))