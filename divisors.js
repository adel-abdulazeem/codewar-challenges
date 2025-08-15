  //ingter > 1 
  //arr of intger's divisors (except num itself or 1) if the num is prime return str 'num is prime'
  //divisors(12); // should return [2,3,4,6]
//declare a var of []
// loop, conditional to re assign the declared var
//then conditional to return divisors or the str if the input is not divised
function divisors(integer) {
    var result = []
    for(let i = 2; i < integer; i++){
      if((integer/i) % 1 == 0){
       result.push(i)
      }
    }
    return result.length? result : `${integer} is prime`
  };
  console.log(divisors(15))