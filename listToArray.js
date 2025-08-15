//obj contains nestes objects
//array of values
//{value: 1, next: {value: 2, next: {value: 3, next: null}}} => [1, 2, 3]




function listToArray(list) {
    //loop 
    //conditional to determine if it is property or an object
    //if it is property return the value 
    //otherwise reassign result by concatenation of the func
    let result = []
    for(key in list){
      if(typeof list[key] !== 'object' ){
         result.push(list[key])
      }else{
        result = result.concat(listToArray(list[key]))
      }
    }
    return result
  }
  
  console.log(listToArray({value: 1, next: {value: 2, next: {value: 3, next: null}}}
  ))