//P: arr might contains arrays or el
//R: if the given arr is arr of arr we should flat it by spreading its arr el by one level
//E
//P:



var flatten = function (array){
    //declare a var of empty arr
    //conditional loop through the given arr to determines if it's arr of arrays
    //if evalutes to true then push the spreated el of the nested arr into the one  we declared then returning it
    //else return the given arr as it doesn't have nested arr

    let arr = []
    if(array.every(item => Array.isArray(item))){
      array.forEach(item =>  arr.push(...item))
    }else{
     return  array
    }
    return arr
  }
  
  console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]))
  
  console.log(flatten([1, 2, 3]))