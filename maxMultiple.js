//P: 2 params which are nums
//R: num which is divisble by the 1st arg and < the 2nd arg and > 0
//E: divisor = 37, bound = 200 ==> return (185)
//P:

function maxMultiple(divisor, bound){
    // N is div by divisor
    // N is <= bound
    // N is > 0
    //loop 
    //conditional
    let result = []
    for(let i = divisor; i <= bound; i++){
      if(i % divisor == 0 && i > 0){
        result.push(i)
      }
    }
    return result[result.length - 1]
  }
  
  console.log(maxMultiple(37,200))