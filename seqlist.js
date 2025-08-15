var seqlist = function(first,c,l){
    //3 params 
    //arr of nums
    //declare a var of []
    //loop to push the result of sum of counter from first + c
    let result = []
    
    for(let i = 0; i < l; i++){
      let count = i * c + first 
      result.push(count)
    }
    return result
  }
  
  console.log(seqlist(0,2,20))