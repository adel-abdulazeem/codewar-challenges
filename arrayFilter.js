
// funct takes 2 params, arr then func => returns the 1st el that pass thes test applied by the passed func
// arr, func
// char || undefined
//
function arrayFilter(arr, func){
    // imperative technique
    for(char of arr){
      if(func(char)){
        return char
      } 
    }
    return undefined
  }
