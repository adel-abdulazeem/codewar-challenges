//P: a num, +ve
//R: true if the given num is equal to power of 2, 2 is the base where n is as the exponent 
//E: isPowerOfTwo(1024) // -> true
//P:

function isPowerOfTwo(n){
    //apply isInteger that takes Math.log2(n) as an arg
    //Math.log2 static mehod returns the base 2 logarithm of n
    return Number.isInteger(Math.log2(n));
  }
  
  console.log(isPowerOfTwo(233))