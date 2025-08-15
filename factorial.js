//factorial => the product of all +ve intg <= n

//P: num could be < 0 or > 12 
//R: return the factorial(n!) the that num || -1 if it could be < 0 or > 12 
//E: 5! = 5 * 4 * 3 * 2 * 1 = 120.
//P:

function factorial(n){
    //conditional 
    //loop
    //calculate factorial n!
    let result = []
    for(let i = 0; i < n; i++){
      let num = n - i
      result.push(num)
    }
    if(n < 0 || n > 12){
      throw new RangeError()
    }
    return  n == 0? 1 : result.reduce((acc,c) => acc * c)
  }
  
  console.log(factorial(22))